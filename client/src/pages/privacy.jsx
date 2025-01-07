import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-br from-orange-600 via-white to-green-900  text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Introduction
            </h2>
            <p className="text-lg text-gray-700">
              Welcome to TamilVazhi. We value your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our
              website and use our services. By accessing our website, you agree
              to the terms of this Privacy Policy.
            </p>
          </section>

          {/* Information Collection Section */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Information We Collect
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
              <li>Personal Identification Information (Name, Email, etc.)</li>
              <li>Technical Data (IP address, browser type, operating system)</li>
              <li>Usage Data (how you interact with our website)</li>
              <li>Cookies and tracking data</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The information we collect is used for various purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
              <li>Providing and improving our services</li>
              <li>Communicating with you about your account or our services</li>
              <li>Personalizing your experience on our website</li>
              <li>Analyzing user behavior to improve our content and features</li>
              <li>Sending newsletters, promotional offers, or educational updates</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Data Security
            </h2>
            <p className="text-lg text-gray-700">
              We take the security of your personal data seriously. We use
              industry-standard security measures to protect your information
              from unauthorized access, alteration, or disclosure. However, no
              method of transmission over the internet is 100% secure, and we
              cannot guarantee the absolute security of your data.
            </p>
          </section>

          {/* Third-Party Disclosure */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Third-Party Disclosure
            </h2>
            <p className="text-lg text-gray-700">
              We do not sell, trade, or rent your personal information to
              third parties. However, we may share your data with trusted third
              parties who help us in operating our website and providing
              services. These parties are bound by confidentiality agreements and
              are only allowed to use your data for specific purposes.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Cookies
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Our website uses cookies to enhance user experience. Cookies are
              small files stored on your device that help us track your
              preferences and improve our website’s performance. You can choose
              to disable cookies through your browser settings, but this may
              affect some features of our website.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Your Rights
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              As a user, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
              <li>Access and correct your personal information</li>
              <li>Request the deletion of your personal data</li>
              <li>Withdraw consent for data processing at any time</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          {/* Changes to this Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Changes to this Privacy Policy
            </h2>
            <p className="text-lg text-gray-700">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page, and the "Effective Date" at the
              top will be updated accordingly. We encourage you to review this
              page periodically to stay informed about how we are protecting
              your information.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700">
              If you have any questions or concerns regarding this Privacy
              Policy or the way we handle your data, feel free to contact us at:
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              Email: privacy@tamilvazhi.com
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
