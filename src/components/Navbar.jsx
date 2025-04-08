import { Link } from "react-router-dom";
import Image from '/Medic_Logo.png';
const Navbar = () => {
  return (
    <nav className="p-2 bg-white flex justify-between items-center border-b-4 border-[#4bbcd7]">
  <div className="flex items-center">
    <img className="h-22" src={Image} alt="Logo" />
  </div>
  <div className="flex space-x-5">
    <Link to="/ambulance" className="flex items-center justify-center text-[#333334] rounded-xl hover:bg-[#4bbcd7] hover:text-white p-2 min-w-[150px]">
      Ambulance
    </Link>
    <Link to="/hospital-selection" className="flex items-center justify-center text-[#333334] rounded-xl hover:bg-[#4bbcd7] hover:text-white p-2 min-w-[150px]">
      Hospital Selection
    </Link>
    {/* <Link to="/navigation" className="flex items-center justify-center text-[#333334] rounded-xl hover:bg-[#4bbcd7] hover:text-white p-2 min-w-[150px]">
      Navigation
    </Link> */}
    <Link to="/hospital-dashboard" className="flex items-center bg-[#4bbcd7] justify-center text-white rounded-xl hover:bg-[#4bbc]  p-2 min-w-[150px]">
      Go to Hospital Dashboard
    </Link>
  </div>
</nav>
  );
};

export default Navbar;
