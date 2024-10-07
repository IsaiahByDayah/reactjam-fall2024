import { CONTENT_SYNC_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const CONTENT_SYNC__ACCEPT_REPLY: IEmailReply = {
  uid: "content_sync-accept",
  emailId: CONTENT_SYNC_EMAIL.uid,
  replyTimeMin: 5,
  message: `[ACCEPT]`,
}
