function Navbar({currentPage, setCurrentPage, options}) {
  const buttons = [];
  for (const option of options) {
    buttons.push(
      <li key={option}>
        <button 
        className={`py-2 px-3 rounded md:p-0 text-white hover:text-blue-500`}
          onClick={()=>setCurrentPage(option)}
          >
            {option}
        </button>
      </li>
    )
  }
  

  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p  className="text-white">Ryan Smithey</p>
        <div className="block w-auto" id="navbar-default">
          <ul className="font-medium flex p-0 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0">
            {buttons}
          </ul>
        </div>
      </div>
    </nav>
    )
  }
  
  export default Navbar