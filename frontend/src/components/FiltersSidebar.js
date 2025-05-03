'use client';

import { useState } from 'react';

export default function FiltersSidebar({ filters, setFilters }) {
  const [localFilters, setLocalFilters] = useState({
    gender: 'All',
    experience: '',
    minFee: '',
    maxFee: '',
    onlineConsult: false,
    hospitalVisit: false,
    language: '',
    specialization: ''
  });

  const handleApply = () => {
    const finalFilters = {
      ...localFilters,
      experience: localFilters.experience || undefined,
      minFee: localFilters.minFee || undefined,
      maxFee: localFilters.maxFee || undefined,
      onlineConsult: localFilters.onlineConsult,
      hospitalVisit: localFilters.hospitalVisit,
      language: localFilters.language || undefined,
      specialization: localFilters.specialization || undefined
    };
    setFilters(finalFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      gender: 'All',
      experience: '',
      minFee: '',
      maxFee: '',
      onlineConsult: false,
      hospitalVisit: false,
      language: '',
      specialization: ''
    };
    setLocalFilters(resetFilters);
    setFilters({});
  };

  return (
    <div className="w-full md:w-64 shadow-2xl p-4 rounded-xl bg-white">
      <h3 className="font-bold text-lg mb-4">Filter Doctors</h3>
      <div className="space-y-2">
        {/* Gender */}
        <div>
          <label className="block">Gender:</label>
          <select
            className="w-full border p-1 rounded"
            value={localFilters.gender}
            onChange={(e) => setLocalFilters({ ...localFilters, gender: e.target.value })}
          >
            <option value="All">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="block">Experience (years):</label>
          <input
            type="number"
            className="w-full border p-1 rounded"
            value={localFilters.experience}
            onChange={(e) => setLocalFilters({ ...localFilters, experience: e.target.value })}
          />
        </div>
        {/* Specialization */}
        <div>
          <label className="block">Specialization:</label>
          <select
            className="w-full border p-1 rounded"
            value={localFilters.specialization}
            onChange={(e) => setLocalFilters({ ...localFilters, specialization: e.target.value })}
          >
            <option value="">All</option>
            <option value="General Physician">General Physician</option>
            <option value="Internal Medicine">Internal Medicine</option>
          </select>
        </div>

        {/* Fee Range */}
        <div>
          <label className="block">Fee Range (₹):</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 border p-1 rounded"
              value={localFilters.minFee}
              onChange={(e) => setLocalFilters({ ...localFilters, minFee: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 border p-1 rounded"
              value={localFilters.maxFee}
              onChange={(e) => setLocalFilters({ ...localFilters, maxFee: e.target.value })}
            />
          </div>
        </div>

        {/* Online Consult */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={localFilters.onlineConsult}
              onChange={(e) => setLocalFilters({ ...localFilters, onlineConsult: e.target.checked })}
            /> Online Consult
          </label>
        </div>

        {/* Hospital Visit */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={localFilters.hospitalVisit}
              onChange={(e) => setLocalFilters({ ...localFilters, hospitalVisit: e.target.checked })}
            /> Hospital Visit
          </label>
        </div>

        {/* Language Filter */}
        <div>
          <label className="block">Language:</label>
          <select
            className="w-full border p-1 rounded"
            value={localFilters.language}
            onChange={(e) => setLocalFilters({ ...localFilters, language: e.target.value })}
          >
            <option value="">All</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Telugu">Telugu</option>
            <option value="Bengali">Bengali</option>
            <option value="Kannada">Kannada</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>

        {/* Buttons */}
        <button
          onClick={handleApply}
          className="w-full mt-2 bg-blue-600 cursor-pointer text-white p-2 rounded hover:bg-blue-700"
        >
          Apply Filters
        </button>

        <button
          onClick={handleReset}
          className="w-full mt-2 bg-gray-300 text-gray-800 cursor-pointer p-2 rounded hover:bg-gray-400"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
