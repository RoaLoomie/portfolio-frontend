'use client'
import Activity from "@/src/modules/activity/component/activity.component";
import Layout from "@/src/modules/common/layouts/layout";
import SoftSkill from "@/src/modules/soft-skill/component/soft-skill.component";
import { useActivityStore } from "@/src/stores/activity.store";
import { useResumeStore } from "@/src/stores/resume.store";
import { useSoftSkillStore } from "@/src/stores/soft-skill.store";
import { useEffect } from "react";

export default function Home() {
  const getResume = useResumeStore(state => state.getResume)
  const resume = useResumeStore(state => state.resume)
  const getActivities = useActivityStore(state => state.getActivities)
  const activities = useActivityStore(state => state.activities)
  const getSoftSkills = useSoftSkillStore(state => state.getSoftSkills)
  const softskills = useSoftSkillStore(state => state.softskill)
  useEffect(() =>{
    getResume()
    getActivities()
    getSoftSkills()
  }, [])
  return (
    <Layout>
      <section>
        <p className="text-white">{resume?.content}</p>
      </section>
      <section className="mt-5">
        <h2 className="text-white text-3xl font-semibold">What I'm a doing</h2>
        {

        }
        <div className="grid grid-cols-2 gap-3 mt-5">
          {
            activities?.length === 0 ? null : activities?.map (activity =>(
              <Activity key={activity.id} activity={activity}/>
            ))
          }
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-white font-semibold text-2xl">Soft Skills</h2>
        <div className="grid grid-cols-2 gap-3 mt-10">
          {
           softskills?.length === 0 ? null : softskills?.map (softSkill =>(
            <SoftSkill key={softSkill.id} skill={softSkill}/>
           ))
          }
        </div>
      </section>
    </Layout>
  )
}