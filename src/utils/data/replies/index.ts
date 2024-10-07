import { isNonNullable } from "@/utils"

import { LUNCH_REQUEST__SORRY_SWAMPED_REPLY } from "./lunch_request/sorry-swamped"
import { LUNCH_REQUEST__SOUNDS_GOOD_REPLY } from "./lunch_request/sounds-good"
import { WELCOME__GOING_NOW_REPLY } from "./welcome/going-now"

export const REPLIES = {
  [WELCOME__GOING_NOW_REPLY.uid]: WELCOME__GOING_NOW_REPLY,
  [LUNCH_REQUEST__SORRY_SWAMPED_REPLY.uid]: LUNCH_REQUEST__SORRY_SWAMPED_REPLY,
  [LUNCH_REQUEST__SOUNDS_GOOD_REPLY.uid]: LUNCH_REQUEST__SOUNDS_GOOD_REPLY,
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
}
