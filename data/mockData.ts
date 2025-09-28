import { AppData, ResourceType } from '../types';

export const data: AppData = {
  Department: {
    name: "قسم تصميم وتصنيع الأزياء",
    vision: "تحقيق الريادة والتميز في مجال تصميم وتصنيع الأزياء، وتخريج كوادر وطنية مؤهلة تلبي احتياجات سوق العمل وتساهم في تطوير الصناعة المحلية.",
    mission: "توفير بيئة تعليمية وتدريبية محفزة ومبتكرة، تزود المتدربات بالمعارف والمهارات التقنية والإبداعية اللازمة للمنافسة في سوق العمل، مع الالتزام بمعايير الجودة العالمية وتعزيز الشراكة مع القطاع الخاص.",
    objectives: [
        "إعداد خريجات مؤهلات علمياً ومهنياً في تصميم الأزياء.",
        "تنمية المهارات الإبداعية والابتكارية لدى المتدربات.",
        "مواكبة التطورات الحديثة في تقنيات تصميم وتصنيع الأزياء.",
        "تعزيز الشراكة المجتمعية مع المؤسسات ذات العلاقة.",
    ]
  },
  HeadOfDepartment: {
    name: "أ. منيرة القحطاني",
    email: "m.alqahtani@tvtc.gov.sa",
    phone: "011-123-4567",
    office: "مبنى الإدارة، مكتب 201",
    office_hours: "الأحد - الثلاثاء (10:00 ص - 12:00 م)",
    photo_url: "https://picsum.photos/seed/head/200"
  },
  Trainers: [
    { id: "T001", name: "أ. سارة العتيبي", specialization: "خياطة وتفصيل", email: "s.alotaibi@tvtc.gov.sa", phone: "011-234-5678", office: "مبنى أ، مكتب 101" },
    { id: "T002", name: "أ. فاطمة الزهراني", specialization: "تصميم باترون", email: "f.alzahrani@tvtc.gov.sa", phone: "011-345-6789", office: "مبنى أ، مكتب 102" },
    { id: "T003", name: "أ. نورة المطيري", specialization: "تاريخ الأزياء", email: "n.almutairi@tvtc.gov.sa", phone: "011-456-7890", office: "مبنى ب، مكتب 105" },
    { id: "T004", name: "أ. حصة الدوسري", specialization: "تصميم بالحاسب الآلي", email: "h.aldossari@tvtc.gov.sa", phone: "011-567-8901", office: "مبنى ب، مكتب 106" },
  ],
  Advisors: [
    { id: "A001", name: "أ. جواهر العنزي", email: "j.alenezi@tvtc.gov.sa", photo_url: "https://picsum.photos/seed/advisor1/150", students: [
      { id: "S001", name: "علياء محمد", student_no: "4410011", level: 3, section: "F3-A" },
      { id: "S002", name: "ريم خالد", student_no: "4410012", level: 3, section: "F3-A" },
      { id: "S003", name: "شهد عبدالله", student_no: "4410013", level: 3, section: "F3-B" },
    ]},
    { id: "A002", name: "أ. ليلى الشمري", email: "l.alshammari@tvtc.gov.sa", photo_url: "https://picsum.photos/seed/advisor2/150", students: [
      { id: "S004", name: "مها فهد", student_no: "4420021", level: 2, section: "F2-A" },
      { id: "S005", name: "غادة سعد", student_no: "4420022", level: 2, section: "F2-A" },
    ]}
  ],
  Courses: [
    {
      id: "C001",
      title: "مقرر تصميم الأزياء 1",
      description: "يهدف المقرر إلى تزويد الطالبة بالمفاهيم الأساسية في تصميم الأزياء، وتعلم رسم المانيكان، وتطوير الأفكار الإبداعية.",
      syllabus: ["مقدمة في تصميم الأزياء", "عناصر وأسس التصميم", "نظرية الألوان", "رسم المانيكان الأساسي", "مصادر الإلهام في التصميم"],
      resources: [
        { type: ResourceType.VIDEO, title: "شرح رسم الباترون الأساسي", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { type: ResourceType.PDF, title: "كتاب أساسيات التصميم", url: "#" },
        { type: ResourceType.PRESENTATION, title: "عرض تقديمي عن نظرية الألوان", url: "#" }
      ]
    },
    {
        id: "C002",
        title: "مقرر الخياطة والتفصيل 1",
        description: "يركز هذا المقرر على تعليم المهارات الأساسية للخياطة، بدءاً من تشغيل ماكينة الخياطة وحتى تنفيذ قطع ملابس بسيطة.",
        syllabus: ["التعرف على ماكينة الخياطة وأجزائها", "أنواع الغرز الأساسية", "تقنيات القص الدقيق للقماش", "تنفيذ عينات خياطة (سحاب، أزرار)", "مشروع تطبيقي: تنفيذ تنورة بسيطة"],
        resources: [
          { type: ResourceType.VIDEO, title: "طريقة لضم ماكينة الخياطة", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { type: ResourceType.IMAGE, title: "أنواع الإبر والأقمشة المناسبة لها", url: "https://picsum.photos/800/600" },
          { type: ResourceType.BOOK, title: "كتيب إرشادي لتقنيات الخياطة", url: "#" }
        ]
      }
  ],
  AcademicCalendar: [
    { id: 'EV001', date: '2024-09-01', title: 'بداية الفصل الدراسي', description: 'بداية الدراسة للفصل التدريبي الأول.' },
    { id: 'EV002', date: '2024-09-15', title: 'آخر موعد للحذف والإضافة', description: 'آخر فرصة للمتدربات لتعديل جداولهن الدراسية.' },
    { id: 'EV003', date: '2024-11-10', title: 'إجازة منتصف الفصل', description: 'تبدأ إجازة منتصف الفصل الدراسي ولمدة أسبوع.' },
    { id: 'EV004', date: '2024-12-20', title: 'بداية الاختبارات النهائية', description: 'بداية فترة الاختبارات النهائية للفصل التدريبي الأول.' },
  ],
  Announcements: [
    { id: 'AN001', date: '2024-08-25', title: 'ورشة عمل: أساسيات التصميم الرقمي', content: 'يعلن القسم عن إقامة ورشة عمل بعنوان "أساسيات التصميم الرقمي باستخدام برامج Adobe" يوم الأربعاء القادم. التسجيل متاح عبر بوابة المتدربات.' },
    { id: 'AN002', date: '2024-08-20', title: 'تنبيه بخصوص الزي الرسمي', content: 'نود تذكير جميع المتدربات بضرورة الالتزام بالزي الرسمي المعتمد داخل مرافق الكلية.' },
    { id: 'AN003', date: '2024-08-15', title: 'فتح باب الترشح لمجلس المتدربات', content: 'تم فتح باب الترشح لعضوية مجلس المتدربات للعام الدراسي الجديد. على الراغبات في الترشح مراجعة شؤون المتدربات.' },
  ],
  Magazine: [
    { id: 'M001', title: 'مجموعة "أصالة"', description: 'تصاميم مستوحاة من التراث السعودي بلمسة عصرية.', studentName: 'نورة السالم', imageUrl: 'https://picsum.photos/seed/mag1/400/300' },
    { id: 'M002', title: 'مشروع تخرج: "رؤية مستقبلية"', description: 'استخدام الأقمشة المعاد تدويرها في تصميم أزياء مبتكرة.', studentName: 'الجوهره العبدالله', imageUrl: 'https://picsum.photos/seed/mag2/400/300' },
    { id: 'M003', title: 'فستان سهرة', description: 'تصميم وتنفيذ فستان سهرة بقصة فريدة وتطريز يدوي.', studentName: 'سارة محمد', imageUrl: 'https://picsum.photos/seed/mag3/400/300' },
    { id: 'M004', title: 'إنجاز القسم', description: 'حصول القسم على المركز الأول في مسابقة الكليات التقنية لتصميم الأزياء.', imageUrl: 'https://picsum.photos/seed/mag4/400/300' },
  ]
};
