import { LUNCH_REQUEST_EMAIL } from "./lunch-request"
import { WELCOME_EMAIL } from "./welcome"

export { LUNCH_REQUEST_EMAIL } from "./lunch-request"
export { WELCOME_EMAIL } from "./welcome"

export const EMAILS = {
  [WELCOME_EMAIL.uid]: WELCOME_EMAIL,
  [LUNCH_REQUEST_EMAIL.uid]: LUNCH_REQUEST_EMAIL,
} as const

export const lookupEmail = (emailId: string | undefined) => {
  if (!emailId) {
    return undefined
  }

  const foundEmail = EMAILS[emailId]
  if (foundEmail) {
    return foundEmail
  }
  return undefined
}
