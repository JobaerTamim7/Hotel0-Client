import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <header className="bg-white/25 shadow backdrop-blur-md">
        <NavBar />
      </header>
      <main className="bg-background text-foreground">
        <Outlet />
      </main>
      <footer className="bg-white/25 ">
        <Footer />
      </footer>
    </>
  );
}
