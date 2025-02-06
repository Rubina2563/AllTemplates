import React from "react";
import QuesAns from "../components/home/QuesAns";
import Testimonial from "../components/home/Testimonial";

const services = [
  "Light Tube Service",
  "Light Tube Service",
  "Light Tube Service",
  "Light Tube Service",
  "Light Tube Service",
  "Light Tube Service",
  "Light Tube Service",
];

const Services: React.FC = () => {
  return (<>  <div >
    <div className="p-6 md:p-12 lg:p-32">
      <nav className="text-sm text-gray-500">
        Home / <span className="text-black">Sevices</span>
      </nav>
      <h2 className="text-blue-600 font-semibold mt-4">Our Services</h2>
        <h2 className="text-3xl font-bold mb-4">Explore Our Wide Range of Services</h2>
        <p className="text-gray-600 mb-8">
          We have extensive experience in electrical and power-related services.
          We handle all sectors and are prepared with a range of services.
        </p>
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
            >
              {index % 2 === 0 ? (
                <div className="w-16 h-16 bg-blue-500"></div>
              ) : null}
              <div className="flex-1 px-4">
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Many years of experience with electrical service and repairs.
                  Quick problem-solving with quality assurance.
                </p>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
                  Learn More
                </a>
              </div>
              {index % 2 !== 0 ? (
                <div className="w-16 h-16 bg-blue-500"></div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
  </div>
    <QuesAns />
  <Testimonial/></>
  
  );
};

export default Services;