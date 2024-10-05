import { createFileRoute, Link } from "@tanstack/react-router"
import { HiPlus } from "react-icons/hi"

export const Route = createFileRoute("/login/")({
  component: LoginIndex,
})

function LoginIndex() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-playpen text-4xl font-black">Muy Snacks</h1>
        <p className="font-playpen text-sm italic">
          Muy is just yum backwards!
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col items-center gap-2">
          <Link className="btn btn-icon size-20" to="/login/new-user">
            <HiPlus className="size-6" />
          </Link>
          <p>New Hire</p>
        </div>
      </div>
    </div>
  )
}
