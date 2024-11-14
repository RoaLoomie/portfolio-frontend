'use client'
import React from "react";
import Aside from "../components/aside.component";
import Link  from "next/link";
import {usePathname} from "next/navigation"
import { useLayout } from "../hooks/useLayout";

interface Props {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {
    const pathname= usePathname()
    const {title, routes} = useLayout(pathname)

    return (
        <main className="bg-neutral-950 px-32 h-screen flex gap-5">
            <Aside/>
            <div className="flex-1 py-14 overflow-auto scrollbar-hide">
            <section className="flex flex-col px-8 py-10 pb-12 bg-neutral-900 rounded-lg relative">
                <header className="flex justify-between">
                    <h1 className="text-white text-3xl font-bold mb-3 capitalize">{title}</h1>
                    <nav className="absolute top-0 right-0 px-10 py-4 bg-neutral-800 rounded-bl-2xl border-b border-l border-neutral-700">
                        <ul className="flex gap-10">
                            {
                                   routes.map((route) => (
                                    <Link key={route.path} className={`${pathname === route.path ? "text-yellow-200": "text-neutral-400"} font-semibold capitalize`}
                                     href={route.path}>{route.name}</Link>
                                   ))
                            }
                        </ul>
                    </nav>
                </header>
                {children}
            </section>
            </div>
        </main>
    )
}