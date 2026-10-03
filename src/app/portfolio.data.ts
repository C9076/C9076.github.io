/*
 * ===================== แก้ข้อมูลทั้งหมดในไฟล์นี้ =====================
 * หน้าเว็บดึงข้อมูลจากไฟล์นี้ไฟล์เดียว ไม่ต้องแก้ HTML
 * รูปผลงานเก็บไว้ที่ public/images/<โปรเจกต์>/ แล้วอ้างอิงเป็น 'images/<โปรเจกต์>/<ไฟล์>.png'
 */

export interface Profile {
  name: string;
  nameEn: string;
  nickname: string;
  greeting: string;
  faculty: string;
  summary: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  github: string; // ชื่อผู้ใช้ GitHub
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  period: string;
  school: string;
  detail: string;
}

export interface Shot {
  src: string;
  label: string;
}

export interface Project {
  /** "main" = โปรเจกต์หลัก, "project" = โปรเจกต์ทั่วไป */
  type: 'main' | 'project';
  title: string;
  desc: string;
  highlights: string[];
  stack: string[];
  repos: { label: string; url: string }[];
  shots: Shot[];
  /** true = รูปแนวตั้ง (หน้าจอมือถือ) */
  mobile?: boolean;
}

export const PROFILE: Profile = {
  name: 'ชาคริต ปันทะกา',
  nameEn: 'Chakrit Pantaka',
  nickname: 'champ',
  greeting: 'สวัสดี',
  faculty:
    'นักศึกษาสาขาวิศวกรรมซอฟต์แวร์ คณะวิศวกรรมศาสตร์และเทคโนโลยี มหาวิทยาลัยนอร์ท-เชียงใหม่',
  summary:
    'สนใจด้าน Full Stack Web Development และถนัดเป็นพิเศษด้าน Backend ทั้งออกแบบ REST API ฐานข้อมูล และระบบยืนยันตัวตน กำลังมองหาที่ฝึกงานเพื่อเรียนรู้การทำงานจริงร่วมกับทีม',
  role: 'Backend Developer',
  location: 'Chiang Mai, Thailand',
  phone: '090-957-1762',
  email: 'pantakachamp@gmail.com',
  github: 'C9076',
};

export const SKILLS: SkillGroup[] = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Dart'] },
  { title: 'Back-end', items: ['Node.js', 'Express', 'REST API', 'JWT', 'bcrypt', 'Multer'] },
  { title: 'Database', items: ['MySQL', 'Firebase Firestore'] },
  { title: 'Front-end', items: ['Angular', 'Flutter', 'HTML', 'CSS', 'Bootstrap'] },
  { title: 'Tools & Testing', items: ['Git / GitHub', 'Postman', 'Mocha + Chai', 'Figma', 'VS Code'] },
];

export const EDUCATION: Education[] = [
  {
    period: '2024 - ปัจจุบัน',
    school: 'มหาวิทยาลัยนอร์ท-เชียงใหม่',
    detail: 'ปริญญาตรี วิศวกรรมซอฟต์แวร์ คณะวิศวกรรมศาสตร์และเทคโนโลยี (คาดว่าจบปี 2027)',
  },
  {
    period: '2021',
    school: 'มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา',
    detail: 'IT Support: ซ่อม ตรวจเช็กอุปกรณ์คอมพิวเตอร์ และเดินเอกสาร',
  },
  {
    period: '2019 - 2021',
    school: 'วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่',
    detail: 'ปวส. สาขาเทคโนโลยีสารสนเทศ',
  },
];

const gh = (repo: string) => 'https://github.com/C9076/' + repo;

