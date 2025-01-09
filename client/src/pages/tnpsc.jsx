import React from "react";
import Navbar from "../components/Navbar";
import { navigate } from "@reach/router";
function Tnpsc() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
    
        <Navbar />
        <header className="relative bg-cover bg-center h-[600px] text-center flex flex-col justify-center bg-[url('./images/tnpsc.jpg')]">
          <div className="bg-black bg-opacity-50 h-full w-full absolute top-0 left-0"></div>
          <h1 className="relative z-10 text-6xl font-extrabold text-white drop-shadow-lg">
            TNPSC Recruitment Services
          </h1>
          <p className="relative z-10 mt-4 text-2xl font-medium text-white drop-shadow-md">
            Your Gateway to Prestigious Government Positions in Tamil Nadu
          </p>
          <button className="relative z-10 mt-8 px-8 py-4 text-2xl font-bold text-black transition-all duration-300 bg-yellow-400 rounded-full hover:bg-yellow-600 hover:text-white shadow-lg">
            <a href="#explore">Explore Opportunities</a>
          </button>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
          {/* Introduction */}
          <section className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Build Your Career with TNPSC
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Tamil Nadu Public Service Commission offers stability, growth, and
              opportunities to make a difference. Explore various positions and
              find the role that suits your ambitions.
            </p>
          </section>

          {/* Service Groups */}
          <section id="explore" className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Group I Services",
                color: "text-green-600",
                description:
                  "Executive positions like Deputy Collector, DSP, and Assistant Commissioner.",
                eligibility: [
                  "Bachelor's degree in any discipline.",
                  "Age: 21–32 years (varies by post).",
                ],
                process: [
                  "Preliminary Examination.",
                  "Main Examination.",
                  "Interview.",
                ],
              },
              {
                title: "Group II Services",
                color: "text-purple-600",
                description:
                  "Positions like Assistant Section Officer, Sub-Registrar, and Municipal Commissioner.",
                eligibility: ["Bachelor's degree.", "Age: 18–32 years."],
                process: [
                  "Preliminary and Main Written Exams.",
                  "Additional interview stage for Group II.",
                ],
              },
              {
                title: "Group III Services",
                color: "text-blue-600",
                description:
                  "Roles include Junior Inspector of Cooperative Societies and Storekeeper.",
                eligibility: [
                  "Higher Secondary (10+2) or Diploma.",
                  "Age: 18–42 years (varies by category).",
                ],
                process: ["Written Examination."],
              },
              {
                title: "Group IV Services",
                color: "text-red-600",
                description:
                  "Junior Assistant, VAO, Bill Collector, Typist, and more.",
                eligibility: [
                  "10th Standard (SSLC).",
                  "Typing skills (Tamil and English) for Typist/Steno-Typist.",
                  "Age: 18–40 years (varies by post).",
                ],
                process: ["Written Examination."],
              },
            ].map((group, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className={`text-3xl font-bold ${group.color} mb-4`}>
                  {group.title}
                </h3>
                <p className="text-gray-700 mb-4">{group.description}</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Eligibility
                </h4>
                <ul className="list-disc pl-6 text-gray-700">
                  {group.eligibility.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                  Selection Process
                </h4>
                <ul className="list-disc pl-6 text-gray-700">
                  {group.process.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Additional Benefits */}
          <section className="mt-20 bg-gray-200 py-12 rounded-lg shadow-lg">
            <h2 className="text-center text-4xl font-extrabold text-gray-800">
              Why Choose TNPSC?
            </h2>
            <p className="mt-4 text-center text-gray-600 max-w-4xl mx-auto">
              TNPSC provides opportunities to work in various esteemed
              government roles that offer stability, competitive salaries,
              respect, and the ability to contribute to Tamil Nadu's growth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {[
                "Prestigious Roles",
                "Career Growth",
                "Work-Life Balance",
                "Attractive Perks & Benefits",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 w-60 hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <p className="text-lg font-semibold text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-400 to-blue-500 py-16 text-center text-white">
          <h2 className="text-4xl font-extrabold">Ready to Apply?</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Take the first step toward a prestigious career in Tamil Nadu's
            government services. Explore vacancies and apply now.
          </p>
          <button className="mt-8 px-10 py-4 text-xl font-bold bg-white text-green-500 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300" >
            <a href="https://www.tnpsc.gov.in/">Apply Now</a>
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 text-center">
          <p>© 2024 TNPSC Recruitment Services. All Rights Reserved.</p>
          <p>
            Contact us:{" "}
            <a
              href="mailto:info@tnpsc.com"
              className="text-yellow-400 underline"
            >
              info@tnpsc.com
            </a>{" "}
            | Phone: +91 12345 67890
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {[
              { name: "Facebook", icon: "facebook.svg" },
              { name: "Twitter", icon: "twitter.svg" },
              { name: "LinkedIn", icon: "linkedin.svg" },
            ].map((social, i) => (
              <img
                key={i}
                src={`./imge/${social.icon}`}
                alt={`${social.name} icon`}
                className="w-6 h-6 cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}

export default Tnpsc;
