import {create} from 'zustand'
import { axiosClient } from '../services/axios.service';
import { SoftSkill } from '../types/soft-skill.interface';


type Store = {
    softskill : SoftSkill[] | null
    getSoftSkills(): void
}

export const useSoftSkillStore = create<Store>()(set => ({
    softskill: null,
    getSoftSkills: async() =>{
        try{
            const {data} = await axiosClient.get<SoftSkill[]>("/soft-skill");
            set({
                softskill:data,
            })
        }catch(e){
            console.log(e) 
        }
    }
}))