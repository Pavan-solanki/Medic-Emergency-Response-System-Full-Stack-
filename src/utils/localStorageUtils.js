const HOSPITALS_KEY = "hospitals";

// Get hospitals from localStorage
export const getHospitals = () => {
  return JSON.parse(localStorage.getItem(HOSPITALS_KEY)) || [];
};

// Save hospitals to localStorage
export const saveHospitals = (hospitals) => {
  localStorage.setItem(HOSPITALS_KEY, JSON.stringify(hospitals));
};
