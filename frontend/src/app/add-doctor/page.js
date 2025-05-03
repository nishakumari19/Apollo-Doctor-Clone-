'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddDoctorPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    gender: '',
    specialization: '',
    experience: '',
    fee: '',
    languages: '',
    onlineConsult: false,
    hospitalVisit: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      experience: Number(form.experience),
      fee: Number(form.fee),
      languages: form.languages.split(',').map((l) => l.trim()),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/add-doctor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (data.success) {
      router.push('/');
    } else {
      alert('Failed to add doctor: ' + data.error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Doctor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" required />
        <select name="gender" onChange={handleChange} className="w-full border p-2 rounded" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select name="specialization" onChange={handleChange} className="w-full border p-2 rounded" required>
          <option value="">Select Specialization</option>
          <option value="General Physician">General Physician</option>
          <option value="Internal Medicine">Internal Medicine</option>
        </select>
        <input name="experience" type="number" onChange={handleChange} placeholder="Experience (years)" className="w-full border p-2 rounded" required />
        <input name="fee" type="number" onChange={handleChange} placeholder="Consultation Fee" className="w-full border p-2 rounded" required />
        <input name="languages" onChange={handleChange} placeholder="Languages (comma-separated)" className="w-full border p-2 rounded" required />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="onlineConsult" onChange={handleChange} />
          Online Consultation
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="hospitalVisit" onChange={handleChange} />
          Hospital Visit
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700">Add Doctor</button>
      </form>
    </div>
  );
}
