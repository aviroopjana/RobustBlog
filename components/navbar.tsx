"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { PenSquare, Search } from 'lucide-react';

import { Input } from "./ui/input";

const font = Poppins({
  weight: '600',
  subsets: ["latin"]
});


const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex items-center justify-between px-5 py-2 border-b border-primary/10 bg-slate-800 h-16">
        <div className="flex items-center" >
            <Link href="/">
              <h1 className={cn("md:text-3xl font-bold text-slate-50 ml-8",font.className)}>
                RobustBlog
              </h1>
            </Link>
        </div>
        <div className="relative">
          <Input
            className="bg-slate-300 rounded-2xl	w-full"
            type="text"
            placeholder="Search"
          />
          <Search className="absolute right-4 top-2" size={22} />
        </div>
        <div className="flex justify-evenly items-center gap-x-2 text-white" >
          <PenSquare color="white" className=""/>
          <h4>Write</h4>
        </div>
    </div>
  )
}

export default Navbar