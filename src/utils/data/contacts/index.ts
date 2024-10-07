import { DAVID_HERNANDEZ } from "./david-hernandez"
import { DESHAWN_BROWN } from "./deshawn-brown"
import { ELAINE_HOLT } from "./elaine-holt"
import { NICK_MOORE } from "./nick-moore"
import { RICHARD_WHITE } from "./richard-white"
import { STEPHANIE_SMITH } from "./stephanie-smith"

export { DAVID_HERNANDEZ } from "./david-hernandez"
export { DESHAWN_BROWN } from "./deshawn-brown"
export { ELAINE_HOLT } from "./elaine-holt"
export { NICK_MOORE } from "./nick-moore"
export { RICHARD_WHITE } from "./richard-white"
export { STEPHANIE_SMITH } from "./stephanie-smith"

export const CONTACTS = {
  [DAVID_HERNANDEZ.uid]: DAVID_HERNANDEZ,
  [RICHARD_WHITE.uid]: RICHARD_WHITE,
  [DESHAWN_BROWN.uid]: DESHAWN_BROWN,
  [ELAINE_HOLT.uid]: ELAINE_HOLT,
  [NICK_MOORE.uid]: NICK_MOORE,
  [STEPHANIE_SMITH.uid]: STEPHANIE_SMITH,
} as const

export const lookupContact = (contactId: string) => {
  const foundContact = CONTACTS[contactId]
  if (foundContact) {
    return foundContact
  }
  return undefined
}
