import { GOODFILMS_GREATTIMES } from "@/utils/data/contacts"
import MovieScreeningMDX from "@/utils/data/emails/movie-screening.mdx"
import { IEmailData } from "@/utils/types"

export const MOVIE_SCREENING_EMAIL: IEmailData = {
  uid: "movie-screening",
  fromId: GOODFILMS_GREATTIMES.uid,
  subject: `You are invited to a special screening of "My Light, My Life"`,
  preview: `Hello, You and a guest are cordially invited to this very special screening of the heartwarming comedy My Light, My Life for Saturday night.`,
  message: <MovieScreeningMDX />,
  readTimeMin: 18,
}
