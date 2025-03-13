import React from 'react';
import CertificateCard from '@/components/CertificationCard';
import { certificates as _certificates } from '@/data';

const certificates = [..._certificates];
const featuredCertificateIndex = certificates.findIndex(
  (p) => p.featured === true,
);
const featuredCertificate =
  featuredCertificateIndex >= 0
    ? certificates.splice(featuredCertificateIndex, 1)[0]
    : null;

const Certificates: React.FC = () => {
  return (
    <section
      id="certificates"
      data-testid="certificates-section"
      className="transition-colors-custom bg-zinc-100 py-20 dark:bg-zinc-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-16 mt-8 text-center text-3xl font-medium text-primary-dark dark:text-zinc-50">
          Certificates
        </h2>
        <ul className="mx-auto flex max-w-6xl flex-col items-center gap-8">
          {featuredCertificate && (
            <CertificateCard as="li" certification={featuredCertificate} />
          )}
          {certificates.map((certificate, index) => (
            <CertificateCard as="li" key={index} certification={certificate} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
