"use client"
import { React, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {
  const { data: session } = useSession()
  //  if (session) {
  //   const router = useRouter();
  //   router.push('/dashboard')
  // }
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  useEffect(() => {
    document.title = "Login"
  }, [])
  

  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mt-10">

        {/* <span className="mt-8 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">
            👋 Welcome Back
          </span> */}

        <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent">
            Sign in to continue
          </span>
        </h1>

        {/* <p className="mt-6 text-lg leading-8 text-slate-400 font-sora max-w-lg mx-auto">
            Access your BackMe account, support your favorite creators, manage your
            contributions, and continue your creator journey—all in one place.
          </p> */}
      </div>
      <div className="mt-10 md:max-w-md md:mx-auto mx-6 space-y-4 mb-10">

        <button className="w-full flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg py-3.5 px-6 text-white font-medium hover:bg-white/10 hover:border-emerald-400/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="w-6 h-6"
          />
          Continue with Google
        </button>

        <button className="w-full flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg py-3.5 px-6 text-white font-medium hover:bg-white/10 hover:border-emerald-400/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer" onClick={() => { signIn("github") }}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-6 h-6 bg-white rounded-full p-0.5"
          />
          Continue with GitHub
        </button>

        <button className="w-full flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg py-3.5 px-6 text-white font-medium hover:bg-white/10 hover:border-emerald-400/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="w-6 h-6"
          />
          Continue with LinkedIn
        </button>

        <button className="w-full flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg py-3.5 px-6 text-white font-medium hover:bg-white/10 hover:border-emerald-400/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="w-5 h-5 invert"
          />
          Continue with Apple
        </button>
      </div>
    </div>
  )
}

export default Login
