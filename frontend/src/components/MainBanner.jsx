import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

export const MainBanner = () => {
  return (
    <div className="relative">
        <div>
            <img src={assets.main_banner_bg} alt="Banner" className="w-full hidden md:block" />
            <img src={assets.main_banner_bg_sm} alt="Banner" className="w-full md:hidden" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center px-4 pb-24 md:pb-0 md:pl-18 lg:pl-24">
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-start leading-tight lg:leading-15 max-w-72 md:max-w-80 lg:max-w-105">Freshness You Can Trust, Saving You Will Love!</h1>
            </div>
            <div className="flex items-center mt-6 font-medium">
                <Link to="/products" className="group flex items-center gap-2 px-7 md:px-9 py-3 rounded bg-primary hover:bg-primary-dulll text-white cursor-pointer transition">
                    Shop Now
                    <img src={assets.white_arrow_icon} alt="White Arrow" className="md:hidden transition group-focus:translate-x-1" />
                </Link>
                <Link to="/products" className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer transition">
                    Explore deals
                    <img src={assets.black_arrow_icon} alt="Black Arrow" className="transition group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    </div>
  )
}
