import { MOVIE_SCREENING_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const MOVIE_SCREENING__NO_REPLY: IEmailReply = {
  uid: "movie_screening-no",
  emailId: MOVIE_SCREENING_EMAIL.uid,
  replyTimeMin: 2,
  message: `"No thanks!"`,
}
