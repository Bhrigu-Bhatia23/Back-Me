import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";
import ArrowRightIcon from "@/components/ArrowRightIcon";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="z-10 flex-1 flex flex-col items-center my-12 ">
          <h1 className="text-3xl mx-6 md:text-5xl text-center font-extrabold bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent">
            Turn Your Passion Into Sustainable Income.
          </h1>
          <p className="mt-7 mx-9 md:mt-6 md:text-xl text-center text-lg text-slate-300 font-sora font-extralight">
            BackMe empowers creators to earn directly from their audience.
          </p>
          <div className="mt-10 flex gap-4 ml-7 md:ml-0 ">
            <button className="flex justify-center items-center gap-2 cursor-pointer px-7 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-semibold transition-all duration-300">
            <Link className="flex justify-center items-center gap-2" href="/explorecreators" >  Explore Creators <ArrowRightIcon /></Link>

            </button>
            <button className="flex justify-center items-center gap-2 cursor-pointer px-7 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-semibold transition-all duration-300">
              {/* Learn More <ArrowRightIcon /> */}
                <Link className="flex justify-center items-center gap-2" href={"/about"}> Learn More <ArrowRightIcon /> </Link>
            </button>
          </div>

          <section id="features" className="font-sora py-28 px-6">

            <div className="px-2 md:px-0 max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-6">
                ✨ Features
              </span>

              <h2 className="text-5xl font-bold text-white leading-tight">
                Everything You Need to{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Grow as a Creator
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                BackMe provides everything creators need to build a loyal community,
                receive support, and turn their passion into a sustainable income—all
                from one beautiful platform.
              </p>
            </div>

            <div className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

              {/* Card 1 */}
              <div id="features" className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-emerald-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-3xl">
                  💰
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Direct Support
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Receive one-time or recurring contributions from your supporters
                  through a secure and seamless payment experience.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl">
                  👥
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Build Community
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Create your own creator page where your audience can discover,
                  follow, and support your work.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-violet-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 text-3xl">
                  📊
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Creator Dashboard
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  View your total donations, supporter count, and recent contributions
                  from a clean and simple dashboard.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-3xl">
                  🚀
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Launch Quickly
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Set up your profile in minutes and start receiving support without
                  any complicated configuration.
                </p>
              </div>

              {/* Card 5 */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-3xl">
                  🔒
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Secure Payments
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Every transaction is protected with modern security standards,
                  ensuring a safe experience for creators and supporters.
                </p>
              </div>

              {/* Card 6 */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-teal-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 text-3xl">
                  🌍
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Share Anywhere
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Share your BackMe page across YouTube, Instagram, X, LinkedIn,
                  and other platforms with a single link.
                </p>
              </div>

            </div>

          </section>


          <section className="py-28 px-6 font-sora">

            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">
                🚀 How It Works
              </span>

              <h2 className="md:text-5xl text-3xl font-bold text-white">
                Start Receiving Support in
                <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  {" "}3 Simple Steps
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-400 leading-8">
                Setting up your creator page takes only a few minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20 px-4 ">

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center text-3xl">
                  👤
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Create Profile
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  Set up your creator page with your profile and personalized information.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-emerald-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-3xl">
                  🔗
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Share Your Link
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  Share your BackMe page on social media and let supporters discover you.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-violet-400/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-violet-500/10 flex items-center justify-center text-3xl">
                  ❤️
                </div>

                <h3 className="text-white text-2xl font-semibold mt-6">
                  Receive Support
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  Accept secure donations and heartfelt messages from your supporters.
                </p>
              </div>

            </div>

          </section>

          <section className="py-28 px-6">

            <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 backdrop-blur-xl p-16 text-center">

              <h2 className="md:text-5xl text-3xl font-bold text-white">
                Ready to Start Your Creator Journey?
              </h2>

              <p className="mt-6 md:text-lg text-md text-slate-300 max-w-2xl mx-auto leading-8">
                Build your creator page, share it with your audience, and start receiving
                support in just a few minutes.
              </p>

              <button className="mt-10 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/30">
                <Link href={"/dashboard"}> Get Started </Link>
              </button>

            </div>

          </section>

          <section className="py-15 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

              <div className="text-center">
                <h3 className="text-5xl font-bold text-emerald-400">1</h3>
                <p className="text-slate-400 mt-2">Creator Page</p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl font-bold text-cyan-400">∞</h3>
                <p className="text-slate-400 mt-2">Supporters</p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl font-bold text-violet-400">1</h3>
                <p className="text-slate-400 mt-2">Shareable Link</p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl font-bold text-orange-400">24/7</h3>
                <p className="text-slate-400 mt-2">Availability</p>
              </div>

            </div>

          </section>

        </div>
      </div>
    </>
  );
}