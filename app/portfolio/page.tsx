"use client"
import Layout from "@/src/modules/common/layouts/layout";
import Project from "@/src/modules/project/component/project.component";
import ProjectLayout from "@/src/modules/project/layout/project-layout.component";
import { useProjectStore } from "@/src/stores/project.store";
import React, { useEffect } from "react";

export default function PortfolioPage(){
    const projects = useProjectStore(state => state.projects)
    const getProjects = useProjectStore(state => state.getProjects)

    useEffect(()=>{
        getProjects()

    }, [])
    return (
        <Layout>
            <ProjectLayout />
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-">
              {
                projects.length === 0 ? null : projects.map(project =>(
                    <Project key={project.id} project = {project}/>
                ))
              }
            </section>
        </Layout>
    )
}