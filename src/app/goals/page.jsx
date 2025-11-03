"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Target, X, Wallet } from "lucide-react";

export default function GoalsPage() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Buy a Car",
      targetAmount: 5000000,
      savedAmount: 2500000,
      category: "Savings",
      date: "2025-12-31",
    },
    {
      id: 2,
      title: "Vacation in Dubai",
      targetAmount: 2000000,
      savedAmount: 900000,
      category: "Travel",
      date: "2025-08-15",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    targetAmount: "",
    savedAmount: "",
    category: "",
    date: "",
  });

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoal.title || !newGoal.targetAmount) return;

    const goal = {
      id: goals.length + 1,
      ...newGoal,
      targetAmount: parseFloat(newGoal.targetAmount),
      savedAmount: parseFloat(newGoal.savedAmount) || 0,
    };

    setGoals([...goals, goal]);
    setShowModal(false);
    setNewGoal({
      title: "",
      targetAmount: "",
      savedAmount: "",
      category: "",
      date: "",
    });
  };

  const progress = (goal) =>
    Math.min((goal.savedAmount / goal.targetAmount) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold flex items-center gap-2">
          <Target className="text-blue-600" /> Financial Goals
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={18} /> Add Goal
        </button>
      </div>

      {/* Goals List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg">{goal.title}</h3>
              <Wallet className="text-blue-600" size={20} />
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Target: ₦{goal.targetAmount.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Saved:{" "}
              <span className="font-medium">
                ₦{goal.savedAmount.toLocaleString()}
              </span>
            </p>

            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 mb-4">
              <div
                className="h-2 bg-blue-600 rounded-full"
                style={{ width: `${progress(goal)}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span>{goal.category || "General"}</span>
              <span className="text-gray-500">{goal.date}</span>
            </div>

            <div className="mt-3 text-right">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  progress(goal) >= 100
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {progress(goal) >= 100
                  ? "Completed"
                  : `${Math.round(progress(goal))}%`}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Goal Modal */}
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

              <h3 className="text-xl font-semibold mb-4">Add New Goal</h3>

              <form onSubmit={handleAddGoal} className="space-y-4">
                <input
                  type="text"
                  placeholder="Goal Title"
                  value={newGoal.title}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, title: e.target.value })
                  }
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="number"
                  placeholder="Target Amount (₦)"
                  value={newGoal.targetAmount}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, targetAmount: e.target.value })
                  }
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="number"
                  placeholder="Saved Amount (₦)"
                  value={newGoal.savedAmount}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, savedAmount: e.target.value })
                  }
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Category (e.g., Savings, Travel)"
                  value={newGoal.category}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, category: e.target.value })
                  }
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  value={newGoal.date}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, date: e.target.value })
                  }
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save Goal
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
