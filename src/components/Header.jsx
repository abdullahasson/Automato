import { logos } from "../assets"

const Header = () => {
    return (
        <header id="header" className="bg-n-1 relative px-0 py-[2.2rem]">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <a className="flex items-center text-[white]" href="#">
                        <img className="w-[2.6rem] mr-[0.8rem]" src={logos.logoM} alt />
                        Automato
                    </a>
                </div>
                <div className="navbar">
                    <div id="main-icon" className="text-[white] text-[2.8rem] hidden">
                        <i className="bx bx-menu text-[3.5rem]" />
                    </div>
                    <ul className="flex justify-between items-center transition-[0.3s]">
                        <li><a className="text-[white] text-[2rem] ml-10" href="#">من نحن</a></li>
                        <li><a className="text-[white] text-[2rem] ml-10" href="#">الرئيسية</a></li>
                        <li><a className="text-[white] text-[2rem] ml-10" href="#">التواصل معنا</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header