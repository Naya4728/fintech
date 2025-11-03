"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { dummyTransactions } from "@/utils/dummyData";

export default function Chart() {
  const data = dummyTransactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  return (
    <div className="bg-[#1a1a1f] p-6 rounded-2xl shadow-md">
      <h3 className="mb-4 text-lg font-semibold">Spending Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
