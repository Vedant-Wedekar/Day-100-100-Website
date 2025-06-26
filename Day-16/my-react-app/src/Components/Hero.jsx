import React from 'react'

const Hero = () => {
        const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });
  return (
    // <div>Hero</div>

    <div class="bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)] text-sm text-gray-500">
    {/* <!-- Navbar --> */}
    <nav class="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 font-medium relative z-10 bg-white/80 backdrop-blur-md">
        {/* <!-- Logo --> */}
        <a href="#">
            <img class="h-9" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg" alt="dummyLogoColored" />
        </a>

        {/* <!-- Hamburger (Mobile) --> */}
        <button id="menu-toggle" class="md:hidden text-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        {/* <!-- Nav Links --> */}
        <ul id="nav-menu" class="hidden max-md:absolute top-full left-0 max-md:w-full md:flex md:items-center gap-8 max-md:bg-white max-md:shadow-md max-md:px-6 max-md:py-4 flex-col md:flex-row z-50">
            <li><a class="hover:text-indigo-500 md:hover:underline underline-offset-8 transition" href="#">Home</a></li>
            <li><a class="hover:text-indigo-500 md:hover:underline underline-offset-8 transition" href="#">About</a></li>
            <li><a class="hover:text-indigo-500 md:hover:underline underline-offset-8 transition" href="#">Careers</a></li>
            <li><a class="hover:text-indigo-500 md:hover:underline underline-offset-8 transition" href="#">Privacy</a></li>
            <li><a class="hover:text-indigo-500 md:hover:underline underline-offset-8 transition" href="#">Contact</a></li>

            {/* <!-- Login button for mobile --> */}
            <li class="block md:hidden mt-4">
                <button class="group flex items-center gap-2">
                    Log In
                    <svg class="group-hover:translate-x-1 transition pt-0.5" width="12" height="9" viewBox="0 0 12 9"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="#6B7280" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </li>
        </ul>

        {/* <!-- Login button for desktop --> */}
        <button class="group hidden md:flex items-center gap-2">
            Log In
            <svg class="group-hover:translate-x-1 transition pt-0.5" width="12" height="9" viewBox="0 0 12 9"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
    </nav>

    {/* <!-- Hero Section --> */}
    <div class="h-[580px] flex flex-col items-center justify-center px-4 text-center">
        <div class="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-gray-300/15 pl-4 p-1 text-sm text-gray-800 max-w-full">
            <p>Launching our new platform update.</p>
            <div class="flex items-center cursor-pointer gap-2 bg-white border border-gray-500/30 rounded-2xl px-3 py-1 whitespace-nowrap">
                <p>Explore</p>
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="#6B7280" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800">Solutions to Elevate Your
            Business Growth</h1>
        <p class="max-w-xl text-center mt-6 px-4">Unlock potential with tailored strategies designed for success.
            Simplify challenges, maximize results, and stay ahead in the competitive market.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button class="px-7 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium">Get Started Now</button>
            <button class="group px-7 py-2.5 flex items-center gap-2 font-medium">
                Learn more
                <svg class="group-hover:translate-x-1 transition pt-0.5" width="12" height="9" viewBox="0 0 12 9"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="#6B7280" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</div>


  )
}

export default Hero