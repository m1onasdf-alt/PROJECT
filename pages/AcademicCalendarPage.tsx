import React from 'react';
import { data } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';

const AcademicCalendarPage: React.FC = () => {
  const events = data.AcademicCalendar;

  return (
    <PageWrapper title="التقويم الدراسي">
      <div className="relative border-r-2 border-purple-200 ml-4">
        {events.map((event, index) => (
          <div key={event.id} className="mb-8 flex items-center w-full">
            <div className="absolute -right-4 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <div className="mr-12 bg-white p-5 rounded-lg shadow-sm border border-gray-200 w-full">
              <span className="font-bold text-purple-700 text-lg">{event.date}</span>
              <h3 className="text-xl font-semibold text-gray-800 my-1">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default AcademicCalendarPage;
