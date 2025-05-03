
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const generalPhysicianMetadata = {
    title: 'General Physicians | Apollo 24/7',
    description: 'Book appointments with General Physicians. Get online consultations from top Internal Medicine doctors at Apollo 24/7.',
    keywords: ['General Physician', 'Internal Medicine', 'Apollo doctors', 'online consultation'],
    alternates: {
        canonical: BASE_URL,
    },
    openGraph: {
        title: 'Top General Physicians - Apollo 24/7',
        description: 'Consult with trusted internal medicine doctors online at Apollo 24/7.',
        url: BASE_URL,
    },
};

export default generalPhysicianMetadata;
