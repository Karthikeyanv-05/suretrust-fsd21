import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
    return (
      <>
     <section className="py-16 px-4 text-center bg-gradient-to-tr from-pink-950 to-gray-700 text-white">
        <h1 className="text-4xl font-semibold mb-4">Career & Education Guidance</h1>
        <p className="text-lg mb-8">
          Unlock your potential with personalized career coaching, educational resources, and job opportunities. Let us guide you to success!
        </p>
        <a
          href="#services"
          className="inline-block px-6 py-3 bg-gradient-to-tr from-sky-600 to-amber-600 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Explore Our Services
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Career Coaching</h3>
            <p className="text-gray-700 mb-4">
              Tailored coaching to help you set clear career goals, enhance your skills, and land your dream job.
            </p>
            <a href="#contact" className="text-blue-600 hover:text-blue-500">Learn More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Education Resources</h3>
            <p className="text-gray-700 mb-4">
              Access online courses, certifications, and resources that will boost your education and career prospects.
            </p>
            <a href="#contact" className="text-blue-600 hover:text-blue-500">Learn More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Job Opportunities</h3>
            <p className="text-gray-700 mb-4">
              Discover the latest job openings across various fields, apply easily, and prepare for interviews.
            </p>
            <a href="#contact" className="text-blue-600 hover:text-blue-500">Learn More</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-tr from-pink-950 to-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Success Stories</h2>
        <div className="flex flex-wrap justify-center space-x-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center mb-6">
            <p className="text-gray-600 mb-4">"The career coaching session helped me focus on my goals. I was able to land my dream job in just 3 months!"</p>
            <p className="font-semibold text-blue-600">John Doe</p>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center mb-6">
            <p className="text-gray-600 mb-4">"The educational resources gave me the confidence to switch careers. I now work as a Data Scientist!"</p>
            <p className="font-semibold text-blue-600">Jane Smith</p>
            <p className="text-sm text-gray-500">Data Scientist</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center mb-6">
            <p className="text-gray-600 mb-4">"Thanks to the job opportunity portal, I found a position with a top company in my field!"</p>
            <p className="font-semibold text-blue-600">Michael Johnson</p>
            <p className="text-sm text-gray-500">Marketing Specialist</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 text-center bg-gradient-to-tr from-amber-300 to-lime-300 border-t-violet-800 text-black">
        <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
        <p className="text-lg mb-8">
          Ready to take your career and education to the next level? Contact us to begin your journey toward success.
        </p>
        <a
          href="mailto:contact@yourwebsite.com"
          className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Contact Us
        </a>
      </section>
      </>
    );
};

export default Body;