import React from "react";

const services = [
  {
    title: "Teeth Whitening",
    description:
      "Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.",
    icon: (
      <div className="w-11 h-11 relative flex-col justify-start items-start flex overflow-hidden">
        <div className="w-[37.81px] h-[30.25px] relative"></div>
      </div>
    ),
  },
  {
    title: "Teeth Checkup",
    description:
      "Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.",
    icon: (
      <div className="w-11 h-11 relative flex-col justify-start items-start flex overflow-hidden">
        <div className="w-[36.43px] h-[37.82px] relative"></div>
      </div>
    ),
  },
  {
    title: "Teeth Implants",
    description:
      "Vitae id at ac proin accumsan euismod egestas tortor fermentum. Porta odio erat diam.",
    icon: (
      <div className="w-11 h-11 relative flex-col justify-start items-start flex overflow-hidden">
        <div className="w-[32.31px] h-[41.25px] relative"></div>
      </div>
    ),
  },
];

const OurServices: React.FC = () => {
  return (
  <>
  {/* First Div */}
  <div className="w-full h-auto px-4 pt-16 lg:px-32 flex md:flex-row flex-col justify-between items-start gap-6 md:gap-20">
    {/* Left Section */}
    <div className="w-full flex flex-1 flex-col justify-start items-start gap-8">
      <div className="flex flex-col justify-start items-start gap-5">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="text-teal-900 text-lg font-medium font-['Inter'] leading-7">
            Our Service
          </div>
          <div className="w-full text-neutral-900 text-5xl font-semibold font-['Inter'] leading-[48px]">
            Dental Services for Your Smile
          </div>
        </div>
        <div className="text-neutral-500 text-lg font-medium font-['Inter'] leading-7">
          Purus turpis vivamus sem est blandit. In at egestas id sollicitudin
          mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet.
          Sed turpis tellus quisque tellus ipsum malesuada.
        </div>
      </div>
      <div className="bg-black w-full flex items-end h-[370px]">
        <div className="flex">
          <div className="w-[80px] h-[80px] block md:hidden lg:block bg-white"></div>
          <div className="w-[80px] h-[80px] bg-emerald-300"></div>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full flex flex-1 flex-col justify-start items-start gap-4 lg:gap-8">
      <div className="flex flex-col gap-4 lg:gap-8 ">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-start items-center gap-6">
              <div className="w-[100px] h-[100px] px-7 bg-teal-900 flex justify-center items-center">
                {service.icon}
              </div>
              <div className="flex flex-col justify-start items-start gap-2.5">
                <div className="text-neutral-900 text-2xl font-semibold font-['Inter'] leading-loose">
                  {service.title}
                </div>
                <div className="text-neutral-500 text-lg font-medium font-['Inter'] leading-7">
                  {service.description}
                </div>
              </div>
            </div>
            {index < services.length  && (
              <div className="w-full border border-neutral-500"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <button className="px-8 py-5 mt-20 lg:mt-12 bg-emerald-300 flex justify-center items-center gap-2.5">
        <span className="text-neutral-900 text-lg font-medium font-['Inter'] leading-7">
          All Services
        </span>
      </button>
    </div>
  </div>

  {/* Second Div */}
  <div className="flex justify-end items-end w-full h-32">
    <div className="w-[5vw] h-[8vw] md:h-24 bg-black"></div>
  </div>
</>
 
  );
};

export default OurServices;
