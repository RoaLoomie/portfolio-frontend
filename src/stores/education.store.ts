import {create} from 'zustand'
import { axiosClient } from '../services/axios.service';
import { Achievement } from '../types/achievement.interface';


type Store = {
    education : Achievement[]
    educationList:()=> void,
}

export const useEducationStore = create<Store>()(set => ({
    education: [],
    educationList: async() =>{
        try{
            const {data} = await axiosClient.get<Achievement[]>("/education");
            set({
                education:data,
            })
        }catch(e){
            console.log(e) 
        }
    }
}))