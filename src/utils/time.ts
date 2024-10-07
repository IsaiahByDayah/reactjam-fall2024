import dayjs from "dayjs"
import objectSupport from "dayjs/plugin/objectSupport"
import relativeTime from "dayjs/plugin/relativeTime"
import updateLocale from "dayjs/plugin/updateLocale"

import { IDate, ITime } from "@/utils/types"

dayjs.extend(relativeTime)
dayjs.extend(objectSupport)
dayjs.extend(updateLocale)

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few secs",
    m: "a min",
    mm: "%d mins",
    h: "an hr",
    hh: "%d hrs",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
})

export const timeFrom = (timeA: ITime, timeB: ITime) => {
  const momentA = dayjs({
    hour: timeA.hr,
    minute: timeA.min,
  })
  const momentB = dayjs({
    hour: timeB.hr,
    minute: timeB.min,
  })
  return momentA.from(momentB)
}

export const displayDate = (date: IDate, format = "MMM DD") =>
  dayjs({
    month: date.month,
    day: date.day,
  }).format(format)

export const displayTime = (time: ITime, format = "h:mm a") =>
  dayjs({
    hour: time.hr,
    minute: time.min,
  }).format(format)
