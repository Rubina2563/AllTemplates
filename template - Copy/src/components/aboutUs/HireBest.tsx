

const HireBest = () => {
  return (
     <div className="p-6 md:p-12 lg:p-32 bg-neutral-50">
      {/* Top Section */}
      <div className="flex flex-wrap sm:flex-nowrap items-start gap-10 ">
        {/* Text Content */}
        <div className="sm:flex-2">
          <h3 className="text-blue-600
text-lg
font-semibold">Hire Best Technician</h3>
          <h1 className="text-neutral-900 text-3xl
md:text-5xl
font-semibold mt-1">
            Hire The Best Electrician Service In Town
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Turpis lacus mi arcu mauris lorem non fauci. Vel sodales facilisis
            qui quam tincidunt semper neque sit nisl.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-56 md:ml-5 sm:flex-1 bg-blue-600 rounded-lg flex items-center justify-center">
         
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {/* Feature Cards */}
        {[
          "High Professionalism and Expertise",
          "Quick and Efficient Problem Solving",
          "Innovation and Up-to-Date Technology",
        ].map((title, index) => (
          <div
            key={index}
            className="flex-1 bg-slate-100  p-2 lg:p-6  rounded-lg border border-gray-200"
          >
            <h3 className="text-neutral-900 text-xl
lg:text-2xl
font-semibold">{title}</h3>
            <p className="text-neutral-600 text-normal
lg:text-lg
font-medium mt-2">
              Pretium phasellus erat condimentum risus suspendisse nulla lorem.
              Velit id lobortis non faucibus neque.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HireBest