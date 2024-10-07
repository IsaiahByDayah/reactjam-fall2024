import { ART_REQUESTS_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const ART_REQUESTS__GRAB_COFFEE_REPLY: IEmailReply = {
  uid: "art_requests-grab_coffee",
  emailId: ART_REQUESTS_EMAIL.uid,
  replyTimeMin: 11,
  message: `"Thanks Elaine! Appreciate the offer. I'd love to grab coffee since I won't be seeing you in standups. Send me a calendar invite if you have a space in your schedule."`,
}
