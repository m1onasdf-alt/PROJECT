
import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/mockData';
import PageWrapper from '../components/PageWrapper';
import { Course } from '../types';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4 h-20 overflow-hidden">{course.description}</p>
            <Link 
                to={`/courses/${course.id}`} 
                className="inline-flex items-center font-semibold text-purple-600 group-hover:text-purple-800 transition-colors"
            >
                عرض التفاصيل
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </Link>
        </div>
    </div>
);


const CoursesListPage: React.FC = () => {
  return (
    <PageWrapper title="المقررات الدراسية">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.Courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default CoursesListPage;
