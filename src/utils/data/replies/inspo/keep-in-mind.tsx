import { INSPO_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const INSPO__KEEP_IN_MIND_REPLY: IEmailReply = {
  uid: "inspo-keep_in_mind",
  emailId: INSPO_EMAIL.uid,
  replyTimeMin: 5,
  message: `"I'll keep this in mind and bring some more ideas to the table on Friday."`,
}
