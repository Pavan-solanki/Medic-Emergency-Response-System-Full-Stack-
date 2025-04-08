import { useEffect, useState } from "react";

const HospitalSelection = () => {
  const [hospitals, setHospitals] = useState([]);
  const [ambulanceLocation, setAmbulanceLocation] = useState(null);

  useEffect(() => {
    const storedHospitals = JSON.parse(localStorage.getItem("hospitals")) || [];
    setHospitals(storedHospitals);

    setAmbulanceLocation({ lat: 28.36708, lng: 77.54135 }); // Simulated
  }, []);

  const handleNavigate = (hospitalName) => {
    if (!ambulanceLocation) {
      alert("Ambulance location not available!");
      return;
    }

    // ✅ Save selected hospital to localStorage
    localStorage.setItem("selectedHospital", hospitalName);

    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${ambulanceLocation.lat},${ambulanceLocation.lng}&destination=${encodeURIComponent(hospitalName)}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="p-6 h-screen App bg-cover bg-center">
      <h1 className="mb-2 text-2xl font-bold text-center pb-5 bg-[#4bbcd7] py-3 rounded">
        🏥 Select a Hospital
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="border border-[#808080] bg-white p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-[#504f4f]">
              {hospital.name}
              <span className="text-red-500 ml-2">
                ({hospital.kilometers} km)
              </span>
            </h2>

            <p className="text-[#585858]">🏥 Beds Available: {hospital.bedsAvailable}</p>
            <p className="text-[#585858]">🩺 Doctor Specialization: {hospital.doctorType}</p>
            <p className="text-[#585858]">💉 Blood Available: {hospital.bloodAvailable ? "Yes" : "No"}</p>
            <p className="text-[#585858]">🛠 Machines Available: {hospital.machineType}</p>

            <button
              onClick={() => handleNavigate(hospital.name)}
              className="mt-3 px-4 py-2 bg-[#4bbcd7] text-white font-bold rounded hover:bg-[#3aa7c3]"
            >
              🚗 Navigate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalSelection;
