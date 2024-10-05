import { zodResolver } from "@hookform/resolvers/zod"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useForm, useWatch } from "react-hook-form"
import { HiChevronLeft } from "react-icons/hi"
import { z } from "zod"

export const Route = createFileRoute("/login/new-user")({
  component: NewHireForm,
})

const newHireSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
})

type NewHireSchema = z.infer<typeof newHireSchema>

function NewHireForm() {
  const {
    control,
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<NewHireSchema>({
    mode: "onTouched",
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
    },
    resolver: zodResolver(newHireSchema),
  })

  const firstName = useWatch({ control, name: "firstName" })
  const lastName = useWatch({ control, name: "lastName" })

  const email = `${firstName?.[0] ?? ""}${lastName}`.toLowerCase()

  const onSubmit = (data: NewHireSchema) => {
    console.log(data)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-20 px-4 sm:px-8">
      <h1 className="text-4xl font-black">New Hire Setup</h1>

      <form
        className="grid w-full max-w-sm grid-cols-1 gap-x-6 gap-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-1">
          <label htmlFor="first-name" className="block font-medium leading-6">
            First name
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              autoComplete="off"
              data-1p-ignore
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs">{errors.firstName.message}</p>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <label htmlFor="last-name" className="block font-medium leading-6">
            Last name
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              autoComplete="off"
              data-1p-ignore
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <label htmlFor="username" className="block font-medium leading-6">
            Email
          </label>
          <p className="mt-2">
            <span className="font-bold sm:text-sm">{email}</span>
            <span className="text-white/80 sm:text-sm">@muysnacks.com</span>
          </p>
        </div>

        <button className="btn btn-contained" disabled={!isValid}>
          Get Started!
        </button>
      </form>

      <Link
        className="btn bg-current/50 flex items-center justify-center gap-2 text-white"
        to="/login"
      >
        <HiChevronLeft className="size-6" /> Back to Login
      </Link>
    </div>
  )
}
