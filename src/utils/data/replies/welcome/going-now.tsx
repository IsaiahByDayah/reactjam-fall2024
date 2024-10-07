import { WELCOME_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const WELCOME__GOING_NOW_REPLY: IEmailReply = {
  uid: "welcome-going_now",
  emailId: WELCOME_EMAIL.uid,
  replyTimeMin: 5,
  message: `"Ok. I'll stop by right after lunch!"`,
}
