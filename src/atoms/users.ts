import { atomWithStorage } from "jotai/utils"

import { IUser } from "@/utils/types"

export const allUsersAtom = atomWithStorage<IUser[]>("all-users", [])
