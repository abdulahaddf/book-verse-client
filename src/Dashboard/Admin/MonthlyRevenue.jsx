import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const MonthlyRevenue = () => {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF9A8B",
    "#B98EFF",
  ];

  const [monthlyRevenue, setMonthlyRevenue] = useState([]);

  useEffect(() => {
    async function fetchMonthlyRevenue() {
      try {
        const response = await fetch("http://localhost:5000/monthlyRevenue");
        if (response.ok) {
          const data = await response.json();
          setMonthlyRevenue(data);
        } else {
          console.error("Error fetching monthly revenue:", response.status);
        }
      } catch (error) {
        console.error("Error fetching monthly revenue:", error);
      }
    }

    fetchMonthlyRevenue();
  }, []);

  return (
    <div className="w-full mt-6 h-full p-4">
      <h3 className="text-4xl font-bold text-center">Monthly Revenue</h3>
      <p className="text-center text-gray-600 mt-2">
        Revenue data for the current months.
      </p>
      <div className="w-full bg-slate-100 border rounded-md my-4 p-6">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={monthlyRevenue}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" label={{ position: "top" }}>
              {monthlyRevenue.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyRevenue;
