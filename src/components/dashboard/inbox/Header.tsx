import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { useRouter } from "@tanstack/react-router"
import clsx from "clsx"
import { useAtomValue, useSetAtom } from "jotai"
import { HiChevronDown, HiOutlineBell } from "react-icons/hi2"

import { clearCurrentPlayerAtom, currentPlayerAtom } from "@/atoms/player"
import { currentDateTimeAtom } from "@/atoms/time"
import { displayDate, displayTime } from "@/utils/time"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const router = useRouter()
  const currentPlayer = useAtomValue(currentPlayerAtom)
  const clearCurrentPlayer = useSetAtom(clearCurrentPlayerAtom)
  const currentDateTime = useAtomValue(currentDateTimeAtom)

  const handleSignOut = () => {
    clearCurrentPlayer()
    router.navigate({ to: "/login" })
  }

  return (
    <div
      className={clsx(
        "z-40 flex items-center gap-x-6 border-b border-gray-200 bg-white px-6 shadow-sm",
        className,
      )}
    >
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        {/* <form action="#" method="GET" className="relative flex flex-1">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <HiMagnifyingGlass
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
          />
          <input
            id="search-field"
            name="search"
            type="search"
            placeholder="Search..."
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          />
        </form> */}
        <div className="relative flex flex-1 items-center gap-4">
          <span className="text-2xl font-black uppercase">
            {displayDate(currentDateTime)}
          </span>{" "}
          <span>{displayTime(currentDateTime)}</span>
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <HiOutlineBell aria-hidden="true" className="h-6 w-6" />
          </button>

          <div aria-hidden="true" className="block h-6 w-px bg-gray-900/10" />

          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <span className="inline-block h-8 w-8 overflow-hidden rounded-full border bg-gray-100 shadow-sm">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-full w-full text-gray-300"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <span className="flex items-center">
                <span
                  aria-hidden="true"
                  className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                >
                  {currentPlayer?.firstName} {currentPlayer?.lastName}
                </span>
                <HiChevronDown
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 text-gray-400"
                />
              </span>
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <button
                  className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}
