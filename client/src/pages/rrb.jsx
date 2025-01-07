import React from "react";
import Navbar from "../components/Navbar";

function RRB() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-screen flex items-center justify-center bg-[url('./images/rrb.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            Join Indian Railways
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Explore thousands of vacancies across the Indian Railways under RRB.
          </p>
          <a
            href="#explore"
            className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition-all"
          >
            Explore Careers
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          About RRB
        </h2>
        <p className="text-gray-600 text-center text-lg md:text-xl max-w-3xl mx-auto">
          The Railway Recruitment Board (RRB) is responsible for recruiting
          staff for the Indian Railways. It offers opportunities for graduates,
          diploma holders, and 10th/12th pass candidates in technical and
          non-technical roles. The Indian Railways is one of the largest
          employers in the world, offering secure and prestigious careers.
        </p>
      </section>

      {/* Job Categories */}
      <section id="categories" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Job Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Group D */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4">Group D</h3>
              <p className="text-gray-600 mb-4">
                Entry-level positions like Track Maintainer, Helper, Porter, and
                more.
              </p>
              <p className="text-sm text-gray-500">Eligibility: 10th Pass</p>
            </div>

            {/* NTPC */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                NTPC (Non-Technical Popular Categories)
              </h3>
              <p className="text-gray-600 mb-4">
                Roles like Station Master, Clerk, Ticket Collector, and Typist.
              </p>
              <p className="text-sm text-gray-500">Eligibility: 12th Pass/Graduates</p>
            </div>

            {/* ALP/Technicians */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                Assistant Loco Pilot & Technicians
              </h3>
              <p className="text-gray-600 mb-4">
                Drive locomotives or handle technical operations for the
                railways.
              </p>
              <p className="text-sm text-gray-500">Eligibility: ITI/Diploma</p>
            </div>

            {/* Junior Engineers */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Junior Engineers (JE)
              </h3>
              <p className="text-gray-600 mb-4">
                Handle technical tasks in engineering departments like Civil,
                Mechanical, and Electrical.
              </p>
              <p className="text-sm text-gray-500">Eligibility: Diploma/Degree</p>
            </div>

            {/* Paramedical */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Paramedical
              </h3>
              <p className="text-gray-600 mb-4">
                Roles like Staff Nurse, Pharmacist, Lab Technician, etc.
              </p>
              <p className="text-sm text-gray-500">Eligibility: Medical Diploma/Degree</p>
            </div>

            {/* Apprentice */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-teal-600 mb-4">
                Apprenticeship Program
              </h3>
              <p className="text-gray-600 mb-4">
                Training for technical roles across various departments.
              </p>
              <p className="text-sm text-gray-500">Eligibility: 10th/ITI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section id="process" className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Selection Process
        </h2>
        <ol className="list-decimal space-y-6 text-gray-600 mx-auto max-w-3xl text-lg">
          <li>Computer-Based Test (CBT) - Tier I and II for some categories.</li>
          <li>Physical Efficiency Test (PET) for certain posts.</li>
          <li>Document Verification and Medical Examination.</li>
          <li>Final Merit List and Posting.</li>
        </ol>
      </section>

      {/* Official Links */}
      <section id="links" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-extrabold text-center mb-8">
            Official Websites
          </h2>
          <div className="text-center space-y-4">
            <a
              href="https://www.rrbcdg.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline text-lg"
            >
              Visit Railway Recruitment Board (RRB) Official Website →
            </a>
            <br />
            <a
              href="https://indianrailways.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline text-lg"
            >
              Visit Indian Railways Official Website →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>
          © 2024 RRB Careers. All Rights Reserved. Contact us at{" "}
          <a
            href="mailto:info@rrb.com"
            className="text-yellow-400 underline"
          >
            info@rrb.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default RRB;
