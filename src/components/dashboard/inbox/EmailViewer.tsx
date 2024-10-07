import clsx from "clsx"
import { useAtomValue, useSetAtom } from "jotai"

import {
  currentEmailAtom,
  currentEmailEntryAtom,
  sendReplyAtom,
} from "@/atoms/inbox"
import { lookupEmailReplies } from "@/utils/data/replies"
import { IEmailReply } from "@/utils/types"

interface EmailViewerProps {
  className?: string
}

export const EmailViewer = ({ className }: EmailViewerProps) => {
  const currentEmailEntry = useAtomValue(currentEmailEntryAtom)
  const currentEmail = useAtomValue(currentEmailAtom)
  const sendReply = useSetAtom(sendReplyAtom)

  if (!currentEmail) {
    return (
      <div
        className={clsx(
          "flex items-center justify-center px-4 py-10 italic",
          className,
        )}
      >
        No Email Selected
      </div>
    )
  }

  const replies = lookupEmailReplies(currentEmail.uid)
  const isRepliedTo = Boolean(currentEmailEntry?.replyId)

  const handleReplyClick = (reply: IEmailReply) => {
    if (!isRepliedTo) {
      sendReply(reply.uid)
    }
  }

  return (
    <div className={clsx("mx-auto flex flex-col gap-10 px-4 py-10", className)}>
      <div className="prose">{currentEmail?.message}</div>
      <ul className="border px-2 py-4">
        {replies.map((reply) => (
          <li
            className={clsx(
              "text w-full rounded px-2 py-1",
              currentEmailEntry?.replyId === reply.uid
                ? "bg-gray-300"
                : "hover:bg-gray-200",
              { "cursor-pointer": !isRepliedTo },
            )}
            onClick={() => handleReplyClick(reply)}
          >
            <span className="font-bold italic">"{reply.message}"</span> -{" "}
            <span className="text-sm">[{reply.replyTimeMin}min]</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
