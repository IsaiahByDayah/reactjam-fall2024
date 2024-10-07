import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/login")({
  component: () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-600 to-red-800 text-white">
      <Outlet />
    </div>
  ),
})
