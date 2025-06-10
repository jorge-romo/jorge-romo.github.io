'use client';

import React from 'react';
import { LuDownload } from 'react-icons/lu';
import { getFileNameFromPath } from '@/utilities';
import { personalInfo } from '@/data';
import { Button } from '@/components/ui';

const DownloadResumeButton: React.FC<React.ComponentPropsWithRef<'button'>> = (
  props,
) => {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    const fileName = getFileNameFromPath(personalInfo.resume);
    const ext = fileName.split('.').pop();
    link.download = `${personalInfo.name.replace('.', '')} - Resume.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    props.onClick?.(e);
  };

  return (
    <Button
      data-testid="download-button"
      variant="default"
      {...props}
      onClick={handleDownload}
    >
      <LuDownload data-testid="download-icon" size="16px" />
      Resume
    </Button>
  );
};

export default DownloadResumeButton;
