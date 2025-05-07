import mongoose from "mongoose";

const GigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Gig || mongoose.model("Gig", GigSchema);
