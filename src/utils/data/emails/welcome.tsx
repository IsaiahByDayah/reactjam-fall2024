import WelcomeMDX from "@/utils/data/emails/welcome.mdx"
import { RICHARD_WHITE } from "@/utils/data/employees"
import { IEmailData } from "@/utils/types"

export const WELCOME_EMAIL: IEmailData = {
  uid: "welcome",
  fromId: RICHARD_WHITE.uid,
  subject: "It’s a treat to meet you.",
  preview: "Welcome to Muy Snacks...",
  message: <WelcomeMDX />,
  readTimeMin: 5,
}
