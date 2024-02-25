function Navbar({currentPage, setCurrentPage, options}) {
  const buttons = [];
  for (const option of options) {
    buttons.push(
      <li>
        <button 
        className={`py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
          onClick={()=>setCurrentPage(option)}
          >
            {option}
        </button>
      </li>
    )
  }
  

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p  className="text-white">Ryan Smithey</p>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {buttons}
          </ul>
        </div>
      </div>
    </nav>
    )
  }
  
  export default Navbar