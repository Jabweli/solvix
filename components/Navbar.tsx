"use client";
import { AlignJustify, HandPlatter, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full responsive-padding py-4 flex items-center justify-between">
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
          <Button aria-label="close menu" variant="outline" onClick={() => setIsOpen(false)}>
            <X className="text-dark-bg text-xl cursor-pointer" />
          </Button>
        ) : (
          <Button aria-label="open menu" variant="outline" onClick={() => setIsOpen(true)}>
            <AlignJustify className="text-dark-bg text-xl cursor-pointer" />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
