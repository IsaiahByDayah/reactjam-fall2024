import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { currentPlayerIdAtom } from "@/atoms/player"
import { advanceTimeAtom, currentDateTimeAtom } from "@/atoms/time"
import { lookupEmail } from "@/utils/data/emails"
import { lookupReply } from "@/utils/data/replies"
import { dateTimeIsBefore } from "@/utils/time"
import { IDateTime, IInboxEmail } from "@/utils/types"

export const playerInboxesAtom = atomWithStorage<{
  [key: string]: IInboxEmail[]
}>("inboxes", {})

export const currentPlayerInboxAtom = atom((get) => {
  const currentPlayerId = get(currentPlayerIdAtom)
  if (!currentPlayerId) {
    return []
  }

  const allInboxes = get(playerInboxesAtom)
  const playerInbox = allInboxes[currentPlayerId]

  if (!playerInbox) {
    return []
  }

  return playerInbox
})

export const createPlayerInboxAtom = atom(
  null,
  (get, set, playerId: string) => {
    const playerInboxes = get(playerInboxesAtom)
    if (!playerInboxes[playerId]) {
      set(playerInboxesAtom, { ...playerInboxes, [playerId]: [] })
    }
  },
)

export const deletePlayerInboxAtom = atom(null, (_get, set, playerId: string) =>
  set(playerInboxesAtom, (playerInboxes) => {
    const filteredPlayerInboxes = { ...playerInboxes }
    delete filteredPlayerInboxes[playerId]
    return filteredPlayerInboxes
  }),
)

interface RecieveEmailAtomPayload {
  emailId: string
  recievedAt?: Partial<IDateTime>
}
export const recieveEmailAtom = atom(
  null,
  (get, set, { emailId, recievedAt }: RecieveEmailAtomPayload) => {
    const currentPlayerId = get(currentPlayerIdAtom)
    if (!currentPlayerId) {
      return
    }

    const playerInbox = get(playerInboxesAtom)[currentPlayerId]
    if (!playerInbox) {
      return
    }

    const currentDateTime = get(currentDateTimeAtom)
    const newEmail: IInboxEmail = {
      emailId,
      isRead: false,
      isArchived: false,
      recievedAt: {
        ...currentDateTime,
        ...recievedAt,
      },
      replyId: null,
    }

    set(playerInboxesAtom, (playerInboxes) => ({
      ...playerInboxes,
      [currentPlayerId]: [
        ...playerInbox.filter((entry) => entry.emailId !== emailId),
        newEmail,
      ],
    }))
  },
)

export const currentPlayerViewableInboxAtom = atom((get) => {
  const currentDateTime = get(currentDateTimeAtom)
  const inbox = get(currentPlayerInboxAtom)
  return inbox.filter(
    (entry) =>
      dateTimeIsBefore(entry.recievedAt, currentDateTime) && !entry.isArchived,
  )
})

export const currentEmailIdAtom = atom<string>()

export const selectEmailAtom = atom(null, (get, set, emailId: string) => {
  const currentPlayerId = get(currentPlayerIdAtom)
  if (!currentPlayerId) {
    return
  }

  const playerInbox = get(playerInboxesAtom)[currentPlayerId]
  if (!playerInbox) {
    return
  }

  const existingEntry = playerInbox.find((entry) => entry.emailId === emailId)
  if (!existingEntry) {
    return
  }

  const email = lookupEmail(existingEntry.emailId)
  if (!email) {
    return
  }

  set(currentEmailIdAtom, emailId)
  set(playerInboxesAtom, (playerInboxes) => ({
    ...playerInboxes,
    [currentPlayerId]: [
      ...playerInbox.filter((entry) => entry.emailId !== emailId),
      { ...existingEntry, isRead: true },
    ],
  }))
  if (existingEntry.isRead === false) {
    set(advanceTimeAtom, { min: email.readTimeMin })
  }
})

export const currentEmailEntryAtom = atom((get) => {
  const currentEmailId = get(currentEmailIdAtom)
  const currentPlayerInbox = get(currentPlayerInboxAtom)
  return currentPlayerInbox.find((entry) => entry.emailId === currentEmailId)
})

export const currentEmailAtom = atom((get) => {
  const currentEmailId = get(currentEmailIdAtom)
  return lookupEmail(currentEmailId)
})

export const sendReplyAtom = atom(null, (get, set, replyId: string) => {
  const currentPlayerId = get(currentPlayerIdAtom)
  if (!currentPlayerId) {
    return
  }

  const playerInbox = get(playerInboxesAtom)[currentPlayerId]
  if (!playerInbox) {
    return
  }

  const reply = lookupReply(replyId)
  if (!reply) {
    return
  }

  const existingEntry = playerInbox.find(
    (entry) => entry.emailId === reply.emailId,
  )
  if (existingEntry?.replyId) {
    return
  }

  set(playerInboxesAtom, (playerInboxes) => ({
    ...playerInboxes,
    [currentPlayerId]: playerInbox.map((entry) => {
      if (entry.emailId === reply.emailId) {
        return { ...entry, replyId }
      }

      return entry
    }),
  }))
  set(advanceTimeAtom, { min: reply.replyTimeMin })
})
