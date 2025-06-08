import { useEffect, useState, useMemo } from "react";
import "./AdminDashboard.css";
import emailData from "./emails.json";

interface Subscriber {
  email: string;
  ip: string;
  subscribedAt: string;
}

const AdminDashboard = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [stats, setStats] = useState({
    today: 0,
    week: 0,
    twoWeeks: 0,
    month: 0,
    total: 0,
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination window state for showing page buttons in chunks of 200
  const [pageWindowStart, setPageWindowStart] = useState(1);
  const pageWindowSize = 200;

  useEffect(() => {
    const now = new Date();
    const fakeSubscribers: Subscriber[] = emailData.emails.map(
      (email, index) => {
        const daysAgo = Math.floor(Math.random() * 30);
        const date = new Date();
        date.setDate(now.getDate() - daysAgo);
        return {
          email,
          ip: `102.89.${index % 255}.${(index * 3) % 255}`,
          subscribedAt: date.toISOString(),
        };
      }
    );

    setSubscribers(fakeSubscribers);

    // Calculate counts
    let today = 0,
      week = 0,
      twoWeeks = 0,
      month = 0;
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    fakeSubscribers.forEach(({ subscribedAt }) => {
      const date = new Date(subscribedAt);
      const diffDays = Math.floor(
        (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
      );
      if (date >= startOfToday) today++;
      if (diffDays < 7) week++;
      if (diffDays < 14) twoWeeks++;
      if (diffDays < 30) month++;
    });

    setStats({
      today,
      week,
      twoWeeks,
      month,
      total: fakeSubscribers.length,
    });
  }, []);

  // Filter subscribers by search term (email)
  const filteredSubscribers = useMemo(() => {
    if (!searchTerm.trim()) return subscribers;
    return subscribers.filter((sub) =>
      sub.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, subscribers]);

  // Pagination logic
  const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentSubscribers = filteredSubscribers.slice(indexOfFirst, indexOfLast);

  // Determine the window of page buttons to show
  // pageWindowStart is the first page number shown in the pagination bar
  // Show pageWindowSize pages max
  const pageWindowEnd = Math.min(pageWindowStart + pageWindowSize - 1, totalPages);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    // Adjust page window if page is outside current window
    if (page < pageWindowStart) {
      setPageWindowStart(page);
    } else if (page > pageWindowEnd) {
      setPageWindowStart(page - pageWindowSize + 1);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
    setPageWindowStart(1);
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-box no-shadow">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>Today</h2>
            <p>{stats.today}</p>
          </div>
          <div className="stat-card">
            <h2>Last 7 Days</h2>
            <p>{stats.week}</p>
          </div>
          <div className="stat-card">
            <h2>Last 2 Weeks</h2>
            <p>{stats.twoWeeks}</p>
          </div>
          <div className="stat-card">
            <h2>Last 30 Days</h2>
            <p>{stats.month}</p>
          </div>
          <div className="stat-card">
            <h2>Total</h2>
            <p>{stats.total}</p>
          </div>
        </div>

        <div>
          <h2 className="admin-subtitle">Subscriber Details</h2>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by email..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />

          <div className="table-scroll-container">
            <table className="email-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>IP Address</th>
                  <th>Subscribed At</th>
                </tr>
              </thead>
              <tbody>
                {currentSubscribers.length === 0 ? (
                  <tr>
                    <td colSpan={3} style={{ textAlign: "center" }}>
                      No subscribers found.
                    </td>
                  </tr>
                ) : (
                  currentSubscribers.map((user, index) => (
                    <tr key={indexOfFirst + index}>
                      <td data-label="Email">{user.email}</td>
                      <td data-label="IP Address">{user.ip}</td>
                      <td data-label="Subscribed At">
                        {new Date(user.subscribedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div className="pagination scrollable-pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {/* Page number buttons in a horizontally scrollable container */}
            <div className="page-buttons-wrapper">
              {[...Array(pageWindowEnd - pageWindowStart + 1)].map((_, idx) => {
                const pageNum = pageWindowStart + idx;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={currentPage === pageNum ? "active" : ""}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;