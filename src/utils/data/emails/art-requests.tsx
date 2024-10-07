import { FirstName } from "@/components/player/FirstName"
import { ELAINE_HOLT } from "@/utils/data/contacts"
import ArtRequestsMDX from "@/utils/data/emails/art-requests.mdx"
import { IEmailData } from "@/utils/types"

export const ART_REQUESTS_EMAIL: IEmailData = {
  uid: "art-requests",
  fromId: ELAINE_HOLT.uid,
  subject: `Blazin Hot Twirly Whirls Art Requests`,
  preview: (
    <>
      Hello <FirstName />, Welcome to the team! I missed you at the standup
      because I work remote in the morning and come into the office after lunch.
    </>
  ),
  message: <ArtRequestsMDX />,
  readTimeMin: 12,
}
