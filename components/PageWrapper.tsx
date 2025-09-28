
import React from 'react';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 border-r-4 border-purple-600 pr-4">
        {title}
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
