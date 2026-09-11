import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png"
// export interface NavProps {
//     prop: string
// }

export default function Nav() {
    
    return (
        <>
            <div className="container mx-auto flex md:grid justify-between  md:grid-cols-3 py-4 px-3 md:py-6 items-center">
                <RxHamburgerMenu className="block md:hidden text-2xl" />
                <div className="h-8  w-[136.2px]">
                    <img src={Logo}  alt="" />
                </div>
                <div className="hidden lg:block ">
                    <ul className=" text-[#475569] font-jakarta decoration-none font-semibold text-[16px] gap-7.25 flex justify-center items-center">
                        <li className="text-[#DB2777] "><a href="#" >Home</a></li>
                        <li><a href="#" className="hover:text-[#DB2777]">Technologies</a></li>
                        <li><a href="#" className="hover:text-[#DB2777]">Projects</a></li>
                        <li><a href="#" className="hover:text-[#DB2777]">About</a></li>
                        <li><a href="#" className="hover:text-[#DB2777]">Contact</a></li>
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-4 ">
                    <a href="#" className="decoration-none font-jakarta hover:text-[#D91B7E]" >Sign In</a>
                    <button className="btn outline-none font-jakarta border-none btn-md rounded-3xl bg-[#D91B7E] text-white">Sign Up</button>
                </div>
            </div>

        </>
    )
}