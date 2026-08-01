import Link from "next/link";

export default function About() {
  return (
  <div className="min-h-screen  text-white font-sora">

    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Hero */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          About{" "}
          <span className="text-emerald-400">Back Me</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
          Back Me is a platform where creators can receive direct support
          from their audience. Whether you're a developer, designer,
          writer, artist, or educator, your supporters can contribute and
          help you continue creating amazing work.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mt-20">

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-emerald-400 transition">
          <div className="text-5xl mb-5">💚</div>

          <h2 className="text-2xl font-semibold">
            Support Creators
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Anyone can support creators with secure payments and leave
            encouraging messages that motivate them to keep building.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-emerald-400 transition">
          <div className="text-5xl mb-5">🚀</div>

          <h2 className="text-2xl font-semibold">
            Grow Your Community
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Build stronger relationships with your supporters and create
            an engaged community around your passion.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-emerald-400 transition">
          <div className="text-5xl mb-5">🔒</div>

          <h2 className="text-2xl font-semibold">
            Secure Payments
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Payments are processed securely using Razorpay so both
            creators and supporters enjoy a smooth experience.
          </p>
        </div>

      </div>

      {/* Mission */}
      <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

        <h2 className="text-4xl font-bold">
          Our Mission
        </h2>

        <p className="mt-6 text-gray-400 leading-8 text-lg">
          We believe creators deserve a simple and transparent way to
          receive appreciation from their audience. Back Me removes
          unnecessary complexity and allows supporters to contribute in
          just a few clicks.
        </p>

        <p className="mt-5 text-gray-400 leading-8 text-lg">
          Every contribution helps creators invest more time into building,
          teaching, designing, writing, and creating content that benefits
          everyone.
        </p>

      </div>

      {/* CTA */}
      <div className="text-center mt-20">

        <h2 className="text-4xl font-bold">
          Ready to Support a Creator?
        </h2>

        <p className="mt-4 text-gray-400">
          Discover amazing creators and help them continue doing what they
          love.
        </p>

        <Link
          href="/explorecreators"
          className="inline-block mt-8 rounded-xl bg-emerald-500 px-8 py-3 font-semibold hover:bg-emerald-600 transition shadow-[0_0_20px_rgba(16,185,129,.4)]"
        >
          Explore Creators →
        </Link>

      </div>

    </div>

  </div>
  );
}
export const metadata = {
    title: "About",
  };