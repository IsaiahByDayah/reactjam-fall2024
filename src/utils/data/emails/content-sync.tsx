import { FirstName } from "@/components/player/FirstName"
import { STEPHANIE_SMITH } from "@/utils/data/contacts"
import ContentSyncMDX from "@/utils/data/emails/content-sync.mdx"
import { IEmailData } from "@/utils/types"

export const CONTENT_SYNC_EMAIL: IEmailData = {
  uid: "content-sync",
  fromId: STEPHANIE_SMITH.uid,
  subject: `Invitation: Content Schedule Sync @ Thursday 2 pm - 4 pm (PDT)`,
  preview: (
    <>
      Hello <FirstName />, Every week we meet up to make sure we have everything
      we need to schedule content...
    </>
  ),
  message: <ContentSyncMDX />,
  readTimeMin: 8,
}
