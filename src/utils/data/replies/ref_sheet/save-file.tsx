import { REF_SHEET_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const REF_SHEET__SAVE_FILE_REPLY: IEmailReply = {
  uid: "ref_sheet-save_file",
  emailId: REF_SHEET_EMAIL.uid,
  replyTimeMin: 7,
  message: `"Thanks! I'll add this to my files."`,
}
