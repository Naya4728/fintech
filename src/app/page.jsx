"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#f9fafb] to-[#eef1f5] dark:from-[#0f1115] dark:to-[#181b20] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 md:px-16 relative overflow-hidden">
        {/* Hero Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Smarter Money. Brighter Future.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-xl text-base md:text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          VaultPay helps you save, invest, and manage your finances effortlessly —
          all in one secure, easy-to-use app built for everyone.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-300 w-48 text-center shadow-md"
          >
            Create Account
          </Link>
          <Link
            href="/login"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 w-48 text-center"
          >
            Login
          </Link>
        </motion.div>

        {/* Supporting Info */}
        <motion.div
          className="mt-10 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Trusted by over <span className="font-semibold text-blue-600">20,000+</span> users worldwide 🌍
        </motion.div>

        {/* Floating Glow Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1115] text-gray-400 py-10 px-8 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">VaultPay</h3>
            <p className="text-sm">
              Empowering your financial journey — save, invest, and grow with confidence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className="hover:text-blue-400 transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="hover:text-blue-400 transition">
                  Transactions
                </Link>
              </li>
              <li>
                <Link href="/investments" className="hover:text-blue-400 transition">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/goals" className="hover:text-blue-400 transition">
                  Goals
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Naya4728" className="hover:text-blue-400 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/olayinka-adenaya-b92462267/" className="hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} VaultPay. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
