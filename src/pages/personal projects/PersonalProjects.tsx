import ProjectDisplay from "./ProjectDisplay";

const projects = [
  {image: "image", heading: "heading", description: "description"},
  {image: "image", heading: "heading", description: "description"},
  {image: "image", heading: "heading", description: "description"},
  {image: "image", heading: "heading", description: "description"},
  {image: "image", heading: "heading", description: "description"}
];

function PersonalProjects() {
  const projectsHTML = [];
  for (const project of projects){
    projectsHTML.push(
      <ProjectDisplay image={project.image} heading={project.heading} description={project.description}/>
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