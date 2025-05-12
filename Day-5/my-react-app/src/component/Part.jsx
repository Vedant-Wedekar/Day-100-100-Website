import React from 'react';
import G from '../assets/gh.png'; // Make sure this path is correct

const Part = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="w-1/2 bg-[#F0EBE1] flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <div className="text-[18px] mb-8 font-semibold" style={{ fontFamily: "Georgia, serif" }}>
            •VED
          </div>
          <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>
            Welcome back!
          </h1>
          <p className="text-sm mb-10" style={{ fontFamily: "Georgia, serif" }}>
            Where the blossoms greet your return.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6" method="POST" noValidate>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm" style={{ fontFamily: "Georgia, serif" }}>
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-xs">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M16 12H8m0 0l4-4m-4 4l4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 bg-transparent pl-9 pr-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  style={{ fontFamily: "Georgia, serif" }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm" style={{ fontFamily: "Georgia, serif" }}>
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-xs">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 11c1.104 0 2 .896 2 2v2H10v-2c0-1.104.896-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="•••••"
                  required
                  className="w-full border border-gray-300 bg-transparent pl-9 pr-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  style={{ fontFamily: "Georgia, serif" }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-700" style={{ fontFamily: "Georgia, serif" }}>
              <label className="flex items-center space-x-1">
                <input type="checkbox" className="w-3 h-3 border border-gray-400 rounded-sm" />
                <span>Remember me</span>
              </label>
              <a className="underline" href="#">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white text-sm py-2 mt-6 mb-6 tracking-wide"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Log in
            </button>
          </form>
          <hr className="border-t border-gray-300 mb-4" />
          <p className="text-xs text-gray-700" style={{ fontFamily: "Georgia, serif" }}>
            Don’t have an account? <strong>Sign up</strong>
          </p>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div
        className="w-1/2 h-full"
        style={{
          backgroundImage: `url(${G})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
     <footer className="bg-[#FAF6E9] text-[#333] border-t border-[#DDEB9D] text-center py-10 px-6 font-serif">
  <div className="text-xl font-bold mb-3 text-[#A0C878]">
    ⚙️ 100 Days of Code — <span className="text-[#333]">Day 5</span>
  </div>

  <p className="text-base max-w-2xl mx-auto mb-6 leading-relaxed text-[#555]">
    Today marks the fifth step in my <strong>100 Days of Code</strong> initiative — a focused journey of deliberate
    practice and daily project deployment. Each site, including this one, reflects a commitment to lifelong learning,
    design maturity, and clean engineering.
    <br />
    You can explore my progress and source code on
    <a
      href="https://github.com/Vedant-Wedekar"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#A0C878] ml-1 no-underline hover:underline"
    >
      GitHub
    </a>.
  </p>

  <div className="text-sm text-[#777] mt-4">
    🌱 Built with purpose — driven by curiosity, refined through iteration. <br />
    💬 "Create with intent. Improve with insight."
  </div>
</footer>

    </div>
  );
};

export default Part;
