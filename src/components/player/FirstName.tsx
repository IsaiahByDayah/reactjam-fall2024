import { useAtomValue } from "jotai"

import { currentPlayerAtom } from "@/atoms/player"

export const FirstName = () => {
  const player = useAtomValue(currentPlayerAtom)
  return player?.firstName
}
