import { useState } from "react";

type FormDataType = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const form = e.target as HTMLFormElement; // ✅ HATA BURADA ÇÖZÜLDÜ

        try {
            const res = await fetch("https://formspree.io/f/xjkyeege", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: new FormData(form), // ✅ artık güvenli bir şekilde kullanabiliriz
            });

            const data = await res.json();
            if (data.ok) {
                setSubmitted(true);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full px-6 md:px-10 py-24 bg-[#0f0f0f] text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-400 mb-12">Have a question, proposal, or project in mind? Let’s connect and bring your ideas to life.</p>

                {submitted ? (
                    <div className="text-green-400 text-lg font-semibold">✅ Thank you! We’ll get back to you soon.</div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                        <div>
                            <label className="block mb-2 text-sm text-gray-300">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1c1c1c] text-white p-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-300">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1c1c1c] text-white p-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-300">Message</label>
                            <textarea
                                name="message"
                                rows={6}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1c1c1c] text-white p-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            ></textarea>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-[#1e3a8a] hover:bg-[#1e40af] transition px-6 py-3 rounded-md font-semibold text-white shadow-md hover:shadow-blue-700/40 duration-200 ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
