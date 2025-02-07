import React from "react";

const UpsideDownCurvedTriangle: React.FC = () => {
  return (
    <div
      className="flex flex-col items-end  justify-end w-[613px] h-[722.67px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGL_GOIbP1kb23HWkFyC5wjcaGbedc4Ww7ow&s')", // Direct image URL
      }}
    >
      {/* Upside-Down Triangle */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: "rotate(270deg)",
        }}
      >
        <path d="M0,300 L300,300 Q70,300 0,0 Z" fill="white" />
      </svg>

      {/* Inner Content */}
      <div className="flex justify-center items-end  bg-transparent">
        <svg
          width="10"
          height="10"
          viewBox="0 0 300 300"
          
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "rotate(270deg)",
          }}
        >
          <path d="M0,300 L300,300 Q70,300 0,0 Z" fill="white" />
        </svg>
        <div className="w-[230px] h-[100px]  bg-white border-none rounded-tl-xl"></div>
      </div>
    </div>
  );
};

export default UpsideDownCurvedTriangle;
