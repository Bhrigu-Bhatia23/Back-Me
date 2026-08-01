"use client"
import { useState } from "react";
import info from "@/actions/useractions";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { useEffect } from "react";

export default function Contact() {

  const [contactForm, setcontactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  useEffect(() => {
    document.title = "Contact"
  },[])
  

  const handleChange = (e) => {
    setcontactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await info(contactForm);

      toast.success("📩 Message sent successfully!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
        icon: "✅",
      });

      setcontactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3500,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="min-h-screen px-6 py-20 font-sora">

        <div className="max-w-4xl mx-auto">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">
              📩 Contact Us
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent">
                We'd Love to Hear From You
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-8">
              Have a question, feedback, or partnership opportunity?
              Send us a message and we'll get back to you as soon as possible.
            </p>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="text-slate-300 mb-2 block">
                  Full Name
                </label>

                <input
                  onChange={handleChange}
                  name="name"
                  value={contactForm.name}
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-slate-300 mb-2 block">
                  Email
                </label>

                <input
                  onChange={handleChange}
                  name="email"
                  value={contactForm.email}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-emerald-400"
                />
              </div>

            </div>

            <div className="mt-6">

              <label className="text-slate-300 mb-2 block">
                Subject
              </label>

              <input
                onChange={handleChange}
                name="subject"
                value={contactForm.subject}
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />

            </div>

            <div className="mt-6">

              <label className="text-slate-300 mb-2 block">
                Message
              </label>

              <textarea
                onChange={handleChange}
                name="message"
                value={contactForm.message}
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none resize-none focus:border-emerald-400"
              ></textarea>

            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-emerald-500 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.02]">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </>
  );
}