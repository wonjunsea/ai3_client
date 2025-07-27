import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { SearchResult } from "./pages/SearchPage";
import { ResultPage } from "./pages/ResultPage";
import { Dashboard } from "./components/MainPage";
import { useState } from "react";
import { FavoriteStock } from "./components/FavoriteStocks";

export function App() {
  const [favoriteStocks, setFavoriteStocks] = useState<FavoriteStock[]>([]);

  const handleAddFavorite = (stock: FavoriteStock) => {
    setFavoriteStocks((prev) => {
      if (prev.some((s) => s.name === stock.name)) return prev;
      return [...prev, stock];
    });
  };

  const handleDeleteFavorite = (index: number) => {
    setFavoriteStocks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="relative w-full max-w-[430px] min-w-[320px] h-screen bg-white shadow-xl rounded-xl overflow-hidden flex flex-col">
        <BrowserRouter>
          <Header />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    favoriteStocks={favoriteStocks}
                    onDeleteFavorite={handleDeleteFavorite}
                  />
                }
              />
              <Route
                path="/search"
                element={
                  <SearchResult
                    onAddFavorite={handleAddFavorite}
                    favoriteStocks={favoriteStocks}
                    onDeleteFavorite={handleDeleteFavorite}
                  />
                }
              />
              <Route path="/result/:id" element={<ResultPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}
