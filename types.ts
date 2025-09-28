export interface Department {
  name: string;
  vision: string;
  mission: string;
  objectives: string[];
}

export interface HeadOfDepartment {
  name: string;
  email: string;
  phone: string;
  office: string;
  office_hours: string;
  photo_url: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  email: string;
  phone: string;
  office: string;
}

export interface Student {
  id: string;
  name: string;
  student_no: string;
  level: number;
  section: string;
}

export interface Advisor {
  id: string;
  name: string;
  email: string;
  photo_url: string;
  students: Student[];
}

export enum ResourceType {
    VIDEO = 'video',
    PDF = 'pdf',
    PRESENTATION = 'presentation',
    IMAGE = 'image',
    BOOK = 'book'
}

export interface Resource {
  type: ResourceType;
  title: string;
  url: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  syllabus: string[];
  resources: Resource[];
}

export interface AcademicEvent {
    id: string;
    date: string;
    title: string;
    description: string;
}

export interface Announcement {
    id: string;
    date: string;
    title: string;
    content: string;
}

export interface MagazineItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    studentName?: string;
}

export interface AppData {
  Department: Department;
  HeadOfDepartment: HeadOfDepartment;
  Trainers: Trainer[];
  Advisors: Advisor[];
  Courses: Course[];
  AcademicCalendar: AcademicEvent[];
  Announcements: Announcement[];
  Magazine: MagazineItem[];
}
