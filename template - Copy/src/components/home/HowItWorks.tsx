import { FaArrowRight } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div> <div className="w-full  h-auto p-6 lg:p-32 bg-white flex flex-col justify-start items-start gap-10">
      {/* Heading Section */}
      <div className="self-stretch  flex flex-col justify-start items-start gap-5">
        <div className="text-teal-900 text-lg font-medium leading-7">How It Works</div>
        <div className="self-stretch text-neutral-900 text-5xl font-semibold leading-[48px]">
          Your Journey to a Healthy Smile Starts Here
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-between flex-col  gap-3 sm:flex-row items-start">
        {/* Card 1 */}
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="w-[100px] h-[100px] p-7 bg-teal-900 border-1 border-white flex justify-center items-center">
            
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="w-full text-neutral-900 text-2xl font-semibold ">
              Make Appointment
            </div>
            <div className="w-full text-neutral-500 text-lg font-medium leading-7">
              Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="w-[100px] h-[100px] p-7 bg-teal-900 flex justify-center items-center">
           
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="w-full text-neutral-900 text-2xl font-semibold ">
              Expert Dental Care
            </div>
            <div className="w-full text-neutral-500 text-lg font-medium leading-7">
              Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-start items-start gap-5">
          <div className="w-[100px] h-[100px] p-7 bg-teal-900 flex justify-center items-center">
         
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="w-full text-neutral-900 text-2xl font-semibold ">
              Radiate Confidence
            </div>
            <div className="w-full text-neutral-500 text-lg font-medium leading-7">
              Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="px-8 py-5 bg-emerald-300 flex justify-center items-center gap-2.5 cursor-pointer">
        <div className="text-neutral-900 text-lg font-medium leading-7">Make Appointment</div>
       <FaArrowRight/>
      </div>

    </div>
      
      {/* Decorative Shapes */}
      <div className="w-full flex justify-end h-[70px] ">
        <div className="w-[70px] h-[70px]  bg-emerald-300"></div>
        <div className="w-[70px] h-[70px]  bg-black"></div>
        
      </div>
 </div>)
   
};
 ;
export default HowItWorks;
