import { toast } from "react-toastify";
import useAuth from "./useAuth";
import { useLocation, useNavigate } from "react-router";

export default function useLogin() {
  const { signInWithGoogle, signInWithEmail } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from || "/";

  const signInWithGoogleWithToast = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        toast.success("Logged in successfully!");
        navigate(redirectTo);
      }
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };

  const signInWithEmailWithToast = async (email, password) => {
    try {
      const user = await signInWithEmail(email, password);
      if (user) {
        toast.success("Logged in successfully!");
        navigate(redirectTo);
      }
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };

  return {
    signInWithGoogleWithToast,
    signInWithEmailWithToast,
  };
}
