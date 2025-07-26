import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { SearchResult } from "./pages/SearchResult";
import { DetailPage } from "./pages/DetailPage";
import { Dashboard } from "./components/MainPage";

export function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="relative w-full max-w-[430px] min-w-[320px] h-screen bg-white shadow-xl rounded-xl overflow-hidden flex flex-col">
        <BrowserRouter>
          <Header />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}
