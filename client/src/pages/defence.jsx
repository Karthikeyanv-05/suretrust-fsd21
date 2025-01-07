import React from "react";
import Navbar from "../components/Navbar";

function DefenceRecruitmentPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
  
      <Navbar />
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-screen flex items-center justify-center bg-[url('./images/defence-hero.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            Serve the Nation with Pride
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Explore opportunities in the Indian Army, Navy, Airforce, and Paramilitary Forces.
          </p>
          <a
            href="#explore"
            className="inline-block mt-6 px-8 py-4 bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-all"
          >
            Explore Careers
          </a>
        </div>
      </header>

      {/* Main Content */}
      <section id="explore" className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Career Opportunities in Defence Forces
        </h2>

        {/* Army Section */}
        <div
          id="army"
          className="grid md:grid-cols-2 items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden mb-16"
        >
          <div className="bg-cover bg-center h-64 md:h-full bg-[url('./images/army.jpg')]"></div>
          <div className="p-6 md:p-12">
            <h3 className="text-3xl font-bold text-red-600 mb-4">
              Indian Army
            </h3>
            <p className="text-gray-600 mb-4">
              The Indian Army offers roles like officers, soldiers, and engineers. Join through NDA, CDS, or SSC Tech entries to protect our nation.
            </p>
            <a
              href="https://joinindianarmy.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit Official Website →
            </a>
          </div>
        </div>

        {/* Navy Section */}
        <div
          id="navy"
          className="grid md:grid-cols-2 items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden mb-16"
        >
          <div className="bg-cover bg-center h-64 md:h-full bg-[url('./images/navy.png')]"></div>
          <div className="p-6 md:p-12">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              Indian Navy
            </h3>
            <p className="text-gray-600 mb-4">
              Join the elite maritime force of India as an officer or sailor.
              Entry through NDA, CDS, or recruitment drives for roles like SSR,
              AA, and MR.
            </p>
            <a
              href="https://joinindiannavy.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit Official Website →
            </a>
          </div>
        </div>

        {/* Airforce Section */}
        <div
          id="airforce"
          className="grid md:grid-cols-2 items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden mb-16"
        >
          <div className="bg-cover bg-center h-64 md:h-full bg-[url('./images/airforce.jpg')]"></div>
          <div className="p-6 md:p-12">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">
              Indian Airforce
            </h3>
            <p className="text-gray-600 mb-4">
              Protect India's skies by joining the Indian Airforce as a pilot,
              ground duty officer, or technician. Enter through AFCAT or NDA
              exams.
            </p>
            <a
              href="https://careerindianairforce.cdac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit Official Website →
            </a>
          </div>
        </div>

        {/* Paramilitary Section */}
        <div
          id="paramilitary"
          className="grid md:grid-cols-2 items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden"
        >
          <div className="bg-cover bg-center h-64 md:h-full bg-[url('./images/paramilitary.jpg')]"></div>
          <div className="p-6 md:p-12">
            <h3 className="text-3xl font-bold text-green-600 mb-4">
              Paramilitary Forces
            </h3>
            <p className="text-gray-600 mb-4">
              Serve in BSF, ITBP, CISF, CRPF, and other paramilitary forces
              through SSC GD, CAPF AC, or other recruitment exams.
            </p>
            <a
              href="https://www.recruitment.itbpolice.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit ITBP Website →
            </a>
            <br />
            <a
              href="https://www.crpf.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2"
            >
              Visit CRPF Website →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>
          © 2024 Defence Recruitment Services. All Rights Reserved. Contact us
          at{" "}
          <a
            href="mailto:info@defence.com"
            className="text-yellow-400 underline"
          >
            info@defence.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default DefenceRecruitmentPage;
