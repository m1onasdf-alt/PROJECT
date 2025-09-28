
import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/mockData';

const HomePage: React.FC = () => {
    const department = data.Department;

    const QuickLink: React.FC<{ to: string; title: string; icon: React.ReactNode }> = ({ to, title, icon }) => (
        <Link to={to} className="group block bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-700 rounded-full mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700">{title}</h3>
        </Link>
    );

  return (
    <div className="space-y-12">
        <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{department.name}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{department.mission}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <QuickLink to="/announcements" title="الاعلانات" icon={<MegaphoneIcon />} />
            <QuickLink to="/magazine" title="مجلة القسم" icon={<SparklesIcon />} />
            <QuickLink to="/head" title="رئيسة القسم" icon={<UserIcon />} />
            <QuickLink to="/trainers" title="المدربات" icon={<UsersIcon />} />
            <QuickLink to="/advisors" title="المرشدات الأكاديميات" icon={<AcademicCapIcon />} />
            <QuickLink to="/courses" title="المقررات الدراسية" icon={<BookOpenIcon />} />
            <QuickLink to="/calendar" title="التقويم الدراسي" icon={<CalendarIcon />} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">الرؤية</h3>
                <p className="text-gray-600 leading-relaxed">{department.vision}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">الأهداف</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-600">
                    {department.objectives.map((obj, index) => <li key={index}>{obj}</li>)}
                </ul>
            </div>
        </div>
    </div>
  );
};

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197" /></svg>
);
const AcademicCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>
);
const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const MegaphoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.358 1.84 19.642 1 21 1c.69 0 1 .31 1 1v12c0 .69-.31 1-1 1-.358 0-.642-.84-1.168-1.486A5.002 5.002 0 0017 14.528H7" /></svg>;
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 4 4-4 5.293-5.293a1 1 0 011.414 0L21 12" /></svg>;

export default HomePage;