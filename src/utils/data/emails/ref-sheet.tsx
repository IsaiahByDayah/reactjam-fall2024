import { FirstName } from "@/components/player/FirstName"
import { STEPHANIE_SMITH } from "@/utils/data/contacts"
import RefSheetMDX from "@/utils/data/emails/ref-sheet.mdx"
import { IEmailData } from "@/utils/types"

export const REF_SHEET_EMAIL: IEmailData = {
  uid: "ref-sheet",
  fromId: STEPHANIE_SMITH.uid,
  subject: `Blazin Hot Twirly Whirls™ Product Overview`,
  preview: (
    <>
      Hello <FirstName />, Welcome to the team! I want to make sure you have
      what you need to get the ideas flowing
    </>
  ),
  message: <RefSheetMDX />,
  readTimeMin: 20,
}
