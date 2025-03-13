import React from 'react';
import { render, screen } from '@testing-library/react';
import CertificateCard from '@/components/CertificateCard';
import { ICertificate } from '@/data';

const mockCertificate: ICertificate = {
  issuedDate: '2025-01-01',
  issuer: 'Issuer summary of the certificate',
  description: 'This is a description of the certificate',
  title: 'Test Certificate',
  imageUrl: '/test-certificate.png',
  link: 'https://certificate.com/certificate-2',
};

describe('CertificateCard Component', () => {
  it('should render the certificate title', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    const title = screen.getByText(mockCertificate.title);
    expect(title).toBeInTheDocument();
  });

  it('should render the certificate description', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    const description = screen.getByText(mockCertificate.description);
    expect(description).toBeInTheDocument();
  });

  it('should render the certificate issuer', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    const issuer = screen.getByText(mockCertificate.issuer);
    expect(issuer).toBeInTheDocument();
  });

  it('should render the certificate issuer with link', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    const issuer = screen.getByRole('link', {
      name: mockCertificate.issuer,
    });
    expect(issuer).toHaveAttribute('href', mockCertificate.link);
  });

  it('should render the certificate without link if link is not provided', () => {
    const mockCertificateWithoutLink = { ...mockCertificate, link: undefined };
    render(<CertificateCard certificate={mockCertificateWithoutLink} />);
    const issuer = screen.getByText(mockCertificateWithoutLink.issuer);
    expect(issuer.tagName).not.toBe('a');
  });

  it('should render the certificate date', () => {
    const mockCertificateWithDate = {
      ...mockCertificate,
      issuedDate: '2025-01-01',
    };
    render(<CertificateCard certificate={mockCertificateWithDate} />);
    const issuer = screen.getByText(mockCertificateWithDate.issuedDate);
    expect(issuer).toBeInTheDocument();
  });

  it('should render the certificate image', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    const image = screen.getByAltText(mockCertificate.title);
    expect(image).toBeInTheDocument();
  });

  it('should apply the correct classes for styling', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    const card = screen.getByTestId('certificate-card');
    expect(card).toHaveClass('group rounded-xl ');
  });
});
