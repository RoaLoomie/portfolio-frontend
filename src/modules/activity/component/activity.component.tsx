import type { Activity } from "@/src/types/activity.interface"
import { useIcons } from "../../common/hooks/useIcons"

interface Props {
    activity: Activity
}

export default function Activity({activity} : Props){
    const {icons} = useIcons()
    return (
        <div className="flex gap-2 bg-gradient-to-br from-neutral-900 to-[#1d1c1c] px-4 py-8 rounded-lg shadow-lg">
            <div className="px-2">
                {
                   icons.get(activity.icon)
                }
            </div>
                <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-white text-xl">{activity.name}</h3>
                <p className="text-neutral-300">{activity.content}</p>
                </div>
        </div>
    )
}