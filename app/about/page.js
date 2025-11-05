import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8 text-center">
        About URL Alias
      </h1>

      {/* Content Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 max-w-3xl text-gray-700 leading-relaxed">
        <p className="mb-6">
          Welcome to <span className="font-semibold text-blue-700">URL Alias</span> — your smart and simple
          solution for shortening long, complex URLs into clean, shareable links.
          We believe that sharing links should be effortless, elegant, and
          effective.
        </p>

        <p className="mb-6">
          <span className="font-semibold">Our mission</span> is to make the web
          more accessible and organized — one link at a time. With URL Alias, you
          can quickly generate short URLs, manage them with ease, and share them
          confidently across social platforms, emails, or anywhere you connect
          online.
        </p>

        <p className="mb-6">
          We focus on building a fast, secure, and user-friendly platform that
          serves individuals, creators, and businesses alike. Every alias you
          create is protected, reliable, and designed to perform — so your links
          work smarter for you.
        </p>

        <p className="font-semibold text-blue-700">
          Thank you for choosing URL Alias — because every click deserves a clean
          connection.
        </p>
      </div>
    </div>
  );
};

export default About;
