import { SearchIcon, BellIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { articleData } from "../constants/articles";

export const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search?query=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-20">
      <div className="flex items-center justify-between px-4 py-2 h-14">
        <h1
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            }
          }}
          className="text-lg font-bold text-blue-700 cursor-pointer select-none"
        >
          AI3
        </h1>
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <div className="relative w-36">
            <input
              type="text"
              placeholder="검색..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              className="py-1.5 pl-9 pr-3 text-sm border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
            <SearchIcon className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
            {showSuggestions && (
              <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow-md z-30">
                {articleData.map((article) => (
                  <li
                    key={article.id}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                    onMouseDown={() => {
                      setKeyword(article.name);
                      navigate(`/search?query=${encodeURIComponent(article.name)}`);
                    }}
                  >
                    {article.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="p-1 text-gray-500 hover:text-blue-600"
            tabIndex={-1}
          >
            <BellIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center ml-1">
            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <UserIcon className="h-4 w-4" />
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};
