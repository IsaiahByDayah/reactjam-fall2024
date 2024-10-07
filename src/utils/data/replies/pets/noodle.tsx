import { PETS_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const PETS__NOODLE_REPLY: IEmailReply = {
  uid: "pets-noodle",
  emailId: PETS_EMAIL.uid,
  replyTimeMin: 12,
  message: `[Send a picture of your snake "Noodle"]`,
}
