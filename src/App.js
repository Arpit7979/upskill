
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Refund from './components/Refund';
import Testimonials from './components/Testimonials';
import Coursecerriculum from './components/Course_cerriculum';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' />
      </Routes>
     </BrowserRouter>

     <div className="header">
     <a href="/">Overview</a>
     <a href="/">Curriculum</a>
     <a href="/">Refund</a>
     <a href="/">Testimonials</a>
     </div>

    <Hero/>
    <Features/>
    <Courses/>
    <Refund/>
    <Testimonials/>
    <Coursecerriculum/>
    <Card/>
    <Card background = "linear-gradient(180deg, #B73BBE 0%, #992E9D 93.51%)" boxshadow= "0px 20px 250px -20px #9747FF26"/>
    </div>
  );
}

export default App;
