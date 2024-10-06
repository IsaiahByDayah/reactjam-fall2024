import { IUser } from "@/utils/types"

export const parseEmployeeId = ({
  firstName,
  lastName,
}: Partial<Pick<IUser, "firstName" | "lastName">>) =>
  `${firstName?.[0] ?? ""}${lastName ?? ""}`.toLowerCase()
