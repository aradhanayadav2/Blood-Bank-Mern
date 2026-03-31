export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo Section */}

        <div>
          <h2 className="text-2xl font-bold mb-3">🩸 BloodBank</h2>
          <p className="text-gray-200 text-sm">
            Our mission is to connect blood donors with patients in need and
            save lives through a reliable blood donation system.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-200">

            <li className="hover:text-yellow-300 cursor-pointer">
              Dashboard
            </li>

            <li className="hover:text-yellow-300 cursor-pointer">
              Donate Blood
            </li>

            <li className="hover:text-yellow-300 cursor-pointer">
              Find Hospitals
            </li>

            <li className="hover:text-yellow-300 cursor-pointer">
              Contact
            </li>

          </ul>
        </div>


        {/* Support */}

        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>

          <ul className="space-y-2 text-gray-200">

            <li className="hover:text-yellow-300 cursor-pointer">
              Help Center
            </li>

            <li className="hover:text-yellow-300 cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-yellow-300 cursor-pointer">
              Terms & Conditions
            </li>

            <li className="hover:text-yellow-300 cursor-pointer">
              FAQs
            </li>

          </ul>
        </div>


        {/* Contact */}

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>

          <p className="text-gray-200 text-sm mb-2">
            📍 Lucknow, India
          </p>

          <p className="text-gray-200 text-sm mb-2">
            📞 +91 9876543210
          </p>

          <p className="text-gray-200 text-sm">
            📧 support@bloodbank.com
          </p>
        </div>

      </div>


      {/* Bottom Bar */}

      <div className="border-t border-red-700 text-center py-4 text-gray-200 text-sm">

        © 2026 Blood Bank Management System | Designed to Save Lives 🩸

      </div>

    </footer>
  );
}