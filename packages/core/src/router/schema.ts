import z from "zod";

export const RootApiTrackerSchema = z.object({
    pageId: z.string(),
    sessionId: z.string(),
    visitorId: z.string(),
    websiteId: z.string().nullable().optional()
})

export const RootDashboardSchema = z.object({
    path: z.string()
})