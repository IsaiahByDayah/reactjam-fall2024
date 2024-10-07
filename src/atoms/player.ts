import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import {
  createPlayerInboxAtom,
  deletePlayerInboxAtom,
  recieveEmailAtom,
} from "@/atoms/inbox"
import {
  LUNCH_REQUEST_EMAIL,
  PETS_EMAIL,
  WELCOME_EMAIL,
} from "@/utils/data/emails"
import { IPlayer } from "@/utils/types"

const PLAYER_ROLE = "Social & Influencer Marketing Associate"

export const allPlayersAtom = atomWithStorage<IPlayer[]>("all-players", [])

export const currentPlayerIdAtom = atomWithStorage<string>(
  "current-player-id",
  "",
)

export const createPlayerAtom = atom(
  null,
  (_get, set, newPlayer: Pick<IPlayer, "firstName" | "lastName">) => {
    const uid = crypto.randomUUID()
    set(allPlayersAtom, (allPlayers) => [
      ...allPlayers,
      { uid, role: PLAYER_ROLE, isMuySnacksEmployee: true, ...newPlayer },
    ])
    set(currentPlayerIdAtom, uid)
    set(createPlayerInboxAtom, uid)

    // Player emails
    set(recieveEmailAtom, {
      emailId: WELCOME_EMAIL.uid,
      recievedAt: {
        hr: 7,
        min: 52,
      },
    })
    set(recieveEmailAtom, {
      emailId: LUNCH_REQUEST_EMAIL.uid,
      recievedAt: {
        hr: 9,
        min: 12,
      },
    })
    set(recieveEmailAtom, {
      emailId: PETS_EMAIL.uid,
      recievedAt: {
        hr: 9,
        min: 33,
      },
    })
  },
)

export const deletePlayerAtom = atom(null, (_get, set, playerId: string) => {
  set(allPlayersAtom, (allPlayers) =>
    allPlayers.filter((player) => player.uid !== playerId),
  )
  set(deletePlayerInboxAtom, playerId)
})

export const setCurrentPlayerAtom = atom(
  null,
  (_get, set, playerId: string) => {
    set(currentPlayerIdAtom, playerId)
  },
)

export const clearCurrentPlayerAtom = atom(null, (_get, set) => {
  set(currentPlayerIdAtom, "")
})

export const currentPlayerAtom = atom((get) => {
  const currentPlayerId = get(currentPlayerIdAtom)
  if (!currentPlayerId) {
    return undefined
  }
  const allPlayers = get(allPlayersAtom)
  return allPlayers.find((player) => player.uid === currentPlayerId)
})
