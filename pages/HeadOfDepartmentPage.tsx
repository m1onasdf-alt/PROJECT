import React from 'react';
import { data } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';

const HeadOfDepartmentPage: React.FC = () => {
  const head = data.HeadOfDepartment;

  // FIX: Replaced JSX.Element with React.ReactNode to fix "Cannot find namespace 'JSX'" error.
  const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
    <div className="flex items-start space-x-4 space-x-reverse">
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        {href ? (
          <a href={href} className="text-md font-medium text-gray-800 hover:text-purple-600 transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-md font-medium text-gray-800">{value}</p>
        )}
      </div>
    </div>
  );

  return (
    <PageWrapper title="رئيسة القسم">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 md:space-x-reverse space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src={head.photo_url}
            alt={head.name}
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
          />
        </div>
        <div className="flex-grow text-center md:text-right">
          <h3 className="text-3xl font-bold text-gray-900">{head.name}</h3>
          <p className="text-purple-600 text-lg mt-1">رئيسة قسم تصميم وتصنيع الأزياء</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <InfoItem icon={<MailIcon />} label="البريد الجامعي" value={head.email} href={`mailto:${head.email}`} />
            <InfoItem icon={<PhoneIcon />} label="الهاتف" value={head.phone} href={`tel:${head.phone}`} />
            <InfoItem icon={<OfficeIcon />} label="المكتب" value={head.office} />
            <InfoItem icon={<ClockIcon />} label="الساعات المكتبية" value={head.office_hours} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

// Icons
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const OfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default HeadOfDepartmentPage;