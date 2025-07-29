import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <>
      <header className="bg-white/25 shadow backdrop-blur-md">
        <NavBar />
      </header>
      <main className="bg-background text-foreground">
        <Outlet />
      </main>
    </>
  );
}
