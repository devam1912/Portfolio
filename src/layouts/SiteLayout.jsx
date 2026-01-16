import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import PitchBackground from "../components/PitchBackground.jsx";
import { Link } from "react-router-dom";
import ChatWidget from "../components/ChatWidget.jsx";
export default function SiteLayout() {
    return (
        <div className="min-h-screen">
            <PitchBackground />
            <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <Link
                        to="/"
                        className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >

                        <div className="h-9 w-9 rounded-full border border-white/15 bg-white/10" />
                        <div className="leading-tight">
                            <div className="text-sm font-semibold">Devam Tanna</div>
                            <div className="text-xs opacity-80">Portfolio</div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-3">
                        <Navbar />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-4 py-10">
                <Outlet />
            </main>

            <footer className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-4 py-6 text-xs opacity-80">
                    © {new Date().getFullYear()} Devam Tanna
                </div>
            </footer>
            <ChatWidget endpoint={import.meta.env.VITE_FORMSPREE_ENDPOINT} />
        </div>
    );
}
