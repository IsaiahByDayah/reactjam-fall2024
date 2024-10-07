import { LUNCH_REQUEST_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const LUNCH_REQUEST__SORRY_SWAMPED_REPLY: IEmailReply = {
  uid: "lunch_request-sorry_swamped",
  emailId: LUNCH_REQUEST_EMAIL.uid,
  replyTimeMin: 5,
  message: `"Sorry, I'm swamped with onboarding. Raincheck?" [DECLINE]`,
}
