import React from 'react';
import { data } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';
import { MagazineItem } from '../types';

const MagazineCard: React.FC<{ item: MagazineItem }> = ({ item }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group border border-gray-200 hover:shadow-xl transition-all duration-300">
        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            {item.studentName && <p className="text-sm text-purple-600 font-semibold my-1">{item.studentName}</p>}
            <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
    </div>
);


const MagazinePage: React.FC = () => {
  return (
    <PageWrapper title="مجلة القسم والإنجازات">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.Magazine.map(item => (
          <MagazineCard key={item.id} item={item} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default MagazinePage;
