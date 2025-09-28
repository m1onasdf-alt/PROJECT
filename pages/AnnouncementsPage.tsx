import React from 'react';
import { data } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';

const AnnouncementsPage: React.FC = () => {
  const announcements = data.Announcements;

  return (
    <PageWrapper title="الإعلانات">
      <div className="space-y-6">
        {announcements.map(announcement => (
          <div key={announcement.id} className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-purple-500">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">{announcement.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
                </div>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">{announcement.content}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default AnnouncementsPage;
