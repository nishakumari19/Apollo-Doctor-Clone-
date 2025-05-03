import generalPhysicianMetadata from '@/seo/generalPhysicianMeta';
import ClientOnlyWrapper from './ClientOnlyWrapper';

export const metadata = generalPhysicianMetadata;

export default function DestinationPage() {
  return <ClientOnlyWrapper />;
}
