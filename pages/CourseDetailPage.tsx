
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data/mockData';
import { Resource, ResourceType } from '../types';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = data.Courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">المقرر غير موجود</h2>
        <Link to="/courses" className="text-purple-600 hover:underline mt-4 inline-block">
            العودة إلى قائمة المقررات
        </Link>
      </div>
    );
  }

  const getYoutubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getResourceIcon = (type: ResourceType) => {
    switch(type) {
        case ResourceType.VIDEO: return <VideoIcon />;
        case ResourceType.PDF: return <PdfIcon />;
        case ResourceType.PRESENTATION: return <PresentationIcon />;
        case ResourceType.IMAGE: return <ImageIcon />;
        case ResourceType.BOOK: return <BookIcon />;
        default: return <LinkIcon />;
    }
  }

  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-800 border-r-4 border-purple-600 pr-4">{course.title}</h2>
            <Link to="/courses" className="text-sm text-purple-600 hover:text-purple-800 flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                العودة للمقررات
            </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">وصف المقرر</h3>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">مفردات المقرر (Syllabus)</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {course.syllabus.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">المادة العلمية والمصادر</h3>
                <div className="space-y-4">
                    {course.resources.map((resource, index) => {
                        const videoId = resource.type === ResourceType.VIDEO ? getYoutubeVideoId(resource.url) : null;
                        if (videoId) {
                            return (
                                <div key={index} className="my-4">
                                    <h4 className="font-semibold mb-2">{resource.title}</h4>
                                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title={resource.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        ></iframe>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                                <div className="text-purple-600">{getResourceIcon(resource.type)}</div>
                                <span className="mr-3 font-medium text-gray-700">{resource.title}</span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  );
};

// Icons
const VideoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const PdfIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const PresentationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12.016a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>;
const ImageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;

export default CourseDetailPage;
