import { REF_SHEET_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const REF_SHEET__QUESTIONS_REPLY: IEmailReply = {
  uid: "ref_sheet-questions",
  emailId: REF_SHEET_EMAIL.uid,
  replyTimeMin: 3,
  message: `"Appreciate it! I'll let you know if I have any questions."`,
}
