import {create} from 'zustand'
import { axiosClient } from '../services/axios.service';
import { Achievement } from '../types/achievement.interface';

type Store = {
    experience : Achievement[]
    getExperience: () => void
}

export const useExperienceStore = create<Store>()(set =>({
    experience: [],
    getExperience: async() => {
        try {
            const {data} = await axiosClient.get<Achievement[]>("/experience")
            set({
                experience:data
            })
        } catch (e) {
            console.log(e)
        }
    }
}))