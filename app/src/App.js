import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Certifications from './pages/Certifications';
import Footer from './pages/footer';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutMe />
      <Certifications />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
