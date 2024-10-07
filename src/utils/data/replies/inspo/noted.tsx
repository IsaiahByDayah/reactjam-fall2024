import { INSPO_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const INSPO__NOTED_REPLY: IEmailReply = {
  uid: "inspo-noted",
  emailId: INSPO_EMAIL.uid,
  replyTimeMin: 5,
  message: `"Noted! We'll talk more during the brainstorming session on Friday."`,
}
