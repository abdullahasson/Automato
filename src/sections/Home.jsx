import Button from "../components/Button"
// import HomePhoto from "../assets/index"
import Leaft from "../assets/leaf.svg"
import Robot from "../assets/robot.svg"

const Home = () => {
    return (
        <section id="Landing" className="h-[calc(100vh_-_82px)] flex justify-center items-center relative">
            <div className="text-center text-[white] h-full w-[590px] z-[100] max-[500px]:flex flex-col justify-center items-center">
                <h1 className="text-[4.7rem] leading-[1.6] max-[500px]:text-7xl max-[500px]:leading-[1.4] font-bold">
                    منوفر وقتك الضائع على الأشياء الغير مهمة
                </h1>
                <p className="text-[2rem] leading-[1.6] mt-[1.1rem] mb-[1.3rem] max-[500px]:text-[18px] max-[500px]:my-[20px] max-[482px]:px-[28px]">
                    حقق أفضل استثمار لوقت الموارد البشرية بشركتك عن طريق أتمتة المهمات الروتينية المملة من قبل مجموعة متخصصين في أتمتة<br /> العمليات السوفتوير
                </p>
                <Button href="#Contact" >التواصل معنا</Button>
                <div className="photo">
                    <img className="w-full h-[260px]" src={Robot} alt />
                </div>
            </div>
            <div className="max-[767px]:hidden">
                <img data-aos="fade-right" className="inline absolute rotate-90 translate-x-5 left-0 -bottom-[18px]" src={Leaft} alt />
            </div>
            <div className="right">
                <img data-aos="zoom-in-left" className="inline absolute right-0 bottom-0 max-[767px]:w-[215px] max-[767px]:top-[-9px] max-[767px]:-rotate-90 max-[767px]:right-4 max-[767px]:bottom-auto max-[482px]:-top-[67px] max-[482px]:z-[-1]" src={Leaft} alt />
            </div>
        </section>
    )
}

export default Home