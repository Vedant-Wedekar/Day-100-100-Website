import { useState } from 'react'
import emailjs from 'emailjs-com'
import ShinyText from './ShinyText'
import A from '../../assets/AA.png'
function Rehan() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    link: "",
    brief: "",
    future: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      "service_af7of3v",
      "template_07c4ntq",
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        link: formData.link,
        brief: formData.brief,
        future: formData.future,
      },
      "JPXzOR9PM7kYIzJwZ"
    )
    .then(() => {
      alert("Your idea has been submitted successfully! 🚀")
      setFormData({
        name: "",
        email: "",
        company: "",
        link: "",
        brief: "",
        future: "",
      })
    }, () => {
      alert("Something went wrong, please try again.")
    })
  }

  return (
    <div className="min-h-screen rounded-2xl flex items-center   justify-center p-4 font-[font2] mt-50">
      <div className="bg-[#FFF5F2] w-full  max-w-6xl p-8 rounded-[80px] shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
         <div
        className="gradient-blob w-[300px] h-[700px] -left-40 mt-520 -top-32"
        style={{
          background: "radial-gradient(circle, #d5b1f4, transparent 70%)",
        }}
        aria-hidden="true"
      ></div>

       <div
        className="gradient-blob w-[300px] h-[600px] mt-410 right-[-10rem] top-80"
        style={{
          background: "radial-gradient(circle,#efccfc , transparent 70%)",
        }}
        aria-hidden="true"
      ></div>
<div className="">


<div className="">

  <img className='ml-90' src={A}></img>
  <div className="ml-110 text-2xl play">Hover Here!!!</div>
</div>

        {/* Left Side: Heading */}
        <div className="flex flex-col justify-center items-start">
          {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <div className="">
              <h1>    Your Idea,</h1>
              <h1>Our Creation!</h1>
            </div>
        
          </h1>
          <p className="text-gray-500 text-lg">
            Share your ideas with us and we’ll bring them to life 🚀
          </p> */}
<div className="group bg-[#896C6C] w-[400px] rounded-4xl flex flex-col justify-center items-center font-[font2] text-[30px] gap-4 p-6 transition-all duration-500 ease-in-out">
  <div className="grid text-center">
    <ShinyText
      text="Your Idea,"
      disabled={false}
      speed={5}
      className="custom-class flex justify-center items-center"
    />
    <ShinyText
      text="ARE SUPPORT !"
      disabled={false}
      speed={5}
      className="custom-class flex justify-center items-center"
    />

    {/* Paragraph that appears on hover */}
    {/* <p className="text-[16px] text-gray-300 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100 mt-3">
Got a big idea but not sure how to bring it to life? At Studio Nexa, we don’t just build websites — we empower ideas. Share your details and your website concept with us. If your idea shows real potential, our team will step in to support you with guidance, resources, and even help connect you with funding opportunities. Whether you’re a first-time founder, a student innovator, or a brand owner aiming to grow, this space is your launchpad to turn vision into reality
    </p> */}

<div class="group p-6  text-white ">

  <ul class="list-disc list-inside  text-gray-300 text-[15px] max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[240px] group-hover:opacity-100 mt-3">
    <li>💡 Share your startup or website idea with us</li>
    <li>🌐 Access ready-to-use website templates and digital tools</li>
    <li>🤝 Get expert guidance and personalized feedback</li>
    <li>📈 Potential support for growth and visibility</li>
    <li>💸 If your idea has strong potential, we’ll help connect you to funding opportunities</li>
  </ul>
</div>


  </div>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 62 62"
    className="w-12 h-12 spin-slow mt-3"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="home-animate-anything-flower-mobile-a"
        x1="50.449"
        x2=".172"
        y1="74.75"
        y2="20.03"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".144" stopColor="#FFE9FE" />
        <stop offset="1" stopColor="#FF96F9" />
      </linearGradient>
    </defs>
    <path
      fill="url(#home-animate-anything-flower-mobile-a)"
      fillRule="evenodd"
      d="M18.256 30.33c-1.001.211-2.038.322-3.1.322C6.786 30.651 0 23.79 0 15.325S6.785 0 15.155 0s15.156 6.862 15.156 15.326c0 .709-.048 1.406-.14 2.09h1.657c-.092-.684-.14-1.381-.14-2.09C31.689 6.862 38.475 0 46.845 0 55.214 0 62 6.862 62 15.326S55.214 30.65 46.844 30.65c-.94 0-1.862-.086-2.755-.252V31.6a15.083 15.083 0 0 1 2.755-.252C55.214 31.349 62 38.21 62 46.674 62 55.138 55.214 62 46.844 62c-8.37 0-15.155-6.862-15.155-15.326 0-1.074.11-2.123.317-3.135h-1.945c.164.904.25 1.835.25 2.787 0 8.464-6.785 15.326-15.155 15.326S0 54.79 0 46.326 6.785 31 15.155 31c1.063 0 2.1.11 3.1.321v-.99Z"
      clipRule="evenodd"
    />
  </svg>
</div>
</div>

</div>

{/* Right Side: Form */}
<form
  className="space-y-4 w-130 px-20 py-5 rounded-[30px] shadow-2xl bg-[] 
             animate-fadeInUp transition-all duration-700 ease-out"
  onSubmit={handleSubmit}
>
{/* bg-[#edf5fc] */}
<div className="text-[20px] font-[font2]">TELL US YOUR IDEA</div>

  {/* Name */}
  <div className="transition-all duration-500 hover:scale-[1.01] ">
    <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">
      Your Name
    </label>
    <input
      id="name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full border-0 border-b-2 border-gray-300 rounded-[10px] p-3  
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-all duration-300 ease-in-out
                 hover:shadow-md "
      placeholder="Your full name"
    />
  </div>

  {/* Email */}
  <div className="transition-all duration-500 hover:scale-[1.01]">
    <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
      Email
    </label>
    <input
      id="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full  border-gray-300 rounded-[20px] p-3  border-0 border-b-2 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-all duration-300 ease-in-out
                 hover:shadow-md"
      placeholder="you@example.com"
    />
  </div>

  {/* Company */}
  <div className="transition-all duration-500 hover:scale-[1.01]">
    <label htmlFor="company" className="block font-semibold text-gray-700 mb-1">
      Company / Startup / Brand Name
    </label>
    <input
      id="company"
      type="text"
      value={formData.company}
      onChange={handleChange}
      required
     className="w-full  border-gray-300 rounded-[20px] p-3  border-0 border-b-2 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-all duration-300 ease-in-out
                 hover:shadow-md"
      placeholder="Your company or brand"
    />
  </div>

  {/* Website Link */}
  <div className="transition-all duration-500 hover:scale-[1.01]">
    <label htmlFor="link" className="block font-semibold text-gray-700 mb-1">
      Website Link / References
    </label>
    <input
      id="link"
      type="url"
      value={formData.link}
      onChange={handleChange}
     className="w-full  border-gray-300 rounded-[20px] p-3  border-0 border-b-2 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-all duration-300 ease-in-out
                 hover:shadow-md"
      placeholder="https://example.com"
    />
  </div>

  {/* Brief */}
  <div className="transition-all duration-500 hover:scale-[1.01]">
    <label htmlFor="brief" className="block font-semibold text-gray-700 mb-1">
      Brief of Existing Website
    </label>
    <textarea
      id="brief"
      value={formData.brief}
      onChange={handleChange}
      className="w-full  border-gray-300 rounded-[20px] p-3  border-0 border-b-2 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-all duration-300 ease-in-out
                 hover:shadow-md"
      placeholder="Describe your current website or idea"
    ></textarea>
  </div>

  {/* Future Plan */}


  {/* Button */}
  <button
    type="submit"
    className="w-45 ml-22 bg-[#D9C4B0] text-white font-semibold py-3 
               rounded-[20px] shadow-md 
               hover:bg-[#F5BABB] hover:scale-105 
               active:scale-95 
               transition-all duration-300 ease-in-out"
  >
    Submit Idea
  </button>
</form>

      </div>
    </div>
  )
}

export default Rehan
