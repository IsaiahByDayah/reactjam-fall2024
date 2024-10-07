import { IEmployee } from "@/utils/types"

export const RICHARD_WHITE: IEmployee = {
  uid: "richard_white",
  firstName: "Richard",
  lastName: "White",
  role: "Chief People Officer (CPO)",
}

export const EMPLOYEES = {
  [RICHARD_WHITE.uid]: RICHARD_WHITE,
} as const

export const lookupEmployee = (employeeId: string) => {
  const foundEmployee = EMPLOYEES[employeeId]
  if (foundEmployee) {
    return foundEmployee
  }
  return undefined
}
