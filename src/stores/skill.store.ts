import {create} from 'zustand'
import { axiosClient } from '../services/axios.service';
import { LanguageSkill } from '../types/languages-skill.interface';
import axios from 'axios';

type Store = {
    skills : LanguageSkill[];
    getSkills: () => void
}

export const useSkillStore = create<Store>()(set =>({
    skills: [],
    getSkills: async() => {
        try {
            const {data} = await axiosClient.get<LanguageSkill[]>("/skill")
            set({skills : data})
        } catch (e) {
            console.log(e)
        }
    }
        
}))