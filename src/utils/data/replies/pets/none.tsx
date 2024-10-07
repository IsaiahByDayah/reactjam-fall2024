import { PETS_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const PETS__NONE_REPLY: IEmailReply = {
  uid: "pets-none",
  emailId: PETS_EMAIL.uid,
  replyTimeMin: 4,
  message: `"I don't have any pets but I can't wait to see the slideshow."`,
  order: 1,
}
