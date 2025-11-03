"use client";
import { motion } from "framer-motion";
import { ArrowUpCircle, ArrowDownCircle, Wallet, TrendingUp } from "lucide-react";
import Chart from "@/components/Chart";
import { dummyTransactions } from "@/utils/dummyData";

export default function Dashboard() {
  const totalExpenses = dummyTransactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalIncome = dummyTransactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const netBalance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-gray-400">Your personal finance overview at a glance</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1a1a1f] p-6 rounded-2xl shadow-lg flex items-center justify-between"
        >
          <div>
            <h3 className="text-gray-400 mb-1">Total Income</h3>
            <p className="text-2xl font-bold text-green-400">₦{totalIncome.toLocaleString()}</p>
          </div>
          <ArrowUpCircle className="text-green-400" size={40} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1a1a1f] p-6 rounded-2xl shadow-lg flex items-center justify-between"
        >
          <div>
            <h3 className="text-gray-400 mb-1">Total Expenses</h3>
            <p className="text-2xl font-bold text-red-400">₦{totalExpenses.toLocaleString()}</p>
          </div>
          <ArrowDownCircle className="text-red-400" size={40} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1a1a1f] p-6 rounded-2xl shadow-lg flex items-center justify-between"
        >
          <div>
            <h3 className="text-gray-400 mb-1">Net Balance</h3>
            <p
              className={`text-2xl font-bold ${
                netBalance >= 0 ? "text-blue-400" : "text-red-400"
              }`}
            >
              ₦{netBalance.toLocaleString()}
            </p>
          </div>
          <Wallet className="text-blue-400" size={40} />
        </motion.div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-[#1a1a1f] p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Spending Overview</h3>
          <Chart />
        </div>

        <div className="bg-[#1a1a1f] p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="text-blue-400" /> AI Insights
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>💡 You spent 15% less on Food this week.</li>
            <li>📈 Transport costs are up by ₦2,000 compared to last month.</li>
            <li>🎯 You’re 70% towards your “New Laptop” goal.</li>
          </ul>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-[#1a1a1f] p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400">
                <th className="py-3 px-2">Date</th>
                <th className="py-3 px-2">Category</th>
                <th className="py-3 px-2">Type</th>
                <th className="py-3 px-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {dummyTransactions.map((t) => (
                <tr key={t.id} className="border-b border-gray-800 hover:bg-[#222] transition">
                  <td className="py-3 px-2 text-gray-300">{t.date}</td>
                  <td className="py-3 px-2 text-gray-300">{t.category}</td>
                  <td
                    className={`py-3 px-2 ${
                      t.type === "income" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
                  </td>
                  <td className="py-3 px-2 text-right text-gray-200">
                    ₦{t.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
