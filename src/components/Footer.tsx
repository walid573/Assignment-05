
import FooterLogo from "../assets/logo-text.png";


// export interface FooterProps {
//     prop: string
// }

export default function Footer() {

    return (
        <>
            <section className="container mx-auto my-20">
                <div className="grid grid-cols-5">
                    <div className="col-span-2">
                        <img src={FooterLogo} alt="" />
                        <p className="max-w-[65%] py-6 text-[#64748B] text-[14px] font-jakarta">Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <div className="flex gap-2 text-[#475569] text-[14px] font-semibold font-jakarta">
                            <a href="#" >GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-4 font-jakarta">
                        <div >
                            <h2 className="py-4 text-[#0F172A] font-bold">PRODUCT</h2>
                            <ul className="flex flex-col gap-3 text-[14px] text-[#64748B]">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Technologies</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="py-4 text-[#0F172A] font-bold">COMPANY</h2>
                            <ul className="flex flex-col gap-3 text-[14px] text-[#64748B]">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="py-4 text-[#0F172A] font-bold">LEGAL</h2>
                            <ul className="flex flex-col gap-3 text-[14px] text-[#64748B]">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="font-jakarta flex justify-between items-center -mb-12 mt-10 pt-10 border-t-2 border-[#F1F5F9]">
                    <div>
                        <p className="text-[#94A3B8] text-[13px]">© 2026 Dev Stack. All rights reserved.</p>
                    </div>
                    <div className="flex gap-4 text-[13px] text-[#94A3B8]">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </section>
        </>
    )
}