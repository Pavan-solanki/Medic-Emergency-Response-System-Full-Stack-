import { useEffect, useState } from "react";

const HospitalDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospitalName, setSelectedHospitalName] = useState(null);

  const doctorSpecializations = [
    "Cardiologist", "Neurologist", "Orthopedic", "Pediatrician", "General Surgeon",
    "Ophthalmologist", "Dentist", "Psychiatrist", "Dermatologist", "Anesthesiologist"
  ];

  const machinesAvailable = [
    "Ventilator", "X-ray", "MRI Scanner", "CT Scanner", "Ultrasound Machine",
    "ECG Machine", "Defibrillator", "Dialysis Machine", "Anesthesia Machine", "Infusion Pump"
  ];

  useEffect(() => {
    const storedPatient = JSON.parse(localStorage.getItem("patientData"));
    let storedHospitals = JSON.parse(localStorage.getItem("hospitals"));
    const selectedHospital = localStorage.getItem("selectedHospital");

    if (!storedHospitals || storedHospitals.length === 0) {
      storedHospitals = [
        { id: 1, name: "AIMS Hospital, Greater Noida", bedsAvailable: 10, doctorType: "Cardiologist", bloodAvailable: true, machineType: "X-ray", kilometers: 21 },
        { id: 2, name: "Yatharth Super Speciality Hospital, Greater Noida", bedsAvailable: 7, doctorType: "Neurologist", bloodAvailable: false, machineType: "MRI Scanner", kilometers: 14 },
        { id: 3, name: "Fortis Hospital,Greater Noida", bedsAvailable: 15, doctorType: "General Surgeon", bloodAvailable: true, machineType: "CT Scanner", kilometers: 15 },
      ];
      localStorage.setItem("hospitals", JSON.stringify(storedHospitals));
    }

    setPatient(storedPatient);
    setHospitals(storedHospitals);
    if (selectedHospital) {
      setSelectedHospitalName(selectedHospital);
    }
  }, []);

  const updateHospitalData = (id, field, value) => {
    const updatedHospitals = hospitals.map((hospital) =>
      hospital.id === id ? { ...hospital, [field]: value } : hospital
    );

    setHospitals(updatedHospitals);
    localStorage.setItem("hospitals", JSON.stringify(updatedHospitals));
  };

  return (
    <div className="p-6 App h-screen bg-cover bg">
      <h1 className="text-2xl font-bold text-center bg-[#4bbcd7] p-2">🏥 Hospital Dashboard</h1>

      {patient ? (
        <div className="border border-[#808080] p-4 my-4 shadow-md rounded bg-white">
          <h2 className="text-2xl font-bold text-[#515151] pb-2">🚑 Incoming Patient</h2>
          <p className="text-[#494949]"><b>Name:</b> {patient.name}</p>
          <p className="text-[#494949]"><b>Age:</b> {patient.age}</p>
          <p className="text-[#494949]"><b>Patient Problem:</b> {patient.condition}</p>
          <p className="text-[#494949]"><b>Blood Group:</b> {patient.bloodGroup}</p>
          <p className="text-[#494949]"><b>Condition:</b> {patient.history}</p>
        </div>
      ) : (
        <p className="text-center text-[#494949]">No patient data available.</p>
      )}

      <h2 className="text-xl font-bold mt-6 bg-[#4bbcd7] p-2">🏥 Manage Hospitals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="border border-[#808080] p-4 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-[#515151]">
              {hospital.name}
            </h2>

            {selectedHospitalName === hospital.name && (
              <p className="text-green-600 font-bold mt-1">Patient is on the way here!</p>
            )}

            <label className="block mt-2 text-[#515151]">🏥 Beds Available:</label>
            <input
              type="number"
              className="border p-2 w-full border-[#808080] bg-white rounded text-black"
              value={hospital.bedsAvailable}
              onChange={(e) => updateHospitalData(hospital.id, "bedsAvailable", parseInt(e.target.value))}
            />

            <label className="block mt-2 text-[#515151]">🩺 Doctor Specialization:</label>
            <select
              className="border p-2 w-full border-[#808080] bg-white rounded text-black"
              value={hospital.doctorType}
              onChange={(e) => updateHospitalData(hospital.id, "doctorType", e.target.value)}
            >
              {doctorSpecializations.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>

            <label className="block mt-2 text-[#515151]">💉 Blood Available:</label>
            <select
              className="border p-2 w-full border-[#808080] bg-white rounded text-black"
              value={hospital.bloodAvailable ? "Yes" : "No"}
              onChange={(e) => updateHospitalData(hospital.id, "bloodAvailable", e.target.value === "Yes")}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label className="block mt-2 text-[#515151]">🛠 Machines Available:</label>
            <select
              className="border p-2 w-full border-[#808080] bg-white rounded text-black"
              value={hospital.machineType}
              onChange={(e) => updateHospitalData(hospital.id, "machineType", e.target.value)}
            >
              {machinesAvailable.map((machine) => (
                <option key={machine} value={machine}>
                  {machine}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalDashboard;
