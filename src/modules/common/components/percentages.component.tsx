import { LanguageSkill } from "@/src/types/languages-skill.interface";
import React, { useRef } from "react";

interface Props{
    property : LanguageSkill
}
export default function Percentages({property}: Props){
    const barContainer = useRef<HTMLDivElement | null>(null)
    const bar = useRef<HTMLDivElement | null>(null)
    return(
        <div className="flex flex-col">
            <p className="text-white font-semibold">{property.name}<span className="ml-1 text-neutral-300 fomt-normal">{property.level}%</span></p>
            <div ref={barContainer} className="w-full rounded-full bg-neutral-600 mt-2">
                <div ref={bar} style={{width: barContainer.current ? (barContainer.current?.clientWidth * property.level) / 100: 0}} className="p-[5px] h-full bg-gradient-to-br from-yellow-200 to-amber-400 rounded-full"></div>
            </div>
        </div>
    )
}