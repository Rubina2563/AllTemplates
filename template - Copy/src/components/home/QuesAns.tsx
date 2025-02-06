import { useState } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What types of electrical services does Electema provide for homes?",
    answer: "Tincidunt viverra dui faucibus leo adipiscing id luctus facilisis. Urna turpis felis aliquet feugiat nunc. Sagittis diam morbi aenean.",
  },
  {
    id: 2,
    question: "How quickly can Electema respond to emergency electrical issues at my home?",
    answer: "Tincidunt viverra dui faucibus leo adipiscing id luctus facilisis. Urna turpis felis aliquet feugiat nunc. Sagittis diam morbi aenean.",
  },
  {
    id: 3,
    question: "Are the electricians at Electema licensed and insured?",
    answer: "Tincidunt viverra dui faucibus leo adipiscing id luctus facilisis. Urna turpis felis aliquet feugiat nunc. Sagittis diam morbi aenean.",
  },
  {
    id: 4,
    question: "Can Electema assist with energy-efficient upgrades for my home?",
    answer: "Tincidunt viverra dui faucibus leo adipiscing id luctus facilisis. Urna turpis felis aliquet feugiat nunc. Sagittis diam morbi aenean.",
  },
];

const QuesAns = () => {
    const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleAnswer = (id: number) => {
    setOpenIds((prevOpenIds) =>
      prevOpenIds.includes(id)
        ? prevOpenIds.filter((openId) => openId !== id) // Remove ID if it's already open
        : [...prevOpenIds, id] // Add ID if it's closed
    );
  };

  return (
    <div className="w-full   bg-teal-900 flex flex-col ">
 <div className="flex justify-end px-[5%] md:px-[5%] lg:px-[5%]"> <div className="bg-emerald-300 lg:w-25 md:w-18 md:h-18 w-15 h-15 lg:h-25"></div></div>
      {/* center Section */}
     <div className="flex justify-between "><div className="flex "> <div className=" sm:w-[50%] lg:w-[60%] m-3 sm:m-10 lg:px-5 flex flex-col gap-5 ">
        <div>
          <p className="text-neutral-200 text-lg font-medium">Questions & Answers</p>
          <h2 className="text-neutral-50 text-3xl sm:text-5xl  font-semibold leading-[48px]">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-neutral-300 text-lg font-medium">
          Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor.
          Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum.
        </p>
        <div className="h-[340px] relative  overflow-hidden">
          <div className="w-full md:w-[600px] sm:h-[340px] h-[443px] lg:h-[443px] left-[-20px] top-[-51px] absolute bg-neutral-900"></div>
          <div className="w-full md:w-[200px] h-[100px] absolute bottom-0 left-0 flex">
            <div className=" md:hidden  lg:w-[100px] lg:h-[100px] lg:block  bg-emerald-300"></div>
            <div className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] bg-teal-900"></div>
          </div>
        </div>
          {/* Right Section */}<div className="sm:hidden flex " >
      <div className=" flex w-full lg:w-[510px]  flex-col lg:m-10 gap-8">
         {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            className="self-stretch p-4 border-t border-neutral-300 flex flex-col gap-4 transition-all"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(id)}
            >
              <p className="text-neutral-50 text-lg font-medium">{question}</p>
              <div className="w-6 h-6 flex justify-center items-center bg-gray-700 rounded-full text-white">
                {openIds.includes(id) ? "−" : "+"}
              </div>
            </div>
            {openIds.includes(id) && (
              <p className="text-neutral-400 text-lg font-medium">{answer}</p>
            )}
          </div>
        ))}
       </div>
        
        </div>
      </div>
        <div className="hidden sm:flex w-2/3  flex-col md:m-10 gap-8">
         {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            className="self-stretch p-4 border-t border-neutral-300 flex flex-col gap-4 transition-all"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(id)}
            >
              <p className="text-neutral-50 text-lg font-medium">{question}</p>
              <div className="w-6 h-6 flex justify-center items-center bg-gray-700 rounded-full text-white">
                {openIds.includes(id) ? "−" : "+"}
              </div>
            </div>
            {openIds.includes(id) && (
              <p className="text-neutral-400 text-lg font-medium">{answer}</p>
            )}
          </div>
        ))}
        </div>
        <div className="bg-emerald-300 lg:w-25 w-15 h-15 lg:h-25"></div>
      </div>
   
       
</div>

       <div className=" items-end  flex"><div className="bg-emerald-300 lg:w-25 w-15 h-15 lg:h-25"></div></div> 
    </div>
  );
};

export default QuesAns;
