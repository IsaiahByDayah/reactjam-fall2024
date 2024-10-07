import { ART_GALLERY_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const ART_GALLERY__HAVE_TO_BAIL_REPLY: IEmailReply = {
  uid: "art_gallery-have_to_bail",
  emailId: ART_GALLERY_EMAIL.uid,
  replyTimeMin: 17,
  message: `"Sorry, I have to bail. This new job has been crazy!"`,
}
