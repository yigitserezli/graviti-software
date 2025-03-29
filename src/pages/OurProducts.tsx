import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const projects = [
    {
        title: "Külçe Kuyumcu",
        desc: "Inventory & sales system for jewelry stores.",
        image: "/kulceHero.png",
    },
    {
        title: "Moto Finder",
        desc: "A smart platform that matches motorcycle buyers and sellers based on location, budget, and preferences.",
        image: "/moto.png",
    },
    {
        title: "Külüp App",
        desc: "A modern football academy management app to track players, matches, payments, and parent communication in one place.",
        image: "/clupapp.png",
    },
];

export default function OurProducts() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 24 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 32 },
            },
        },
    });

    return (
        <div className="w-full px-6 md:px-10 py-24 bg-[#0f0f0f] text-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
                <p className="text-gray-400 mt-4">Tailored software for unique business needs</p>
            </div>

            <div ref={sliderRef} className="keen-slider">
                {projects.map((project, idx) => (
                    <div key={idx} className="keen-slider__slide">
                        <div className="bg-[#1c1c1c] p-4 rounded-xl shadow-lg h-full hover:scale-[1.02] transition">
                            <img src={project.image} className="h-48 w-full object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-400">{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
