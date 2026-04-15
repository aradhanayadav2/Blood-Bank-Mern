function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="max-w-3xl w-full space-y-6">

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
  )
}

export default Contact