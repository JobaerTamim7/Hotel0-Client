import { useForm } from "react-hook-form";
import useRegister from "../hooks/useRegister";
import { NavLink } from "react-router";
import { BsGoogle } from "react-icons/bs";

export default function Register() {
  document.title = "Tanzar Register";
  const { registerWithEmailToast, signInWithGoogleWithToast } = useRegister();
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      displayName: "",
      photoURL: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const { email, password, displayName, photoURL } = data;
    await registerWithEmailToast(email, password, displayName, photoURL);
  };

  return (
    <div className="flex items-center justify-center p-4  shadow-[0px_0px_10px] shadow-white rounded-lg">
      <div className="w-full max-w-md">
        <form
          className="card bordered shadow-xl p-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-semibold">Welcome!</h2>
            <p className="text-sm opacity-70">Create your account</p>
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
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control mt-6 space-y-4">
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
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="form-control mt-6 space-y-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered w-full"
                {...register("displayName", {
                  required: "Display name is required",
                  minLength: {
                    value: 2,
                    message: "Display name must be at least 2 characters",
                  },
                })}
              />
              {errors.displayName && (
                <p className="text-red-500 text-sm">
                  {errors.displayName.message}
                </p>
              )}
            </div>

            <div className="form-control mt-6 space-y-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full"
                {...register("photoURL", {
                  required: "Photo URL is required",
                  pattern: {
                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/,
                    message: "Invalid photo URL",
                  },
                })}
              />
              {errors.photoURL && (
                <p className="text-red-500 text-sm">
                  {errors.photoURL.message}
                </p>
              )}
            </div>

            <div className="form-control mt-10 flex justify-center">
              <button
                className="btn btn-primary text-white"
                disabled={isSubmitting}
              >
                Register
              </button>
            </div>

            <div className="divider mt-6 mb-6">OR</div>

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
            Already have an account?{" "}
            <NavLink to={`/auth/login`} className="link link-primary">
              Sign in
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
