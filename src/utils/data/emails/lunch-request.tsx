import { DAVID_HERNANDEZ } from "@/utils/data/contacts"
import LunchRequestMDX from "@/utils/data/emails/lunch-request.mdx"
import { IEmailData } from "@/utils/types"

export const LUNCH_REQUEST_EMAIL: IEmailData = {
  uid: "lunch_request",
  fromId: DAVID_HERNANDEZ.uid,
  subject: `Invitation: Lunch @ Wednesday 22nd 12:30 am - 1:30 pm (PDT)`,
  preview:
    "Hey there, Getting lunch at my favorite sandwich shop in the area  and thought you might want to join me since it’s your first day.",
  message: <LunchRequestMDX />,
  readTimeMin: 5,
}
