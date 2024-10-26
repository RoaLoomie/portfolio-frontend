import React from "react";
import Aside from "../components/aside.component";
interface Props {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <main className="bg-neutral-950 px-20 h-screen flex gap-5">
            <Aside />
            <section>
                {children}
            </section>
        </main>
    )
}