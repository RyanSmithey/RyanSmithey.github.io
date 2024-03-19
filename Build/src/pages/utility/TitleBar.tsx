function TitleBar({Text, className}: {Text:string, className:string}) {

  return (
    <>
      <div className={`px-10 w-full ${className}`}>
        <h2 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-white">{Text}</h2>
        <hr className="bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[1px] border-0"/>
      </div>
    </>
  )
}

export default TitleBar
