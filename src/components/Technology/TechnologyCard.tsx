
import {  type Dispatch, type SetStateAction } from "react";
import type { devStackType } from "../../type/type"
import { toast } from "react-toastify";

export interface TechProps {
    tech: devStackType;
    selectedTech: devStackType[],
    setSelectedTech: Dispatch<SetStateAction<devStackType[]>>
}

export default function TechnologyCard({ tech, selectedTech, setSelectedTech }: TechProps) {


    const addTOStack = selectedTech.some(
    item => item.id === tech.id
);

    const handleAddToStack = () => {

        if (addTOStack) {
            toast.warning(`${tech.name} is already in your stack!`);
            return};

        setSelectedTech(prev => [...prev,tech]);
        toast.success(`${tech.name} added to your stack!`);
    };

    return (
        <>
            <section className=" p-10 outline-[#F1F5F9] outline-1 rounded-xl ">
                <div className="flex justify-between items-center py-2">
                    <div className="flex gap-2">
                        <img className="w-10 h-10" src={tech.icon} alt="" />
                    <h2 className="text-[#0F172A] block md:hidden text-[18px] font-jakarta font-bold py-2">{tech.name}</h2>
                    </div>
                    <div className={`badge badge-soft  ${tech.badgeColor}`}>{tech.badge}</div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#0F172A] hidden md:block text-[18px] font-jakarta font-bold py-2">{tech.name}</h2>
                    <p className="text-[#64748B] text-[12px]  max-h-[20%] ">{tech.description}</p>
                </div>
                <div className="flex justify-between py-4">
                    <p className="text-[#64748B]">{tech.category}</p>
                    <p className="text-[#64748B]">{tech.difficulty}</p>
                    <p className="text-[#334155]">⭐{tech.rating}</p>
                </div>

                <button onClick={handleAddToStack}   className={`btn rounded-xl  w-full  ${addTOStack ? "btn-success text-white opacity-70 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"}`} >{addTOStack ? "✓ Added to Stack" : "Add to Stack"}</button>

            </section>
        </>
    )
}