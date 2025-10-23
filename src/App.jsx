import Navbar from "./components/layouts/Navbar";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-to-use", label: "How to Use" },
  { to: "/roadmap", label: "Roadmap" },
];

export default function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      {/* Main content goes here */}
    </div>
  );
}
