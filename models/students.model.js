import mongoose from "mongoose";

const studentsSchema = mongoose.Schema({
  class: Number,
  division: String,
  yearOfBirth: Number,
  address: String,
  contact: Number,
  username: String,
  password: String,
  userCollectionID: String,
});

export default mongoose.model("Students", studentsSchema);
