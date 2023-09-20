import ProjectList from "./ProjectList"

const Projects = () => {
  return (
    <section className="flex w-full flex-col justify-center items-center  " >
        <p className="text-2xl font-semibold tracking-wide pb-2 text-black">Projetos</p>
        <ProjectList/>
    </section>
  )
}

export default Projects