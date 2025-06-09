import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="transition-colors-custom flex min-h-screen min-w-full flex-wrap items-center justify-center bg-white pt-16 dark:bg-zinc-800">
      <h1 className="text-primary-dark dark:text-primary-light mr-4 text-xl font-bold leading-10">
        404
      </h1>
      <div className="border-primary-dark inline-block border-s pl-4 dark:border-zinc-50">
        <h2 className="text-primary-dark dark:text-primary-light text-sm leading-10">
          This page could not be found.
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
