import React from "react";
import Image from "next/image";
import Info from "../../profile/component/info.component";

export default function Aside(){
    return (
            <aside className="flex flex-col w-1/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg">
                <div className="flex flex-col gap-5 items-center h-1/2">
                    <div className="bg-neutral-700 p-3 rounded-md">
                        <Image src="" alt="logo" />
                    </div>
                    <h1 className="text-white font-bold text-2xl">Laura Salome Roa Tejada</h1>
                    <span className="bg-neutral-700 p-2 rounded-lg">
                        <h2 className="text-white text-sm">Full-Stack Web Development</h2>
                    </span>
                </div>
                <div className="flex flex-col items-center gap-5 h-1/2">
                    <Info />
                </div>
            </aside>
    )
}