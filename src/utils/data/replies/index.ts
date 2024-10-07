import { isNonNullable } from "@/utils"

import { ART_GALLERY__HAVE_TO_BAIL_REPLY } from "./art_gallery/have-to-bail"
import { ART_GALLERY__I_GOT_YOU_REPLY } from "./art_gallery/i-got-you"
import { ART_REQUESTS__EXCITED_REPLY } from "./art_requests/excited"
import { ART_REQUESTS__GRAB_COFFEE_REPLY } from "./art_requests/grab-coffee"
import { CONTENT_SYNC__ACCEPT_REPLY } from "./content_sync/accept"
import { CONTENT_SYNC__DECLINE_REPLY } from "./content_sync/decline"
import { ENERGY_BLAST__ATTENDING_REPLY } from "./energy_blast/attending"
import { ENERGY_BLAST__NOT_ATTENDING_REPLY } from "./energy_blast/not-attending"
import { INSPO__KEEP_IN_MIND_REPLY } from "./inspo/keep-in-mind"
import { INSPO__NOTED_REPLY } from "./inspo/noted"
import { LUNCH_REQUEST__SORRY_SWAMPED_REPLY } from "./lunch_request/sorry-swamped"
import { LUNCH_REQUEST__SOUNDS_GOOD_REPLY } from "./lunch_request/sounds-good"
import { MOVIE_SCREENING__NO_REPLY } from "./movie_screening/no"
import { MOVIE_SCREENING__YES_REPLY } from "./movie_screening/yes"
import { PETS__JELLYBEAN_REPLY } from "./pets/jellybean"
import { PETS__MITTENS_REPLY } from "./pets/mittens"
import { PETS__NONE_REPLY } from "./pets/none"
import { PETS__NOODLE_REPLY } from "./pets/noodle"
import { PETS__RUFUS_REPLY } from "./pets/rufus"
import { REF_SHEET__QUESTIONS_REPLY } from "./ref_sheet/questions"
import { REF_SHEET__SAVE_FILE_REPLY } from "./ref_sheet/save-file"
import { WELCOME__GOING_NOW_REPLY } from "./welcome/going-now"

export const REPLIES = {
  [ART_GALLERY__HAVE_TO_BAIL_REPLY.uid]: ART_GALLERY__HAVE_TO_BAIL_REPLY,
  [ART_GALLERY__I_GOT_YOU_REPLY.uid]: ART_GALLERY__I_GOT_YOU_REPLY,
  [ART_REQUESTS__EXCITED_REPLY.uid]: ART_REQUESTS__EXCITED_REPLY,
  [ART_REQUESTS__GRAB_COFFEE_REPLY.uid]: ART_REQUESTS__GRAB_COFFEE_REPLY,

  [CONTENT_SYNC__ACCEPT_REPLY.uid]: CONTENT_SYNC__ACCEPT_REPLY,
  [CONTENT_SYNC__DECLINE_REPLY.uid]: CONTENT_SYNC__DECLINE_REPLY,

  [ENERGY_BLAST__ATTENDING_REPLY.uid]: ENERGY_BLAST__ATTENDING_REPLY,
  [ENERGY_BLAST__NOT_ATTENDING_REPLY.uid]: ENERGY_BLAST__NOT_ATTENDING_REPLY,

  [INSPO__KEEP_IN_MIND_REPLY.uid]: INSPO__KEEP_IN_MIND_REPLY,
  [INSPO__NOTED_REPLY.uid]: INSPO__NOTED_REPLY,

  [LUNCH_REQUEST__SORRY_SWAMPED_REPLY.uid]: LUNCH_REQUEST__SORRY_SWAMPED_REPLY,
  [LUNCH_REQUEST__SOUNDS_GOOD_REPLY.uid]: LUNCH_REQUEST__SOUNDS_GOOD_REPLY,

  [MOVIE_SCREENING__NO_REPLY.uid]: MOVIE_SCREENING__NO_REPLY,
  [MOVIE_SCREENING__YES_REPLY.uid]: MOVIE_SCREENING__YES_REPLY,

  [PETS__JELLYBEAN_REPLY.uid]: PETS__JELLYBEAN_REPLY,
  [PETS__MITTENS_REPLY.uid]: PETS__MITTENS_REPLY,
  [PETS__NONE_REPLY.uid]: PETS__NONE_REPLY,
  [PETS__NOODLE_REPLY.uid]: PETS__NOODLE_REPLY,
  [PETS__RUFUS_REPLY.uid]: PETS__RUFUS_REPLY,

  [REF_SHEET__QUESTIONS_REPLY.uid]: REF_SHEET__QUESTIONS_REPLY,
  [REF_SHEET__SAVE_FILE_REPLY.uid]: REF_SHEET__SAVE_FILE_REPLY,

  [WELCOME__GOING_NOW_REPLY.uid]: WELCOME__GOING_NOW_REPLY,
} as const

export const lookupReply = (replyId: string | undefined) => {
  if (!replyId) {
    return undefined
  }

  const foundReply = REPLIES[replyId]
  if (foundReply) {
    return foundReply
  }
  return undefined
}

export const lookupEmailReplies = (emailId: string | undefined) => {
  if (!emailId) {
    return []
  }

  return Object.keys(REPLIES)
    .map((key) => (REPLIES[key].emailId === emailId ? REPLIES[key] : undefined))
    .filter(isNonNullable)
    .sort((a, b) => (a.order ?? -1) - (b.order ?? -1))
}
