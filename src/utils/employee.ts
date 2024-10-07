import { IEmployee } from "@/utils/types"

export const parseEmployeeId = ({
  firstName,
  lastName,
}: Partial<Pick<IEmployee, "firstName" | "lastName">>) =>
  `${firstName?.[0] ?? ""}${lastName ?? ""}`.toLowerCase()
