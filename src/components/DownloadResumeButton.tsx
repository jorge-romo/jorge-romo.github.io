'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { getFileNameFromPath } from '@/utilities';
import { personalInfo } from '@/data';
import { Button } from '@/components/ui';

const DownloadResumeButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    const fileName = getFileNameFromPath(personalInfo.resume);
    const ext = fileName.split('.').pop();
    link.download = `${personalInfo.name.split(' ').join('_')}_Resume.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button variant="default" onClick={handleDownload}>
      <Download size="16px" />
      Resume
    </Button>
  );
};

export default DownloadResumeButton;
