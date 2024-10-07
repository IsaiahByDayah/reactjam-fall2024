import { WELCOME_EMAIL } from "./welcome"

export { WELCOME_EMAIL } from "./welcome"

export const EMAILS = {
  [WELCOME_EMAIL.uid]: WELCOME_EMAIL,
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
