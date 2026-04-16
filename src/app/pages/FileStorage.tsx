import { Upload, Download, FileText, Presentation, File } from "lucide-react";

export function FileStorage() {
  const files = [
    {
      id: 1,
      name: "프로젝트 계획서.pptx",
      uploader: "박미소",
      date: "2026-03-14",
      size: "2.4 MB",
      type: "presentation",
    },
    {
      id: 2,
      name: "요구사항 정의서.pdf",
      uploader: "송희경",
      date: "2026-03-13",
      size: "1.8 MB",
      type: "document",
    },
    {
      id: 3,
      name: "회의록_0312.docx",
      uploader: "고명주",
      date: "2026-03-12",
      size: "856 KB",
      type: "document",
    },
    {
      id: 4,
      name: "데이터베이스_ERD.png",
      uploader: "오소원",
      date: "2026-03-11",
      size: "3.2 MB",
      type: "image",
    },
    {
      id: 5,
      name: "UI_목업.figma",
      uploader: "민지원",
      date: "2026-03-10",
      size: "4.1 MB",
      type: "document",
    },
    {
      id: 6,
      name: "발표_자료_v1.pptx",
      uploader: "이채현",
      date: "2026-03-09",
      size: "5.6 MB",
      type: "presentation",
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case "presentation":
        return <Presentation className="w-8 h-8 text-orange-600" />;
      case "document":
        return <FileText className="w-8 h-8 text-blue-600" />;
      case "image":
        return <File className="w-8 h-8 text-red-600" />;
      default:
        return <FileText className="w-8 h-8 text-gray-600" />;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📁</span>
            <h1 className="text-3xl font-bold text-gray-900">자료실</h1>
          </div>
          <p className="text-gray-600 mt-1">팀 자료를 업로드하고 관리하세요</p>
        </div>
        <button className="px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-full hover:from-amber-700 hover:to-orange-600 transition-all flex items-center gap-2 shadow-md">
          <Upload className="w-4 h-4" />
          파일 업로드
        </button>
      </div>

      {/* Files Grid */}
      <div className="grid grid-cols-1 gap-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-all border border-amber-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">{getFileIcon(file.type)}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1 truncate">
                  {file.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{file.uploader}</span>
                  <span>·</span>
                  <span>{file.date}</span>
                  <span>·</span>
                  <span>{file.size}</span>
                </div>
              </div>
              <button className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full hover:from-amber-200 hover:to-orange-200 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                다운로드
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}