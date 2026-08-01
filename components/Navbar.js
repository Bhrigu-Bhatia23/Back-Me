"use client"
import { React, useState } from 'react'
import HandCoinsIcon from "./HandCoinsIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import UserIcon from './UserIcon';
import LayoutGridIcon from './LayoutGridIcon';
import Link from 'next/link';
import LogoutIcon from './LogoutIcon';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()
  console.log(session);

  return (
    <nav className="mx-0 bg-[#030712]/60 h-15 backdrop-blur-3xl border-b border-white/10 flex items-center justify-between sticky top-0 z-50 ">
   
      <span className="text-slate-300 text-lg font-medium p-4 font-sora flex items-center gap-2 cursor-pointer">
        <Link href={"/"}> BackMe </Link><HandCoinsIcon
          size={23}
          className='text-emerald-400'
        /> 
      </span>

      <ul className="flex text-lg gap-4 mx-0 justify-center items-center">
        <li className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
          <Link href={"/"}> Home </Link>
        </li>

        <li className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
          <Link href="/#features"> Features </Link>
        </li>

        <li className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
          <Link href={"/contact"}> Contact </Link>
        </li>

        <div className="text-gray-300 transition-colors duration-300 cursor-pointer flex gap-4">

          {session ? (
            <li className="relative list-none px-3 py-2 rounded-lg text-gray-300 hover:bg-zinc-800 transition-colors duration-300 cursor-pointer ">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
              >
                {session.user.name}
                <ChevronDownIcon
                  open={open}
                  size={18}
                  className="hover:text-emerald-400"
                />
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-48 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg overflow-hidden">
                  <Link
                   // href="/profile"

                     href={`/${session.user.username}`}
                    className=" flex items-center  gap-2 block px-4 py-3 hover:bg-zinc-800 hover:text-emerald-400 transition-colors duration-300"
                  >
                   <UserIcon size={20}/> Profile
                  </Link>

                  <Link
                    href="/dashboard"
                    className="block px-4 flex items-center gap-2 py-3 hover:bg-zinc-800 transition-colors hover:text-emerald-400 duration-300"
                  >
                   <LayoutGridIcon size={20} /> Dashboard
                  </Link>
                   
                  <hr className="border-zinc-700" />

                  <button
                    onClick={() => signOut()}
                    className="w-full flex items-center gap-2 text-left px-4 py-3 hover:bg-red-600 transition-colors hover:text-white duration-300"
                  >
                  <LogoutIcon size={20} />  Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li className="list-none mr-5">
              <Link
                href="/login"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                Login
              </Link>
            </li>
          )}
        </div>

      </ul>
    </nav>
  )
}

export default Navbar
