import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const About = () => {
    return (
        <>
        <Navbar/>
          <div className=" py-5 sm:py-16 lg:py-24 bg-gradient-to-br from-orange-600 via-white to-green-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative top-0">
          <h2 className="top-5 text-4xl font-extrabold font-mono tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Empowering Education and Career Growth
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex flex-col items-center justify-center space-y-6">
            <img
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              src="https://plus.unsplash.com/premium_photo-1661906789703-a25a1e53180e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJ1c3R8ZW58MHx8MHx8fDA%3D"
              alt="Education and Career"
            />
            <div className="absolute top-0 left-0 p-4 bg-green-900 text-white rounded-lg shadow-md">
              Our Mission
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-gray-500">
              At Tamil Vazhi, we are dedicated to providing **free education** resources and **career guidance** to individuals across the world. Our goal is to empower people of all ages to achieve their educational and career aspirations without the burden of financial constraints.
            </p>

            <p className="text-lg text-gray-900">
              We offer a wide range of resources, including online courses, skill-building workshops, career advice, and mentorship programs. Whether you’re a student, a professional seeking to advance your career, or someone looking to explore new opportunities, we are here to help you unlock your full potential.
            </p>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900">Our Core Values</p>
              <ul className="mt-4 space-y-2 text-lg text-gray-900">
                <li>Accessibility to Knowledge</li>
                <li>Commitment to Student Success</li>
                <li>Personalized Career Guidance</li>
                <li>Empowering Lifelong Learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-500">
            We believe that education is the key to a brighter future and that everyone should have access to the tools and support they need to succeed. Our platform offers free courses, personalized career advice, and expert-led workshops that cater to various fields and career paths.
          </p>

          <p className="text-lg text-gray-500 mt-4">
            Our team of educators, career coaches, and mentors is committed to guiding you through your learning and career journey, offering you the skills and confidence needed to succeed in today's ever-evolving world.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block px-6 py-3 text-base font-medium text-white bg-green-900 rounded-lg hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};



export default About;