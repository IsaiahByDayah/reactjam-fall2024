import { useAtomValue } from "jotai"

import { currentPlayerAtom } from "@/atoms/player"

export const LastName = () => {
  const player = useAtomValue(currentPlayerAtom)
  return player?.lastName
}
