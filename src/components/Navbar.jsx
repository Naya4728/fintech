"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for menu icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#151518] text-white px-6 md:px-12 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          VaultPay
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <Link href="/dashboard" className="hover:text-blue-400 transition">
            Dashboard
          </Link>
          <Link href="/transactions" className="hover:text-blue-400 transition">
            Transactions
          </Link>
          <Link href="/goals" className="hover:text-blue-400 transition">
            Goals
          </Link>
          <Link href="/investments" className="hover:text-blue-400 transition">
            Investments
          </Link>
          <Link
            href="/login"
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-[#1d1d20] p-4 rounded-lg shadow-lg">
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300 hover:text-blue-400"
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300 hover:text-blue-400"
          >
            Transactions
          </Link>
          <Link
            href="/goals"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300 hover:text-blue-400"
          >
            Goals
          </Link>
          <Link
            href="/investments"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300 hover:text-blue-400"
          >
            Investments
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block bg-blue-500 text-white text-center px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
