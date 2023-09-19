import { projectsList } from '@/global/mockProject'
import React from 'react'
import ProjectDetails from './ProjectDetails'

const Projects = () => {
  return (
    <section className="flex w-full flex-col justify-center items-center  " >
        <p className="text-2xl font-semibold tracking-wide pb-2 text-black">Projetos</p>
        <ProjectDetails project={projectsList[0]}/>
    </section>
  )
}

export default Projects