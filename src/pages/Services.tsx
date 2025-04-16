import { FaLaptopCode, FaMobileAlt, FaCloud, FaCogs, FaProjectDiagram } from "react-icons/fa";

const services = [
    {
        icon: <FaLaptopCode className="text-blue-600 text-4xl mb-4" />,
        title: "Web Applications",
        desc: "We design and develop user-centric, fast, and scalable web applications, with a strong focus on performance and security.",
    },
    {
        icon: <FaMobileAlt className="text-blue-600 text-4xl mb-4" />,
        title: "Mobile Applications",
        desc: "Using modern mobile technologies, we build secure and high-performance mobile apps for iOS and Android, prioritizing user experience.",
    },
    {
        icon: <FaCloud className="text-blue-600 text-4xl mb-4" />,
        title: "Cloud Solutions",
        desc: "We provide end-to-end support in the design, deployment, and management of cloud infrastructures to securely transform your digital operations.",
    },
    {
        icon: <FaCogs className="text-blue-600 text-4xl mb-4" />,
        title: "Software Development & Integration",
        desc: "We deliver flexible, scalable software solutions using Agile and DevOps, ensuring seamless integration with your systems.",
    },
    {
        icon: <FaProjectDiagram className="text-blue-600 text-4xl mb-4" />,
        title: "CRM & ERP Systems",
        desc: "We help you digitalize your operations with tailored CRM and ERP solutions — from analysis to full implementation and training.",
    },
];

export default function Services() {
    return (
        <div className="w-full px-6 md:px-10 py-24 bg-[#0f0f0f] text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
