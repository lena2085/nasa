import React from "react";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200 px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Bloomsphere Logo" className="w-8 h-8" />
        <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
          BloomGuard
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 font-medium">Hello, User</span>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <LogOut size={20} className="text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
