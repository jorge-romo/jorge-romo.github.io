import { render, screen } from '@testing-library/react';
import DownloadResumeButton from '../ui/DownloadResumeButton';

describe('DownloadResumeButton', () => {
  it('renders download resume button', () => {
    render(<DownloadResumeButton />);
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  it('has correct styling classes', () => {
    render(<DownloadResumeButton />);
    const button = screen.getByText('Resume');
    expect(button).toHaveClass('inline-flex', 'items-center', 'gap-2');
  });

  it('has download icon', () => {
    render(<DownloadResumeButton />);
    const icon = screen.getByTestId('download-icon');
    expect(icon).toBeInTheDocument();
  });
});
