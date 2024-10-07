import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import {
  createPlayerInboxAtom,
  deletePlayerInboxAtom,
  recieveEmailAtom,
} from "@/atoms/inbox"
import {
  ART_GALLERY_EMAIL,
  ART_REQUESTS_EMAIL,
  CONTENT_SYNC_EMAIL,
  ENERGY_BLAST_EMAIL,
  INSPO_EMAIL,
  LUNCH_REQUEST_EMAIL,
  MOVIE_SCREENING_EMAIL,
  PETS_EMAIL,
  WELCOME_EMAIL,
} from "@/utils/data/emails"
import { REF_SHEET_EMAIL } from "@/utils/data/emails/ref-sheet"
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
    set(recieveEmailAtom, {
      emailId: REF_SHEET_EMAIL.uid,
      recievedAt: {
        hr: 11,
        min: 7,
      },
    })
    set(recieveEmailAtom, {
      emailId: INSPO_EMAIL.uid,
      recievedAt: {
        hr: 13,
        min: 44,
      },
    })
    set(recieveEmailAtom, {
      emailId: CONTENT_SYNC_EMAIL.uid,
      recievedAt: {
        hr: 14,
        min: 8,
      },
    })
    set(recieveEmailAtom, {
      emailId: MOVIE_SCREENING_EMAIL.uid,
      recievedAt: {
        hr: 14,
        min: 11,
      },
    })
    set(recieveEmailAtom, {
      emailId: ART_GALLERY_EMAIL.uid,
      recievedAt: {
        hr: 14,
        min: 28,
      },
    })
    set(recieveEmailAtom, {
      emailId: ENERGY_BLAST_EMAIL.uid,
      recievedAt: {
        hr: 15,
        min: 0,
      },
    })
    set(recieveEmailAtom, {
      emailId: ART_REQUESTS_EMAIL.uid,
      recievedAt: {
        hr: 15,
        min: 29,
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
