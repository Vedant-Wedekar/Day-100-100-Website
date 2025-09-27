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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block font-semibold text-gray-700 mb-1">Company / Startup / Brand Name</label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your company or brand"
            />
          </div>

          <div>
            <label htmlFor="link" className="block font-semibold text-gray-700 mb-1">Website Link / References</label>
            <input
              id="link"
              type="url"
              value={formData.link}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label htmlFor="brief" className="block font-semibold text-gray-700 mb-1">Brief of Existing Website</label>
            <textarea
              id="brief"
              value={formData.brief}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your current website or idea"
            ></textarea>
          </div>

          <div>
            <label htmlFor="future" className="block font-semibold text-gray-700 mb-1">Future Plan</label>
            <textarea
              id="future"
              value={formData.future}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What’s your vision for the future?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  )
}

export default Rehan
