import React from "react";
import Navbar from "../components/Navbar";

function TNSDCPage() {
  return (
    <>
      {/* Page Wrapper */}
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Hero Section */}
        <Navbar />
        <header className="relative bg-cover bg-center h-[700px] flex flex-col justify-center bg-[url('./images/tnsdc.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-extrabold drop-shadow-lg">
              TNSDC Education & Skill Development
            </h1>
            <p className="mt-4 text-2xl font-medium drop-shadow-md">
              Empowering Tamil Nadu's Future with Skill Training & Education
            </p>
            <button className="mt-8 px-8 py-4 bg-yellow-400 text-black text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white transition-all">
              Discover Opportunities
            </button>
          </div>
        </header>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Empowering Youth with Skills for a Brighter Future
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The Tamil Nadu Skill Development Corporation (TNSDC) is dedicated to creating a skilled workforce by providing various training programs aimed at empowering individuals with essential skills to excel in different sectors.
          </p>
        </section>

        {/* Skill Development Programs Section */}
        <section className="mt-12 bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center">
              Explore Our Skill Development Programs
            </h2>
            <div className="grid gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              {[{
                title: "Vocational Training",
                description: "Practical training programs to equip youth with industry-ready skills in various trades.",
                color: "text-indigo-600",
                eligibility: [
                  "Minimum qualification: 10th/12th grade.",
                  "Age: 18–35 years.",
                ],
                process: [
                  "Online Registration.",
                  "Skill Training.",
                  "Certification.",
                ],
              },
              {
                title: "Entrepreneurship Development",
                description: "Programs designed to promote entrepreneurship and help youth start their own businesses.",
                color: "text-blue-600",
                eligibility: [
                  "Graduate/Undergraduate in any field.",
                  "Age: 21–45 years.",
                ],
                process: [
                  "Registration for Training.",
                  "Entrepreneurship Bootcamp.",
                  "Business Plan Development & Mentorship.",
                ],
              },
              {
                title: "Soft Skills Training",
                description: "Training to enhance communication, problem-solving, and leadership abilities for career growth.",
                color: "text-green-600",
                eligibility: [
                  "Minimum qualification: 10th grade.",
                  "Age: 18–30 years.",
                ],
                process: [
                  "Enroll in Soft Skills Program.",
                  "Training Sessions.",
                  "Assessments and Certification.",
                ],
              },
              {
                title: "Digital Literacy",
                description: "Courses aimed at providing digital skills to the youth to thrive in the digital world.",
                color: "text-yellow-600",
                eligibility: [
                  "Basic knowledge of computers.",
                  "Age: 18–40 years.",
                ],
                process: [
                  "Online Enrollment.",
                  "Digital Literacy Training.",
                  "Certification.",
                ],
              },
              {
                title: "Sector-Specific Training",
                description: "Skill training programs for various industries such as Healthcare, IT, and Manufacturing.",
                color: "text-red-600",
                eligibility: [
                  "Relevant educational qualifications.",
                  "Age: 18–40 years.",
                ],
                process: [
                  "Industry-Specific Enrollment.",
                  "Training Programs.",
                  "Industry Certification.",
                ],
              },
              {
                title: "Women Empowerment Training",
                description: "Empowering women through skill-based training for better employment opportunities.",
                color: "text-purple-600",
                eligibility: [
                  "Age: 18–40 years.",
                  "No specific educational qualification required.",
                ],
                process: [
                  "Online Registration.",
                  "Skill Training & Support.",
                  "Job Placement Assistance.",
                ],
              }].map((program, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className={`text-2xl font-bold ${program.color} mb-4`}>
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Eligibility
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {program.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                    Training Process
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {program.process.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose TNSDC? */}
        <section className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-500 py-12 text-white">
          <h2 className="text-center text-4xl font-extrabold">
            Why Choose TNSDC?
          </h2>
          <p className="mt-4 text-center text-lg max-w-4xl mx-auto">
            TNSDC offers a wide range of opportunities to enhance skills, foster entrepreneurship, and create a brighter future for individuals in Tamil Nadu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[ 
              "Industry-Relevant Training",
              "State-of-the-Art Facilities",
              "Wide Range of Skill Development Programs",
              "Placement Assistance",
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
          <h2 className="text-4xl font-extrabold">Start Your Skill Development Journey</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Unlock a world of opportunities by enrolling in TNSDC's skill development programs. Empower yourself with skills that will define your future.
          </p>
          <button className="mt-8 px-10 py-4 bg-yellow-500 text-gray-900 text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white transition duration-300">
            Apply Now
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-center">
          <p>© 2024 TNSDC. All Rights Reserved.</p>
          <p>
            Contact us:{" "}
            <a
              href="mailto:info@tnsdc.com"
              className="text-yellow-400 underline"
            >
              info@tnsdc.com
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

export default TNSDCPage;
