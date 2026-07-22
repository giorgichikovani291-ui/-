import { useState } from "react";
import OriginalPage from "./Components/OriginalPage";
import RedesignPage from "./Components/RedesignPage";

export default function App() {
  const [page, setPage] = useState<"original" | "redesign">("original");

  return (
    <div className="bg-black text-white antialiased min-h-screen">
      {page === "original" ? (
        <OriginalPage onGetLauncher={() => setPage("redesign")} />
      ) : (
        <RedesignPage onBackToOriginal={() => setPage("original")} />
      )}
    </div>
  );
}
