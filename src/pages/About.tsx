import teamImage from "../../public/team.jpg";

const About = () => {
    return (
        <div className="w-full px-6 md:px-10 py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Sol: Metin */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        At <span className="text-white font-semibold">Graviti Software</span>, we combine design, strategy, and cutting-edge
                        technology to create digital solutions that are tailored for the unique needs of modern jewelry businesses and beyond.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Whether it's enhancing your online presence or building robust internal tools, our mission is to bring clarity, efficiency,
                        and elegance to every part of your digital journey.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-4 text-sm text-gray-300">
                        <div>
                            <p className="text-2xl font-bold text-white">+7</p>
                            Years of Industry Experience
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">100%</p>
                            Client Satisfaction
                        </div>
                    </div>
                </div>

                {/* Sağ: Görsel */}
                <div className="flex justify-center">
                    <img src={teamImage} alt="Our Team" className="rounded-xl shadow-lg max-h-[400px] w-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default About;
