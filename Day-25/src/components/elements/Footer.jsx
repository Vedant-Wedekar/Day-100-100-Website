import React from "react";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const input = e.target.elements.email;
    if (input.value.trim() !== "") {
      alert(`Subscribed with: ${input.value}`);
      input.value = ""; // reset
    }
  };

  return (
    <footer className="flex flex-col md:flex-row justify-between p-8 md:p-16 mt-[100px] bg-gradient-to-b from-[#fdfaff] via-[#faeefd] to-[#fdfaff] text-gray-800 rounded-t-3xl shadow-xl">
      
      {/* Left Section */}
      <div className="flex-1">
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-light mb-6">
            Subscribe to our newsletter to stay in touch with the latest.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
            <input
              aria-label="E-mail address"
              name="email"
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent w-full text-gray-700 px-4 py-2 focus:outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 font-medium transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-6">
          <a className="text-gray-600 hover:text-gray-900 transition-all duration-300" href="https://x.com/vedantwedekar">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a className="text-gray-600 hover:text-gray-900 transition-all duration-300" href="https://www.linkedin.com/in/vedant-wedekar-8483a1322/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a className="text-gray-600 hover:text-gray-900 transition-all duration-300" href="https://www.instagram.com/pvt__.ved/?next=%2F">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a className="text-gray-600 hover:text-gray-900 transition-all duration-300" href="https://open.spotify.com/playlist/48gpZrlCKwfV2jXB2u1Lo2">
            <i className="fab fa-spotify fa-2x"></i>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-16">
        <div className="flex justify-between">
          
          {/* Menu */}
          <div>
            <h2 className="font-bold mb-4 text-gray-900">Menu</h2>
            <ul>
              <li className="mb-2">
                <a className="hover:text-gray-600 transition" href="dd4e36.html#iot">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a className="hover:text-gray-600 transition" href="#">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-bold mb-4 text-gray-900">Support</h2>
            <ul>
              <li className="mb-2">
                <a className="hover:text-gray-600 transition" href="1APT.HTML">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a className="hover:text-gray-600 transition" href="NCON.HTML">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
