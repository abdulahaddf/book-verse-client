import { FaInbox } from "react-icons/fa";
import {
  MdCalendarMonth,
  MdOutlineChildFriendly,
  MdOutlinePointOfSale,
} from "react-icons/md";

import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Legend,
  Bar,
  Line,
} from "recharts";
import { useEffect, useState } from "react";

const AdminHome = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 10;

  const [revenueSummary, setRevenueSummary] = useState({
    totalRevenueToday: 0,
    totalRevenueCurrentMonth: 0,
    totalRevenue: 0,
    weeklyRevenue: {},
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

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
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
        {/* weekly revenue chart start */}

        <div className="w-full md:w-1/2 bg-slate-100 shadow-xl p-5 rounded-md ">
          <div style={{ width: "100%", height: 330 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={Object.entries(revenueSummary.weeklyRevenue ||{}).map(
                  ([day, weekly]) => ({
                    day,
                    weekly,
                  })
                )}
                margin={
                  {
                    // top: 4,
                    // right: 4,
                    // bottom: 4,
                    // left: 4,
                  }
                }
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="day" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="weekly"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="weekly" barSize={18} fill="#413ea0" />
                <Line type="monotone" dataKey="weekly" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* weekly revenue chart end */}
      </div>
      {/* ----------------Revenue end-------------- */}

      {/* customer info with table start  */}
      <div className="flex flex-col md:flex-row justify-between mt-10 gap-6">
        <div className="w-full overflow-x-auto rounded-md shadow-xl">
          <table className="table table-zebra w-full text-center">
            <thead className="bg-slate-100">
              <tr className="">
                <th>#</th>
                <th>User Id</th>
                <th>Transaction ID</th>
                <th>Email</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody className="bg-slate-100 divide-y divide-gray-200">
              {paymentHistory
                .slice(
                  0,
                  showMore ? paymentHistory.length : initialDisplayCount
                )
                .map((payment, index) => (
                  <tr key={payment._id}>
                    <td>{index + 1}</td>
                    <td>{payment._id}</td>
                    <td>{payment.transactionId}</td>
                    <td>{payment.mail}</td>
                    <td>{payment.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {paymentHistory.length > initialDisplayCount && (
            <div className="text-center mt-4">
              <button
                onClick={toggleShowMore}
                className="text-[#d71d24] hover:underline focus:outline-none mb-6 "
              >
                {showMore ? "Show Less" : "See More"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* customer info with table end */}
    </div>
  );
};

export default AdminHome;
