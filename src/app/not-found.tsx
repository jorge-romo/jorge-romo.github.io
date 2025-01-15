import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="transition-colors-custom flex min-h-screen min-w-full flex-wrap items-center justify-center bg-white pt-16 dark:bg-zinc-900/95">
      <h1 className="mr-4 text-xl font-bold leading-10 text-primary-dark dark:text-zinc-50">
        404
      </h1>
      <div className="inline-block border-s border-primary-dark pl-4 dark:border-zinc-50">
        <h2 className="text-sm leading-10 text-primary-dark dark:text-zinc-50">
          This page could not be found.
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
