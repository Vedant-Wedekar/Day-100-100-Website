import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    const handleToggle = () => {
      menu.classList.toggle('hidden');
    };

    toggleBtn.addEventListener('click', handleToggle);

    return () => {
      toggleBtn.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-6 mx-auto">
        {/* Logo */}
        <a href="#">
          <img
            className="h-9"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="Logo"
          />
        </a>

        {/* Hamburger Icon */}
        <button
          id="menu-toggle"
          className="md:hidden text-gray-600 text-2xl focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          id="menu"
          className="hidden md:flex flex-col md:flex-row md:items-center space-x-3 md:space-x-8 text-gray-600 text-base font-normal absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow md:shadow-none z-50"
        >
          <a className="hover:text-gray-900 transition" href="#">
            Pricing
          </a>
          <a className="hover:text-gray-900 transition" href="#">
            Features
          </a>
          <a className="hover:text-gray-900 transition" href="#">
            Support
          </a>
          <a className="text-blue-600 border border-blue-600 rounded-full px-5 py-2 text-sm font-normal hover:bg-blue-50 transition md:ml-4" href="#">
            Login
          </a>
        </div>
      </nav>

      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 md:mt-14 pb-10">
        <div className="max-md:mt-7">
          <h1 className="text-5xl md:text-[74px] text-blue-500 max-w-96">
            Drive sales to <span className="underline font-bold">the sky</span>
          </h1>
          <p className="mt-8 text-gray-500 text-sm sm:text-base max-w-lg">
            Unlock potential with tailored strategies designed for success.
            Simplify challenges, maximize results.
          </p>
          <div className="flex items-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-md transition">
              Stream Now
            </button>
            <button className="flex items-center gap-1.5 px-6 py-2.5 text-blue-500 underline">
              Watch how it works
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center max-md:justify-center text-gray-600 text-xs md:text-sm mt-8">
            <div className="flex flex-row text-center items-center gap-2 py-3 pr-6 border-r border-gray-300">
              {/* Icon */}
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* You can paste the Complete Access icon SVG here */}
              </svg>
              <p>Complete Access</p>
            </div>
            <div className="flex flex-row text-center items-center gap-2 py-3 px-6">
              {/* Icon */}
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* You can paste the Secure Payment icon SVG here */}
              </svg>
              <p>Secure Payment</p>
            </div>
          </div>
        </div>

        <img
          className="max-w-80 md:max-w-[465px] w-full max-md:mt-8"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/rightSideDoctorImage.png"
          alt="Doctor Image"
        />
      </main>
    </div>
  );
};

export default Main;
