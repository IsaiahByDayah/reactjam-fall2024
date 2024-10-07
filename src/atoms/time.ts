import { atom } from "jotai"

import { IDate, IDateTime, ITime } from "@/utils/types"

export const currentTimeAtom = atom<ITime>({
  hr: 13,
  min: 0,
})

export const currentDateAtom = atom<IDate>({
  month: 0,
  day: 0,
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
