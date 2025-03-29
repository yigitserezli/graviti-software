import Hero from "../components/Hero";
import OurPromise from "../components/OurPromise";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
    return (
        <div>
            <Hero />
            <WhyChooseUs />
            <OurPromise />
            <Testimonials />
            <Partners />
        </div>
    );
}
