import { useState } from "react"
import Navbar from "./Navbar"
import Home from "./pages/home/Home";
import PersonalProjects from "./pages/personal projects/PersonalProjects";
import Articles from "./pages/articles/Articles";
import WorkHistory from "./pages/work history/WorkHistory";
import Contact from "./pages/contact/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} options={["Home", "Personal Projects", "Articles", "Work History", "Contact"]}/>
      {currentPage !== 'Home' || <Home/>}
      {currentPage !== 'Personal Projects' || <PersonalProjects/>}
      {currentPage !== 'Articles' || <Articles/>}
      {currentPage !== 'Work History' || <WorkHistory/>}
      {currentPage !== 'Contact' || <Contact/>}
    </>
  )
}

export default App
