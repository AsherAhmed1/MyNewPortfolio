import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin.jsx";
import AdminDashboard from "./Pages/Admin/Admin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me/admin-panel-login" element={<AdminLogin />} />
        <Route path="/me/admin-panel-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
