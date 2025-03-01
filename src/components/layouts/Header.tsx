"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Link2,
  Copy,
  User,
  Menu,
  X,
  Check,
  Settings,
  LogOut,
} from "lucide-react";
import { copyToClipboard } from "@/utils/helpers";

export default function Header() {
  const [nav_state, setNavState] = useState(false);
  const [copy_btn, setCopyBtn] = useState(false);
  const [profile_options, setOptions] = useState(false);

  const copyToClipboardLink = async (): Promise<void> => {
    try {
      const result = await copyToClipboard("link_span");
      if (result.sucess) {
        setCopyBtn(true);

        setTimeout(() => {
          setCopyBtn(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error copying:", error);
    }
  };

  return (
    <>
      <header className="bg-white w-full py-4 flex flex-col md:flex-row justify-center items-center">
        <nav className="w-[80%] md:w-[90%] lg:w-[80%] px-2 py-1 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="bg-black p-3 mr-4 rounded-2xl">
                <Link2 color="white" className="-rotate-45" />
              </div>

              <h1 className="text-2xl">
                Azy<span className="font-bold">Link</span>
                <span className="text-blue-500">.</span>
              </h1>
            </div>

            {/* mobile hamburger icon */}
            <button
              onClick={() => setNavState((nav_state) => !nav_state)}
              className="relative md:hidden cursor-pointer"
            >
              <div
                className={`transform transition-transform duration-300 ${
                  nav_state ? "rotate-180" : "rotate-0"
                }`}
              >
                {nav_state ? <X size={30} /> : <Menu size={30} />}
              </div>
            </button>
          </div>

          <div
            className={`${
              nav_state ? "flex" : "hidden"
            } mt-6 md:mt-0 md:flex justify-center items-center transform transition-transform duration-300`}
          >
            <div className="max-w-[70%] h-auto bg-gray-100 p-2 flex justify-center items-center rounded-xl">
              <Link2 size={15} color="#a8a8a8" className="-rotate-45 mr-3" />
              <span
                id="link_span"
                className="text-sm line-clamp-2 whitespace-nowrap overflow-hidden select-none"
              >
                azybia.link/benounis-real-estate
              </span>
            </div>

            <button
              onClick={() => copyToClipboardLink()}
              data-tooltip-target="tooltip"
              className={`${
                copy_btn ? "bg-white border border-green-400" : "bg-black"
              } relative flex justify-center items-center mx-2 p-3 rounded-xl active:scale-[0.90] ease transition-all duration-300 cursor-pointer`}
            >
              <div className="transform transition-transform duration-300">
                {copy_btn ? (
                  <Check size={15} color="green" />
                ) : (
                  <Copy size={15} color="white" />
                )}
              </div>
            </button>
            {/* copy button tooltip */}
            <div
              className={`${
                copy_btn ? "absolute" : "hidden"
              } absolute top-12 right-10 z-50 whitespace-normal break-words rounded-lg bg-white py-1.5 px-3 font-sans text-sm font-normal text-black border border-green-400 focus:outline-none transform transition-transform duration-300`}
            >
              Copied!
            </div>

            <button
              onClick={() => setOptions((profile_options) => !profile_options)}
              className="relative flex justify-center items-center bg-gray-100 p-3 rounded-xl active:scale-[0.90] ease transition-all duration-300 cursor-pointer"
            >
              {profile_options ? (
                <X size={17} />
              ) : (
                <User size={17} color="black" />
              )}
            </button>
            <div
              className={`${
                profile_options ? "absolute" : "hidden"
              } top-12 z-20 right-0 w-40 px-2 py-4 bg-[#FFFFFF] shadow-md shadow-[#00000029] flex flex-col justify-center items-center rounded-2xl transform transition-transform duration-300`}
            >
              <div className="w-[75%] flex flex-col jusitfy-center items-center">
                <Link
                  href="#"
                  className="w-full flex justify-start items-center"
                >
                  <User size={15} />
                  <span className="ml-2 text-md">Profile</span>
                </Link>
                <Link
                  href="#"
                  className="w-full my-2 flex justify-start items-center"
                >
                  <Settings size={15} />
                  <span className="ml-2 text-md">Settings</span>
                </Link>
                <button className="w-full flex justify-start items-center text-red-400">
                  <LogOut size={15} />
                  <span className="ml-2 text-md">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
