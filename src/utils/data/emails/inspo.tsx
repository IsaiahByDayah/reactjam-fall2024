import { FirstName } from "@/components/player/FirstName"
import { STEPHANIE_SMITH } from "@/utils/data/contacts"
import InspoMDX from "@/utils/data/emails/inspo.mdx"
import { IEmailData } from "@/utils/types"

export const INSPO_EMAIL: IEmailData = {
  uid: "inspo",
  fromId: STEPHANIE_SMITH.uid,
  subject: `Interesting Stuff!`,
  preview: (
    <>
      Hey <FirstName />, This article I just read explains what Hot Girl Summer
      is and if you search online
    </>
  ),
  message: <InspoMDX />,
  readTimeMin: 6,
}
