
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-blue-50 z-10 sticky top-0">
      <header className="text-blue-500">
        <div className=" container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={"/assests/pictures/logo.jpg"}
              width={50}
              height={100}
              alt="Logo"
              className="w-16 rounded-sm"
            />
            <span className="ml-3 text-xl font-bold">Hafiz Muhammad Adil</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              About
            </Link>
            <Link
              href={"#skills"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              Skills
            </Link>
            <Link
              href={"#project"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              Projects
            </Link>
            <Link
              href={"#Contact"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              Contact
            </Link>
          </nav>
          <Link href="/assests/cv/cv.docx" target="_blank">
            <button className="text-xl inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-white mt-4 md:mt-0 gap-5">
              Download CV
              <BsFillArrowDownCircleFill />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
