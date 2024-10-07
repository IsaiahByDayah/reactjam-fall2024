import { atom } from "jotai"

import { IDate, IDateTime, ITime } from "@/utils/types"

export const currentTimeAtom = atom<ITime>({
  hr: 18,
  min: 44,
})

export const currentDateAtom = atom<IDate>({
  month: 7,
  day: 14,
})

export const currentDateTimeAtom = atom<IDateTime>((get) => ({
  ...get(currentDateAtom),
  ...get(currentTimeAtom),
}))

export const advanceTimeAtom = atom(
  null,
  (_get, set, { hr = 0, min = 0 }: Partial<ITime>) =>
    set(currentTimeAtom, (currentTime) => ({
      hr: currentTime.hr + hr,
      min: currentTime.min + min,
    })),
)
