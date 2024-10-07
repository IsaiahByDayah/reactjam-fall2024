import { PETS_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const PETS__MITTENS_REPLY: IEmailReply = {
  uid: "pets-mittens",
  emailId: PETS_EMAIL.uid,
  replyTimeMin: 12,
  message: `[Send a picture of your cat "Mittens"]`,
}
