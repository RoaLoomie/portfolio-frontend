import React from "react";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import type { Project } from "@/src/types/project.interface";
import Link from "next/link";


interface Props{
    project: Project
}
export default function Project({project}: Props){
    return(
        <article className="rounder-xl flex flex-col gap-3 group max-h-96">
            <div className="relative overflow-hidden rounded-xl">
                <Image
                 width={500}
                 height={500}
                 src={project.image}
                 alt="project-image"
                 className="w-full object-cover h-48 rounded-xl group-hover:scale-115 duration-300"
                 loading="lazy"
                 />  
                <div className="w-full h-full opacity-0 group-hover:opacity-60 bg-neutral-900 absolute top-0 left-0 flex justify-center items-center transition-all">
                    <Link href={project.link} className="rounded-lg p-4 bg-neutral-700 opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100 duration-300">
                        <RemoveRedEyeOutlinedIcon sx={{color: '#fef88a'}} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-white font-semibold">{project.name}</h2>
                <p className="text-neutral-400 capitalize">{project.category}</p>
          </div>
        </article>
    )
}