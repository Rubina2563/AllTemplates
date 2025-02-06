import HireBest from "../components/aboutUs/HireBest";
import QuesAns from "../components/home/QuesAns";
import Testimonial from "../components/home/Testimonial";


const AboutUs = () => {

  return (<>
    <div className="bg-gray-100 p-6 md:p-12 lg:p-32">
      <nav className="text-sm text-gray-500">
        Home / <span className="text-black">About Us</span>
      </nav>
      <h2 className="text-blue-600 font-semibold mt-4">About Us</h2>
      <h1 className="text-5xl font-bold mt-2">About Company Name</h1>
      <p className="text-gray-600 mt-4 text-lg">
        Looking for a reliable dentist near me in USA? Our top-rated dental
        services prioritize your convenience and accessibility. With expert care
        and state-of-the-art technology, we ensure your dental health is in
        great hands. Experience personalized treatments and a warm environment,
        all tailored to meet your unique needs. Visit us today!
      </p>
      <div className="bg-blue-600 w-full h-56 mt-6 rounded-lg"></div>
    </div>
  
    <HireBest />
    <QuesAns />
    <Testimonial/>
    
  </>
  );
};

export default AboutUs;
