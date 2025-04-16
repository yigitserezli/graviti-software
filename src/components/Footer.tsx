import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import graviti from "../../public/logo-1-alpha.png";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0f0f0f] text-gray-400 px-6 md:px-10 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo / About */}
                <div>
                    <img src={graviti} className="h-24 m-auto mb-8" />
                    <p className="text-sm leading-relaxed">
                        We build elegant and scalable digital products tailored for businesses across various industries — where trust meets
                        technology.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-white transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/our-products" className="hover:text-white transition">
                                Our Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-4 text-xl">
                        <a
                            href="https://github.com/graviti-software"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/graviti-software/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Graviti Software. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
