import Home from "./pages/home/Home";
import TitleBar from "./pages/utility/TitleBar";
import PersonalProjects from "./pages/personal projects/PersonalProjects";
import WorkHistory from "./pages/work history/WorkHistory";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <div className="px-10">
        <Home className="mt-10"/>
        <TitleBar Text="Projects" className="mt-6"/>
        <PersonalProjects className="mt-3"/>
        <TitleBar Text="Work History" className="mt-6"/>
        <WorkHistory className="mt-3"/>
        <TitleBar Text="Contact" className="mt-6"/>
        <Contact className="mt-3 mb-10"/>
      </div>
    </>
  )
}

export default App
