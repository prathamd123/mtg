import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
import Courses from './component/Courses'
import Blogs from './component/Blogs'
import Testimonial from './component/Testimonial'
import Scholarships from './component/Scholarships'
import Event from './component/Event'
import Footer from './component/Footer'
import About from './component/About'
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <Courses/>        
        <Scholarships/>
        <Testimonial/>
        <Event/>
        <Blogs/>
        <Footer/>

      </div>
    </>
  )
}

export default App
