import { useState } from "react"
import { logos } from "../assets"

const Header = () => {

    const [openNav, setopenNav] = useState(false)
    const [nativeLink, setnativeLink] = useState(window.location.hash || "#Home")

    return (
        <header id="header" className="relative px-0 py-[2.2rem] max-[727px]:px-0 max-[727px]:py-4">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <a className="flex items-center text-[white]" onClick={() => { setnativeLink("#Home") }} href="#Home">
                        <img data-aos="zoom-in-right" data-aos-delay="400" className="w-[2.6rem] mr-[0.8rem]" src={logos.logoM} alt />
                    </a>
                </div>
                <div className="navbar">
                    <div id="main-icon" className="text-[white] text-[2.8rem] cursor-pointer hidden max-[727px]:flex" onClick={() => setopenNav(!openNav)}>
                        <i className="bx bx-menu text-[3.5rem]" />
                    </div>
                    <ul className={`flex justify-between items-center transition-[0.3s] max-[727px]:flex-col max-[727px]:absolute max-[727px]:z-[999] max-[767px]:backdrop-blur-[14px] max-[727px]:w-full max-[727px]:bg-[#c25555a8] ${openNav ? "max-[727px]:opacity-1" : "max-[727px]:opacity-0"}  max-[727px]:right-0 max-[727px]:top-full max-[767px]:overflow-hidden`}>
                        <li data-aos="fade-left" data-aos-delay="100" className="max-[767px]:py-2 text-center max-[767px]:w-full" ><a onClick={() => { setnativeLink("#Home") }} className={`text-[white] text-[2rem] ml-10 ${nativeLink == "#Home" && "activeLink"}`} href="#Home">الرئيسية</a></li>
                        <li data-aos="fade-left" data-aos-delay="200" className="max-[767px]:py-2 text-center max-[767px]:w-full" ><a onClick={() => { setnativeLink("#About") }} className={`text-[white] text-[2rem] ml-10 ${nativeLink == "#About" && "activeLink"}`} href="#About">من نحن</a></li>
                        <li data-aos="fade-left" data-aos-delay="300" className="max-[767px]:py-2 text-center max-[767px]:w-full" ><a onClick={() => { setnativeLink("#Contact") }} className={`text-[white] text-[2rem] ml-10 ${nativeLink == "#Contact" && "activeLink"}`} href="#Contact">التواصل معنا</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header