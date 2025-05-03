import express from "express";
import { Doctor } from "../models/Doctor.js";

const router = express.Router();

// Add Doctor
router.post("/add-doctor", async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ success: true, doctor });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// List Doctors with Filters + Pagination
router.get("/list-doctor-with-filter", async (req, res) => {
  const {
    gender,
    minFee,
    maxFee,
    experience,
    language,
    specialization,
    onlineConsult,
    hospitalVisit,
    page = 1,
    limit = 10
  } = req.query;

  const filter = {};

  if (gender) filter.gender = gender;
  if (experience) filter.experience = Number(experience);
  if (language) {
    filter.languages = { $elemMatch: { $regex: new RegExp(language, 'i') } };
  }
  if (specialization && specialization !== 'All') {
    filter.specialization = { $regex: specialization, $options: 'i' };
  }
  if (minFee || maxFee)
    filter.fee = {
      ...(minFee && { $gte: Number(minFee) }),
      ...(maxFee && { $lte: Number(maxFee) })
    };
  if (onlineConsult) filter.onlineConsult = onlineConsult === "true";
  if (hospitalVisit) filter.hospitalVisit = hospitalVisit === "true";

  try {
    const doctors = await Doctor.find(filter)
      .sort({ createdAt: -1 }) // descending: latest first
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await Doctor.countDocuments(filter);
    res.json({ success: true, total, doctors });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
