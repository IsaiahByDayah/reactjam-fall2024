import { LUNCH_REQUEST_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const LUNCH_REQUEST__SOUNDS_GOOD_REPLY: IEmailReply = {
  uid: "lunch_request-sounds_good",
  emailId: LUNCH_REQUEST_EMAIL.uid,
  replyTimeMin: 10,
  message: `"Sounds good! I should be able to make it. I'll meet you in the lobby at 11:30."`,
}
