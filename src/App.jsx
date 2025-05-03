import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects_comp from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <Navbar/>
      

      {/* Hero Section */}
      <Hero/>
     

      {/* About Section */}
      <About/>

      {/* Skills Section */}
      <Skills/>

      {/* Projects Section */}
      <Projects_comp/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
};

export default App;