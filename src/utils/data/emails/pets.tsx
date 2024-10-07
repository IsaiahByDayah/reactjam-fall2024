import { NICK_MOORE } from "@/utils/data/contacts"
import PetsMDX from "@/utils/data/emails/pets.mdx"
import { IEmailData } from "@/utils/types"

export const PETS_EMAIL: IEmailData = {
  uid: "pets",
  fromId: NICK_MOORE.uid,
  subject: "Ruff Day? Start Feline Fine!",
  preview:
    "Whether it’s the dog days of summer or the stressful excitement of the Blazin Hot Twirly Whirls™ joining the pack (Muy Yum!)...",
  message: <PetsMDX />,
  readTimeMin: 8,
}
