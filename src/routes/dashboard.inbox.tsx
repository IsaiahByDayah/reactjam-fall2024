import { createFileRoute } from "@tanstack/react-router"

import { EmailFeed } from "@/components/dashboard/inbox/EmailFeed"
import { EmailViewer } from "@/components/dashboard/inbox/EmailViewer"
import { Header } from "@/components/dashboard/inbox/Header"

export const Route = createFileRoute("/dashboard/inbox")({
  component: DashboardInbox,
})

function DashboardInbox() {
  return (
    <div className="grid grid-cols-[theme(spacing[72])_1fr] grid-rows-[theme(spacing[16])_1fr]">
      <Header className="z-40 col-span-full row-span-1" />

      <EmailFeed />

      <EmailViewer />
    </div>
  )
}
