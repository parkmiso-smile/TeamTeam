import { Outlet, Link, useLocation } from "react-router";
import {
  Home,
  Bell,
  Calendar,
  ListTodo,
  FolderOpen,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";

export function DashboardLayout() {
  const location = useLocation();

  const menuItems = [
    { path: "/team", icon: <Home className="w-5 h-5" />, label: "홈" },
    {
      path: "/team/announcements",
      icon: <Bell className="w-5 h-5" />,
      label: "공지사항",
    },
    {
      path: "/team/schedule",
      icon: <Calendar className="w-5 h-5" />,
      label: "일정",
    },
    {
      path: "/team/tasks",
      icon: <ListTodo className="w-5 h-5" />,
      label: "업무 관리",
    },
    {
      path: "/team/files",
      icon: <FolderOpen className="w-5 h-5" />,
      label: "자료실",
    },
    {
      path: "/team/chat",
      icon: <MessageCircle className="w-5 h-5" />,
      label: "채팅",
    },
    {
      path: "/team/evaluation",
      icon: <Star className="w-5 h-5" />,
      label: "상호 평가",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-stone-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-blue-100 flex flex-col shadow-lg">
        <div className="p-6 border-b border-blue-100">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🐻</span>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent">TeamTeam</span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-900 shadow-sm"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-100">
          <Link
            to="/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-blue-50 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
              🐻
            </div>
            <span className="text-gray-700">내 프로필</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}