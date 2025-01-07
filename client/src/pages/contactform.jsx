import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setFormStatus("");

    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setIsSubmitting(false);
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message");
      }

      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setFormStatus("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-blue-800 via-blue-500 to-teal-500 text-black">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-3 mt-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-3 mt-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className={`w-full p-3 mt-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="Enter your message"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-950 text-white font-semibold py-2 px-6 rounded-lg hover:bg-rose-700 transition-colors duration-300 disabled:bg-gray-400"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300"
          >
            Cancel
          </button>
        </div>

        {formStatus && (
          <div
            className={`mt-4 text-center text-lg font-semibold ${
              formStatus.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {formStatus}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
