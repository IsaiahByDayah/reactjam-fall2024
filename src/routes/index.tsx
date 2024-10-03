import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const router = useRouter();

  router.navigate({ to: "/login" });

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 text-white opacity-90 flex flex-col items-center justify-center"></div>
  );
}
