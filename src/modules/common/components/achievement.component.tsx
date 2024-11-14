"use client";
import type{ Achievement } from "@/src/types/achievement.interface";
import React, {useEffect, useRef, useState} from "react";
interface Props {
    achievement: Achievement
    isLast?: boolean
}

export default function Achievement({isLast, achievement}: Props) {
    const achievementProperties = useRef<HTMLDivElement>(null);
    const [spanHeight, setSpanHeight] = useState(0);

    useEffect(()=>{
        if (achievementProperties.current){
            const currentHeight = achievementProperties.current.clientHeight;
            setSpanHeight(currentHeight)
        }
    }, [])
    return (
        <article className="flex gap-5 mt-5" ref={achievementProperties}>
           <div className="flex items-center justify-center h-2 w-2 bg-yellow-200 p-1 rounded-full relative ml-5">
                    <span 
                     style={{height: `${spanHeight + 10}px`, bottom: `-${spanHeight + 10}px`}}
                     className={`${isLast && 'hidden'} border-r border-neutral-700 w-[1px] absolute -botton-10`}>                        
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-white font-semibold">{achievement.name}</h2>
                    <span className="text-yellow-200">{achievement.start} - {achievement.end}</span>
                    <p className="text-white">{achievement.content}</p>
                </div>
      </article>
    )
}