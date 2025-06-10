'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import clsx from 'clsx';
import { socialLinks } from '@/data';

type ContactProps = HTMLMotionProps<'section'>;

const Contact = ({ className, ...props }: ContactProps) => {
  const validLinks = socialLinks.filter((link) => link.url);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx('min-h-screen px-4', className)}
      data-testid="contact"
      {...props}
    >
      <div className="pb-16 pt-32">
        <h2 className="mb-16 text-center text-3xl font-bold">Get in Touch</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground">
              I&apos;m always interested in hearing about new projects and
              opportunities. Feel free to reach out if you&apos;d like to
              connect!
            </p>
            <div className="flex gap-4">
              {validLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'flex items-center justify-center rounded-full bg-white p-4 text-primary shadow-md transition-all dark:bg-gray-800',
                    'hover:bg-[--hover-color] hover:text-white hover:shadow-lg dark:hover:text-[--hover-color]',
                  )}
                  style={{ '--hover-color': link.color } as React.CSSProperties}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
