function HistoryItem({time, heading, content}: {time: string, heading:string, content: string | JSX.Element}) {
    return (
      <>               
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500">{time}</time>
          <h3 className="text-lg font-semibold text-white">{heading}</h3>
          <p className="mb-4 text-base font-normal text-gray-400">{content}</p>
        </li>
      </>
    )
  }
  
  export default HistoryItem