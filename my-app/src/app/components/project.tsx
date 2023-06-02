import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font relative z-[2]">
        <div className="container py-24 mx-auto">
          <div className="flex flex-col text-center mb-10">
            <h1 className="sm:text-3xl text-2xl title-font mb-4 text-blue-500 font-extrabold underline underline-offset-8">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              Front-End & Back-End Development
            </p>
          </div>
          <div className="flex flex-wrap">
            {/* {Projects online_store_shopping } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/assests/pictures/onlineStore.PNG"}
                  width={700}
                  height={700}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Online Store
                  </h2>
                  <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shoping Hub
                  </h3>
                  <p className="leading-relaxed line-clamp-2">
                    In this project I have created a website through which
                    people can do online shopping. And it is currently being
                    worked on.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://online-market-eta.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* {Projects facebook_landing_page } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-cente"
                  src={"/assests/pictures/facebookLandingPage.png"}
                  width={700}
                  height={700}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h4 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Facebook Web Application
                  </h4>
                  <h5 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Main landing page
                  </h5>
                  <p className="leading-relaxed line-clamp-2">
                    In this project I have created a Facebook landing page and
                    in which use Tailwind_CSS, React and HTML
                  </p>
                  <Link
                    target="_blank"
                    href={"https://facebook-landing-page-lyart.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* {Projects personal_website_CV } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-cente"
                  src={"/assests/pictures/website.png"}
                  width={700}
                  height={700}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h6 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Personal Website
                  </h6>
                  <div className="title-font text-lg font-medium text-gray-900 mb-3">
                    Curriculum vitae
                  </div>
                  <p className="leading-relaxed line-clamp-2">
                    In this project I have created a personal website of
                    Curriculum vitae and in which use Tailwind_CSS, React and
                    HTML
                  </p>
                  <Link
                    target="_blank"
                    href={"https://resume-app-teal.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* {Projects personal_website_CV } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-cente"
                  src={"/assests/pictures/guessGame.png"}
                  width={700}
                  height={700}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <div className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    CLI Project
                  </div>
                  <div className="title-font text-lg font-medium text-gray-900 mb-3">
                    Number Guess Game
                  </div>
                  <p className="leading-relaxed line-clamp-2">
                    In this project I have created a number guess game on
                    back-end terminal in which use node.js, typescript, figlet
                    and inquirer.
                  </p>
                  <Link target="_blank" href={"https://github.com/Hafiz2023"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project Code...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* {Projects personal_website_CV } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-cente"
                  src={"/assests/pictures/calculator.png"}
                  width={700}
                  height={700}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <div className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    CLI Project
                  </div>
                  <div className="title-font text-lg font-medium text-gray-900 mb-3">
                    CLI Calculator
                  </div>
                  <p className="leading-relaxed line-clamp-2">
                    In this project I have created a Calculator on back-end
                    terminal in which use node.js, typescript, figlet and
                    inquirer.
                  </p>
                  <Link target="_blank" href={"https://github.com/Hafiz2023"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project Code...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
