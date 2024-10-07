import { ART_GALLERY_EMAIL } from "./art-gallery"
import { ART_REQUESTS_EMAIL } from "./art-requests"
import { CONTENT_SYNC_EMAIL } from "./content-sync"
import { ENERGY_BLAST_EMAIL } from "./energy-blast"
import { INSPO_EMAIL } from "./inspo"
import { LUNCH_REQUEST_EMAIL } from "./lunch-request"
import { MOVIE_SCREENING_EMAIL } from "./movie-screening"
import { PETS_EMAIL } from "./pets"
import { REF_SHEET_EMAIL } from "./ref-sheet"
import { WELCOME_EMAIL } from "./welcome"

export { ART_GALLERY_EMAIL } from "./art-gallery"
export { ART_REQUESTS_EMAIL } from "./art-requests"
export { CONTENT_SYNC_EMAIL } from "./content-sync"
export { ENERGY_BLAST_EMAIL } from "./energy-blast"
export { INSPO_EMAIL } from "./inspo"
export { LUNCH_REQUEST_EMAIL } from "./lunch-request"
export { MOVIE_SCREENING_EMAIL } from "./movie-screening"
export { PETS_EMAIL } from "./pets"
export { REF_SHEET_EMAIL } from "./ref-sheet"
export { WELCOME_EMAIL } from "./welcome"

export const EMAILS = {
  [ART_GALLERY_EMAIL.uid]: ART_GALLERY_EMAIL,
  [ART_REQUESTS_EMAIL.uid]: ART_REQUESTS_EMAIL,
  [CONTENT_SYNC_EMAIL.uid]: CONTENT_SYNC_EMAIL,
  [ENERGY_BLAST_EMAIL.uid]: ENERGY_BLAST_EMAIL,
  [INSPO_EMAIL.uid]: INSPO_EMAIL,
  [LUNCH_REQUEST_EMAIL.uid]: LUNCH_REQUEST_EMAIL,
  [MOVIE_SCREENING_EMAIL.uid]: MOVIE_SCREENING_EMAIL,
  [PETS_EMAIL.uid]: PETS_EMAIL,
  [REF_SHEET_EMAIL.uid]: REF_SHEET_EMAIL,
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
