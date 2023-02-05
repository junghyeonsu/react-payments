import { Route, Routes } from "react-router-dom";

import CardAddCompletePage from "./pages/CardAddCompletePage";
import CardListPage from "./pages/CardListPage";
import CardRegisterPage from "./pages/CardRegisterPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CardListPage />} />
      <Route path="/add" element={<CardRegisterPage />} />
      <Route path="/add/complete" element={<CardAddCompletePage />} />
    </Routes>
  );
};

export default App;
