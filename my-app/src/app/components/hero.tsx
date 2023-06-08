"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-cover mx-auto custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="container z-[2] md:flex md:flex-row flex flex-col-reverse justify-center mx-auto md:gap-x-4">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                I am
                <br className="hidden lg:inline-block" />
                <br />
                <div className="text-blue-500">Full Stack Developer</div>
              </div>
              <div className="w-[100px] h-[2px] bg-blue-600"></div>
              <p className="mb-5 leading-relaxed text-base font-semibold mt-6">
                I m professional and skilled to build web applications from the
                front-end to the back-end using Next.js-13, a popular
                React-based web development framework. I strongly understand web
                development technologies, including HTML, Tailwind_CSS,
                JavaScript, Typescript, React, Node.js, APIs, Postgress,
                Database related libraries and frameworks.`
              </p>
              <div className="flex justify-center">
                <Link href={"#Contact"}>
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Contact
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex mx-auto">
              <Image
                className="rounded-2xl  object-cover object-center"
                alt="hero"
                src="/assests/pictures/mypic.png"
                width={350}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
