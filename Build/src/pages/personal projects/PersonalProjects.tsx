import ProjectDisplay from "./ProjectDisplay";
import projects from "./ProjectsData";

function PersonalProjects({className}: { className: string }) {
  const projectsHTML: JSX.Element[] = [];
  for (const project of projects){
    projectsHTML.push(
      <ProjectDisplay key={project.heading} image={project.image} heading={project.heading} description={project.description}/>
    );
  }

  return (
    <>
      <div className={`grow flex flex-wrap justify-center gap-3 ${className}`}>
        { projectsHTML }
      </div>
    </>
  )
  }
  
  export default PersonalProjects