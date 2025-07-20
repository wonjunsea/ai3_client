import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 p-4">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
