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
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";

// Function to format numbers as "1k" or "1M"
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + "k";
  }
  return num;
}

const AdminHome = () => {
  // Tonmoy Start
  const { darkMode } = useContext(AuthContext);

  //  Tonmoy End
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
    <div className="w-full ps-6 p-2 h-full lg:p-4 mt-10">
      <h1 className="text-4xl font-bold text-center">Revenue Calculation</h1>

      {/* ----------------Revenue start------------- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div
            className={
              darkMode
                ? "w-full h-full shadow-xl p-5 rounded-md bg-gray border-[1px]"
                : "w-full h-full shadow-xl p-5 rounded-md bg-slate-100"
            }
          >
            <li className="flex justify-between items-center">
              <h5>Customers</h5>
              <p className="text-2xl">
                <FaInbox></FaInbox>
              </p>
            </li>
            <h3 className="text-3xl font-semibold my-6">
              {formatNumber(paymentHistory.length)}
            </h3>
            <li className="flex justify-between items-center">
              <p className="text-green-600">+04%</p>
              <p>last month</p>
            </li>
          </div>

          <div
            className={
              darkMode
                ? "w-full h-full shadow-xl p-5 rounded-md bg-gray border-[1px]"
                : "w-full h-full shadow-xl p-5 rounded-md bg-slate-100"
            }
          >
            <li className="flex justify-between items-center">
              <h5>Sales Today</h5>
              <p className="text-2xl">
                <MdOutlinePointOfSale></MdOutlinePointOfSale>
              </p>
            </li>
            <h3 className="text-3xl font-semibold my-6">
              ${formatNumber(revenueSummary.totalRevenueToday)}
            </h3>
            <li className="flex justify-between items-center">
              <p className="text-green-600">+14%</p>
              <p>last day</p>
            </li>
          </div>

          <div
            className={
              darkMode
                ? "w-full h-full shadow-xl p-5 rounded-md bg-gray border-[1px]"
                : "w-full h-full shadow-xl p-5 rounded-md bg-slate-100"
            }
          >
            <li className="flex justify-between items-center">
              <h5>Sales/month</h5>
              <p className="text-2xl">
                <MdOutlineChildFriendly></MdOutlineChildFriendly>
              </p>
            </li>
            <h3 className="text-3xl font-semibold my-6">
              {" "}
              ${formatNumber(revenueSummary.totalRevenueCurrentMonth)}
            </h3>
            <li className="flex justify-between items-center">
              <p className="text-green-600">+06%</p>
              <p>last month</p>
            </li>
          </div>

          <div
            className={
              darkMode
                ? "w-full h-full shadow-xl p-5 rounded-md bg-gray border-[1px]"
                : "w-full h-full shadow-xl p-5 rounded-md bg-slate-100"
            }
          >
            <li className="flex justify-between items-center">
              <h5>Sales/total</h5>
              <p className="text-2xl">
                <MdCalendarMonth></MdCalendarMonth>
              </p>
            </li>
            <h3 className="text-3xl font-semibold my-6">
              ${formatNumber(revenueSummary.totalRevenue)}
            </h3>
            <li className="flex justify-between items-center">
              <p className="text-green-600">+26%</p>
              <p>last year</p>
            </li>
          </div>
        </div>

        {/* weekly revenue chart start */}

        <div
          className={
            darkMode
              ? "w-full md:w-1/2 bg-gray border-[1px] text-black shadow-xl p-5 rounded-md"
              : "w-full md:w-1/2 bg-slate-100 shadow-xl p-5 rounded-md"
          }
        >
          <div className="overflow-x-auto">
            <ResponsiveContainer width="100%" height={340}>
              <ComposedChart
                data={Object.entries(revenueSummary.weeklyRevenue || {}).map(
                  ([day, weekly]) => ({
                    day,
                    weekly,
                  })
                )}
                margin={
                  {
                    top: 4,
                    right: 4,
                    bottom: 4,
                    left: 4,
                  }
                }
              >
                <CartesianGrid stroke={darkMode ? "#ffff" : "#f5f5f5"} />
                <XAxis
                  dataKey="day"
                  stroke={darkMode ? "#ffffff" : "#575757"}
                  scale="band"
                />
                <YAxis stroke={darkMode ? "#ffffff" : "#575757"} />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="weekly"
                  fill={darkMode ? "#030712" : "#8884d8"}
                  stroke={darkMode ? "#ffff" : "#8884d8"}
                />
                <Bar
                  dataKey="weekly"
                  barSize={18}
                  fill={darkMode ? "#10aade" : "#413ea0"}
                />
                <Line
                  type="monotone"
                  dataKey="weekly"
                  stroke={darkMode ? "#ffffff" : "#ff7300"}
                />
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
        className={
          darkMode
            ? "input input-bordered focus:outline-none text-black border-[#126e9d] w-[200px] md:max-w-xs rounded-sm"
            : "input input-bordered focus:outline-none border-[#126e9d] w-[200px] md:max-w-xs rounded-sm"
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
        className={
          darkMode
            ? "btn rounded-sm bg-black/90 ml-2 text-[#10aade] hover:text-black"
            : "btn rounded-sm bg-[#126e9d] ml-2 text-white hover:text-black"
        }
      >
        <FaSearch></FaSearch>
      </button>

      {/* customer info with table start  */}
      {/* Conditionally render the table or error message */}
      {paymentHistory.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
          <div className="w-[414px] md:w-[768px] lg:w-full overflow-x-auto">
            <table className="table table-zebra w-full text-center">
              <thead
                className={darkMode ? "bg-gray text-white" : "bg-slate-100"}
              >
                <tr className="">
                  <th>#</th>
                  <th>User Id</th>
                  <th>Transaction ID</th>
                  <th>Email</th>
                  <th>Time</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody
                className={
                  darkMode
                    ? "bg-black divide-y divide-gray-200"
                    : "bg-slate-100 divide-y divide-gray-200"
                }
              >
                {paymentHistory
                  .slice(
                    0,
                    showMore ? paymentHistory.length : initialDisplayCount
                  )
                  .map((payment, index) => (
                    <tr key={payment._id}>
                      <td
                        className={
                          darkMode ? " bg-black/90 text-slate-200" : ""
                        }
                      >
                        {index + 1}
                      </td>
                      <td
                        className={
                          darkMode ? " bg-black/90 text-slate-200" : ""
                        }
                      >
                        {payment._id}
                      </td>
                      <td
                        className={
                          darkMode ? " bg-black/90 text-slate-200" : ""
                        }
                      >
                        {payment.transactionId
                          ? payment.transactionId
                          : "Cash On Delivery"}
                      </td>
                      <td
                        className={
                          darkMode ? " bg-black/90 text-slate-200" : ""
                        }
                      >
                        {payment.mail}
                      </td>
                      <td
                        className={
                          darkMode ? " bg-black/90 text-slate-200" : ""
                        }
                      >
                        {payment.date}
                      </td>
                      <td
                        className={
                          darkMode ? " bg-black/90 text-slate-200" : ""
                        }
                      >
                        {payment.total_price ? (
                          <>$ {payment.total_price}</>
                        ) : (
                          "COD"
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {paymentHistory.length > initialDisplayCount && (
              <div
                className={
                  darkMode ? "flex justify-center mt-4" : "text-center mt-4"
                }
              >
                <button
                  onClick={toggleShowMore}
                  className={
                    darkMode
                      ? " btn-fifth-dark  hover:no-underline focus:outline-none mb-6 "
                      : "text-[#d71d24] hover:underline focus:outline-none mb-6 "
                  }
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
