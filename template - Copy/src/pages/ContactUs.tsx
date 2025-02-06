
const ContactUs = () => {
  return (
   <div className="container bg-gray-100 mx-auto p-6 lg:px-16 lg:py-16">
    <div className="flex flex-wrap md:flex-nowrap flex-row gap-8">
        {/* Left Section - Contact Form */}
        <div className='lg:col-span-2 flex flex-col gap-3'>
          <p className="text-neutral-900
text-lg
font-normal">Home / Contact Us</p>
          <h2 className='text-neutral-900
text-5xl
font-semibold'>
            Get Connected with us
          </h2>
          <p className='text-neutral-600
text-lg
font-medium'>
            Elevate your garment line with our bespoke accessories. Discover
            custom designed embellishments crafted to enhance the unique appeal
            of your products. Elevate your brand with our tailored solutions.
            Elevate your garment line with our bespoke accessories. Discover
            custom designed embellishments crafted to enhance the unique appeal
            of your products. Elevate your brand with our tailored solutions.
          </p>

          <form className='mt-6 space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='First Name'
                className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
              <input
                type='text'
                placeholder='Last Name'
                className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='Phone Number'
                className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
              <input
                type='email'
                placeholder='Email'
                className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <textarea
              placeholder='Message'
              className='border border-gray-300 rounded-lg px-4 py-2 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <button
              type='submit'
              className='bg-lime-400 text-neutral-900
text-lg
font-medium  px-6 py-3 rounded-3xl hover:bg-lime-500 transition duration-200'>
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Contact Information */}
        <div className='bg-gray-300 p-6 w-full h-80 rounded-lg flex flex-col items-center justify-center text-center '>
          <h3 className='text-lg font-semibold text-neutral-900'>
            Contact Information
          </h3>
          <p className='text-neutral-700 mt-2'>(+1) 123 456 789</p>
          <p className='text-neutral-700 mt-1'>serviceselectrician@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
