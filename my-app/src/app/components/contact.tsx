import React from "react";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative z-[2]">
        <div className="container py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.558016133708!2d74.3068618!3d31.433985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919012e2488f7fb%3A0x67e6caf9c4e2b5e7!2sGreen%20Town%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1686027262224!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.7)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded">
              <div className="lg:w-1/2 px-6">
                <div className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </div>
                <p className="mt-1">Azmat Chowk Green Town, Lahore, Punjab</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <div className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </div>
                <a className="text-blue-500 leading-relaxed">
                  hafizadil909@gmail.com
                </a>
                <div className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </div>
                <p className="leading-relaxed">+92-320-4338215</p>
              </div>
            </div>
          </div>
          <div className="px-4 rounded-xl lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-blue-500 underline underline-offset-8">
              Contact Information
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              feel free to contact
            </p>
            <form action="https://formspree.io/f/mlekygzp" method="POST">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="subject"
                  className="leading-7 text-sm text-gray-600"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                  required
                />
              </div>
              <div className="flex justify-center">
              <button className="text-white bg-blue-500 border-0 py-2 px-4  focus:outline-none hover:bg-blue-600 rounded text-lg">
                Send Message
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
