import mongoose from "mongoose";

const ibuSchema = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    kondisi: { type: String, required: true },
    waktu_masuk: { type: String, required: true },
    umur: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const IbuModel = mongoose.model("Ibu", ibuSchema);
export default IbuModel;
