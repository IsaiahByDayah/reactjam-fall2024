import clsx from "clsx"
import { useAtomValue } from "jotai"

import { currentEmailAtom } from "@/atoms/inbox"

interface EmailViewerProps {
  className?: string
}

export const EmailViewer = ({ className }: EmailViewerProps) => {
  const currentEmail = useAtomValue(currentEmailAtom)

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

  return (
    <div className={clsx("prose mx-auto px-4 py-10", className)}>
      {currentEmail?.message}
    </div>
  )
}
