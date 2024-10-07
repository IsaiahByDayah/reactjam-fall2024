import clsx from "clsx"
import { useAtom, useAtomValue, useSetAtom } from "jotai"

import {
  currentEmailIdAtom,
  currentPlayerDailyInboxAtom,
  selectEmailAtom,
} from "@/atoms/inbox"
import { currentTimeAtom } from "@/atoms/time"
import { lookupEmail } from "@/utils/data/emails"
import { lookupEmployee } from "@/utils/data/employees"
import { displayTime } from "@/utils/time"

interface EmailFeedProps {
  className?: string
}

export const EmailFeed = ({ className }: EmailFeedProps) => {
  const inbox = useAtomValue(currentPlayerDailyInboxAtom)
  const currentTime = useAtomValue(currentTimeAtom)
  const selectEmail = useSetAtom(selectEmailAtom)
  const [currentEmailId, setCurrentEmailId] = useAtom(currentEmailIdAtom)

  return (
    <ul
      className={clsx(
        "divide-y divide-gray-100 overflow-y-auto border-r border-gray-200 bg-gray-100",
        className,
      )}
      onClick={() => setCurrentEmailId(undefined)}
    >
      {inbox.map((entry) => {
        const email = lookupEmail(entry.emailId)

        if (!email) {
          return null
        }

        const fromEmployee = lookupEmployee(email.fromId)
        if (!fromEmployee) {
          return null
        }

        return (
          <li
            key={email.uid}
            className={clsx(
              "relative flex-auto cursor-pointer px-8 py-6 pr-6",
              currentEmailId === email.uid
                ? "bg-gray-300"
                : "hover:bg-gray-200",
            )}
            onClick={(e) => {
              e.stopPropagation()
              selectEmail(email.uid)
            }}
          >
            {!entry.isRead && (
              <div className="absolute left-3 top-[calc(theme(spacing[7])+theme(spacing[0.5]))] size-2.5 rounded-full bg-red-700" />
            )}
            <div className="flex items-baseline justify-between gap-x-4">
              <p
                className={clsx(
                  "overflow-x-hidden break-words font-semibold leading-6 text-gray-900",
                )}
              >
                {fromEmployee.firstName} {fromEmployee.lastName}
              </p>
              <p className="flex-none text-xs text-gray-600">
                {displayTime(entry.recievedAt)}
              </p>
            </div>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {email.subject}
            </p>
            <p className="line-clamp-2 text-sm leading-6 text-gray-500">
              {email.preview}
            </p>
            {!entry.isRead && (
              <p className="mt-1 text-xs font-black italic text-gray-500">
                [{email.readTimeMin}min read]
              </p>
            )}
          </li>
        )
      })}
      <li className="w-full border-t border-gray-300" />
    </ul>
  )
}
