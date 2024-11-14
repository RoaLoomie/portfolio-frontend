import LaptopIcon from '@mui/icons-material/Laptop'; 
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import BoltIcon from '@mui/icons-material/Bolt';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
export const useIcons = () => {
    const icons = new Map([
            ['laptop', <LaptopIcon className='text-yellow-200 h-8 w-8'/>],
            ['cloud', <CodeIcon className='text-yellow-200 h-8 w-8'/> ],
            ['user', <PersonIcon className='text-yellow-200 h-8 w-8'/> ],
            ['lightning', <BoltIcon className='text-yellow-200 h-8 w-8'/> ],
            ['book', <AutoStoriesOutlinedIcon className='text-yellow-200 h-6 w-6'/> ],
    ])
    return{
        icons
    }
}