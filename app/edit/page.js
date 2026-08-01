"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SquarePenIcon from "@/components/SquarePenIcon";
import UserIcon from "@/components/UserIcon";
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

import {
  fetchUserByEmail,
  updateUser,
} from "@/actions/useractions";

const EditInfo = () => {
  const [oldUsername, setOldUsername] = useState("");
  const { data: session, update } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    razorID: "",
    razorSecret: "",
  });

  useEffect(() => {
    if (session?.user?.email) {
      getData();
    }
  }, [session]);

  const getData = async () => {
    const user = await fetchUserByEmail(session.user.email);

    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        username: user.username || "",
        profilepic: user.profilepic || "",
        razorID: user.razorID || "",
        razorSecret: user.razorSecret || "",
      });
      setOldUsername(user.username);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

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

    // router.push(`/${form.username}`);
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
      <div className="max-w-4xl mx-auto my-16 px-6 font-sora">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="px-8 py-8 border-b border-white/10">
            <h1 className="text-4xl font-bold text-white flex gap-2 items-center">
              <SquarePenIcon className="text-green-500" />
              Edit Profile
            </h1>

            <p className="text-gray-400 mt-2">
              Customize how supporters see your page.
            </p>
          </div>

          {/* Avatar */}
          <div className="flex flex-col items-center py-8 border-b border-white/10">

            <img
              src={form.profilepic || "/image1.gif"}
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-emerald-400 object-cover shadow-[0_0_35px_rgba(16,185,129,.35)]"
            />

            <h2 className="text-2xl font-semibold text-white mt-5 michroma">
              {form.name}
            </h2>

          </div>

          {/* Content */}
          <div className="p-8 space-y-8">

            {/* Profile Picture */}
            <section>

              <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                <UserIcon size={21} className="text-green-500" />
                Profile Picture URL
              </h2>

              <input
                type="text"
                name="profilepic"
                value={form.profilepic}
                onChange={handleChange}
                placeholder="Paste image URL..."
                className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />

            </section>

            {/* Username */}
            <section>

              <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                <UserIcon size={21} className="text-green-500" />
                Username
              </h2>

              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />

            </section>

            {/* Razorpay Key ID */}
            <section>

              <h2 className="text-xl font-semibold text-white mb-5">
                Razorpay Key ID
              </h2>

              <input
                type="text"
                name="razorID"
                value={form.razorID}
                onChange={handleChange}
                placeholder="rzp_test_xxxxxxxxx"
                className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />

            </section>

            {/* Razorpay Secret */}
            <section>

              <h2 className="text-xl font-semibold text-white mb-5">
                Razorpay Secret
              </h2>

              <input
                type="password"
                name="razorSecret"
                value={form.razorSecret}
                onChange={handleChange}
                placeholder="Enter Razorpay Secret"
                className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />

            </section>

            <button
              onClick={handleSubmit}
              className="w-full rounded-xl bg-emerald-500 py-4 text-lg font-semibold text-white hover:bg-emerald-600 transition"
            >
              Save Changes
            </button>

          </div>

        </div>

      </div>
    </>
  );
};

export default EditInfo;