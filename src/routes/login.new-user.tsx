import { createFileRoute, Link } from "@tanstack/react-router";
import { HiChevronLeft } from "react-icons/hi";

export const Route = createFileRoute("/login/new-user")({
  component: LoginNewUser,
});

function LoginNewUser() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <h1 className="font-playpen font-black text-4xl">New Hire Setup</h1>

      <div className="flex flex-row gap-2">
        <Link className="flex items-center justify-center" to="/login">
          <HiChevronLeft className="text-4xl" /> Back to Login
        </Link>
      </div>
    </div>
  );
}
