import { useState } from "react"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Your message has been sent successfully!")
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-red-600 text-white py-14 text-center px-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg">
          We are here to help and answer any questions you may have.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-600">
              📍 Address
            </h3>
            <p className="text-gray-600 mt-2">
              Blood Bank Center, Lucknow, Uttar Pradesh
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-600">
              📞 Phone
            </h3>
            <p className="text-gray-600 mt-2">
              +91 9876543210
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-600">
              📧 Email
            </h3>
            <p className="text-gray-600 mt-2">
              support@bloodbank.com
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-600">
              🚨 Emergency Helpline
            </h3>
            <p className="text-gray-600 mt-2">
              24/7 Emergency Blood Support Available
            </p>
          </div>

        </div>

      </div>

      {/* Map Section */}
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto bg-gray-300 h-64 rounded-xl flex items-center justify-center">
          <p className="text-gray-700">
            Google Map Location (Embed Here)
          </p>
        </div>
      </div>

    </div>
  )
}

export default Contact