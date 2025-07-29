import React from "react";
import { BsGoogle } from "react-icons/bs";
import { NavLink } from "react-router";
import useLogin from "../hooks/useLogin";
import { useForm } from "react-hook-form";

export default function Login() {
  document.title = "Hotel-0 Login";
  const { signInWithGoogleWithToast, signInWithEmailWithToast } = useLogin();
  const {
    handleSubmit,
    formState: { isSubmitting },
    register,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailWithToast(email, password);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md ">
        <form
          className="card bordered shadow-[0px_0px_10px] shadow-white rounded-lg bg-base-100 p-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-semibold">Welcome Back</h2>
            <p className="text-sm opacity-70">Sign in to your account</p>
          </div>

          <div className="p-6 pt-0">
            <div className="form-control space-y-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full"
                autoFocus
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            <div className="form-control mt-4 space-y-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>

            <div className="form-control mt-10 flex justify-center">
              <button
                className="btn btn-primary text-white"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>

            <div className="divider">OR</div>

            <div className="form-control mt-6 flex justify-center">
              <button
                className="btn btn-outline btn-secondary"
                onClick={signInWithGoogleWithToast}
                type="button"
                disabled={isSubmitting}
              >
                <BsGoogle className="mr-2" />
                Continue with Google
              </button>
            </div>
          </div>

          <div className="card-footer text-center text-sm opacity-70">
            Don't have an account?{" "}
            <NavLink to={`/auth/register`} className="link link-primary">
              Sign up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
