
import React from 'react';
import { data } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';
import { Trainer } from '../types';

const TrainerCard: React.FC<{ trainer: Trainer }> = ({ trainer }) => (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-800">{trainer.name}</h3>
        <p className="text-purple-600 font-medium my-2">{trainer.specialization}</p>
        <div className="text-gray-600 space-y-2 mt-4 text-sm">
            <div className="flex items-center space-x-2 space-x-reverse">
                <MailIcon />
                <a href={`mailto:${trainer.email}`} className="hover:text-purple-700">{trainer.email}</a>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
                <OfficeIcon />
                <span>{trainer.office}</span>
            </div>
        </div>
    </div>
);

const TrainersPage: React.FC = () => {
  return (
    <PageWrapper title="المدربات">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.Trainers.map(trainer => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </PageWrapper>
  );
};

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const OfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;

export default TrainersPage;
