import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
            <div className="text-center max-w-md">
                <h1 className="text-7xl md:text-9xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8">The page you’re looking for doesn’t exist or might have been moved.</p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-[#1e3a8a] hover:bg-[#1e40af] transition px-6 py-3 rounded-md font-semibold text-white shadow hover:shadow-blue-700/30"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
}
