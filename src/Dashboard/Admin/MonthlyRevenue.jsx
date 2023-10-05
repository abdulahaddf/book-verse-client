import { useContext } from "react";
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
import { AuthContext } from "../../provider/AuthProvider";

const MonthlyRevenue = () => {
  // Tonmoy Start

  const { darkMode } = useContext(AuthContext);

  //  Tonmoy End

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF9A8B",
    "#B98EFF",
    "#C31D93",
    "#34AA8C",
  ];

  const [monthlyRevenue, setMonthlyRevenue] = useState([]);

  useEffect(() => {
    async function fetchMonthlyRevenue() {
      try {
        const response = await fetch(
          "https://book-verse-team-project-server.up.railway.app/monthlyRevenue"
        );
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

  // Calculate the min and max revenue for Y-axis domain
  const revenueValues = monthlyRevenue.map((entry) => entry.revenue);
  const minY = Math.min(...revenueValues);
  const maxY = Math.max(...revenueValues);

  return (
    <div className="w-[414px] md:w-full mx-auto h-full p-2 px-8 lg:p-4 mt-10">
      <h3 className="text-4xl font-bold text-center">Monthly Revenue</h3>
      <p
        className={
          darkMode
            ? "text-center text-gray-200 mt-2"
            : "text-center text-gray-600 mt-2"
        }
      >
        Revenue data for the current months.
      </p>
      <div
        className={
          darkMode
            ? "w-full bg-gray border rounded-md my-4 p-6"
            : "w-full bg-slate-50 border rounded-md my-4 p-6"
        }
      >
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={monthlyRevenue}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 40,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={darkMode ? "#3f3f46" : "#d1d5db"}
            />
            <XAxis dataKey="month" stroke={darkMode ? "#ffffff" : "#333"} />
            <YAxis
              domain={[minY, maxY]}
              stroke={darkMode ? "#ffffff" : "#333"}
            />{" "}
            {/* Set Y-axis domain */}
            <Tooltip />
            <Bar
              dataKey="revenue"
              label={{ position: "top", fill: "#126e9d" }} // Display label on top of bars
              barSize={30} // Adjust bar width
            >
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
