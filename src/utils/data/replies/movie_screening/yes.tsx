import { MOVIE_SCREENING_EMAIL } from "@/utils/data/emails"
import { IEmailReply } from "@/utils/types"

export const MOVIE_SCREENING__YES_REPLY: IEmailReply = {
  uid: "movie_screening-yes",
  emailId: MOVIE_SCREENING_EMAIL.uid,
  replyTimeMin: 2,
  message: `"Yes, I’m interested!"`,
}
