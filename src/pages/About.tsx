import teamImage from "../../public/team.jpg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const projects = [
    {
        title: "Külçe CRM",
        desc: "Inventory & sales system for jewelry stores.",
        image: "/kulceHero.png",
    },
    {
        title: "Motofind.net",
        desc: "A smart platform that matches motorcycle buyers and sellers based on location, budget, and preferences.",
        image: "/moto.png",
    },
    {
        title: "FC Management APP",
        desc: "A modern football academy management app to track players, matches, payments, and parent communication in one place.",
        image: "/clupapp.png",
    },
];

const About = () => {
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
        <div className="w-full">
            {/* ABOUT SECTION */}
            <div className="w-full px-6 md:px-10 py-24 bg-[#0f0f0f] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            At <span className="text-white font-semibold">Graviti Software</span>, we combine design, strategy, and cutting-edge
                            technology to create digital solutions that are tailored for the unique needs of modern jewelry businesses and beyond.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Whether it's enhancing your online presence or building robust internal tools, our mission is to bring clarity,
                            efficiency, and elegance to every part of your digital journey.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4 text-sm text-gray-300">
                            <div>
                                <p className="text-2xl font-bold text-white">+15</p>
                                Years of Industry Experience
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">100%</p>
                                Client Satisfaction
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="flex justify-center">
                        <img src={teamImage} alt="Our Team" className="rounded-xl shadow-lg max-h-[400px] w-full object-cover" />
                    </div>
                </div>
            </div>

            {/* PROJECTS SLIDER */}
            <div className="w-full px-6 md:px-10 py-24 bg-[#111111] text-white">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
                    <p className="text-gray-400 mt-4">Tailored software for unique business needs</p>
                </div>

                <div ref={sliderRef} className="keen-slider">
                    {projects.map((project, idx) => (
                        <div key={idx} className="keen-slider__slide">
                            <div className="bg-[#1c1c1c] p-4 rounded-xl shadow-lg hover:scale-[1.02] transition h-full">
                                <div className="w-full h-52 flex items-center justify-center mb-4">
                                    <img src={project.image} alt={project.title} className="max-h-full max-w-full object-contain rounded-md" />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-400">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
