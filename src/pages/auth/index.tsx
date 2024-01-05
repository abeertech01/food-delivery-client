import { useMutation } from "@apollo/client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { CREATE_USER } from "../../graphql/mutations"
import SubmitButton from "./components/SubmitButton"
import UploadWidget from "../../lib/UploadWidget"

const Auth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>()

  const [createUser, { loading }] = useMutation(CREATE_USER)

  const onSubmit: SubmitHandler<FieldValues> = async (valueObj) => {
    try {
      const { data } = await createUser({
        variables: {
          firstName: valueObj.firstName,
          lastName: valueObj.lastName,
          email: valueObj.email,
          password: valueObj.password,
        },
      })

      console.log("data ", data.createUser)
      reset()
    } catch (error) {
      console.log("error: ", error)
    }
  }

  return (
    <div>
      <h1 className="border-b ">Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[18rem] p-[1rem] bg-[#373737] border-[1px] rounded-md border-[#606060] mt-[2rem]"
      >
        <div className="firstName my-4">
          <input
            type="text"
            {...register("firstName", {
              required: true,
              minLength: 2,
            })}
            placeholder="First Name *"
            className="w-full p-2 rounded-md text-[1.2rem] outline-none"
          />
          {errors.firstName?.type === "required" && (
            <p className="text-red-400 text-left">First Name is Required.</p>
          )}
          {errors.firstName?.type === "minLength" && (
            <p className="text-red-400 text-left">
              First Name has to be at least 2 characters.
            </p>
          )}
        </div>

        <div className="lastName my-4">
          <input
            type="text"
            {...register("lastName")}
            placeholder="Last Name"
            className="w-full p-2 rounded-md text-[1.2rem] outline-none"
          />
        </div>

        <div>
          <UploadWidget className="w-full text-left px-2 bg-[#2B2A33] outline-none">
            Profile picture...
          </UploadWidget>
        </div>

        <div className="email my-4">
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            placeholder="Email *"
            className="w-full p-2 rounded-md text-[1.2rem] outline-none"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-400 text-left">Email is Required.</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-400 text-left">Email is not valid.</p>
          )}
        </div>

        <div className="password mt-4 mb-[1.5rem]">
          <input
            type="password"
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  ),
              },
            })}
            placeholder="Password *"
            className="w-full p-2 rounded-md text-[1.2rem] outline-none"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-400 text-left">Password is required.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="text-red-400 text-left">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="text-red-400 text-left">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>

        <SubmitButton type="submit" className="mt-[5rem]" disabled={loading}>
          Submit
        </SubmitButton>
      </form>
    </div>
  )
}
export default Auth
