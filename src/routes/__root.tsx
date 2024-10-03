import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import "./main.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
      </div>
      <p className="font-thin">Thin</p>
      <p className="italic font-thin">Thin Italic</p>
      <p className="font-medium">Medium</p>
      <p className="italic font-medium">Medium Italic</p>
      <p className="font-semibold">Semibold</p>
      <p className="italic font-semibold">Semibold Italic</p>
      <p className="font-bold">Bold</p>
      <p className="italic font-bold">Bold Italic</p>
      <p className="font-black">Black</p>
      <p className="italic font-black">Black Italic</p>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
