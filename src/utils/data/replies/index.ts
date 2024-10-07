import { isNonNullable } from "@/utils"

import { LUNCH_REQUEST__SORRY_SWAMPED_REPLY } from "./lunch_request/sorry-swamped"
import { LUNCH_REQUEST__SOUNDS_GOOD_REPLY } from "./lunch_request/sounds-good"
import { PETS__JELLYBEAN_REPLY } from "./pets/jellybean"
import { PETS__MITTENS_REPLY } from "./pets/mittens"
import { PETS__NONE_REPLY } from "./pets/none"
import { PETS__NOODLE_REPLY } from "./pets/noodle"
import { PETS__RUFUS_REPLY } from "./pets/rufus"
import { WELCOME__GOING_NOW_REPLY } from "./welcome/going-now"

export const REPLIES = {
  [WELCOME__GOING_NOW_REPLY.uid]: WELCOME__GOING_NOW_REPLY,
  [LUNCH_REQUEST__SORRY_SWAMPED_REPLY.uid]: LUNCH_REQUEST__SORRY_SWAMPED_REPLY,
  [LUNCH_REQUEST__SOUNDS_GOOD_REPLY.uid]: LUNCH_REQUEST__SOUNDS_GOOD_REPLY,
  [PETS__JELLYBEAN_REPLY.uid]: PETS__JELLYBEAN_REPLY,
  [PETS__MITTENS_REPLY.uid]: PETS__MITTENS_REPLY,
  [PETS__NONE_REPLY.uid]: PETS__NONE_REPLY,
  [PETS__NOODLE_REPLY.uid]: PETS__NOODLE_REPLY,
  [PETS__RUFUS_REPLY.uid]: PETS__RUFUS_REPLY,
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
