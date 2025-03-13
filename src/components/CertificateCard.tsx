'use client';

import Image from 'next/image';
import React, { HTMLAttributes, HTMLElementType } from 'react';
import clsx from 'clsx';
import type { ICertificate } from '@/data';
import { Button } from '@/components/ui';

export interface CertificateCardProps<AsTarget extends HTMLElementType = 'div'>
  extends HTMLAttributes<AsTarget> {
  as?: AsTarget;
  certificate: Omit<ICertificate, 'featured'>;
}
const CertificateCard = React.memo(
  <AsTarget extends HTMLElementType = 'div'>(
    props: CertificateCardProps<AsTarget>,
  ) => {
    const {
      as = 'div',
      certificate: { image, title, description, issuer, link, issuedDate },
      className,
      ...rest
    } = props;

    const element = React.createElement(
      as,
      {
        'data-testid': 'certificate-card',
        ...rest,
        className: clsx(
          'transition-colors-custom group relative flex flex-col md:flex-row gap-8 items-center overflow-hidden rounded-xl border border-zinc-300 bg-white p-8 shadow-sm hover:shadow-md dark:border-zinc-600 dark:bg-zinc-800/50',
          className,
        ),
        'data-component': 'card',
      },
      <Image
        className="transition-transform duration-500 group-hover:scale-105"
        src={image}
        sizes="180px"
        width={180}
        height={180}
        style={{ objectFit: 'contain' }}
        alt={title}
      />,
      <div className="flex-1">
        <h3 className="mb-4 text-2xl font-medium text-primary-dark dark:text-zinc-50">
          {title}
        </h3>
        {link ? (
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
          >
            {issuer}
          </Button>
        ) : (
          <p className="text-lg dark:text-zinc-100">{issuer}</p>
        )}
        {issuedDate && (
          <p className="mt-2 text-lg dark:text-zinc-100">
            At <span>{issuedDate}</span>
          </p>
        )}
        <p className="mt-4 text-secondary dark:text-zinc-300">{description}</p>
      </div>,
    );

    return element;
  },
);
CertificateCard.displayName = 'CertificateCard';

export default CertificateCard;
