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
            <section className="container mx-auto">
                <h2>Explore the <span>Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>
                <div className="grid grid-cols-4 ">
                    {/* Div of 75% */}
                    <div className="grid grid-cols-3 col-span-3 gap-4">
                        {technology.map((tech) => (
                            <TechnologyCard key={tech.id} tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></TechnologyCard>
                        ))}
                    </div>

                    {/* Div of 25% */}
                    <div className="flex  justify-center ">
                        <SelectedTech selectedTech={selectedTech} setSelectedTech={setSelectedTech}></SelectedTech>
                    </div>
                </div>
            </section>

        </>
    )
}