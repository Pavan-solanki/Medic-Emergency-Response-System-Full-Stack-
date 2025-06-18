import Hospital from '../models/Hospital.js';

export const getHospitals = async (req, res) => {
  try {
    res.json(await Hospital.find());
  } catch {
    res.status(500).json({ message: 'Error retrieving hospitals' });
  }
};

export const updateHospital = async (req, res) => {
  try {
    const updated = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch {
    res.status(400).json({ message: 'Error updating hospital' });
  }
};
