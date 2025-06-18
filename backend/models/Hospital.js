import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  location: String,
  beds: Number,
  doctors: Object,
  bloodAvailability: Object,
  equipment: Object,
});

export default mongoose.model('Hospital', schema);
