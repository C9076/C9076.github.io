# Backend Portfolio (Angular)

## แก้ข้อมูล
แก้ทุกอย่างในไฟล์เดียว: `src/app/portfolio.data.ts`
- `PROFILE` ชื่อ เบอร์โทร อีเมล GitHub
- `SKILLS` กลุ่มสกิล
- `PROJECTS` ผลงาน (ตอนนี้ว่างอยู่ หน้าเว็บจะขึ้นว่า "กำลังรวบรวมผลงาน")

## รันดูในเครื่อง
```bash
npm start
```
เปิด http://localhost:4200

## ขึ้น GitHub Pages
1. สร้าง repo ชื่อ `<username>.github.io` (จะได้ลิงก์ `https://<username>.github.io/`)
   หรือชื่ออื่นก็ได้ (ลิงก์จะเป็น `https://<username>.github.io/<ชื่อ repo>/`)
2. push โค้ดขึ้น branch `main`
3. ใน repo ไปที่ Settings > Pages > Source เลือก **GitHub Actions**
4. ทุกครั้งที่ push ไฟล์ `.github/workflows/deploy.yml` จะ build และ deploy ให้อัตโนมัติ
