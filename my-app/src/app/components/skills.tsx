
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font relative z-[2]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            {/* <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2> */}
            <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-blue-500 underline underline-offset-8">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* {skill HTML} */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <BsFillCheckCircleFill />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-green-500 h-2 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-1">
                    100%
                  </p>
                </div>
              </div>
            </div>
            {/* {skill CSS} */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <BsFillCheckCircleFill />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-green-500 h-2 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-1">95%</p>
                </div>
              </div>
            </div>
            {/* {skill Javascript} */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <BsFillCheckCircleFill />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Javascript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-green-500 h-2 rounded-xl w-[85%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-1">85%</p>
                </div>
              </div>
            </div>
            {/* {skill Typescript} */}
            <div className="p-4  w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <BsFillCheckCircleFill />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-green-500 h-2 rounded-xl w-[85%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-1">85%</p>
                </div>
              </div>
            </div>
            {/* {skill Node.js} */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <BsFillCheckCircleFill />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Node JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-green-500 h-2 rounded-xl w-[75%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-1">75%</p>
                </div>
              </div>
            </div>
            {/* {skill tailwindcss} */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <BsFillCheckCircleFill />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    tailwindcss
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-green-500 h-2 rounded-xl w-[70%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-1">70%</p>
                </div>
              </div>
            </div>
            {/* {skill Next.js} */}
            <div className="p-4  w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <BsFillCheckCircleFill />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-green-500 h-2 rounded-xl w-[65%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-1">65%</p>
                </div>
              </div>
            </div>
            {/* {skill React} */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <BsFillCheckCircleFill />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    React
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-green-500 h-2 rounded-xl w-[50%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right mt-1">50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
