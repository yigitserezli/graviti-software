import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";

const features = [
    {
        icon: <FaRocket className="text-blue-500 text-3xl mb-3" />,
        title: "Fast & Scalable",
        desc: "Our software is built to grow with your business, ensuring performance at every stage.",
    },
    {
        icon: <FaShieldAlt className="text-blue-500 text-3xl mb-3" />,
        title: "Secure by Design",
        desc: "Security is our top priority. We implement industry-best practices to keep your data safe.",
    },
    {
        icon: <FaCogs className="text-blue-500 text-3xl mb-3" />,
        title: "Tailored Solutions",
        desc: "We craft custom features to meet the unique needs of every sector businesses.",
    },
];

const WhyChooseUs = () => {
    return (
        <div className="w-full px-6 md:px-10 py-20 bg-[#121212] text-white text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Graviti?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {features.map((item, idx) => (
                    <div key={idx} className="bg-[#1e1e1e] p-8 rounded-xl shadow-md hover:shadow-blue-800/30 transition">
                        <div className="flex flex-col items-center">
                            {item.icon}
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
