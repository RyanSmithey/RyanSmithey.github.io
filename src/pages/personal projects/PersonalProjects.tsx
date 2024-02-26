import ProjectDisplay from "./ProjectDisplay";

const projects = [
  {image: "image", heading: "heading 0", description: "description"},
  {image: "image", heading: "heading 1", description: "description"},
  {image: "image", heading: "heading 2", description: "description"},
  {image: "image", heading: "heading 3", description: "description"},
  {image: "image", heading: "heading 4", description: "description"}
];

function PersonalProjects() {
  const projectsHTML = [];
  for (const project of projects){
    projectsHTML.push(
      <ProjectDisplay key={project.heading} image={project.image} heading={project.heading} description={project.description}/>
    );
  }

  
  return (
    <>
      <div className="grow overflow-scroll flex flex-wrap justify-center">
        { projectsHTML }
      </div>
    </>
  )
  }
  
  export default PersonalProjects