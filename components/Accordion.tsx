
import React, { useState } from 'react';

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors"
      >
        <div className="flex-1 text-right">{title}</div>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white animate-fade-in-down border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
    children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
    return <div className="space-y-4">{children}</div>;
}
