import { use, type Dispatch, type SetStateAction } from "react"
import type { devStackType } from "../../type/type"

import TechnologyCard from "./TechnologyCard";
import SelectedTech from "./SelectedTech";

export interface TechnologyProps {
    promiseData: Promise<devStackType[]>,
    selectedTech: devStackType[],
    setSelectedTech:Dispatch<SetStateAction<devStackType[]>>
}

export default function Technologies({ promiseData,selectedTech,setSelectedTech }: TechnologyProps) {
    const technology = use(promiseData)
    console.log(technology.length);


    return (
        <>
            <section className="container mx-auto pb-20 ">
                <h2 className="text-center md:text-start text-[24px] md:text-[36px] font-extrabold font-inter">Explore the <span className="bg-linear-to-r from-[#EC4899] via-[#BC52C7] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-center md:text-start text-[#64748B] text-[12px] md:text-[16px]  pb-8 font-jakarta">Pick one technology per category to build your ideal stack.</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-1">
                    {/* Div of 75% */}
                    <div className="grid md:grid-cols-3 md:col-span-3 gap-4 mx-4">
                        {technology.map((tech) => (
                            <TechnologyCard key={tech.id} tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></TechnologyCard>
                        ))}
                    </div>

                    {/* Div of 25% */}
                    <div className="flex justify-center md:justify-center  items-center md:items-start ">
                        <div className="flex text-center justify-center md:col-span-1 ">
                        <SelectedTech  selectedTech={selectedTech} setSelectedTech={setSelectedTech}></SelectedTech>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}