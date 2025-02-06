import { FaUsers } from "react-icons/fa";
import { BsHandThumbsUp } from "react-icons/bs";


const About = () => {
  return (
    <div className="min-h-screen px-4  lg:px-32 md:py-6 lg:py-16 flex flex-col md:flex-row items-center lg:items-start md:gap-8 lg:gap-8">
      <div className=" flex flex-1 flex-col gap-6">
        <div>
          <p className="text-teal-900 text-lg">About Us</p>
          <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold leading-tight">
            Your Trusted Partner For Dental Health
          </h2>
          <p className="text-neutral-500 text-lg font-medium mt-4">
            Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada fringilla amet elit.
          </p>
        </div>
        <div className="flex flex-1 mb-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <div className="w-24 h-24 flex justify-center items-center bg-teal-900">
              <span className="text-white text-2xl"><FaUsers color="white"/></span>
            </div>
            <h3 className="text-neutral-900 text-2xl font-semibold">Experienced Dentist</h3>
            <p className="text-neutral-500 text-lg font-medium">Purus turpis vivamus sem est blandit in at egestas.</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="w-24 h-24 flex justify-center items-center bg-teal-900">
              <span className="text-white text-2xl"><BsHandThumbsUp color="white"/></span>
            </div>
            <h3 className="text-neutral-900 text-2xl font-semibold">Affordable Pricing</h3>
            <p className="text-neutral-500 text-lg font-medium">Purus turpis vivamus sem est blandit in at egestas.</p>
          </div>
        </div>
      </div>
      <div className="relative w-full   m-5 md:mx-10 flex-1 h-auto flex justify-center items-center md:items-end bg-neutral-900">
        <div className="w-full h-[350px] md:h-screen flex flex-col items-start justify-end bg-black">
                  <div className="w-16 h-16 bg-teal-400"></div>
                  <div className="flex"><div className="w-16 h-16 bg-white"></div>
      <div className="w-16 h-16 bg-gray-800"></div></div>
      
    </div> 
      </div>
    </div>
  );
};

export default About;
