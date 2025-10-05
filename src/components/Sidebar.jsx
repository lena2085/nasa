import React from "react";
import { LayoutDashboard, BarChart3, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white/80 backdrop-blur-md shadow-lg border-r border-gray-200">
      <div className="px-6 py-4 text-lg font-semibold text-gray-700">
        Menu
      </div>
      <nav className="flex flex-col space-y-2 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
              isActive ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
              isActive ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <BarChart3 size={20} />
          <span>Reports</span>
        </NavLink>
        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
              isActive ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Bell size={20} />
          <span>Alerts</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