export const PROJECTS: Project[] = [
  {
    type: 'main',
    title: 'NiceCar: ระบบจัดการรถยนต์ พร้อม JWT Authentication',
    desc: 'เว็บแอปสำหรับผู้ดูแลจัดการข้อมูลรถยนต์ ทำทั้ง REST API ฝั่ง Backend และหน้าเว็บ Angular ที่เรียกใช้ API',
    highlights: [
      'API login ตรวจรหัสผ่านด้วย bcrypt (hash + secret) แล้วออก JWT อายุ 1 ชั่วโมง',
      'Middleware auth-guard ตรวจ Bearer token ก่อนเข้าถึง endpoint ที่ต้องล็อกอิน (401 / 403)',
      'CRUD ข้อมูลรถและผู้ดูแลบน MySQL ใช้ parameterized query กัน SQL injection',
      'อัปโหลดไฟล์ด้วย Multer แยกโฟลเดอร์รูปกับ PDF จำกัดชนิดไฟล์และขนาดไม่เกิน 5 MB',
      'ฝั่ง Angular ใช้ HTTP interceptor แนบ token ให้ทุก request อัตโนมัติ',
    ],
    stack: ['Node.js', 'Express', 'MySQL', 'JWT', 'bcrypt', 'Multer', 'Angular', 'Bootstrap'],
    repos: [
      { label: 'Backend', url: gh('FPBE-671103006') },
      { label: 'Frontend', url: gh('FPFE-671103006') },
    ],
    shots: [
      { src: 'images/nicecar/api.png', label: 'API: login / JWT / 401' },
      { src: 'images/nicecar/car.png', label: 'Car List + Form' },
      { src: 'images/nicecar/login.png', label: 'Login' },
      { src: 'images/nicecar/home.png', label: 'Home' },
    ],
  },
  {
    type: 'project',
    title: 'User Registration API + Integration Test',
    desc: 'API สมัครสมาชิกพร้อมชุด integration test และหน้าเว็บฟอร์มสมัครสมาชิกที่ตรวจสอบข้อมูลก่อนส่ง',
    highlights: [
      'เข้ารหัสรหัสผ่านด้วย bcrypt ก่อนบันทึกลง MySQL',
      'ตอบ status code ตามกรณี: 201 สร้างสำเร็จ, 400 ข้อมูลไม่ครบ, 409 อีเมลซ้ำ',
      'เขียน integration test ด้วย Mocha + chai-http ผ่านครบ 4/4 เคส',
      'ฟอร์ม Angular Reactive Forms ตรวจรูปแบบอีเมล รหัสผ่าน 8-15 ตัว และเบอร์โทรเป็นตัวเลข',
    ],
    stack: ['Node.js', 'Express', 'MySQL', 'bcrypt', 'Mocha', 'Chai', 'Angular'],
    repos: [
      { label: 'Backend', url: gh('BESD-FN-006') },
      { label: 'Frontend', url: gh('FESD-FN-006') },
    ],
    shots: [
      { src: 'images/userreg/tests.png', label: 'npm test: 4 passing' },
      { src: 'images/userreg/register.png', label: 'Register' },
      { src: 'images/userreg/validation.png', label: 'Validation' },
    ],
  },
  {
    type: 'project',
    title: 'SE-NCU Online: ระบบหลักสูตรออนไลน์',
    desc: 'REST API จัดการหลักสูตรออนไลน์ และหน้าเว็บ Angular แสดงหลักสูตรแนะนำกับหลักสูตรทั้งหมด',
    highlights: [
      'Endpoint แสดงทั้งหมด ค้นหาตามรหัส กรองหลักสูตรแนะนำ (promote) เพิ่ม แก้ไข และลบ',
      'ตอบ 404 เมื่อค้นหาไม่เจอ และส่ง error กลับเป็น JSON',
      'เสิร์ฟไฟล์รูปหลักสูตรผ่าน express.static และรองรับอัปโหลดด้วย Multer',
    ],
    stack: ['Node.js', 'Express', 'MySQL', 'Multer', 'Angular', 'Bootstrap'],
    repos: [
      { label: 'Backend', url: gh('BESD006') },
      { label: 'Frontend', url: gh('FESD006') },
    ],
    shots: [
      { src: 'images/course/api.png', label: 'Course API' },
      { src: 'images/course/home.png', label: 'Highlight' },
      { src: 'images/course/course.png', label: 'All Courses' },
    ],
  },
  {
    type: 'project',
    title: 'Task Tracker App (Flutter + Firebase)',
    desc: 'แอปจดรายการงานบนมือถือ บันทึกข้อมูลลง Cloud Firestore และตรวจข้อมูลก่อนบันทึก',
    highlights: [
      'หน้า Tasks และ Add สลับด้วย Bottom Navigation',
      'บันทึก title / description ลง Firestore และแสดงรายการแบบ realtime',
      'แยก ValidationService ออกมาและเขียน unit test ครอบคลุมกรณีค่าว่าง null และช่องว่าง',
    ],
    stack: ['Flutter', 'Dart', 'Firebase Firestore', 'Unit Test'],
    repos: [{ label: 'GitHub', url: gh('task_tracker_app') }],
    mobile: true,
    shots: [
      { src: 'images/tasktracker/tasks.png', label: 'My Tasks' },
      { src: 'images/tasktracker/validation.png', label: 'Validation' },
      { src: 'images/tasktracker/typing.png', label: 'New Task' },
    ],
  },
  {
    type: 'project',
    title: 'Flutter Bottom Navigation Demo',
    desc: 'แอปตัวอย่างการทำ Bottom Navigation 3 หน้า (Home / About / Profile) ออกแบบใน Figma ก่อนเขียนจริง',
    highlights: [],
    stack: ['Flutter', 'Dart', 'Figma'],
    repos: [{ label: 'GitHub', url: gh('flutter-bottom_nav_demo') }],
    mobile: true,
    shots: [
      { src: 'images/bottomnav/home.png', label: 'Home' },
      { src: 'images/bottomnav/profile.png', label: 'Profile' },
    ],
  },
  {
    type: 'project',
    title: 'Flutter Stateless vs Stateful Demo',
    desc: 'แอปเปรียบเทียบ StatelessWidget กับ StatefulWidget มีการ์ดคำนวณพื้นที่สี่เหลี่ยมและตัวนับ (setState)',
    highlights: [],
    stack: ['Flutter', 'Dart'],
    repos: [{ label: 'GitHub', url: gh('flutter_widget_types_demo') }],
    mobile: true,
    shots: [{ src: 'images/widgets/demo.png', label: 'Demo' }],
  },
];
