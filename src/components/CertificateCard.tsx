'use client';

import Image from 'next/image';
import React, { HTMLAttributes, HTMLElementType } from 'react';
import clsx from 'clsx';
import type { ICertificate } from '@/data';

export interface CertificateCardProps<AsTarget>
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
      certificate: { imageUrl, title, description, issuer, link, issuedDate },
      className,
      ...rest
    } = props;

    const element = React.createElement(
      as,
      {
        'data-testid': 'certificate-card',
        ...rest,
        className: clsx(
          'transition-colors-custom group relative flex items-center overflow-hidden rounded-xl border border-zinc-300 bg-white p-8 shadow-sm hover:shadow-md dark:border-zinc-600 dark:bg-zinc-800/50',
          className,
        ),
        'data-component': 'card',
      },
      <Image
        className="transition-transform duration-500 group-hover:scale-105"
        src={imageUrl}
        alt={title}
        sizes="180px"
        width={180}
        height={180}
        style={{ objectFit: 'contain' }}
      />,
      <div className="flex-1 pl-8">
        <h3 className="mb-4 text-2xl font-medium text-primary-dark dark:text-zinc-50">
          {title}
        </h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline transition-colors hover:text-zinc-700/50 dark:text-zinc-100 dark:hover:text-zinc-200/50"
          >
            {issuer}
          </a>
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
