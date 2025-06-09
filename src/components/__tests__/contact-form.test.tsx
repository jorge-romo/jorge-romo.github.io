import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    render(<ContactForm />);

    const submitButton = screen.getByText(/send message/i);
    await userEvent.click(submitButton);

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/subject is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
  });

  it('shows error for invalid email', async () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'invalid-email');

    const submitButton = screen.getByText(/send message/i);
    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/invalid email address/i),
    ).toBeInTheDocument();
  });

  it('shows error for short message', async () => {
    render(<ContactForm />);

    const messageInput = screen.getByLabelText(/message/i);
    await userEvent.type(messageInput, 'short');

    const submitButton = screen.getByText(/send message/i);
    await userEvent.click(submitButton);

    expect(
      await screen.findByText(/message must be at least 10 characters long/i),
    ).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    render(<ContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/subject/i), 'Test Subject');
    await userEvent.type(
      screen.getByLabelText(/message/i),
      'This is a test message that is long enough to pass validation.',
    );

    const submitButton = screen.getByText(/send message/i);
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/thank you for your message/i),
      ).toBeInTheDocument();
    });
  });
});
