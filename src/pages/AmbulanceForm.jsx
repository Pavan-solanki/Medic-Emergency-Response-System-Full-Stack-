import { useNavigate } from "react-router-dom";

const Ambulance = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const patient = {
      name: formData.get("name"),
      age: formData.get("age"),
      condition: formData.get("condition"),
      bloodGroup: formData.get("bloodGroup"),
      history: formData.get("history"),
    };

    localStorage.setItem("patientData", JSON.stringify(patient));
    navigate("/hospital-dashboard"); // Redirect to Hospital Dashboard
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#0000000D] shadow-md rounded w-1/3 mb-20">
        <h1 className="text-3xl font-bold px-9 py-3 mb-2 bg-[#4bbcd7] rounded">🚑 Patient Details</h1>
        <form onSubmit={handleSubmit} className="p-4">
          <input
            type="text"
            name="name"
            className="border p-2 w-full rounded border-[#808080] bg-white text-black placeholder:text-[#808080] mb-2"
            required
            placeholder="Name"
          />

          <input
            type="number"
            name="age"
            className="border p-2 w-full rounded border-[#808080] bg-white text-black placeholder:text-[#808080] mb-2"
            required
            placeholder="Age"
          />

          <input
            type="text"
            name="condition"
            className="border p-2 w-full rounded border-[#808080] bg-white text-black placeholder:text-[#808080] mb-2"
            required
            placeholder="Patient Problem"
          />

          <select
            name="bloodGroup"
            className="border p-2 w-full rounded border-[#808080] bg-white text-[#808080] mb-2"
            required
          >
            <option className="" value="" disabled selected>
              Blood Group
            </option>
            <option value="N/A">N/A</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <textarea
            name="history"
            className="border p-2 w-full rounded border-[#808080] bg-white text-black placeholder:text-[#808080] mb-2"
            required
            placeholder="Condition:"
          />

          <button
            type="submit"
            className="mt-4 bg-[#4bbcd7] hover:bg-emerald-600 text-white px-4 py-2 rounded text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ambulance;