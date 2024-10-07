import { ART_GALLERY_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const ART_GALLERY__I_GOT_YOU_REPLY: IEmailReply = {
  uid: "art_gallery-i_got_you",
  emailId: ART_GALLERY_EMAIL.uid,
  replyTimeMin: 4,
  message: `"I got you!"`,
}
