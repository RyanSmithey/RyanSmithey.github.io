function ProjectDisplay({image, heading, description}: { image: string, heading:string, description: string }) {
  
  return (
    <>
      <div className="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
        <img className="rounded-t-lg object-cover h-48 w-96" src={image}/>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{heading}</h5>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
        </div>
      </div>
    </>
  )
}
    
export default ProjectDisplay