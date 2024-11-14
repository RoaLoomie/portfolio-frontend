"use client"
import Achievement from "@/src/modules/common/components/achievement.component";
import Percentages from "@/src/modules/common/components/percentages.component";
import { useIcons } from "@/src/modules/common/hooks/useIcons";
import Layout from "@/src/modules/common/layouts/layout";
import { useEducationStore } from "@/src/stores/education.store";
import { useExperienceStore } from "@/src/stores/experience.store";
import { useLanguageStore } from "@/src/stores/languages.store";
import { useSkillStore } from "@/src/stores/skill.store";
import React, { useEffect } from "react";

export default function ResumePage() {
    const { icons } = useIcons()
    const educationList = useEducationStore(state => state.education)
    const getEducationList = useEducationStore(state => state.educationList)
    const experienceList = useExperienceStore(state => state.experience)
    const getExperienceList = useExperienceStore(state => state.getExperience)
    const getLanguages = useLanguageStore(state => state.getLanguages)
    const languages = useLanguageStore(state => state.languages)
    const skills = useSkillStore(state => state.skills)
    const getSkills = useSkillStore(state => state.getSkills)

    useEffect(() =>{
        getEducationList()
        getExperienceList()
        getLanguages()
        getSkills()
    }, [])
    return (
        <Layout>
            <section className="mt-10">
                <article className="flex items-center gap-5 mb-5">
                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-3">
                        <span className="border-r border-neutral-700 w-[1px] h-10 absolute -botton-10">
                        </span>
                        {
                            icons.get('book')
                        }
                    </div>
                    <h2 className="text-2xl text-white font-semibold">Education</h2>
                </article>
               {
                 educationList?.length === 0 ? null  : educationList?.map((education, i) =>(
                    <Achievement key={education.id} achievement = {education} isLast={educationList.length -1 === i}/>
                 ))
               }
            </section>

            <section className="mt-10">
                <article className="flex items-center gap-5">
                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-3">
                        <span className="border-r border-neutral-700 w-[1px] h-8 absolute -botton-8">
                        </span>
                        {
                            icons.get('book')
                        }
                    </div>
                    <h2 className="text-2xl text-white font-semibold">Experience</h2>
                </article>
                        {
                            experienceList.length === 0? null : experienceList.map((xp, index) =>(
                                <Achievement key={xp.id} achievement={xp} isLast={experienceList.length -1 === index}/>
                            ))
                        }
            </section>
            <section className="mt-10">
                <h2 className="text-2xl text-white font-semibold">Languages</h2>
                <article className="bg-gradient-to-br from-neutral-800 rounded-xl px-8 py-8 gap-8 flex flex-col mt-5">
                        {
                            languages.length === 0 ? null : languages.map(language => (
                                <Percentages key={language.id} property={language}/>
                            ))
                        }
                </article>
            </section>
            <section className="mt-10">
                <h2 className="text-2xl text-white font-semibold">My Skills</h2>
                <article className="bg-gradient-to-br from-neutral-800 rounded-xl px-8 py-6 gap-8 flex flex-col mt-5">
                    {
                        skills.length === 0 ? null: skills.map((skill) =>(
                            <Percentages  key={skill.id} property = {skill}/>
                        ))
                    }
                </article>
            </section>
        </Layout>
    )
}