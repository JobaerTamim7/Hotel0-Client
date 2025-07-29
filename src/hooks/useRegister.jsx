import useAuth from "./useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

export default function useRegister() {
  const { registerWithEmail, signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from || "/";

  const registerWithEmailToast = async (
    email,
    password,
    displayName,
    photoURL
  ) => {
    try {
      const user = await registerWithEmail(
        email,
        password,
        displayName,
        photoURL
      );
      if (user) {
        toast.success("Registration successful!");
        navigate(redirectTo);
      }
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`);
    }
  };

  const signInWithGoogleWithToast = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        toast.success("Registration successfully!");
        navigate(redirectTo);
      }
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`);
    }
  };

  return {
    registerWithEmailToast,
    signInWithGoogleWithToast,
  };
}
