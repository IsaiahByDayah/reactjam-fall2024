import { zodResolver } from "@hookform/resolvers/zod"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useForm } from "react-hook-form"
import { HiChevronLeft } from "react-icons/hi"
import { z } from "zod"

export const Route = createFileRoute("/login/new-user")({
  component: NewHireForm,
})

const newHireSchema = z.object({})

type NewHireSchema = z.infer<typeof newHireSchema>

function NewHireForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewHireSchema>({
    resolver: zodResolver(newHireSchema),
  })
  const onSubmit = (data: NewHireSchema) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <h1 className="text-4xl font-black">New Hire Setup</h1>

      <form onSubmit={handleSubmit(onSubmit)}></form>

      <Link
        className="btn bg-current/50 flex items-center justify-center gap-2 text-white"
        to="/login"
      >
        <HiChevronLeft className="size-6" /> Back to Login
      </Link>
    </div>
  )
}
