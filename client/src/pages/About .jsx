function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Blood Bank Management System
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          A digital platform designed to streamline blood donation,
          inventory tracking, and emergency blood requests.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to modernize blood bank operations through
            digital transformation. We aim to ensure that the right blood
            reaches the right patient at the right time by minimizing
            delays, reducing wastage, and improving emergency response.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a healthcare ecosystem where blood donation and
            distribution are fully automated, transparent, and efficient.
            Our system connects donors, hospitals, and administrators
            on a centralized platform to save lives.
          </p>
        </div>

      </div>

      {/* Key Features */}
      <div className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
          Key Features
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="shadow-lg p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Real-Time Inventory
            </h3>
            <p className="mt-3 text-gray-600">
              Tracks blood availability and expiry dates to reduce
              medical wastage.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Intelligent Matching
            </h3>
            <p className="mt-3 text-gray-600">
              Matches donors and recipients based on compatibility
              and urgency level.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Secure Management
            </h3>
            <p className="mt-3 text-gray-600">
              Maintains secure records of donors, hospitals,
              and blood units.
            </p>
          </div>

        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
          Our Team
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="font-semibold text-lg">
              Armaan Hasan Khan
            </h3>
            <p className="text-gray-600 text-sm">
              Database & Security Architect
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="font-semibold text-lg">
              Alisha Rehman
            </h3>
            <p className="text-gray-600 text-sm">
              System Analyst & QA
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="font-semibold text-lg">
              Aradhana Yadav
            </h3>
            <p className="text-gray-600 text-sm">
              UI/UX & Frontend Developer
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="font-semibold text-lg">
              Anvesha Sahu
            </h3>
            <p className="text-gray-600 text-sm">
              Backend & Logic Developer
            </p>
          </div>

        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-red-600 text-white py-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Join Us in Saving Lives
        </h2>
        <p className="mt-3">
          Your contribution can make a difference. Donate blood today.
        </p>
      </div>

    </div>
  )
}

export default About