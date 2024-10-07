import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { currentPlayerIdAtom } from "@/atoms/player"
import {
  advanceTimeAtom,
  currentDateAtom,
  currentDateTimeAtom,
} from "@/atoms/time"
import { lookupEmail } from "@/utils/data/emails"
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

export const currentPlayerDailyInboxAtom = atom((get) => {
  const { month, day } = get(currentDateAtom)
  const inbox = get(currentPlayerInboxAtom)
  return inbox.filter(
    (entry) => entry.recievedAt.month === month && entry.recievedAt.day === day,
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

export const currentEmailAtom = atom((get) => {
  const currentEmailId = get(currentEmailIdAtom)
  return lookupEmail(currentEmailId)
})
