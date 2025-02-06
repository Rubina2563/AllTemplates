
import Hero from '../components/home/Hero.tsx';

import OurServices from "../components/home/OurServices";
import QuesAns from "../components/home/QuesAns";
import Testimonial from "../components/home/Testimonial";
import AboutUs from '../components/home/AboutUs.tsx';
import HowItWorks from '../components/home/HowItWorks.tsx';


const Home = () => {
  return (<>   <Hero />
    
    <AboutUs />
    <HowItWorks/>
     
      <OurServices />
      <QuesAns />
      <Testimonial /></>
  
    
  )
}

export default Home