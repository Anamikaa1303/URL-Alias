import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-blue-100 min-h-screen flex flex-col">
      {/* === Hero Section === */}
      <section className="grid md:grid-cols-2 grid-cols-1 h-auto md:h-[80vh] px-4 sm:px-8 md:px-20 py-12 md:py-16 gap-10 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-left">
          <p
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight ${poppins.className}`}
          >
            The Best URL Shortener in the Market
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl md:px-0 px-2 max-w-lg">
            We are the most straightforward URL shortener in the world. Unlike
            others, we don’t track you or demand sign-ups. Our mission is to
            make shortening URLs quick, private, and effortless.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <Link href="/shorten">
              <button className="bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg px-6 py-2 font-semibold text-white cursor-pointer transition duration-200">
                Try Now
              </button>
            </Link>
            <Link href="/support">
              <button className="bg-gray-200 hover:bg-gray-300 rounded-lg shadow-lg px-6 py-2 font-semibold text-blue-700 cursor-pointer transition duration-200">
                Support
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="flex justify-center md:justify-end relative mt-8 md:mt-0">
          <Image
            className="mix-blend-darken object-contain rounded-xl w-[90%] sm:w-[80%] md:w-[500px] lg:w-[550px]"
            alt="Vector illustration"
            src="/vector.jpg"
            width={500}
            height={400}
            priority
          />
        </div>
      </section>

      {/* === Why Choose URL Alias Section === */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-10 md:px-20 shadow-inner">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-12 ${poppins.className}`}
        >
          Why Choose URL Alias?
        </h2>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-10 text-center">
          {[
            {
              title: "⚡ Lightning Fast",
              text: "Generate short links instantly — no waiting, no setup. Just paste, click, and share.",
            },
            {
              title: "🔒 Privacy Focused",
              text: "We don’t collect your personal data or track your usage. Your privacy matters most to us.",
            },
            {
              title: "🎨 Custom Aliases",
              text: "Create branded links that fit your identity — perfect for business and social sharing.",
            },
            {
              title: "📈 Analytics (Coming Soon)",
              text: "Track clicks and engagement with our upcoming analytics dashboard.",
            },
            {
              title: "🌐 Reliable & Secure",
              text: "Every link is safely redirected and validated for authenticity and performance.",
            },
            {
              title: "🧭 Easy to Use",
              text: "Designed for simplicity — no confusing settings, no distractions, just results.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === Footer CTA === */}
      <section className="bg-blue-600 text-white text-center py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Ready to Shorten Your First URL?
        </h2>
        <Link href="/shorten">
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 rounded-lg shadow-lg transition duration-200">
            Get Started
          </button>
        </Link>
      </section>
    </main>
  );
}
