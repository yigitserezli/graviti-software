const promises = [
    {
        title: "Performance-Driven",
        desc: "We build systems that are fast, reliable, and optimized demanded for all bussiness.",
    },
    {
        title: "User-Centric Design",
        desc: "Our interfaces are intuitive and easy to use, even for non-technical users.",
    },
    {
        title: "End-to-End Support",
        desc: "From onboarding to scaling, we're with you at every step of your digital journey.",
    },
];

const OurPromise = () => {
    return (
        <div className="w-full bg-[#0f0f0f] text-white px-6 md:px-10 py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Promise</h2>

            <div className="space-y-16 max-w-5xl mx-auto">
                {promises.map((item, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                        {/* Simge alanı */}
                        <div className="flex-shrink-0 text-6xl text-blue-600">★</div>

                        {/* Metin alanı */}
                        <div className="text-left space-y-3">
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPromise;
