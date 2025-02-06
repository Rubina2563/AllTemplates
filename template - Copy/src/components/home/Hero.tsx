import { FaArrowRight } from "react-icons/fa";
import HomePic from "../../assets/homePic.png";

const Hero = () => {
  return (<>    <div className="md:h-[660px] sm:h-[440px] lg:h-[664px] sm:pl-4 sm:py-16 md:pl-14 lg:pl-32 md:py-24 lg:py-32 bg-neutral-900 flex flex-row justify-start items-start gap-16 relative">
      <div className="flex flex-col justify-start items-start gap-14">
        <div className="flex flex-col justify-start items-start gap-3.5">
          <div className="text-white text-lg font-medium">Happy Dental</div>
          <div className="w-[580px] text-white text-5xl md:text-7xl font-semibold leading-[72px]">
            Your Smile, Our Priority.
          </div>
          <div className="w-[560px] text-[#f8fafa] text-lg font-medium">
            Mauris risus adipiscing cursus consequat. Sit duis lobortis diam non. In in suspendisse quam in vestibulum diam scelerisque vulputate id. In tellus nibh volutpat dignissim.
          </div>
        </div>
        <button className="px-8 py-5 bg-emerald-300 text-neutral-900 text-lg font-medium flex items-center gap-2.5">
          Make Appointment
          <span className="w-6 h-6"><FaArrowRight/></span>
        </button>
      </div>
   <div>
        <img src={HomePic} alt="Hero Image" className="sm:w-30 md:w-40 lg:w-[15vw] h-auto object-cover absolute sm:left-[83vw] md:left-[83vw] lg:left-[84vw] sm:top-[322px] md:top-[503px] lg:top-[468px]" />
      </div>
        {/* <div className="w-[100px] h-[100px] md:left[80vw] lg:left-[95vw] lg:top-[564px] absolute  bg-neutral-50"></div>
        <div className="w-[100px] h-[100px] md:left[80vw] lg:left-[88vw] lg:top-[564px] absolute  bg-neutral-50"></div>
        <div className="w-[100px] h-[100px] md:left[80vw] lg:left-[82vw] lg:top-[564px] absolute  bg-emerald-300"></div>
        <div className="w-[100px] h-[100px] md:left[80vw] lg:left-[89.5vw] lg:top-[465px] absolute bg-gray-400"></div>
        <div className="w-[100px] h-[100px] md:left[80vw] lg:left-[95vw] lg:top-[368px] absolute bg-gray-400"></div>
        <div className="w-[100px] h-[100px] md:left[80vw] lg:left-[95vw]  lg:top-[465px] absolute  bg-emerald-300"></div> */}
      
    </div>   </>

  );
};

export default Hero;
