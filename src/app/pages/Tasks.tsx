import { useState } from "react";
import { Plus, Filter } from "lucide-react";

export function Tasks() {
  const [filterMyTasks, setFilterMyTasks] = useState(false);

  const tasks = [
    {
      id: 1,
      title: "UI 디자인 초안 제출",
      assignee: "박미소",
      dueDate: "2026-03-16",
      status: "in-progress",
    },
    {
      id: 2,
      title: "데이터베이스 스키마 설계",
      assignee: "송희경",
      dueDate: "2026-03-17",
      status: "in-progress",
    },
    {
      id: 3,
      title: "API 명세서 작성",
      assignee: "고명주",
      dueDate: "2026-03-18",
      status: "pending",
    },
    {
      id: 4,
      title: "프론트엔드 개발",
      assignee: "오소원",
      dueDate: "2026-03-20",
      status: "in-progress",
    },
    {
      id: 5,
      title: "테스트 케이스 작성",
      assignee: "민지원",
      dueDate: "2026-03-19",
      status: "pending",
    },
    {
      id: 6,
      title: "발표 자료 제작",
      assignee: "이채현",
      dueDate: "2026-03-18",
      status: "completed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-amber-100 text-amber-800";
      case "pending":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "완료";
      case "in-progress":
        return "진행 중";
      case "pending":
        return "진행 전";
      default:
        return status;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📝</span>
            <h1 className="text-3xl font-bold text-gray-900">업무 관리</h1>
          </div>
          <p className="text-gray-600 mt-1">팀 업무를 관리하고 추적하세요</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setFilterMyTasks(!filterMyTasks)}
            className={`px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
              filterMyTasks
                ? "bg-gradient-to-r from-amber-600 to-orange-500 text-white border-amber-600 shadow-md"
                : "bg-white text-gray-700 border-amber-200 hover:bg-amber-50"
            }`}
          >
            <Filter className="w-4 h-4" />
            내 업무만 보기
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-full hover:from-amber-700 hover:to-orange-600 transition-all flex items-center gap-2 shadow-md">
            <Plus className="w-4 h-4" />
            할 일 추가
          </button>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-amber-100">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                업무명
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                담당자
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                마감일
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                진행 상태
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-100">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="hover:bg-amber-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{task.title}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-sm">
                      {task.assignee.charAt(0)}
                    </div>
                    <span className="text-gray-700">{task.assignee}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-700">{task.dueDate}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {getStatusText(task.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}