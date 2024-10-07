import { BLAST_COMPANY } from "./blast-company"
import { DAVID_HERNANDEZ } from "./david-hernandez"
import { DESHAWN_BROWN } from "./deshawn-brown"
import { ELAINE_HOLT } from "./elaine-holt"
import { GOODFILMS_GREATTIMES } from "./goodfilms-greattimes"
import { NICK_MOORE } from "./nick-moore"
import { RICHARD_WHITE } from "./richard-white"
import { STEPHANIE_SMITH } from "./stephanie-smith"

export { BLAST_COMPANY } from "./blast-company"
export { DAVID_HERNANDEZ } from "./david-hernandez"
export { DESHAWN_BROWN } from "./deshawn-brown"
export { ELAINE_HOLT } from "./elaine-holt"
export { GOODFILMS_GREATTIMES } from "./goodfilms-greattimes"
export { NICK_MOORE } from "./nick-moore"
export { RICHARD_WHITE } from "./richard-white"
export { STEPHANIE_SMITH } from "./stephanie-smith"

export const CONTACTS = {
  [DAVID_HERNANDEZ.uid]: DAVID_HERNANDEZ,
  [DESHAWN_BROWN.uid]: DESHAWN_BROWN,
  [ELAINE_HOLT.uid]: ELAINE_HOLT,
  [GOODFILMS_GREATTIMES.uid]: GOODFILMS_GREATTIMES,
  [NICK_MOORE.uid]: NICK_MOORE,
  [RICHARD_WHITE.uid]: RICHARD_WHITE,
  [STEPHANIE_SMITH.uid]: STEPHANIE_SMITH,
  [BLAST_COMPANY.uid]: BLAST_COMPANY,
} as const

export const lookupContact = (contactId: string) => {
  const foundContact = CONTACTS[contactId]
  if (foundContact) {
    return foundContact
  }
  return undefined
}
