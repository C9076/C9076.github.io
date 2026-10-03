/*
 * ===================== แก้ข้อมูลทั้งหมดในไฟล์นี้ =====================
 * หน้าเว็บดึงข้อมูลจากไฟล์นี้ไฟล์เดียว ไม่ต้องแก้ HTML
 */

export interface Profile {
  name: string;
  nickname: string;
  greeting: string;
  faculty: string;
  summary: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  github: string; // ชื่อผู้ใช้ GitHub เช่น "octocat"
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  /** "main" = โปรเจกต์หลัก, "project" = โปรเจกต์ทั่วไป */
  type: 'main' | 'project';
  title: string;
  desc: string;
  highlights: string[];
  stack: string[];
  github: string | null; // null = repo ส่วนตัว
  status?: string; // เช่น "กำลังพัฒนา"
}

export const PROFILE: Profile = {
  name: 'ชื่อ นามสกุล',
  nickname: 'Your Name',
  greeting: 'สวัสดีครับ',
  faculty: 'นักศึกษาคณะวิศวกรรมศาสตร์และเทคโนโลยี สาขาวิศวกรรมซอฟต์แวร์',
  summary:
    'ถนัดงาน Back-end ออกแบบ REST API ฐานข้อมูล และระบบฝั่งเซิร์ฟเวอร์ ชอบเขียนโค้ดที่อ่านง่าย ทดสอบได้ และ deploy ได้จริง',
  role: 'Backend Developer',
  location: 'Thailand',
  phone: '08x-xxx-xxxx',
  email: 'yourname@email.com',
  github: 'yourname',
};

export const SKILLS: SkillGroup[] = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'] },
  { title: 'Back-end', items: ['Node.js', 'Express', 'NestJS', 'REST API', 'WebSocket'] },
  { title: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'] },
  { title: 'Tools & DevOps', items: ['Git', 'Docker', 'Postman', 'Linux', 'GitHub Actions'] },
];

/*
 * ผลงาน: ยังว่างไว้ก่อน หน้าเว็บจะแสดงข้อความ "กำลังรวบรวมผลงาน"
 * เพิ่มผลงานโดย copy ตัวอย่างนี้ไปวางใน [ ] ด้านล่าง
 *
 * {
 *   type: 'main',
 *   title: 'ชื่อโปรเจกต์',
 *   desc: 'อธิบายสั้นๆ ว่าทำอะไร และรับผิดชอบส่วนไหน',
 *   highlights: ['จุดเด่น 1', 'จุดเด่น 2'],
 *   stack: ['Node.js', 'PostgreSQL', 'Docker'],
 *   github: 'https://github.com/yourname/repo',
 *   status: 'กำลังพัฒนา',
 * },
 */
export const PROJECTS: Project[] = [];
