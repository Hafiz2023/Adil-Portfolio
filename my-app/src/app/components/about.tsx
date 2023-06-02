import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font z-[2] relative ">
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center content-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="rounded-2xl mx-auto object-cover object-center"
              alt="hero"
              src="/assests/pictures/mypic.png"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-blue-500 underline underline-offset-8">
              About Me
            </div>
            <p className="mb-5 leading-relaxed">
              Bachelor of Commerce in Marketing & Finance, University of the
              Punjab.

               <br />
              Electrical sub Engineering (DAE) Govt collage, Lahore.
              <br />
            </p>
            <p className="mb-5 leading-relaxed">
              I did my degree in Electrical and then my passion shifted to
              technology. I decided to broaden my skill set and gain a deeper
              understanding of the digital world. I am excited to continue
              growing my skills and knowledge in the field of computer science
              and apply my unique perspective to solve real-world problems. As a
              team player with strong communication and problem-solving skills,
              I am confident in my ability to make valuable contributions to any
              organization.
            </p>
            <div className="flex justify-center">
              <Link target="_blank" href={"/assests/cv/cv.docx"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
