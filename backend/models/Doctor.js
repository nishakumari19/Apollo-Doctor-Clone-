import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    experience: Number,
    gender: String,
    fee: Number,
    languages: [String],
    onlineConsult: Boolean,
    hospitalVisit: Boolean
}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);