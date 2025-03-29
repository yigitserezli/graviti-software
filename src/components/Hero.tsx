import { useNavigate } from "react-router-dom";
import picture from "../../public/hero.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full px-4 md:px-10 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
                {/* Left */}
                <div className="w-full md:w-1/2 space-y-6">
                    {/* Header */}
                    <h1 className="text-lg md:text-xl font-bold leading-tight">Jewelry Meets Vision</h1>

                    {/* Subheader */}
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Digital solutions that simplify and elevate your jewelry business
                    </h2>

                    {/* Subtext */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                        From inventory tracking to sales management, Kulçe Kuyumcu's digital transformation enables you to operate with more control,
                        clarity, and confidence. Seamlessly manage your operations while delivering excellence to your customers.
                    </p>

                    {/* CTA Button */}
                    <div className="flex gap-8">
                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-[#1e3a8a] hover:bg-[#1e40af] transition px-6 py-3 rounded-md font-semibold text-white w-fit shadow-md hover:shadow-blue-700/40 hover:scale-105 duration-200 cursor-pointer"
                        >
                            Contact Us
                        </button>
                        <div className="flex justify-center items-center gap-2">
                            <span
                                onClick={() => navigate("/our-products")}
                                className="relative w-fit text-white cursor-pointer 
                                    after:block after:absolute after:left-0 
                                    after:-bottom-1 after:h-[2px] after:w-0 
                                    after:bg-white after:transition-all after:duration-300 
                                    hover:after:w-full"
                            >
                                Other Products
                            </span>
                            <FaArrowCircleRight className="text-white text-2xl" />
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={picture} alt="Kulce Kuyumcu App" className="w-full max-w-lg h-auto object-contain drop-shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
