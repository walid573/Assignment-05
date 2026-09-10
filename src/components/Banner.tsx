
import banner from "../assets/banner-stack.png"



// export interface BannerProps {
//     prop: string
// }

export default function Banner() {

    return (
        <>
            <section className="container mx-auto grid grid-cols-2 items-center justify-between gap-20">
                <div>
                    <h2 className="text-[60px] font-extrabold leading-15 py-6 font-inter">Build Your Ideal <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h2>
                    <p className="text-[#475569] text-[18px] font-jakarta max-w-[77%] leading-[29.3px] pb-10">Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className="flex gap-4 mt-5">
                        <button className="btn btn-lg rounded-lg text-white bg-linear-to-r from-[#F97316] via-[#F35E58] to-[#EC4899]">Explore Technologies</button>
                        <button className="btn btn-lg px-12 rounded-lg ">Learn More</button>
                    </div>

                </div>
                
                <div >
                    <img className="w-180 h-150  " src={banner} alt="" />
                </div>
            </section>
        </>
    )
}