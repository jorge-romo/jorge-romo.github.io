import React from 'react';
import { render, screen } from '@testing-library/react';
import Certificates from '@/components/Certificates';
import { ICertificate, certificates } from '@/data/certificates';

jest.mock<{ certificates: ICertificate[] }>('@/data/certificates', () => ({
  certificates: [
    {
      issuedDate: '',
      issuer: 'Issuer summary of the certificate 1',
      description: 'This is a description of the certificate 1',
      title: 'Certificate 1',
      imageUrl: '/certificates/certificate-1.png',
    },
    {
      issuedDate: '2025-01-01',
      issuer: 'Issuer summary of the certificate 2',
      description: 'This is a description of the certificate 2',
      title: 'Certificate 2',
      imageUrl: '/certificates/certificate-2.png',
      link: 'https://certificate.com/certificate-2',
      featured: true,
    },
  ],
}));

describe('Certificates Component', () => {
  it('renders the section title', () => {
    render(<Certificates />);
    expect(screen.getByText('Certificates')).toBeInTheDocument();
  });

  it('applies the "transition-colors-custom" class to the section', () => {
    render(<Certificates />);
    const sectionElement = screen.getByTestId('certificates-section');
    expect(sectionElement).toHaveClass('transition-colors-custom');
  });

  it('renders the certificate', () => {
    render(<Certificates />);

    certificates.forEach((certificate) => {
      expect(screen.getByText(certificate.title)).toBeInTheDocument();
      expect(screen.getByText(certificate.description)).toBeInTheDocument();
      expect(screen.getByText(certificate.issuer)).toBeInTheDocument();
    });
  });
});
