import { ENERGY_BLAST_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const ENERGY_BLAST__NOT_ATTENDING_REPLY: IEmailReply = {
  uid: "energy_blast-not_attending",
  emailId: ENERGY_BLAST_EMAIL.uid,
  replyTimeMin: 3,
  message: `[NOT ATTENDING]`,
}
