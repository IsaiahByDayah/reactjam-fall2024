import { ReactNode } from "react"

export interface IDate {
  month: number
  day: number
}

export interface ITime {
  hr: number
  min: number
}

export type IDateTime = IDate & ITime

export interface IContact {
  uid: string
  firstName: string
  lastName: string
  role: string
  isMuySnacksEmployee: boolean
}

export interface IPlayer extends IContact {}

export interface IEmailReply {
  uid: string
  emailId: string
  message: ReactNode
  replyTimeMin: number
  order?: number
}

export interface IEmailData {
  uid: string
  fromId: string
  subject: ReactNode
  preview: ReactNode
  message: ReactNode
  readTimeMin: number
}

export interface IInboxEmail {
  emailId: string
  recievedAt: IDateTime
  isRead: boolean
  isArchived: boolean
  replyId: null | string
}
