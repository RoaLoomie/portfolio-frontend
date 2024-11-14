import React from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface Props {
    type: string;
    content: string;
}
export default function Info({type, content}: Props) {
    const icon=() =>{
        switch (type){
            case 'email': return <EmailOutlinedIcon sx={{color: '#fef88a'}}/>
            case 'phone': return <PhoneAndroidOutlinedIcon sx={{color: '#fef88a'}}/>
            case 'birthday': return <CalendarMonthOutlinedIcon sx={{color: '#fef88a'}}/>
            case 'location': return <LocationOnOutlinedIcon sx={{color: '#fef88a'}}/>
            default:
                break
        }
    }
    return (
        <div className="flex gap-2 w-full">
            <div className="bg-gradient-to-br from-neutral-800 to-[#191919] rounded-lg p-3">
                {icon()}
            </div>
            <div>
                <h1 className="text-neutral-400 text-sm uppercase">{type}</h1>
                <p className="text-white text-sm">{content}</p>
            </div>
        </div>
    )
}