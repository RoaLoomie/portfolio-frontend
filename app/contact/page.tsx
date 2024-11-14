import Layout from "@/src/modules/common/layouts/layout";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

export default function ContactPage(){
    return (
        <Layout>
            <section className="mt-5 flex flex-col gap-5">
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5618472880215!2d-74.15579569999998!3d4.671919900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9cf6f72080d3%3A0xdc965fb39ae73b4!2sZona%20Franca%20Fontib%C3%B3n!5e0!3m2!1ses-419!2sco!4v1730935888259!5m2!1ses-419!2sco"
                 width="700"
                 height="400"
                 className="w-full rounded-2xl"
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"></iframe>
                <label className='text-white font-semibold text-2xl' htmlFor="name">Contact Name</label>
                </div>
                <div className="flex gap-5">
                    <input className="bg-transparent p-4 rounded-xl border border-neutral-600 placeholder:font-semibold w-full outline-none text-white font-semibold placeholder:text-neutral-600" type="text" name="name" id="" placeholder="full name"/>
                    <input className="bg-transparent p-4 rounded-xl border border-neutral-600 placeholder:font-semibold w-full outline-none text-white font-semibold placeholder:text-neutral-600" type="email" name="email" id="" placeholder="Email address"/>
                </div>
                <textarea className="bg-transparent p-4 w-full rounded-xl border border-neutral-700 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
                name="message" id="" placeholder="your message"></textarea>
                <div className="flex justify-end">
                    <button className="flex gap-3 text-xl text-yellow-200 bg-gradient-to-br from-neutral-800 to-neutral-900 py-3 px-5 rounded-xl shadow-lg">
                        <SendIcon className="-rotate-45" sx={{color: '#fef88a'}}/>
                        Send Message  
                    </button>
                </div>
            </section>
        </Layout>
    )
}