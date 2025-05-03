'use client';

import dynamic from 'next/dynamic';

const ClientDoctorList = dynamic(() => import('./ClientDoctorList'), {
  ssr: false,
  loading: () => <div>Loading doctors...</div>,
});

export default function ClientOnlyWrapper() {
  return <ClientDoctorList />;
}
