import { PETS_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const PETS__JELLYBEAN_REPLY: IEmailReply = {
  uid: "pets-jellybean",
  emailId: PETS_EMAIL.uid,
  replyTimeMin: 12,
  message: `[Send a picture of your gerbil "Jellybean"]`,
}
