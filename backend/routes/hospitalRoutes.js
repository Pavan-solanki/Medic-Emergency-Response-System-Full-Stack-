import express from 'express';
import { getHospitals, updateHospital } from '../controllers/hospitalController.js';

const router = express.Router();
router.get('/', getHospitals);
router.put('/:id', updateHospital);
export default router;
