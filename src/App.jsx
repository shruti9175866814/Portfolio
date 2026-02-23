
import './App.css'
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Education from './Components/Education/Education';
import ProfileSkills from './Components/ProfileSkill/ProfileSkill';

function App() {
return <div className="bg-[#171d32] h-auto w-full overflow-hidden">

  <Navbar/>
  <Home/>
  <About/>
  <Education/>
  <ProfileSkills/>
  {/* <Experience/> */}
  <Projects/>
  <Footer/>
  
  
</div>;
}

export default App
