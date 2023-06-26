import { z } from "zod"
import { db } from "@/lib/db"
import { rootApiSchema, rootWhereSchema, transformToISO } from "@/lib/validations/api"
import { rateLimitCheck } from "@/lib/rate-limit"
import { apiErrorMessages } from "@/lib/messages"
import { encrypt } from "@/lib/crypto"




const pageviewApiSchema = rootApiSchema.merge(z.object({
    orderBy: z.record(z.enum(["createdAt", "updatedAt", "id", "page"]), z.enum(['asc', 'desc'])).default({
        createdAt: "desc"
    }),
    where: z.object({
        id: z.string().optional(),
        createdAt: z.object({
            gt: z.string().optional().transform(transformToISO),
            lt: z.string().optional().transform(transformToISO),
            gte: z.string().optional().transform(transformToISO),
            lte: z.string().optional().transform(transformToISO),
        }).optional(),
        sessionId: z.string().optional(),
        visitorId: z.string().optional(),
        page: z.string().optional()
    }).default({}),
    include: z.object({
        session: z.boolean().default(false),
        event: z.boolean().default(false),
        visitors: z.boolean().default(false),
    }).default({
        session: false,
        event: false,
        visitors: false
    })
}))

export const POST = async (req: Request) => {
    try {
        const body = await req.json().catch((e) => { throw new Error(apiErrorMessages["JSON-parse-error"]) })
        const schema = pageviewApiSchema.safeParse(body)
        console.log(schema)
        if (schema.success) {
            const apiKey = schema.data.apiKey
            const res = await db.apiKey.findFirst({
                where: {
                    AND: {
                        key: encrypt(apiKey),
                        expires: {
                            gt: new Date()
                        }
                    }
                }
            })
            if (!res) {
                return new Response(JSON.stringify({
                    message: apiErrorMessages["Invalid-api-key"]
                }), {
                    status: 401,
                    statusText: "Unauthorized"
                })
            }
            const rateLimit = await rateLimitCheck(apiKey)
            if (!rateLimit) return new Response(JSON.stringify({
                message: apiErrorMessages["Rate-limit-exceeded"]
            }), {
                status: 429,
            })
            const { take, skip, orderBy, include, where } = schema.data
            const pageview = await db.webPageview.findMany({
                where: {
                    websiteId: res.websiteId,
                    ...where
                },
                take,
                skip,
                orderBy: [orderBy],
                include: {
                    WebSession: include.session,
                    Event: include.event,
                    WebVisitor: include.visitors
                },
            }).then(res => {
                return res.map((item) => {
                    const { WebSession, WebVisitor, Event, ...newItem } = item
                    return {
                        ...newItem,
                        queryParams: JSON.parse(item.queryParams),
                        session: WebSession,
                        visitor: WebVisitor,
                        event: Event
                    }
                })
            })
            return new Response(JSON.stringify(pageview), {
                status: 200
            })
        } else {
            return new Response(JSON.stringify({
                message: schema.error.issues
            }), {
                status: 400,
                statusText: "Bad Request"
            })
        }
    } catch (e) {
        return new Response(JSON.stringify({
            message: e.message ?? apiErrorMessages["Internal-server-error"]
        }), {
            status: 500,
            statusText: "Internal Server Error"
        })
    }
}