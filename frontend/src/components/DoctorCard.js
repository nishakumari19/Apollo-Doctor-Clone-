'use client';
export default function DoctorCard({ doctor }) {
    return (
        <div className="shadow-2xl p-4 rounded-2xl shadow hover:shadow-md transition space-y-1 bg-white">
            <h3 className="font-bold text-xl text-blue-700">{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Experience:</strong> {doctor.experience} years</p>
            <p><strong>Fee:</strong> ₹{doctor.fee}</p>
            <p><strong>Gender:</strong> {doctor.gender}</p>
            <p><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
            <p><strong>Online Consult:</strong> {doctor.onlineConsult ? '✅' : '❌'}</p>
            <p><strong>Hospital Visit:</strong> {doctor.hospitalVisit ? '✅' : '❌'}</p>
        </div>
    );
}
