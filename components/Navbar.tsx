"use client";
import { AlignJustify, HandPlatter, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if(document.documentElement.scrollTop > 0){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])

  return (
    <nav className={cn("w-full fixed top-0 left-0 responsive-padding py-4 flex items-center justify-between z-[999]", isScrolled && "shadow-lg bg-container")}>
      <Link
        href="/"
        className="flex items-center gap-1 text-dark-bg font-bold text-2xl"
      >
        <HandPlatter /> Solvix
      </Link>

      <div className="hidden lg:flex flex-1 items-center justify-center gap-14">
        <Link href="/" className={cn(pathname === "/" && "text-link-active")}>
          Home
        </Link>
        <Link
          href="/about"
          className={cn(pathname === "/about" && "text-link-active")}
        >
          About Us
        </Link>
        <Link
          href="/projects"
          className={cn(pathname === "/projects" && "text-link-active")}
        >
          Projects
        </Link>
      </div>

      <Button
        aria-label="got contact page"
        variant="outline"
        className="hidden lg:inline-block rounded-full cursor-pointer"
      >
        <Link href="/contact">Contact Us</Link>
      </Button>

      <div className="flex lg:hidden">
        {isOpen ? (
          <Button
            aria-label="close menu"
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            <X className="text-dark-bg text-xl cursor-pointer" />
          </Button>
        ) : (
          <Button
            aria-label="open menu"
            variant="outline"
            onClick={() => setIsOpen(true)}
          >
            <AlignJustify className="text-dark-bg text-xl cursor-pointer" />
          </Button>
        )}
      </div>

      {/* mobile nav */}
      {isOpen && (
        <div className="flex flex-col lg:hidden absolute top-[100%] right-4 gap-0">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.1)] bg-dark-bg w-full p-[1rem_5rem_1rem_2rem] flex items-center border-t-[1px] border-textGray/20 animate-navAnimation rotate-x-90 opacity-0 origin-top text-container text-[15px]"
              style={{ animationDelay: `${200 * index}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
