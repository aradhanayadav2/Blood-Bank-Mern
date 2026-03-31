import { Link, NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Donate Blood <br /> Save Lives 🩸
            </h1>

            <p className="text-red-100 text-lg mb-8">
              A modern Blood Bank Management System connecting
              donors, hospitals and patients to ensure blood
              availability during emergencies.
            </p>

            <div className="flex gap-4">

              <button className="bg-white text-red-600 px-7 py-3 rounded-lg font-semibold shadow hover:shadow-xl transition">
                <Link to="/donor">Become a Donor</Link>
              </button>

              <button className="bg-red-900 px-7 py-3 rounded-lg font-semibold shadow hover:bg-red-800 transition">
               <Link to="/requests">Request Donor</Link>
              </button>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1615461066159-fea0960485d5"
              className="rounded-2xl shadow-2xl"
            />

          </div>

        </div>

      </section>



      {/* ABOUT SECTION */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
            className="rounded-xl shadow-lg"
          />

          <div>

            <h2 className="text-4xl font-bold text-red-600 mb-6">
              Why Blood Donation Matters
            </h2>

            <p className="text-gray-600 mb-6">
              Blood donation saves millions of lives every year.
              Hospitals rely on voluntary donors to maintain
              adequate blood supplies for surgeries, accidents
              and medical treatments.
            </p>

            <p className="text-gray-600">
              Our system helps hospitals manage blood inventory
              efficiently and connect with donors quickly during
              emergencies.
            </p>

          </div>

        </div>

      </section>



      {/* SERVICES */}

      <section className="bg-red-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-red-600 mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
                className="rounded-lg mb-5 h-44 w-full object-cover"
              />

              <h3 className="text-xl font-bold text-red-600 mb-3">
                Donor Registration
              </h3>

              <p className="text-gray-600">
                Easy donor registration system to help people
                volunteer for blood donation.
              </p>

            </div>



            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                className="rounded-lg mb-5 h-44 w-full object-cover"
              />

              <h3 className="text-xl font-bold text-red-600 mb-3">
                Blood Inventory
              </h3>

              <p className="text-gray-600">
                Hospitals can track blood availability,
                healthy units and expired blood easily.
              </p>

            </div>



            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">

              <img
                src="https://images.unsplash.com/photo-1603398938378-e54eab446dde"
                className="rounded-lg mb-5 h-44 w-full object-cover"
              />

              <h3 className="text-xl font-bold text-red-600 mb-3">
                Emergency Requests
              </h3>

              <p className="text-gray-600">
                Hospitals can quickly send emergency blood
                requests to available donors.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-red-600 mb-16">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            <div className="bg-white p-8 rounded-xl shadow-lg">

              <h3 className="text-4xl font-bold text-red-600">
                500+
              </h3>

              <p className="text-gray-500 mt-2">
                Donors
              </p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">

              <h3 className="text-4xl font-bold text-red-600">
                900+
              </h3>

              <p className="text-gray-500 mt-2">
                Donations
              </p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">

              <h3 className="text-4xl font-bold text-red-600">
                700+
              </h3>

              <p className="text-gray-500 mt-2">
                Lives Saved
              </p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">

              <h3 className="text-4xl font-bold text-red-600">
                30+
              </h3>

              <p className="text-gray-500 mt-2">
                Hospitals
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="bg-red-600 text-white py-24 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Become a Blood Donor Today
        </h2>

        <p className="text-red-100 mb-8">
          Your single donation can save up to three lives.
        </p>

        <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-red-100 transition">
          Register Now
        </button>

      </section>


    </div>
  );
}