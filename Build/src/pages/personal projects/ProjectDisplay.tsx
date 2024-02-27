function ProjectDisplay({image, heading, description}) {
  
  return (
    <>
      <div className="w-[calc(90vmin-56px)] h-[calc(90vmin-56px)] text-white justify-center p-5">
        <div className="h-full w-full flex flex-col">
          <h1 className="m-2 text-center text-xl">{heading}</h1>
          <img src={image} className="m-2"/>
          <p className="m-2">{description}</p>
        </div>
      </div>
    </>
  )
}
    
export default ProjectDisplay