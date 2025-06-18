import Patient from '../models/Patient.js';

export const getPatients = async (req, res) => {
  try {
    res.json(await Patient.find());
  } catch {
    res.status(500).json({ message: 'Error retrieving patients' });
  }
};

export const createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    res.status(201).json(await patient.save());
  } catch {
    res.status(400).json({ message: 'Error creating patient' });
  }
};
