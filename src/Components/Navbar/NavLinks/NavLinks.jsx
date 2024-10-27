import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinks = ({ scrollToSection, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:mr-5 md:mr-10 lg:mr-16 xl:mr-24">
      <nav>
        <ul className="hidden md:flex">
          {links.length > 0 ? (
            links.map(({ id, link, ref }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    scrollToSection(ref);
                    setOpen(false);
                  }}
                  className="px-4 duration-300 cursor-pointer hover:scale-105 py-2 text-xl font-bold text-gray-600 hover:text-gray-800"
                >
                  {link}
                </button>
              </li>
            ))
          ) : (
            <li className="text-gray-600">No links available</li>
          )}
        </ul>
      </nav>

      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer md:hidden lg:hidden xl:hidden mr-5"
      >
        {open ? (
          <FaTimes className="text-gray-600 z-50 relative text-3xl" />
        ) : (
          <FaBars className="text-gray-600 text-3xl" />
        )}
      </div>

      {open && (
        <nav>
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-green-100 to-gray-300">
            {links.map(({ id, link, ref }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    scrollToSection(ref);
                    setOpen(false);
                  }}
                  className="px-4 duration-300 cursor-pointer hover:scale-105 py-2 text-xl font-bold text-gray-600 hover:text-gray-800"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavLinks;
