import React from "react";
import Navbar from "../components/Navbar";

function PMKVYPage() {
  return (
    <>
      {/* Page Wrapper */}
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Hero Section */}
        <Navbar />
        <header className="relative bg-cover bg-center h-[700px] flex flex-col justify-center bg-[url('./images/pmkvy-hero.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-extrabold drop-shadow-lg">
              Pradhan Mantri Kaushal Vikas Yojana (PMKVY)
            </h1>
            <p className="mt-4 text-2xl font-medium drop-shadow-md">
              Empowering India’s Youth with Skill Development Opportunities
            </p>
            <button className="mt-8 px-8 py-4 bg-yellow-400 text-black text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white transition-all">
              <a href="https://www.pmkvyofficial.org/">Explore PMKVY Courses </a>
            </button>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            About PMKVY
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Pradhan Mantri Kaushal Vikas Yojana (PMKVY) aims to provide a platform for youth across India to gain skill training in various industries and secure employment opportunities in both the private and public sectors.
          </p>
        </section>

        {/* PMKVY Scheme Details */}
        <section className="mt-12 bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center">
              PMKVY Courses & Eligibility
            </h2>
            <div className="grid gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              {[{
                title: "Beauty & Wellness",
                description: "Training courses in the beauty, wellness, and personal care industry.",
                color: "text-indigo-600",
                eligibility: [
                  "10th or 12th grade (depending on the course).",
                  "Age: 18–35 years.",
                ],
                process: [
                  "Online Enrollment.",
                  "Skill Development Training.",
                  "Certification and Placement Assistance.",
                ],
              },
              {
                title: "Automotive Sector",
                description: "Courses for mechanical, automotive repair, and service sectors.",
                color: "text-blue-600",
                eligibility: [
                  "Minimum qualification: 10th grade.",
                  "Age: 18–30 years.",
                ],
                process: [
                  "Register on the PMKVY portal.",
                  "Attend skill development training.",
                  "Earn certificate and gain job placement support.",
                ],
              },
              {
                title: "Construction Sector",
                description: "Courses to skill individuals in construction-related tasks like plumbing, carpentry, etc.",
                color: "text-green-600",
                eligibility: [
                  "10th or 12th grade.",
                  "Age: 18–40 years.",
                ],
                process: [
                  "Online Registration.",
                  "Training in Specific Construction Skills.",
                  "Certificate and Placement Support.",
                ],
              },
              {
                title: "IT & ITES Sector",
                description: "Courses in computer literacy, software development, and IT services.",
                color: "text-yellow-600",
                eligibility: [
                  "12th grade or higher.",
                  "Age: 18–30 years.",
                ],
                process: [
                  "Register for Training.",
                  "Undergo Skill Development Program.",
                  "Get Certified and Supported with Job Placement.",
                ],
              },
              {
                title: "Healthcare Sector",
                description: "Training courses for healthcare professionals like nurses, medical assistants, and technicians.",
                color: "text-red-600",
                eligibility: [
                  "Graduates/Undergraduates in healthcare or medical fields.",
                  "Age: 18–40 years.",
                ],
                process: [
                  "Register on PMKVY.",
                  "Healthcare Skills Training.",
                  "Certification and Career Support.",
                ],
              },
              {
                title: "Retail Sector",
                description: "Courses to train in sales, customer service, and retail management.",
                color: "text-purple-600",
                eligibility: [
                  "10th grade or higher.",
                  "Age: 18–30 years.",
                ],
                process: [
                  "Apply for Course via PMKVY Portal.",
                  "Complete Retail Skills Program.",
                  "Get Certified and Gain Placement Assistance.",
                ],
              }].map((course, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className={`text-2xl font-bold ${course.color} mb-4`}>
                    {course.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Eligibility
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {course.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                    Training Process
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {course.process.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose PMKVY */}
        <section className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-500 py-12 text-white">
          <h2 className="text-center text-4xl font-extrabold">
            Why Choose PMKVY?
          </h2>
          <p className="mt-4 text-center text-lg max-w-4xl mx-auto">
            PMKVY provides an opportunity for youth to enhance their skills, secure employment, and contribute to India’s growth and development by offering world-class training and certification programs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[ 
              "Nationally Recognized Certification",
              "Free of Cost or Subsidized Training",
              "Placement Assistance",
              "Industry-Oriented Skill Development",
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
          <h2 className="text-4xl font-extrabold">Start Your Skill Development Journey with PMKVY</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Don't miss the chance to upskill and build a rewarding career through PMKVY’s various courses. Enroll now and take the first step towards a brighter future!
          </p>
          <button className="mt-8 px-10 py-4 bg-yellow-500 text-gray-900 text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white transition duration-300">
            <a href="https://www.pmkvyofficial.org/">Apply Now </a>
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-center">
          <p>© 2024 PMKVY. All Rights Reserved.</p>
          <p>
            Contact us:{" "}
            <a
              href="mailto:info@pmkvy.com"
              className="text-yellow-400 underline"
            >
              info@pmkvy.com
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

export default PMKVYPage;
