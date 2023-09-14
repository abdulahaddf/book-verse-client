import { FaInbox, FaSearch } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
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
import { useRef } from "react";

const AdminHome = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 10;

  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);

  const [revenueSummary, setRevenueSummary] = useState({
    totalRevenueToday: 0,
    totalRevenueCurrentMonth: 0,
    totalRevenue: 0,
    totalRevenueLastMonth: 0,
    totalRevenueLastDay: 0,
    percentageChangeLastMonth: 0,
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
    fetch(
      `https://book-verse-server-phi.vercel.app/paymentHistory?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          // Set the userNotFound flag when no results are found
          setUserNotFound(true);
        }
        setPaymentHistory(data);
      });
  }, [search]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    setUserNotFound(false);
    searchRef.current.value = "";
  };

  const messageSpring = useSpring({
    opacity: userNotFound ? 1 : 0, // Show the message if userNotFound is true, hide it otherwise
    transform: userNotFound ? "translateY(0)" : "translateY(-50px)", // Move the message down if shown
  });

  return (
    <div className="w-full h-full ps-4 lg:p-4 md:mt-6">
      <h1 className="text-4xl font-bold text-center">Revenue Calculation</h1>

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
              <p className="text-green-600">+04%</p>
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
              <p>last day</p>
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
              <p>last year</p>
            </li>
          </div>
        </div>
        {/* weekly revenue chart start */}

        <div className="w-full md:w-1/2 bg-slate-100 shadow-xl p-5 rounded-md ">
          <div style={{ width: "100%", height: 330 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={Object.entries(revenueSummary.weeklyRevenue || {}).map(
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

      {/* -----------Transactions Information start----- */}

      <h1 className="text-4xl font-bold text-center mt-12 mb-3">
        Transactions Information
      </h1>

      <input
        type="text"
        ref={searchRef}
        placeholder="Find Transaction"
        className="input input-bordered focus:outline-none border-[#126e9d] max-w-xs rounded-sm"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
        className="btn rounded-sm bg-[#126e9d] ml-2 text-white hover:text-black"
      >
        <FaSearch></FaSearch>
      </button>

      {/* customer info with table start  */}
      {/* Conditionally render the table or error message */}
      {paymentHistory.length > 0 ? ( // Check if paymentHistory is not empty
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
          <div className="w-full overflow-x-auto rounded-md shadow-xl">
            <table className="table table-zebra w-full text-center">
              <thead className="bg-slate-100">
                <tr className="">
                  <th>#</th>
                  <th>User Id</th>
                  <th>Transaction ID</th>
                  <th>Email</th>
                  <th>Time</th>
                  <th>Amount</th>
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
                      <td>{payment.total_price}</td>
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
      ) : (
        // Render an error message when no results are found
        <animated.div style={messageSpring} className="text-center my-10">
          <h2 className="text-5xl font-bold text-[#126e9d]">User not found.</h2>
          <p className="text-base text-rose-400">
            Please enter the correct value and try again.
          </p>
        </animated.div>
      )}

      {/* customer info with table end */}
    </div>
  );
};

export default AdminHome;
