import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#1c1c1c] to-[#2e2e2e] text-white">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
