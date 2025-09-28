
import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeadOfDepartmentPage from './pages/HeadOfDepartmentPage';
import TrainersPage from './pages/TrainersPage';
import AdvisorsPage from './pages/AdvisorsPage';
import CoursesListPage from './pages/CoursesListPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AcademicCalendarPage from './pages/AcademicCalendarPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import MagazinePage from './pages/MagazinePage';
import { data } from './data/mockData';

const App: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/announcements', label: 'الاعلانات' },
    { path: '/magazine', label: 'مجلة القسم' },
    { path: '/head', label: 'رئيسة القسم' },
    { path: '/trainers', label: 'المدربات' },
    { path: '/advisors', label: 'المرشدات' },
    { path: '/courses', label: 'المقررات' },
    { path: '/calendar', label: 'التقويم الدراسي' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-700">{data.Department.name}</h1>
          <div className="hidden md:flex items-center space-x-4 space-x-reverse flex-wrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-purple-700 transition-colors duration-300 pb-1 border-b-2 text-sm ${
                    isActive ? 'border-purple-600 text-purple-700 font-semibold' : 'border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/head" element={<HeadOfDepartmentPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/advisors" element={<AdvisorsPage />} />
          <Route path="/courses" element={<CoursesListPage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
          <Route path="/calendar" element={<AcademicCalendarPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
        </Routes>
      </main>

      <footer className="bg-white mt-12 py-6 text-center text-gray-500 border-t">
          <p>&copy; {new Date().getFullYear()} {data.Department.name}. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default App;