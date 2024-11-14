import React from 'react'

export default function ProjectLayout(){
    return(
        <nav className='flex justify-between p-3'>
            <button className="text-white p-2 font-semibold hover:text-yellow-200">All</button>
            <button className="text-white p-2 font-semibold hover:text-yellow-200">Automatizacion</button>
            <button className="text-white p-2 font-semibold hover:text-yellow-200">Web development</button>
            <button className="text-white p-2 font-semibold hover:text-yellow-200">Mobile development</button>
            <button className="text-white p-2 font-semibold hover:text-yellow-200">Web design</button>
        </nav>
    )
}