export default function DashboardCard({ title, value, color }) {
  const colors = {
    red: "text-red-400",
    green: "text-green-400",
    blue: "text-blue-400",
  };

  return (
    <div className="bg-[#1a1a1f] p-6 rounded-2xl shadow-md">
      <h3 className="text-gray-400">{title}</h3>
      <p className={`text-2xl font-bold ${colors[color]}`}>{value}</p>
    </div>
  );
}
