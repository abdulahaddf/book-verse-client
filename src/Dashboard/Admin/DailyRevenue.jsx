import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DailyRevenue = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    async function fetchDailyData() {
      try {
        const response = await fetch(
          "http://localhost:5000/dailyRevenue"
        );
        if (response.ok) {
          const data = await response.json();
          setDailyData(data.dailyRevenue);
        } else {
          console.error("Error fetching daily data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching daily data:", error);
      }
    }

    fetchDailyData();
  }, []);

  const chartData = dailyData.map((item) => ({
    day: item.date,
    revenue: parseFloat(item.revenue),
  }));

  return (
    <div className="w-full h-full p-4 mt-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">
        Daily Revenue Chart
      </h2>
      <p className="text-center text-gray-600 my-4">
        Revenue data for every single day in the current months.
      </p>
      <div className="rounded-md border p-6 bg-slate-100">
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 40,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="day"
              tick={{ fill: "#333" }}
              tickLine={false}
              interval={4}
            />
            <YAxis yAxisId="left" tick={{ fill: "#333" }} />
            <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
            <Legend
              wrapperStyle={{
                fontSize: 14,
                fontWeight: "bold",
              }}
              iconSize={16}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ fill: "#8884d8", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyRevenue;
