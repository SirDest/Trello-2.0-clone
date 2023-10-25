"use client";
import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 justify-end flex-1 w-full">
          {/* Search Box */}
          <form
            action=""
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="w-6 text-gray-400 h-6" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="Akinro Destined" round color="#0055D1" size="50" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5 ">
        <p className="flex items-center text-sm pr-5 font-light shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1] p-5">
          <UserCircleIcon className="h-10 w-10 inline-block mr-1 text-[#0055d1]" />
          GPT is summarizing your tasks for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
