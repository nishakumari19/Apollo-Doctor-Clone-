'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FiltersSidebar from '../components/FiltersSidebar';
import DoctorCard from '../components/DoctorCard';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import { fetchDoctors } from '../utils/api';
import Link from 'next/link';

export default function ClientDoctorList() {
    const [filters, setFilters] = useState({});
    const [doctors, setDoctors] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const limit = 6;
    const router = useRouter();

    useEffect(() => {
        const load = async () => {
            const data = await fetchDoctors(filters, page, limit);
            console.log("Fetched Doctors:", data);
            if (data.success) {
                setDoctors(data.doctors);
                setTotal(data.total);
            }
        };
        load();
    }, [filters, page]);

    const totalPages = Math.ceil(total / limit);

    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 p-4">
                <FiltersSidebar filters={filters} setFilters={setFilters} />
                <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Available Doctors</h2>
                        <Link href="/add-doctor">
                            <button className="mb-4 px-4 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700">+ Add Doctor</button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {doctors.map((doc) => (
                            <DoctorCard key={doc._id} doctor={doc} />
                        ))}
                    </div>
                    <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
                </div>
            </div>
        </>
    );
}
