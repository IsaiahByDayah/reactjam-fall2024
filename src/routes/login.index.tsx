import { createFileRoute, Link, useRouter } from "@tanstack/react-router"
import { useAtom, useAtomValue } from "jotai"
import { useEffect } from "react"
import { HiPlus, HiUser } from "react-icons/hi"

import { allPlayersAtom, currentPlayerIdAtom } from "@/atoms/player"
import { IPlayer } from "@/utils/types"

export const Route = createFileRoute("/login/")({
  component: LoginIndex,
})

const SLOGANS = [
  "Muy is just yum backwards!",
  "You can’t spell yum without muy.",
  "Muy Snacks! It’s never enough.",
  "Muy Snacks. Very yum!",
  "Muy Yummy!",
  "Muy Yum!",
]

function LoginIndex() {
  const allPlayers = useAtomValue(allPlayersAtom)
  const [currentPlayerId, setCurrentUserId] = useAtom(currentPlayerIdAtom)
  const router = useRouter()

  useEffect(() => {
    if (currentPlayerId) {
      router.navigate({ to: "/dashboard/inbox" })
    }
  }, [currentPlayerId])

  const loadPlayer = (player: IPlayer) => {
    setCurrentUserId(player.uid)
  }

  const slogan = SLOGANS[Math.floor(Math.random() * SLOGANS.length)]

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-playpen text-4xl font-black">Muy Snacks</h1>
        <p className="font-playpen text-sm italic">{slogan}</p>
      </div>
      <div className="flex flex-row gap-2">
        {allPlayers.map((player) => (
          <div key={player.uid} className="flex flex-col items-center gap-2">
            <button
              className="btn btn-icon size-20"
              onClick={() => loadPlayer(player)}
            >
              <HiUser className="size-6" />
            </button>
            <p>
              {player.firstName} {player.lastName}
            </p>
          </div>
        ))}
        <div className="flex flex-col items-center gap-2">
          <Link className="btn btn-icon size-20" to="/login/new-user">
            <HiPlus className="size-6" />
          </Link>
          <p>New Hire</p>
        </div>
      </div>
    </div>
  )
}
