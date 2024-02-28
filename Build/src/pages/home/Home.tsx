function Home() {
  return (
    <>
      <div className="grow flex flex-row">
        <div className="flex w-1/2 text-white justify-center items-center flex flex-col">
          <h1>Ryan Smithey</h1>
          <img src="Personal/IMG_3867 (2).JPG" className="w-1/2"/>
        </div>
        <div className="flex flex-col w-1/2 text-white justify-center items-center">
          Experienced Programmer
          <br className="m-2"></br>
          Co-Creator of LogYard: an open source tool for distributed computing
          <br className="m-2"></br>
          Skills:
          <br className="m-2"></br>
          Python, JavaScript, TypeScript, React, C#, CSS, HTML, HLSL, SQL, Visual Studio, Postman, MongoDB, Docker
          <br className="m-2"></br>
          Open To: Software Engineering roles
        </div>
      </div>
    </>
  )
}

export default Home