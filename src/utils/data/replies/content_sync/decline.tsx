import { CONTENT_SYNC_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const CONTENT_SYNC__DECLINE_REPLY: IEmailReply = {
  uid: "content_sync-decline",
  emailId: CONTENT_SYNC_EMAIL.uid,
  replyTimeMin: 3,
  message: `[DECLINE]`,
}
