import type { Dispatch, SetStateAction } from "react"
import type { devStackType } from "../../type/type"
import { RxCross1 } from "react-icons/rx"

export interface SelectedTechProps {
    selectedTech: devStackType[],
        setSelectedTech:Dispatch<SetStateAction<devStackType[]>>
}

export default function SelectedTech({selectedTech,setSelectedTech}: SelectedTechProps) {
    
    return (
        <>
            <section className="w-70 ">
                
                <h2 className="text-[18px] font-jakarta font-bold ">Your Stack</h2>
                <p className="text-[#94A3B8] text-[12px] ">{selectedTech.length}Technology Selected</p>
                <div className="">
                    
                    {selectedTech.map((tech) => (
                    <div key={tech.id} className="flex py-3 px-2  my-2 items-center justify-between rounded-xl outline-[#E2E8F0] outline-1">
                        <div className="flex items-center gap-1">
                            <img src={tech.icon} className="w-10 h-10" alt="" />
                            <div className="flex flex-col ">
                                <h2 className="text-[10px] font-bold">{tech.name}</h2>
                                <p className="text-[6px] text-[#94A3B8]">{tech.category}</p>
                            </div>
                        </div>
                        <div onClick={() =>
                                setSelectedTech(prev =>
                                    prev.filter(item => item.id !== tech.id)
                                )
                            } className="cursor-pointer hover:text-red-600">
                            <RxCross1 />
                        </div>
                    </div>
                ))}
                </div>
                <button onClick={() => setSelectedTech([])} className="btn btn-outline w-full my-10 ">Remove All</button>
            </section>
        </>
    )
}