"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    if (!url || !shortUrl) {
      alert("Please enter both URL and short alias!");
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, shorturl: shortUrl }),
      });

      const result = await response.json();

      if (response.ok) {
        setGenerated(
          `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/${shortUrl}`
        );
        setUrl("");
        setShortUrl("");
        alert(result.message || "Short URL generated successfully!");
      } else {
        alert(result.message || "Error generating URL.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col gap-4">
        <h1 className="font-bold text-2xl sm:text-3xl text-center text-blue-700">
          Generate Your Short URLs
        </h1>

        <div className="flex flex-col gap-3 sm:gap-4">
          <input
            value={url}
            type="url"
            className="px-4 py-2 sm:py-3 rounded-md border border-gray-300 focus:outline-blue-600 bg-white text-sm sm:text-base"
            placeholder="Enter your original URL"
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            value={shortUrl}
            type="text"
            className="px-4 py-2 sm:py-3 rounded-md border border-gray-300 focus:outline-blue-600 bg-white text-sm sm:text-base"
            placeholder="Enter your preferred short alias"
            onChange={(e) => setShortUrl(e.target.value)}
          />

          <button
            onClick={generate}
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 sm:py-3 rounded-lg text-sm sm:text-base"
          >
            Generate
          </button>
        </div>

        {generated && (
          <div className="mt-5 text-center break-words">
            <span className="font-bold text-base sm:text-lg text-gray-800">
              Your Link:
            </span>
            <code className="block mt-2 text-blue-600 underline text-sm sm:text-base">
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
