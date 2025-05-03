'use client';

export default function Header() {
    const handleNoNav = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Navigation Items */}
                <nav className="flex items-center gap-6 text-gray-800 text-md font-medium">
                    {['Doctors', 'Medicines', 'Lab Tests', 'Health Records', 'Offers'].map((item) => (
                        <span
                            key={item}
                            onClick={handleNoNav}
                            className="cursor-pointer hover:text-blue-700"
                        >
                            {item}
                        </span>
                    ))}
                </nav>

                {/* User Section */}
                <div className="text-md text-gray-700 font-medium">
                    <span onClick={handleNoNav} className="cursor-pointer hover:text-blue-700">
                        Login / Signup
                    </span>
                </div>
            </div>
        </header>
    );
}
