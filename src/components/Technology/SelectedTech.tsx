import type { Dispatch, SetStateAction } from "react"
import type { devStackType } from "../../type/type"
import { RxCross1 } from "react-icons/rx"
import { toast } from "react-toastify"

export interface SelectedTechProps {
    selectedTech: devStackType[],
    setSelectedTech: Dispatch<SetStateAction<devStackType[]>>
}

export default function SelectedTech({  selectedTech, setSelectedTech }: SelectedTechProps) {
    if (selectedTech.length === 0) {
        return (
            <>
                <section className="w-70 ">
                    <div className="rounded-xl outline-[#E2E8F0] outline-1 px-5 pt-7">


                        <h2 className="text-[18px] font-jakarta font-bold ">Your Stack</h2>
                        <p className="text-[#94A3B8] text-[12px] ">{selectedTech.length} Technology Selected</p>
                        <div className="flex text-center items-center justify-center mt-4 rounded-2xl px-5 py-6 border-[#E2E8F0] border border-dotted">
                            <h2 className="text-[#94A3B8]">Your stack is empty.</h2>

                        </div>
                        <button onClick={() => setSelectedTech([])} className="btn btn-outline  w-full my-10 border-[#ED8C85] text-[#D82C20] font-semibold ">Remove All</button>
                    </div>
                </section>
            </>
        )
    }
    else {
        return (
            <>
                <section className="md:w-70 ">
                    <div className="rounded-xl outline-[#E2E8F0] outline-1 px-5 pt-7">


                        <h2 className="text-[18px] font-jakarta font-bold ">Your Stack</h2>
                        <p className="text-[#94A3B8] text-[12px] py-1">{selectedTech.length} Technology Selected</p>
                        <div className="">

                            {selectedTech.map((tech) => (
                                <div key={tech.id} className="flex py-3 px-2  my-2 items-center justify-between rounded-lg outline-[#E2E8F0] outline-1">
                                    <div className="flex items-center gap-1">
                                        <img src={tech.icon} className="w-8 h-8" alt="" />
                                        <div className="flex flex-col ">
                                            <h2 className="text-[12px] font-bold">{tech.name}</h2>
                                            <p className="text-[10px] text-[#94A3B8]">{tech.category}</p>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                        setSelectedTech((prev) =>
                                            prev.filter((item) => item.id !== tech.id)
                                        );

                                        toast.info(`${tech.name} removed from your stack.`);
                                    }} className="cursor-pointer hover:text-red-600">
                                        <RxCross1 />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => {
                            setSelectedTech([])
                            toast.error(`Every Technology removed`)
                        }} className="btn btn-outline  w-full my-10 border-[#ED8C85] text-[#D82C20] font-semibold ">Remove All</button>
                    </div>
                </section>
            </>
        )
    }
}