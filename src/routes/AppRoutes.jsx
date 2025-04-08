import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ambulance from "../pages/AmbulanceForm";
import HospitalSelection from "../pages/HospitalSelection";
import HospitalDashboard from "../pages/HospitalDashboard";
import Navbar from "../components/NavBar";

const AppRoutes = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/hospital-selection" element={<HospitalSelection />} />
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
