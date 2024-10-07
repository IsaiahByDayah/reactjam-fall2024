import { BLAST_COMPANY } from "@/utils/data/contacts"
import EnergyBlastMDX from "@/utils/data/emails/energy-blast.mdx"
import { IEmailData } from "@/utils/types"

export const ENERGY_BLAST_EMAIL: IEmailData = {
  uid: "energy-blast",
  fromId: BLAST_COMPANY.uid,
  subject: `You don't want to miss this`,
  preview: `Hey there! We'’'re doing a one-day-only pop-up party for our newest product in our line of energy drinks.`,
  message: <EnergyBlastMDX />,
  readTimeMin: 3,
}
