import { FaTools, FaMobileAlt, FaCloud, FaGem } from "react-icons/fa";

const services = [
    {
        icon: <FaTools className="text-blue-600 text-4xl mb-4" />,
        title: "Custom Software Development",
        desc: "We craft scalable and tailored software solutions to meet the unique needs of your business.",
    },
    {
        icon: <FaMobileAlt className="text-blue-600 text-4xl mb-4" />,
        title: "Mobile App Design",
        desc: "Elegant and user-friendly mobile apps that reflect your brand and deliver seamless user experiences.",
    },
    {
        icon: <FaCloud className="text-blue-600 text-4xl mb-4" />,
        title: "Cloud Integration",
        desc: "Integrate modern cloud infrastructure into your workflow for faster, safer, and more reliable systems.",
    },
    {
        icon: <FaGem className="text-blue-600 text-4xl mb-4" />,
        title: "Digital Solutions for Jewelry",
        desc: "Specialized software for jewelry businesses to manage inventory, customers, and sales with precision.",
    },
];

export default function Services() {
    return (
        <div className="w-full px-6 md:px-10 py-24 bg-[#0f0f0f] text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-[#1a1a1a] p-8 rounded-xl shadow-md hover:shadow-blue-800/30 transition text-left">
                            {service.icon}
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
