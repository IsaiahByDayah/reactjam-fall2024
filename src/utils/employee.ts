import { IContact } from "@/utils/types"

export const parseEmployeeId = ({
  firstName,
  lastName,
}: Partial<Pick<IContact, "firstName" | "lastName">>) =>
  `${firstName?.[0] ?? ""}${lastName ?? ""}`.toLowerCase()
