import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { createPlayerInboxAtom, recieveEmailAtom } from "@/atoms/inbox"
import { WELCOME_EMAIL } from "@/utils/data"
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
      { uid, role: PLAYER_ROLE, ...newPlayer },
    ])
    set(currentPlayerIdAtom, uid)
    set(createPlayerInboxAtom, uid)
    set(recieveEmailAtom, {
      emailId: WELCOME_EMAIL.uid,
      recievedAt: {
        hr: 7,
        min: 30,
      },
    })
  },
)

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
