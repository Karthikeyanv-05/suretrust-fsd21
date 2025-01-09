import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function SSCPage() {
  return (
    <div className="bg-gray-50">
     
      <Navbar />
      <header className="relative bg-cover bg-center h-[700px] flex flex-col justify-center bg-[url('./images/ssc-bg.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-extrabold drop-shadow-lg">
            SSC Recruitment
          </h1>
          <p className="mt-4 text-2xl font-medium drop-shadow-md">
            Your Pathway to Secure Central Government Jobs
          </p>
          <button className="mt-8 px-8 py-4 bg-yellow-400 text-black text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white transition-all">
            <a href="#explore">Explore SSC Jobs</a>
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Staff Selection Commission (SSC)
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          SSC offers opportunities to join central government positions such as
          clerks, inspectors, assistants, and constables. Prepare for SSC
          exams like CGL, CHSL, MTS, and GD Constable.
        </p>
      </section>

      {/* Exam Categories */}
      <section className="bg-gray-100 py-12">
        <div id='explore' className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center">
            Popular SSC Exams
          </h2>
          <div className="grid gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SSC CGL",
                description:
                  "Graduate-level recruitment for posts like Inspector, Assistant Section Officer, and more.",
              },
              {
                title: "SSC CHSL",
                description:
                  "10+2 level recruitment for positions such as LDC, JSA, and Postal Assistant.",
              },
              {
                title: "SSC GD Constable",
                description:
                  "Join as a General Duty Constable in CAPFs, NIA, and SSF.",
              },
            ].map((exam, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {exam.title}
                </h3>
                <p className="text-gray-700">{exam.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-800 text-white">
        <h2 className="text-4xl font-extrabold">Apply for SSC Exams</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Begin your journey with SSC. Explore various opportunities and
          achieve a stable and rewarding career.
        </p>
        <button className="mt-8 px-10 py-4 bg-yellow-500 text-gray-900 text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white transition duration-300">
         <a href="https://ssc.gov.in/login" >Apply Now</a> 
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2024 SSC Recruitment Services. All Rights Reserved.</p>
        <p>
          Contact us:{" "}
          <a
            href="mailto:info@ssc.com"
            className="text-yellow-400 underline"
          >
            info@ssc.com
          </a>{" "}
          | Phone: +91 98765 43210
        </p>
      </footer>
    </div>
  );
}

export default SSCPage;
