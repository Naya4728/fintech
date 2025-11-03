"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Search,
  Plus,
  ReceiptText,
  X,
} from "lucide-react";
import { dummyTransactions } from "@/utils/dummyData";

export default function TransactionsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const filtered = dummyTransactions.filter((t) => {
    const title = t?.title?.toLowerCase() || "";
    const matchSearch = title.includes(search.toLowerCase());
    const matchFilter = filter === "all" || t.type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Transactions</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Search */}
          <div className="relative w-full sm:w-auto">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search transaction..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 border border-blue-500 dark:border-gray-700 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
          </div>

          {/* Filter */}
          <div className="relative w-full sm:w-auto">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 pr-8 w-full bg-black text-white"
            >
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Add Button */}
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow-sm rounded-2xl p-4 border border-gray-200 dark:border-gray-800">
        <table className="min-w-full text-sm text-left">
          <thead className="hidden sm:table-header-group border-b border-gray-200 dark:border-gray-700">
            <tr className="text-gray-600 dark:text-gray-400">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((t) => (
                <motion.tr
                  key={t.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition block sm:table-row mb-4 sm:mb-0 rounded-xl sm:rounded-none sm:p-0"
                >
                  {/* Mobile Card View */}
                  <td className="block sm:table-cell py-3 px-4 font-medium sm:font-normal">
                    <div className="sm:hidden mb-2">
                      <span className="text-sm font-semibold">{t.title}</span>
                      <p className="text-xs text-gray-500">{t.date}</p>
                    </div>
                    <div className="hidden sm:block">{t.title}</div>
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        t.type === "income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {t.type === "income" ? (
                        <ArrowUpCircle size={14} />
                      ) : (
                        <ArrowDownCircle size={14} />
                      )}
                      {t.type}
                    </span>
                  </td>

                  <td className="py-3 px-4 font-semibold">
                    ₦{t.amount.toLocaleString()}
                  </td>

                  <td className="hidden sm:table-cell py-3 px-4 text-gray-500">
                    {t.date}
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        t.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : t.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <button
                      onClick={() => setSelectedTransaction(t)}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <ReceiptText size={16} /> View
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedTransaction && (
          <Modal onClose={() => setSelectedTransaction(null)} title="Transaction Receipt">
            <ReceiptDetails transaction={selectedTransaction} />
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddModal && (
          <Modal onClose={() => setShowAddModal(false)} title="Add New Transaction">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Transaction Title"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Amount"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-black text-white">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Save Transaction
              </button>
            </form>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

// 🔹 Reusable Modal Component
function Modal({ children, onClose, title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-200 dark:border-gray-700 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <X size={18} />
        </button>
        <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
        {children}
      </motion.div>
    </motion.div>
  );
}

// 🔹 Receipt Component
function ReceiptDetails({ transaction }) {
  return (
    <div className="space-y-4 text-sm">
      {[
        ["Title", transaction.title],
        ["Amount", `₦${transaction.amount.toLocaleString()}`],
        ["Type", transaction.type],
        ["Date", transaction.date],
        ["Status", transaction.status],
      ].map(([label, value]) => (
        <div key={label} className="flex justify-between">
          <span className="text-gray-500">{label}</span>
          <span className="font-medium capitalize">{value}</span>
        </div>
      ))}

      <div className="mt-6 text-center">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}
