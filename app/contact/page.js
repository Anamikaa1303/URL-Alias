"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8 text-center">
        Contact Us
      </h1>

      {/* Contact Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-3xl">
        <p className="text-gray-700 mb-6 text-center leading-relaxed">
          Have questions, feedback, or need assistance? We’d love to hear from
          you!  
          Fill out the form below, and our team will get back to you as soon as
          possible.
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="name"
              className="block font-semibold text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Footer Info */}
        <div className="text-center text-gray-600 mt-8">
          <p>
            Or reach us directly at{" "}
            <a
              href="mailto:support@urlalias.com"
              className="text-blue-700 font-medium hover:underline"
            >
              support@urlalias.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
