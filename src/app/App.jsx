import { Box } from "@mantine/core";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
