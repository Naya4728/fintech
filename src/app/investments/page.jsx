"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  PieChart,
  DollarSign,
  BarChart3,
  X,
} from "lucide-react";

const InvestmentsPage = () => {
  const [investments, setInvestments] = useState([
    {
      id: 1,
      name: "Tech Growth Fund",
      amount: 250000,
      returnRate: 12.4,
      status: "positive",
      risk: "High",
    },
    {
      id: 2,
      name: "Green Energy ETF",
      amount: 180000,
      returnRate: 8.9,
      status: "positive",
      risk: "Medium",
    },
    {
      id: 3,
      name: "Real Estate Trust",
      amount: 320000,
      returnRate: -2.3,
      status: "negative",
      risk: "Low",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newInvestment, setNewInvestment] = useState({
    name: "",
    amount: "",
    returnRate: "",
    risk: "Medium",
  });

  const handleAddInvestment = (e) => {
    e.preventDefault();
    if (!newInvestment.name || !newInvestment.amount) return;

    const status = newInvestment.returnRate >= 0 ? "positive" : "negative";
    setInvestments([
      ...investments,
      {
        id: investments.length + 1,
        ...newInvestment,
        amount: parseFloat(newInvestment.amount),
        returnRate: parseFloat(newInvestment.returnRate),
        status,
      },
    ]);

    setNewInvestment({ name: "", amount: "", returnRate: "", risk: "Medium" });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-semibold">Investments</h2>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <DollarSign size={18} /> Add Investment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow border border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Total Invested</h3>
            <PieChart className="text-blue-600" />
          </div>
          <p className="text-2xl font-semibold mt-3">
            ₦
            {investments
              .reduce((sum, i) => sum + i.amount, 0)
              .toLocaleString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow border border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Avg Return</h3>
            <BarChart3 className="text-green-600" />
          </div>
          <p className="text-2xl font-semibold mt-3 text-green-600">
            {(
              investments.reduce((sum, i) => sum + i.returnRate, 0) /
              investments.length
            ).toFixed(1)}
            %
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow border border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Active Assets</h3>
            <TrendingUp className="text-purple-600" />
          </div>
          <p className="text-2xl font-semibold mt-3">{investments.length}</p>
        </motion.div>
      </div>

      {/* Investments Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-900 shadow-sm rounded-2xl p-4 border border-gray-200 dark:border-gray-800">
        <table className="min-w-full text-sm text-left">
          <thead className="border-b border-gray-200 dark:border-gray-700">
            <tr className="text-gray-600 dark:text-gray-400">
              <th className="py-3 px-4">Investment Name</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Return Rate</th>
              <th className="py-3 px-4">Risk Level</th>
              <th className="py-3 px-4">Performance</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((inv) => (
              <motion.tr
                key={inv.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="py-3 px-4 font-medium">{inv.name}</td>
                <td className="py-3 px-4 font-semibold">
                  ₦{inv.amount.toLocaleString()}
                </td>
                <td
                  className={`py-3 px-4 font-medium ${
                    inv.status === "positive" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {inv.returnRate > 0 ? "+" : ""}
                  {inv.returnRate}%
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      inv.risk === "High"
                        ? "bg-red-100 text-red-700"
                        : inv.risk === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {inv.risk}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {inv.status === "positive" ? (
                    <TrendingUp className="text-green-500" />
                  ) : (
                    <TrendingDown className="text-red-500" />
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Investment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-200 dark:border-gray-700 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X size={18} />
              </button>

              <h3 className="text-2xl font-semibold mb-4 text-center">
                Add New Investment
              </h3>

              <form onSubmit={handleAddInvestment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Investment Name
                  </label>
                  <input
                    type="text"
                    value={newInvestment.name}
                    onChange={(e) =>
                      setNewInvestment({
                        ...newInvestment,
                        name: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="e.g. Crypto Index Fund"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Amount (₦)
                  </label>
                  <input
                    type="number"
                    value={newInvestment.amount}
                    onChange={(e) =>
                      setNewInvestment({
                        ...newInvestment,
                        amount: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Return Rate (%)
                  </label>
                  <input
                    type="number"
                    value={newInvestment.returnRate}
                    onChange={(e) =>
                      setNewInvestment({
                        ...newInvestment,
                        returnRate: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Risk Level
                  </label>
                  <select
                    value={newInvestment.risk}
                    onChange={(e) =>
                      setNewInvestment({
                        ...newInvestment,
                        risk: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Save Investment
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvestmentsPage;
