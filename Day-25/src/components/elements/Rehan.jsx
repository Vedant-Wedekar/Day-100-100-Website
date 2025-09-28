import { useState } from 'react'
import emailjs from 'emailjs-com'

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
    <div className="min-h-screen rounded-2xl flex items-center justify-center p-4 font-[font2] mt-50">
      <div className="bg-white w-full max-w-6xl p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: Heading */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Idea, <span className="text-blue-600">Our Creation!</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Share your ideas with us and we’ll bring them to life 🚀
          </p>
        </div>



{/* Right Side: Form */}
<form
  className="space-y-4 w-130 px-20 py-10 rounded-[30px] shadow-2xl bg-[#edf5fc] 
             animate-fadeInUp transition-all duration-700 ease-out"
  onSubmit={handleSubmit}
>
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
  <div className="transition-all duration-500 hover:scale-[1.01]">
    <label htmlFor="future" className="block font-semibold text-gray-700 mb-1">
      Future Plan
    </label>
    <textarea
      id="future"
      value={formData.future}
      onChange={handleChange}
     className="w-full  border-gray-300 rounded-[20px] p-3  border-0 border-b-2 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-all duration-300 ease-in-out
                 hover:shadow-md"
      placeholder="What’s your vision for the future?"
    ></textarea>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-50 ml-22 bg-blue-600 text-white font-semibold py-3 
               rounded-[20px] shadow-md 
               hover:bg-blue-700 hover:scale-105 
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
