import React from 'react';

const Help = () => {
  return (
    <div className="help-page p-6 md:p-10">
      <h1 className="text-3xl font-bold text-center mb-4 mt-10">Help Center</h1>
      <p className="text-lg text-center mb-6">
        Find answers to common questions below:
      </p>
      <ul className="list-disc list-inside">
        <li>How to use this site?</li>
        <li>Where to find code examples?</li>
        <li>Contact support for further assistance.</li>
      </ul>
    </div>
  );
};

export default Help;
