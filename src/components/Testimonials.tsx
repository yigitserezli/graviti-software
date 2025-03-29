const testimonials = [
    {
        name: "Ahmet K.",
        role: "Owner, Kulçe Kuyumcu",
        feedback: "Graviti helped us streamline operations and reduce manual work. It's like having a digital assistant tailored to our store!",
    },
    {
        name: "Elif B.",
        role: "Operations Manager",
        feedback: "Their team understood exactly what we needed. The interface is clean, and our staff adapted instantly.",
    },
    {
        name: "Mert D.",
        role: "Gold Retailer",
        feedback: "Reliable, fast, and beautifully designed. Graviti made managing inventory and sales feel effortless.",
    },
];

const Testimonials = () => {
    return (
        <div className="w-full bg-[#1a1a1a] text-white py-24 px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="relative bg-[#252525] p-8 rounded-2xl text-left border border-white/10">
                        <div className="absolute -top-4 left-4 text-5xl text-blue-700">“</div>
                        <p className="text-gray-300 text-sm mt-6 italic"> {t.feedback}</p>

                        <div className="mt-6 border-t pt-3 border-white/10">
                            <p className="font-semibold">{t.name}</p>
                            <p className="text-xs text-gray-400">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
