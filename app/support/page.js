"use client";
import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8 text-center">
        Support
      </h1>

      {/* Support Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-3xl text-gray-700 leading-relaxed">
        <p className="mb-6 text-center">
          Need help with <span className="font-semibold text-blue-700">URL Alias</span>?  
          Our support team is here to assist you with any questions or issues.
        </p>

        {/* FAQ Section */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-lg">🔗 How do I shorten a URL?</h3>
            <p>
              Visit the <span className="font-medium">Shorten</span> page, paste
              your long URL, and click the **Shorten** button. You’ll instantly
              get a clean, short alias you can share anywhere.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">💡 Can I use custom aliases?</h3>
            <p>
              Yes! When creating a short link, you can specify your own alias
              (like <code>urlalias.com/mybrand</code>) — as long as it’s unique.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">📊 Do you offer analytics?</h3>
            <p>
              Absolutely. We’re working on an analytics dashboard so you can
              track clicks, geolocation, and engagement statistics in real time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">🛡️ Are my links secure?</h3>
            <p>
              Yes. Every alias is validated and safely redirected. We also block
              malicious or spammy URLs to keep users safe.
            </p>
          </div>
        </div>

        {/* Contact Support Button */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Didn’t find what you were looking for? Reach out to us directly.
          </p>
          <a
            href="mailto:support@urlalias.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
