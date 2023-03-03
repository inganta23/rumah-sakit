import mongoose from "mongoose";

const bayiSchema = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    tanggal_kelahiran: { type: String, required: true },
    kondisi: { type: String, required: true },
    metode: { type: String, required: true },
    umur_kehamilan: { type: String, required: true },
    ibu: { type: mongoose.Schema.Types.ObjectId, ref: "Ibu" },
    gender: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BayiModel = mongoose.model("Bayi", bayiSchema);
export default BayiModel;
