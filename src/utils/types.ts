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

export interface IEmployee {
  uid: string
  firstName: string
  lastName: string
  role: string
}

export interface IPlayer extends IEmployee {}

export interface IEmailReply {
  uid: string
  emailId: string
  message: string
  replyTimeMin: number
}

export interface IEmailData {
  uid: string
  fromId: string // EmployeeId
  subject: string
  preview: string
  message: ReactNode
  readTimeMin: number
}

export interface IInboxEmail {
  emailId: string
  recievedAt: IDateTime
  isRead: boolean
  replyId: null | string
}
