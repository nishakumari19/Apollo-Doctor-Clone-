'use client';
export default function Pagination({ page, totalPages, onPageChange }) {
    return (
        <div className="flex justify-center items-center gap-4 mt-6">
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page <= 1}
                className="px-4 py-2 bg-blue-100 cursor-pointer text-blue-700 rounded disabled:opacity-50"
            >
                Prev
            </button>
            <span className="font-semibold text-gray-700">
                Page {page} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page >= totalPages}
                className="px-4 py-2 bg-blue-100 cursor-pointer text-blue-700 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}
