import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  condition: String,
  bloodGroup: String,
  previousHistory: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Patient', schema);
