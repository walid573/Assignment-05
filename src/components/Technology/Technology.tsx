
import { useState } from "react";
import type { devStackType } from "../../type/type"

export interface TechProps {
    tech: devStackType;
}

export default function TechnologyCard({ tech }: TechProps) {
    
    
    const [addTOStack, setAddToStack] = useState(false)
    
    const handleAddToStack = () => {
        if(!addTOStack){
            setAddToStack(false)
        }
        setAddToStack(true)
    }

    return (
        <>
            <section className=" p-10 outline-[#F1F5F9] outline-1 rounded-xl ">
                <div className="flex justify-between items-center py-2">
                    <img className="w-10 h-10"  src={tech.icon} alt="" />
                    <div className="badge badge-soft badge-success">{tech.badge}</div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#0F172A] text-[18px] font-jakarta font-bold py-2">{tech.name}</h2>
                    <p className="text-[#64748B] text-[12px]  max-h-[20%] ">{tech.description}</p>
                </div>
                <div className="flex justify-between py-4">
                    <p className="text-[#64748B]">{tech.category}</p>
                    <p className="text-[#64748B]">{tech.difficulty}</p>
                    <p className="text-[#334155]">⭐{tech.rating}</p>
                </div>
                
                    <button onClick={handleAddToStack} disabled={addTOStack} className={`btn rounded-xl  w-full  ${addTOStack ? "":"bg-black text-white"}`} >{addTOStack? "Added" : "Add to Stack"}</button>
                
            </section>
        </>
    )
}