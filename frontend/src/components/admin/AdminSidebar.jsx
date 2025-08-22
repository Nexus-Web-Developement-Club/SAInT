// components/admin/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Megaphone,
  CalendarDays,
  Star,
  Image,
  Settings,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Members", icon: <Users size={20} />, path: "/admin/members" },
    { name: "Clubs", icon: <Building2 size={20} />, path: "/admin/clubs" },
    { name: "Notice Board", icon: <Megaphone size={20} />, path: "/admin/notices" },
    { name: "Events", icon: <CalendarDays size={20} />, path: "/admin/events" },
    { name: "Testimonials", icon: <Star size={20} />, path: "/admin/testimonials" },
    { name: "Gallery", icon: <Image size={20} />, path: "/admin/gallery" },
    { name: "Settings", icon: <Settings size={20} />, path: "/admin/settings" },
  ];

  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-blue-600">
        SAINT Admin
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-blue-500 text-white"
                : "text-blue-100 hover:bg-blue-600"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
