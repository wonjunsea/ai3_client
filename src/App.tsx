import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { SearchResult } from "./pages/SearchResult";
import { DetailPage } from "./pages/DetailPage";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
