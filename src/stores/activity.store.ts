import {create} from 'zustand'
import { axiosClient } from '../services/axios.service';
import { Activity } from '../types/activity.interface';

type Store ={
    activities: null | Activity[];
    getActivities: () => void
}

export const useActivityStore= create<Store>()(
    (set) =>({
        activities: null,
        getActivities:async () => {
            try {
                const {data} = await axiosClient.get<Activity[]>("/activity")
                set({
                    activities: data
                })
            } catch (e) {
                console.log(e)
            }
        },
    }))