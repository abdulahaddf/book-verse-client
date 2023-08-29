import { FaInbox } from "react-icons/fa";
import {
  MdCalendarMonth,
  MdOutlineChildFriendly,
  MdOutlinePointOfSale,
} from "react-icons/md";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const AdminHome = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  const [revenueSummary, setRevenueSummary] = useState({
    totalRevenueToday: 0,
    totalRevenueCurrentMonth: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetch("https://book-verse-server-phi.vercel.app/revenueSummary")
      .then((response) => response.json())
      .then((data) => {
        setRevenueSummary(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetch("https://book-verse-server-phi.vercel.app/paymentHistory")
      .then((res) => res.json())
      .then((data) => {
        setPaymentHistory(data);
      });
  }, []);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="w-full h-full ps-4 lg:p-4 md:mt-6">
      <h1 className="text-4xl font-bold text-center">Admin home</h1>

      {/* ----------------Revenue start------------- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="w-full h-full shadow-xl p-5 rounded-md bg-slate-100">
            <li className="flex justify-between items-center">
              <h5>Customers</h5>
              <p className="text-2xl">
                <FaInbox></FaInbox>
              </p>
            </li>
            <h3 className="text-3xl font-semibold my-6">
              {paymentHistory.length}
            </h3>
            <li className="flex justify-between items-center">
              <p className="text-green-600">+14%</p>
              <p>last month</p>
            </li>
          </div>

          <div className="w-full h-full shadow-xl p-5 rounded-md bg-slate-100">
            <li className="flex justify-between items-center">
              <h5>Sales Today</h5>
              <p className="text-2xl">
                <MdOutlinePointOfSale></MdOutlinePointOfSale>
              </p>
            </li>
            <h3 className="text-3xl font-semibold my-6">
              ${revenueSummary.totalRevenueToday}
            </h3>
            <li className="flex justify-between items-center">
              <p className="text-green-600">+14%</p>
              <p>last month</p>
            </li>
          </div>

          <div className="w-full h-full shadow-xl p-5 rounded-md bg-slate-100">
            <li className="flex justify-between items-center">
              <h5>Sales/month</h5>
              <p className="text-2xl">
                <MdOutlineChildFriendly></MdOutlineChildFriendly>
              </p>
            </li>
            <h3 className="text-3xl font-semibold my-6">
              {" "}
              ${revenueSummary.totalRevenueCurrentMonth}
            </h3>
            <li className="flex justify-between items-center">
              <p className="text-green-600">+06%</p>
              <p>last month</p>
            </li>
          </div>

          <div className="w-full h-full shadow-xl p-5 rounded-md bg-slate-100">
            <li className="flex justify-between items-center">
              <h5>Sales/total</h5>
              <p className="text-2xl">
                <MdCalendarMonth></MdCalendarMonth>
              </p>
            </li>
            <h3 className="text-3xl font-semibold my-6">
              ${revenueSummary.totalRevenue}
            </h3>
            <li className="flex justify-between items-center">
              <p className="text-green-600">+26%</p>
              <p>last month</p>
            </li>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-slate-100 shadow-xl p-5 rounded-md ">
          <div style={{ width: "100%", height: 330 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* ----------------Revenue end-------------- */}

      {/* customer info start */}
      <div className="flex flex-col md:flex-row justify-between mt-10 gap-6">
        <div className="w-full overflow-x-auto rounded-md shadow-xl">
          <table className="table table-zebra w-full text-center">
            {/* head */}
            <thead className="bg-slate-100">
              <tr className="">
                <th>#</th>
                <th>User Id</th>
                <th>transactionId</th>
                <th>Email</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody className="bg-slate-100 divide-y divide-gray-200">
              {paymentHistory.map((paymentHistory, index) => (
                <tr key={paymentHistory._id}>
                  <th>{index + 1}</th>

                  <td>{paymentHistory._id}</td>
                  <td>{paymentHistory.transactionId}</td>
                  <td>{paymentHistory.mail}</td>
                  <td>{paymentHistory.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="w-full md:w-1/3 bg-green-900">
          <h3>Pie chart</h3>
        </div> */}
      </div>

      {/* customer info end */}
    </div>
  );
};

export default AdminHome;
