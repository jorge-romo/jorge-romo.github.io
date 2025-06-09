'use client';

import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { experiences } from '@/data/experience';

const formatDate = (dateStr: string) => {
  if (dateStr === 'Present') return dateStr;
  return format(new Date(dateStr), 'MMM yyyy');
};

const Experience = () => {
  return (
    <section id="experience" className="mx-auto min-h-screen px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.startDate}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.position}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.company} • {exp.location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </p>
              </div>
              <ul className="ml-4 list-disc space-y-2 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
