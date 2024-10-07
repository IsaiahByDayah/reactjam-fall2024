import { createFileRoute, Outlet } from "@tanstack/react-router"
import clsx from "clsx"
import { HiEnvelope } from "react-icons/hi2"

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
})

const navigation = [
  { name: "Inbox", href: "#", icon: HiEnvelope, current: true },
]

function Dashboard() {
  return (
    <div className="absolute inset-0 grid grid-cols-[theme(spacing[20])_1fr] grid-rows-1">
      <div className="overflow-y-auto bg-gradient-to-br from-red-600 to-red-800 pb-4 text-white">
        <div className="flex h-16 shrink-0 items-center justify-center">
          <span className="h-8 w-auto font-playpen text-4xl font-black">M</span>
        </div>
        <nav className="mt-8">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={clsx(
                    "",
                    item.current ? "bg-red-800" : "hover:bg-red-400",
                    "group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6",
                  )}
                >
                  <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                  <span className="sr-only">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  )
}
