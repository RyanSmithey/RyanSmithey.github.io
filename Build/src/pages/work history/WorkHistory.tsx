const historyItems = [
  {
    time: " 2023-Present",
    heading: "OPEN SOURCE LABS LOGYARD- SOFTWARE ENGINEER",
    content: <>
    ● Created software that collects, parses, stores, and analyzes log data from various sources, such as servers,
    applications, and cloud environments.<br className="m-1"/>
    ● Remoteproject, focused on fast iteration through strong collaboration.<br className="m-1"/>
    ● Tools used: Typescript, JavaScript,React, Redux, Node, Express, NoSQL(MongoDB, Mongoose), SQL
    (PostgreSQL), C3, Vite, Webpack, HTML5, CSS, Tailwind, Jest, Supertest, Vitest, Docker, Trello, Cypress, ESLint,
    Prettier, NPM.
    </>
  },
  {
    time: "2022- 2023",
    heading: "AGRI SUPPLY- SCANNING COORDINATOR",
    content: 
    <>
      ● Customer support, Inventory management, Sales, Register, Closing, and other required positions.
    </>
  },
  {
    time: "2021- 2022",
    heading: "SBL PROPERTIES- CONTRACTOR",
    content: ` ● Evaluated properties for potential remodeling and sale.
    ● Performed electrical, flooring, HVAC installation, tracked cost and budget.`
  },
  {
    time: " 2018- 2019",
    heading: " GEHEALTHCARE- PROCESS ENGINEER",
    content: 
    <>
      ● Created software that collects, parses, stores, and analyzes log data from various sources, such as servers, applications, and cloud environments.<br className="m-1"/>
      ● Remoteproject, focused on fast iteration through strong collaboration.<br className="m-1"/>
      ● Tools used: Typescript, JavaScript,React, Redux, Node, Express, NoSQL(MongoDB, Mongoose), SQL
      (PostgreSQL), C3, Vite, Webpack, HTML5, CSS, Tailwind, Jest, Supertest, Vitest, Docker, Trello, Cypress, ESLint,
      Prettier, NPM.
    </>
  },
  {
    time: "2017-2021",
    heading: "FMU Bachelor of Engineering, Major in Industrial Engineering",
    content: `● Computational physics, data statistics, resource optimization, CAD, Calculus, supply chain design`
  },
]

function WorkHistory() {
  const history = [];
  for (const historyItem of historyItems){
    history.push(
      <li key={historyItem.heading} className="mb-10 ms-4">
        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-500">{historyItem.time}</time>
        <h3 className="text-lg font-semibold text-white">{historyItem.heading}</h3>
        <p className="mb-4 text-base font-normal text-gray-400">{historyItem.content}</p>
      </li>
    )
  }

  return (
    <>
      <ol className="relative border-s border-gray-700 m-10">               
        {history}
      </ol>
    </>
    )
  }
  
  export default WorkHistory