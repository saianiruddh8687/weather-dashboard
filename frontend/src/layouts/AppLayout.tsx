import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="min-h-[calc(100vh-128px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
