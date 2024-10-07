import { ENERGY_BLAST_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const ENERGY_BLAST__ATTENDING_REPLY: IEmailReply = {
  uid: "energy_blast-attending",
  emailId: ENERGY_BLAST_EMAIL.uid,
  replyTimeMin: 5,
  message: `[ATTENDING]`,
}
