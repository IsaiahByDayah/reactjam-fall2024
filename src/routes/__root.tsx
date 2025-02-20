import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

import "./main.css"

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  ),
})
