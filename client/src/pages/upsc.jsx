import React from "react";
import Navbar from "../components/Navbar";

function UPSCPage() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <Navbar />
        <header className="relative bg-cover bg-center h-[700px] flex flex-col justify-center bg-[url('./images/upsc.jpg')]">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-extrabold drop-shadow-lg">
              UPSC Recruitment Services
            </h1>
            <p className="mt-4 text-2xl font-medium drop-shadow-md">
              Explore Your Journey Towards India's Most Prestigious Careers
            </p>
            <button className="mt-8 px-8 py-4 bg-yellow-400 text-black text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white transition-all">
             <a href="#explore"> Discover Opportunities</a>
            </button>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Build Your Future with UPSC
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The Union Public Service Commission (UPSC) offers pathways to the
            most prestigious and respected careers in India. Join us to embark
            on a journey of leadership and nation-building.
          </p>
        </section>

        {/* Services Section */}
        <section className="mt-12 bg-gray-100 py-12">
          <div  id='explore' className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center">
              Explore Our Services
            </h2>
            <div className="grid gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Civil Services Examination",
                  description:
                    "Join the prestigious IAS, IPS, and IFS cadres. This exam shapes India's administrators.",
                  color: "text-indigo-600",
                  eligibility: [
                    "Bachelor's degree in any discipline.",
                    "Age: 21–32 years (varies by category).",
                  ],
                  process: [
                    "Preliminary Examination.",
                    "Main Examination.",
                    "Interview/Personality Test.",
                  ],
                },
                {
                  title: "Engineering Services Examination (ESE)",
                  description:
                    "Recruitment for engineering roles in government sectors like Railways and CPWD.",
                  color: "text-blue-600",
                  eligibility: [
                    "Engineering degree (Civil, Mechanical, Electrical, etc.).",
                    "Age: 21–30 years.",
                  ],
                  process: [
                    "Preliminary Examination.",
                    "Main Examination.",
                    "Interview/Personality Test.",
                  ],
                },
                {
                  title: "Combined Medical Services (CMS)",
                  description:
                    "Serve in key healthcare roles like Medical Officer and Assistant Divisional Medical Officer.",
                  color: "text-green-600",
                  eligibility: [
                    "MBBS degree or equivalent.",
                    "Age: Maximum 32 years.",
                  ],
                  process: [
                    "Computer-Based Test.",
                    "Personality Test/Interview.",
                  ],
                },
                {
                  title: "Combined Defence Services (CDS)",
                  description:
                    "Pave the way for a career in the Indian Army, Navy, or Air Force.",
                  color: "text-yellow-600",
                  eligibility: [
                    "Graduation in any stream (specific degrees for Navy/Air Force).",
                    "Age: 19–25 years.",
                  ],
                  process: [
                    "Written Examination.",
                    "SSB Interview.",
                    "Medical Examination.",
                  ],
                },
                {
                  title: "National Defence Academy (NDA)",
                  description:
                    "A golden opportunity for 12th pass students to join the Armed Forces.",
                  color: "text-red-600",
                  eligibility: [
                    "10+2 with Physics and Mathematics for Air Force/Navy.",
                    "Age: 16.5–19.5 years.",
                  ],
                  process: [
                    "Written Examination.",
                    "SSB Interview.",
                    "Medical Examination.",
                  ],
                },
                {
                  title: "Indian Economic Service (IES)/Indian Statistical Service (ISS)",
                  description:
                    "Specialized roles for economists and statisticians in government bodies.",
                  color: "text-purple-600",
                  eligibility: [
                    "Postgraduate degree in Economics/Statistics.",
                    "Age: 21–30 years.",
                  ],
                  process: [
                    "Written Examination.",
                    "Viva Voce/Interview.",
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className={`text-2xl font-bold ${service.color} mb-4`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Eligibility
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {service.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                    Selection Process
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {service.process.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose UPSC */}
        <section className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-500 py-12 text-white">
          <h2 className="text-center text-4xl font-extrabold">
            Why Choose UPSC?
          </h2>
          <p className="mt-4 text-center text-lg max-w-4xl mx-auto">
            UPSC offers the finest opportunities to contribute to nation-building, enjoy stability, and thrive in a highly respected environment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              "Prestigious Careers",
              "Nation-Building Opportunities",
              "Leadership Roles",
              "Attractive Perks & Benefits",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 w-60 text-center hover:shadow-xl transition-shadow duration-300 text-gray-700"
              >
                <p className="text-lg font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center bg-gray-800 text-white">
          <h2 className="text-4xl font-extrabold">Start Your UPSC Journey</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Don't wait any longer. Explore the various examinations and start
            preparing for a bright future in India's government services.
          </p>
          <button className="mt-8 px-10 py-4 bg-yellow-500 text-gray-900 text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white transition duration-300">
           <a href="https://upsc.gov.in/"> Apply Now</a>
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-center">
          <p>© 2024 UPSC Recruitment Services. All Rights Reserved.</p>
          <p>
            Contact us:{" "}
            <a
              href="mailto:info@upsc.com"
              className="text-yellow-400 underline"
            >
              info@upsc.com
            </a>{" "}
            | Phone: +91 98765 43210
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {["facebook", "twitter", "linkedin"].map((social, i) => (
              <img
                key={i}
                src={`./imge/${social}.svg`}
                alt={`${social} icon`}
                className="w-6 h-6 cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}

export default UPSCPage;
