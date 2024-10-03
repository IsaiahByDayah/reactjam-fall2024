import { createFileRoute, Link } from "@tanstack/react-router";
import { HiPlus } from "react-icons/hi";

export const Route = createFileRoute("/login/")({
  component: LoginIndex,
});

function LoginIndex() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-playpen font-black text-4xl">Muy Snacks</h1>
        <p className="font-playpen italic text-sm">
          Muy is just yum backwards!
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 items-center">
          <Link
            className="size-20 flex items-center justify-center relative border border-current rounded"
            to="/login/new-user"
          >
            <HiPlus className="text-4xl" />
          </Link>
          <p>New Hire</p>
        </div>
      </div>
    </div>
  );
}
