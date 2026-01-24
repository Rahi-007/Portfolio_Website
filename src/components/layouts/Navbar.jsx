"use client"

import { cn } from "@/lib/utils";
import { navLinks } from "@/data/data";
import { logo, menu, close } from "@/data/assets";
import { styles } from "@/style/styles";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <div
      className={cn(
        "flex items-center fixed top-0 z-20 bg-primary w-full h-min",
        styles.paddingX
      )}
    >
      <div className="w-full flex justify-between items-center m-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[18px] text-white font-bold cursor-pointer flex">
            Bisakto Rahi &nbsp;
            <span className="hidden sm:block font-normal"> | Portfolio</span>
          </p>
        </Link>
        <nav className="hidden sm:flex sm:flex-row gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.id}
              className={cn(
                "text-[18px] font-medium cursor-pointer",
                "hover:text-red-400 transition-colors delay-75 ease-in-out",
                active === link.id ? "text-white" : "text-secondary"
              )}
              onClick={() => {
                setActive(link.id);
                window.scrollTo(0, 0)
              }}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <nav className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-5 h-5 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={cn(
            "p-4 black-gradient absolute top-9 right-0 mx-4 my-2 min-w-35 z-10 rounded-xl",
            (!toggle ? "hidden" : "flex")
          )}>
            <div className="flex flex-col justify-center items-start gap-px w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.id}
                  className={cn(
                    "text-[16px] font-medium cursor-pointer",
                    active === link.id ? "text-white" : "text-secondary"
                  )}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
