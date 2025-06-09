'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      reset();
    } catch (_error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="text-primary-dark block text-sm font-medium dark:text-zinc-100"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={`mt-1 block w-full rounded-md border ${
            errors.name
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:border-primary focus:ring-primary'
          } text-primary-dark transition-colors-custom bg-white px-4 py-2 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-primary-dark block text-sm font-medium dark:text-zinc-100"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={`mt-1 block w-full rounded-md border ${
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:border-primary focus:ring-primary'
          } text-primary-dark transition-colors-custom bg-white px-4 py-2 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="text-primary-dark block text-sm font-medium dark:text-zinc-100"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject', { required: 'Subject is required' })}
          className={`mt-1 block w-full rounded-md border ${
            errors.subject
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:border-primary focus:ring-primary'
          } text-primary-dark transition-colors-custom bg-white px-4 py-2 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-primary-dark block text-sm font-medium dark:text-zinc-100"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters long',
            },
          })}
          rows={6}
          className={`mt-1 block w-full rounded-md border ${
            errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:border-primary focus:ring-primary'
          } text-primary-dark transition-colors-custom bg-white px-4 py-2 shadow-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100`}
          placeholder="Your message here..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {submitStatus === 'success' && (
        <p className="text-center text-sm text-green-500">
          Thank you for your message! I&apos;ll get back to you soon.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-center text-sm text-red-500">
          Oops! Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
