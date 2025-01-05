import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsConditions = () => {
  return (
  <>
  <Navbar/>
    <div className="bg-gradient-to-br from-orange-600 via-white to-green-900 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-8">
          Terms and Conditions
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Introduction
            </h2>
            <p className="text-lg text-gray-700">
              Welcome to TamilVazhi! These Terms and Conditions govern your use
              of our website and services. By accessing and using our website,
              you agree to comply with these terms. If you do not agree with any
              part of these terms, please do not use our website.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              User Responsibilities
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              As a user, you are responsible for the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
              <li>Providing accurate information when creating an account</li>
              <li>Maintaining the confidentiality of your account details</li>
              <li>Complying with applicable laws and regulations</li>
              <li>Respecting other users' rights and intellectual property</li>
              <li>Not engaging in any illegal, abusive, or harmful activities</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Services Provided
            </h2>
            <p className="text-lg text-gray-700">
              TamilVazhi offers educational resources, career guidance, and
              related services to help individuals achieve their career and
              education goals. We provide access to curated courses, career
              opportunities, and expert advice through our platform.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Limitations of Liability
            </h2>
            <p className="text-lg text-gray-700">
              While we strive to provide accurate and up-to-date information,
              TamilVazhi does not guarantee the accuracy, completeness, or
              reliability of any content on our website. We are not liable for
              any damages, losses, or consequences arising from the use of our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Intellectual Property
            </h2>
            <p className="text-lg text-gray-700">
              All content, including but not limited to text, images, videos,
              logos, and graphics, available on our website is protected by
              copyright and intellectual property laws. You may not use,
              reproduce, or distribute our content without our prior written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Privacy and Data Protection
            </h2>
            <p className="text-lg text-gray-700">
              By using our website, you consent to the collection and use of
              your personal data as outlined in our{" "}
              <a href="/privacy-policy" className="text-teal-600">
                Privacy Policy
              </a>. We are committed to safeguarding your privacy and ensuring
              that your personal information is handled securely.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Modification of Terms
            </h2>
            <p className="text-lg text-gray-700">
              We reserve the right to modify these Terms and Conditions at any
              time. Any updates will be posted on this page with the revised
              date. It is your responsibility to review this page periodically to
              stay informed about any changes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Governing Law
            </h2>
            <p className="text-lg text-gray-700">
              These Terms and Conditions are governed by the laws of India. Any
              disputes arising from the use of our website will be subject to the
              jurisdiction of the courts in India.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700">
              If you have any questions or concerns regarding these Terms and
              Conditions, feel free to contact us at:
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              Email: support@tamilvazhi.com
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsConditions;
