import { DESHAWN_BROWN } from "@/utils/data/contacts"
import ArtGalleryMDX from "@/utils/data/emails/art-gallery.mdx"
import { IEmailData } from "@/utils/types"

export const ART_GALLERY_EMAIL: IEmailData = {
  uid: "art-gallery",
  fromId: DESHAWN_BROWN.uid,
  subject: `My Gallery Opening`,
  preview: `You asked me to send you a reminder so here it is!`,
  message: <ArtGalleryMDX />,
  readTimeMin: 6,
}
