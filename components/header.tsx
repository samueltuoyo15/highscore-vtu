"use client";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-gray-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-xs text-gray-500">Welcome back, Subscriber</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center relative">
            <Search className="w-4 h-4 absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 outline-none w-64 transition-all"
            />
          </div>

          <button className="relative p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <Link href="/profile" className="flex items-center gap-3 pl-2 border-l border-gray-100">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full object-cover border-2 border-white shadow-sm"
                src="/-go5dvk.jpg"
                alt="user-profile-pic"
                fill
              />
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-700">Subscriber</p>
              <p className="text-[10px] text-gray-500 font-medium">Standard Plan</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
