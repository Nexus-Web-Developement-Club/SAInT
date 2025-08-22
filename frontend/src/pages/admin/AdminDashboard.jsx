// pages/admin/AdminDashboard.jsx
import AdminSidebar from "../../components/admin/AdminSidebar";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Members", value: 120 },
    { label: "Active Clubs", value: 8 },
    { label: "Upcoming Events", value: 3 },
    { label: "Notices Posted", value: 5 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* AdminSidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white shadow rounded-2xl p-6 text-center"
            >
              <h2 className="text-2xl font-bold text-blue-600">
                {stat.value}
              </h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Updates & Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Notices
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>📢 Club Fest scheduled for Sept 5th</li>
              <li>📢 Membership renewal open till Sept 10th</li>
              <li>📢 Workshop on AI announced</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>🎉 Coding Hackathon – Sept 12</li>
              <li>🎤 Guest Lecture – Sept 20</li>
              <li>🏆 Annual Tech Fest – Oct 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
