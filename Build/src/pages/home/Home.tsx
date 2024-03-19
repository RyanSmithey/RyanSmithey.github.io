import Icons from "./SkillIcons"

function Home({className}: { className: string }) {
  let AllIcons = [];

  for (let i = 0; i < Icons.length; i++){
    AllIcons.push(
      <img key={i} src={Icons[i]} className="h-[35px] w-[35px] m-0.5"/>
    )
  }


  return (
    <>
      <section className={className}>
        <div className="px-4 mx-auto max-w-screen-xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Ryan Smithey</h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-400">Experienced Programmer, Co-Creator of LogYard: an open source tool for distributed computing</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            {AllIcons}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home