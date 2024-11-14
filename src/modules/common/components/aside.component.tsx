import React from "react";
import Info from "../../profile/component/info.component";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profileStore } from "@/src/stores/profile.store";
import { useEffect } from "react";

export default function Aside(){
    const getProfile = profileStore(state => state.getProfile)
    const profile = profileStore(state => state.profile)
      useEffect (()=>{
            getProfile()
        })
    return (
            <aside className="flex flex-col w-1/4 px-10 py-10 bg-neutral-900 rounded-2xl border border-neutral-800 justify-between my-10">
                <div className="flex flex-col gap-5 items-center">
                    <div className="bg-gradient-to-br from-neutral-800 to-[#2b2a2a] p-5 rounded-[30px]">
                         <Image src="/profile.jpg" alt="logo" width={500} height={500} className="rounded-full w-full max-h-[100px]"/> 
                    </div>
                    <h1 className="text-white font-semibold text-2xl text-center">{profile?.name || ''}</h1>
                    <span className="bg-neutral-800 px-4 py-2 rounded-lg">
                        <h2 className="text-white text-xs">{profile?.speciality || ''}</h2>
                    </span>
                </div>
                <div className="w-full border-t border-neutral-600"></div>
                <div className="flex flex-col items-center gap-5">
                    <Info type="email" content={profile?.email || ''}/>
                    <Info type="phone" content={profile?.phone || ''}/>
                    <Info type="birthday" content={profile?.birthDay || ''}/>
                    <Info type="location" content={profile?.location || ''}/>
                </div>
                <div className="flex justify-center gap-5">
                   <GitHubIcon sx={{color:'white'}}/>
                   <LinkedInIcon sx={{color:'white'}}/>
                </div>
            </aside>
    )
}