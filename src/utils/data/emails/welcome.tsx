import { RICHARD_WHITE } from "@/utils/data/contacts"
import WelcomeMDX from "@/utils/data/emails/welcome.mdx"
import { IEmailData } from "@/utils/types"

export const WELCOME_EMAIL: IEmailData = {
  uid: "welcome",
  fromId: RICHARD_WHITE.uid,
  subject: "It’s a treat to meet you.",
  preview:
    "Welcome to Muy Snacks, Happy Monday! We’re so excited for you to join the Snack Pack!",
  message: <WelcomeMDX />,
  readTimeMin: 5,
}
