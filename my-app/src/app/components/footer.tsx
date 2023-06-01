
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 relative z-[2]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 rounded">
            <Image
              src={"/assests/pictures/logo.jpg"}
              width={200}
              height={100}
              alt="Logo"
              className="rounded-sm w-16"
            />
            <span className="ml-3 text-xl font-bold">Portfolio</span>
          </a>
          <p className="text-xl font-bold text-black sm:px-96  sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 mx-end text-end">
            © 2023 Hafiz Muhammad Adil
          </p>
          <span className="sm:mt-0 mt-4 flex justify-center text-end gap-3">
            <Link
              href={"https://www.facebook.com/profile.php?id=100009794446272"}
              target="_blank"
            >
              <BsFacebook className="text-2xl text-black hover:text-blue-700" />
            </Link>

            <Link href={"https://wa.me/message"} target="_blank">
              <BsWhatsapp className="text-2xl text-black hover:text-green-600" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/hafiz-muhammad-adil-281738277"}
              target="_blank"
            >
              <BsLinkedin className="text-2xl text-black hover:text-blue-600" />
            </Link>
            <Link href={"https://github.com/Hafiz2023"} target="_blank">
              <BsGithub className="text-2xl text-black" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
