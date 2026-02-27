import { assets, features } from "../assets/assets"

export const BottomBanner = () => {
  return (
    <div className="relative mt-24">
        <div>
            <img src={assets.bottom_banner_image} alt="Banner" className="w-full hidden md:block" />
            <img src={assets.bottom_banner_image_sm} alt="Banner" className="w-full md:hidden" />
        </div>

        <div className="absolute inset-0 flex justify-center md:justify-end md:items-center pt-16 md:pt-0 md:pr-10 lg:pr-24">
            <div>
                <h1 className="text-2xl lg:text-3xl text-primary font-semibold mb-6">Why We Are the Best?</h1>
                <div className="flex flex-col gap-4 md:gap-2 lg:gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <img src={feature.icon} alt="Feature Icon" className="w-9 lg:w-11" />
                            <div>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p className="text-xs lg:text-sm text-gray-500/70">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
