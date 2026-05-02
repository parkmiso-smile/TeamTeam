import { useState } from "react";
import { Send, Search, Phone, Video, Plus } from "lucide-react";

export function Chat() {
  const [message, setMessage] = useState("");
  const [showNewChatModal, setShowNewChatModal] = useState(false);

  const chats = [
    { id: 1, name: "팀 전체",  lastMessage: "내일 회의 준비 완료했어요!", unread: 2 },
    { id: 2, name: "개발팀",   lastMessage: "API 연동 완료했습니다",       unread: 0 },
    { id: 3, name: "디자인팀", lastMessage: "UI 목업 공유드립니다",         unread: 1 },
  ];

  const messages = [
    { id: 1, sender: "박미소", content: "안녕하세요! 오늘 회의 자료 준비 다 하셨나요?", time: "14:30", isMine: false },
    { id: 2, sender: "나",     content: "네, 준비 완료했습니다!",                       time: "14:32", isMine: true },
    { id: 3, sender: "송희경", content: "저도 준비 끝났어요. 발표 자료는 자료실에 올려뒀습니다.", time: "14:35", isMine: false },
    { id: 4, sender: "고명주", content: "감사합니다! 확인했어요 👍",                  time: "14:37", isMine: false },
    { id: 5, sender: "나",     content: "그럼 내일 2시에 뵙겠습니다!",               time: "14:40", isMine: true },
  ];

  const handleSend = () => {
    if (message.trim()) setMessage("");
  };

  return (
    <div className="h-screen flex">
      {/* Chat List Sidebar */}
      <div className="w-72 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-4 border-b border-slate-100">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="채팅방 검색..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            onClick={() => setShowNewChatModal(true)}
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
          >
            <Plus className="w-4 h-4" />새 채팅방 만들기
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div key={chat.id} className="px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm shrink-0">
                  {chat.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className="font-semibold text-slate-900 text-sm">{chat.name}</h3>
                    {chat.unread > 0 && (
                      <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate">{chat.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-50">
        {/* Chat Header */}
        <div className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold text-slate-900">팀 전체</h2>
            <div className="flex gap-1">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Phone className="w-4 h-4 text-slate-500" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Video className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMine ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-sm ${
                msg.isMine
                  ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-sm"
                  : "bg-white text-slate-900 border border-slate-200 shadow-sm"
              } rounded-2xl px-4 py-3`}>
                {!msg.isMine && (
                  <p className="text-xs font-semibold mb-1 text-blue-600">{msg.sender}</p>
                )}
                <p className="text-sm mb-1">{msg.content}</p>
                <p className={`text-xs ${msg.isMine ? "text-blue-200" : "text-slate-400"}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-slate-200 px-6 py-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="메시지를 입력하세요..."
              className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSend}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all flex items-center gap-2 shadow-sm text-sm"
            >
              <Send className="w-4 h-4" />전송
            </button>
          </div>
        </div>
      </div>

      {/* New Chat Modal */}
      {showNewChatModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-7 max-w-md w-full shadow-2xl">
            <h2 className="text-lg font-bold text-slate-900 mb-5">새 채팅방 만들기</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">채팅방 이름</label>
              <input
                type="text"
                placeholder="예: 프론트엔드팀"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">참여할 팀원</label>
              <div className="space-y-1">
                {["박미소","송희경","고명주","오소원","민지원","이채현"].map((member) => (
                  <label key={member} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {member.charAt(0)}
                    </div>
                    <span className="text-sm text-slate-700">{member}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowNewChatModal(false)}
                className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors text-sm"
              >
                취소
              </button>
              <button
                onClick={() => setShowNewChatModal(false)}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all shadow-sm text-sm"
              >
                만들기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
