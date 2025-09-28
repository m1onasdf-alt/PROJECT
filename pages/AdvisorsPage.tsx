
import React from 'react';
import { data } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';
import { Accordion, AccordionItem } from '../components/Accordion';
import { Advisor } from '../types';

const AdvisorTitle: React.FC<{ advisor: Advisor }> = ({ advisor }) => (
    <div className="flex items-center space-x-4 space-x-reverse">
        <img src={advisor.photo_url} alt={advisor.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
            <h4 className="font-bold text-lg text-gray-800">{advisor.name}</h4>
            <p className="text-sm text-gray-500">{advisor.email}</p>
        </div>
    </div>
);


const AdvisorsPage: React.FC = () => {
  return (
    <PageWrapper title="المرشدات الأكاديميات">
      <Accordion>
        {data.Advisors.map(advisor => (
          <AccordionItem key={advisor.id} title={<AdvisorTitle advisor={advisor} />}>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">اسم المتدربة</th>
                            <th scope="col" className="px-6 py-3">الرقم التدريبي</th>
                            <th scope="col" className="px-6 py-3">المستوى</th>
                            <th scope="col" className="px-6 py-3">الشعبة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {advisor.students.map(student => (
                            <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {student.name}
                                </th>
                                <td className="px-6 py-4">{student.student_no}</td>
                                <td className="px-6 py-4">{student.level}</td>
                                <td className="px-6 py-4">{student.section}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </PageWrapper>
  );
};

export default AdvisorsPage;
