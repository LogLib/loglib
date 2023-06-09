import React from "react"
import { notFound, redirect } from "next/navigation"

import { siteConfig } from "@/config/site"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import Loglib from "@/components/loglib-dashboard"

export default async function Dashboard({
  params,
}: {
  params: { website: string }
}) {
  const user = await getCurrentUser()
  if (!user) {
    return redirect("/")
  }
  const teamWebsite = await db.teamWebsite
    .findFirst({
      where: {
        websiteId: params.website,
        Team: {
          TeamUser: {
            some: {
              userId: user.id,
            },
          },
        },
      },
      include: {
        Website: {
          include: {
            WebSession: {
              select: {
                id: true,
              },
              take: 1,
            },
          },
        },
      },
    })
    .then((res) => res?.Website)

  const website = await db.website.findFirst({
    where: {
      AND: {
        id: params.website,
        userId: user.id,
      },
    },
    include: {
      WebSession: {
        select: {
          id: true,
        },
        take: 1,
      },
    },
  })
  const site = website || teamWebsite
  if (!site) {
    return notFound()
  }
  return (
    <main>
      <Loglib website={site} showHowTo={!site.WebSession.length} />
    </main>
  )
}
