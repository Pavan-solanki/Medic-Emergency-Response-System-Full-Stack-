import Navbar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Image from "../public/10554240.jpg";
import "./App.css";

function App() {
  return (
    <div
      className="App h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }} // Set the background image
    >
      <AppRoutes />
    </div>
  );
}

export default App;