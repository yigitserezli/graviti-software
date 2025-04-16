import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import useLockBodyScroll from "../hooks/useLockBodyScrool";
import graviti from "../../public/logo-1-alpha.png";


const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    useLockBodyScroll(menuOpen); // scroll kilitleme aktif

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="text-white w-full z-50 relative border-b border-white/20">
            <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
                <img src={graviti} className="h-18" />

                {/* Desktop Menü */}
                <nav className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative w-fit text-white after:block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full 
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Hamburger Icon (Mobil) */}
                <button className="md:hidden text-4xl" onClick={() => setMenuOpen(true)}>
                    <HiMenu />
                </button>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Slide Drawer - Sağdan açılan */}
            <aside
                className={`fixed top-0 right-0 h-full w-64 bg-primary text-white z-50 transform transition-transform duration-300 ease-in-out ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } shadow-lg`}
            >
                <div className="flex items-center justify-between p-4 border-b border-white/20">
                    <h2 className="text-lg font-bold">Menü</h2>
                    <button onClick={() => setMenuOpen(false)} className="text-2xl">
                        <HiX />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`hover:underline ${location.pathname === item.path ? "font-semibold underline" : ""}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>
        </header>
    );
};

export default Header;
