"use client"
import React, { useEffect, useState } from "react";
import LayoutGridIcon from "@/components/LayoutGridIcon";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { fetchUserByEmail } from "@/actions/useractions";
import { updateUser } from "@/actions/useractions";
//import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

const Dashboard = () => {
  const [oldUsername, setOldUsername] = useState("");
  const { data: session, status, update } = useSession();
  //const searchParams = useSearchParams();

  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    profilepic: "",
    razorID: "",
    razorSecret: "",
  })

  useEffect(() => {
    document.title = "Dashboard"
    if (status === "loading") return;

    if (!session?.user) {
      router.push("/login");
      return;
    }

    getData();
  }, [session, status, router]);

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    const u = await fetchUserByEmail(session.user.email);

    console.log("Fetched user:", u);

    if (u) {
      setForm(u);
      setOldUsername(u.username);
    }
    console.log("Session user:", session.user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const result = await updateUser(formData, oldUsername);

    if (result?.error) {
      toast.error(result.error);
      return;
    }

    await update();

    toast.success("Profile updated successfully! 🚀", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });

      setTimeout(() => {
        router.push(`/${form.username}`);
      }, 2000);
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
        <div className="max-w-5xl mx-auto my-16 px-6 text-sora">

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl font-sora border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="border-b border-white/10 px-8 py-6">
              <h1 className="md:text-3xl text-2xl font-bold text-white flex gap-2 items-center">
                <LayoutGridIcon size={28}  className="text-green-500" />  Creator Dashboard
              </h1>

              <p className="text-gray-400 mt-2">
                Manage your profile, payment details, and creator page.
              </p>
            </div>

            <div className="p-8 space-y-6">

              {/* Full Name */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Full Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Username
                </label>

                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  type="text"
                  placeholder="@username"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Profile Picture
                </label>

                <input
                  name="profilepic"
                  value={form.profilepic}
                  onChange={handleChange}
                  type="text"
                  placeholder="https://example.com/profile.jpg"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>

              {/* Razorpay Key ID */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Razorpay Key ID
                </label>

                <input
                  name="razorID"
                  value={form.razorID}
                  onChange={handleChange}
                  type="text"
                  placeholder="rzp_test_xxxxxxxxx"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>

              {/* Razorpay Secret */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Razorpay Secret
                </label>

                <input
                  name="razorSecret"
                  value={form.razorSecret}
                  onChange={handleChange}
                  type="password"
                  placeholder="••••••••••••••••"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>

              {/* Save Button */}
              <button
                className="w-full rounded-xl bg-emerald-500 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-[0_0_25px_rgba(16,185,129,.4)]"
              >
                Save Changes
              </button>

            </div>

          </form>

        </div>
      </>
    );
  };

  export default Dashboard;