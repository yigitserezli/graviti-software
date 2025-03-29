import siliconmade from "../../public/siliconmade.png";
import skoda from "../../public/skoda.svg";
import gratis from "../../public/gratis.svg";
import izko from "../../public/izko.png";

export default function Partners() {
    return (
        <div className="w-full px-6 md:px-16 py-20 text-white text-center space-y-10">
            {/* Başlık */}
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">Trusted by Industry-Leading Organizations</h2>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
                <div className="flex items-center justify-center">
                    <img src={siliconmade} className="h-16 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={skoda} className="h-16 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={gratis} className="h-16 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-full p-2">
                    <img src={izko} className="h-14 object-contain" />
                </div>
            </div>
        </div>
    );
}
