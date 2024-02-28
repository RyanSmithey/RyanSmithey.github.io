import ProjectDisplay from "./ProjectDisplay";

const projects = [
  {image: "Unity/Custom Ray Tracing Good.PNG", heading: "Custom geometry in ray-tracer", description: "A monte-carlo ray-tracing renderer. Supporting arbetrary shapes through triangle support. Supports emmissive, roughness, and albedo. Texture mapping would be the next step for improvement"},
  {image: "Unity/Neat Look.PNG", heading: "Monte-Carlo Ray-traced visuals", description: "A monte-carlo ray-tracing renderer. It entirely uses primitive shapes. It is a physically based renderer with support for emmissive, roughness, and albedo."},
  {image: "Unity/Reflections2.PNG", heading: "Deterministic Ray-traced reflections", description: "A ray-tracing renderer. It is constructed around primitive shapes. While not physically based it is a strong starting point for a physically based renderer."},
  {image: "Unity/Procedural marching squares.PNG", heading: "Marching Cubes", description: "An implementation of the marching cubes algorithm. It is built using the SDF of spheres and cubes with several 3D operations applied. It also includes tri-planer texture mapping for continous visuals. Noise was also applied to give a more natural look."},
  {image: "Unity/Voxels Example.PNG", heading: "Voxel tool", description: "An implementation of a voxel renderer and collision. It uses greedy meshing and greedy collison boundaries."},
  {image: "Unity/Correct Connection Info Cont Cont.PNG", heading: "Room Vertex Generation", description: "A unique room layout and mesh generator."},
  {image: "Unity/Correct Connection Info Cont.PNG", heading: "Automated Room and Path Generation", description: "The layout generator for rooms. Uses a modified version of prims algorithm to find a greedy path within rooms. Each room has information about connected rooms and door locations."},
  {image: "Unreal/Paintball Main Image.PNG", heading: "Multiplayer FPS lobby", description: "The lobby of a multiplayer Unreal Engine game I created. The lobby had ready up, team, and steam join mechanics."}, 
  {image: "Unreal/Paintball Main Map.PNG", heading: "Multiplayer FPS map", description: "The map of the multiplayer Unreal Engine game I created. It relied on assets available through Epic. "}, 
  {image: "Unreal/Paintball Server Select.PNG", heading: "Multiplayer FPS Server browser", description: "A server browser based on the steam lobby system. Gathered and parsed data from steam services. Included information about the lobby within the steam lobby system."}, 
  {image: "Unity/GDC Game.PNG", heading: "Multiplayer Game based on GDC talk", description: "A multiplayer game within Unity. Learned the fundamentals of networking."},
  {image: "Unity/QuadTree Example.PNG", heading: "Efficient subdivision Quad-tree", description: "An experiment about optimization using recursive data structures."}, 
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