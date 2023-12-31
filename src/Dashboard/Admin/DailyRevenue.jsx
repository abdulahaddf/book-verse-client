import { useContext } from "react";
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
import { AuthContext } from "../../provider/AuthProvider";

const DailyRevenue = () => {
  const [dailyData, setDailyData] = useState([]);

  // Tonmoy Start

  const { darkMode } = useContext(AuthContext);

  //  Tonmoy End

  useEffect(() => {
    async function fetchDailyData() {
      try {
        const response = await fetch(
          "https://book-verse-team-project-server.up.railway.app/dailyRevenue"
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
    <div className="w-[414px] md:w-full mx-auto h-full p-2 px-8  lg:p-4 mt-10">
      <h2 className="text-4xl font-bold text-center">Daily Revenue Chart</h2>
      <p
        className={
          darkMode
            ? "text-center text-gray-100 mt-2"
            : "text-center text-gray-600 mt-2"
        }
      >
        Revenue data for every single day in the current months.
      </p>
      <div
        className={
          darkMode
            ? "rounded-md border p-2 my-4 bg-gray  text-white overflow-x-auto"
            : "rounded-md border p-2 my-4 bg-slate-50 overflow-x-auto"
        }
      >
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={darkMode ? "#3f3f46" : "#f0f0f0"}
            />
            <XAxis
              dataKey="day"
              // tick={{ fill: "#333" }}
              tickLine={false}
              interval={4}
              stroke={darkMode ? "#ffffff" : "#333"}
            />
            <YAxis
              yAxisId="left"
              // tick={{ fill: "#333" }}
              stroke={darkMode ? "#ffffff" : "#333"}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", color: "#fff" }}
            />
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
              stroke="#059EB9"
              strokeWidth={2}
              dot={{ fill: "#8884d8", strokeWidth: 2, r: 6 }}
              activeDot={{ fill: "#CD0774", r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyRevenue;
