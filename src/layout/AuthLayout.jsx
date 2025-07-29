import { Outlet } from "react-router";
import { useNavigate } from "react-router";

export default function AuthLayout() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-start mt-[5%]">
      <Outlet />
      <button
        className="btn btn-secondary text-secondary-content mt-10"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
}
