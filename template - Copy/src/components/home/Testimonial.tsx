

const Testimonial = () => {
  return (
    <div className="w-full md:w-full h-[808px] md:px-14 md:py-24 sm:px-4 sm:py-16 lg:p-32 flex md:flex-row flex-col justify-between items-start gap-[20px]">
      {/* Left Content */}
      <div className="w-full md:w-[560px] flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-teal-900 text-lg font-medium">Testimonials</p>
          <h2 className="text-neutral-900 text-5xl font-semibold leading-[48px]">
            What Our Patients Say About Us
          </h2>
        </div>
        <p className="text-neutral-400 text-lg font-medium">
          Purus turpis vivamus sem est blandit. In at egestas id sollicitudin
          mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet.
          Sed turpis tellus quisque tellus ipsum malesuada.
        </p>
        <div>
          <h3 className="text-neutral-900 text-2xl font-semibold">Jose Turner</h3>
          <p className="text-neutral-400 text-lg font-medium">Customer</p>
        </div>
      </div>

      {/* Right Image Placeholder */}
      <div className="relative w-full lg:w-[456px] flex  h-[552px] bg-black overflow-hidden">
    <div className="flex-1 flex items-end">   <div className="bg-emerald-300 md:w-20 md:h-20 w-10 h-10"></div></div> 
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-start flex-col items-end"><div className="bg-emerald-300 md:w-20 md:h-20 w-10 h-10"></div>
       <div className="bg-white md:w-20 md:h-20 w-10 h-10"></div></div>
       
      </div>
    </div>
  );
};

export default Testimonial;
