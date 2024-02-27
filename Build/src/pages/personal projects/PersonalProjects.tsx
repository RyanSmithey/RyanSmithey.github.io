import ProjectDisplay from "./ProjectDisplay";

const projects = [
  {image: "Unity/Correct Connection Info Cont.PNG", heading: "Automated Room and Path Generation", description: ""},
  {image: "Unity/Correct Connection Info Cont Cont.PNG", heading: "Room Vertex Generation", description: ""},
  {image: "Unity/Reflections2.PNG", heading: "Deterministic Ray-traced reflections", description: ""},
  {image: "Unity/Neat Look.PNG", heading: "Monte-Carlo Ray-traced visuals", description: ""},
  {image: "Unity/Custom Ray Tracing Good.PNG", heading: "Custom geometry in ray-tracer", description: ""},
  {image: "Unity/GDC Game.PNG", heading: "Multiplayer Game based on GDC talk", description: ""},
  {image: "Unity/QuadTree Example.PNG", heading: "Efficient subdivision Quad-tree", description: ""}, 
  {image: "Unity/Voxels Example.PNG", heading: "Voxel tool", description: ""},
  {image: "Unity/Procedural marching squares.PNG", heading: "Marching Cubes", description: ""},
  {image: "Unreal/Paintball Main Image.PNG", heading: "Multiplayer FPS lobby", description: ""}, 
  {image: "Unreal/Paintball Main Map.PNG", heading: "Multiplayer FPS map", description: ""}, 
  {image: "Unreal/Paintball Server Select.PNG", heading: "Multiplayer FPS Server browser", description: ""}, 
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