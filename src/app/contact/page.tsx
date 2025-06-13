// src/app/contact/page.tsx

import React from 'react';
import { Mail, Phone, ShoppingCart, Briefcase, BookOpen, Globe } from 'lucide-react';
import Link from 'next/link';

// Functional component for the Contact Us page
const ContactPage: React.FC = () => {
  // Helper component for a contact method card
  const ContactCard: React.FC<{
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    icon: React.ReactNode;
  }> = ({ title, description, linkText, linkHref, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-gray-200">
      <div className="mb-4 text-apple-gray-light">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-apple-dark-gray">{title}</h3>
      <p className="text-apple-gray mb-4 flex-grow">{description}</p>
      <a href={linkHref} className="text-apple-blue font-medium hover:underline">
        {linkText}
      </a>
    </div>
  );

  return (
    <div className="mt-40 min-h-screen bg-apple-off-white text-apple-dark-gray font-sans antialiased">
      {/* Main content area */}
      <main className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        {/* Header section with branding */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-dark-gray mb-4">
            ติดต่อ Big Apple Store (ประเทศไทย)
          </h1>
          <p className="text-xl text-apple-gray max-w-3xl mx-auto">
            รับความช่วยเหลือเกี่ยวกับผลิตภัณฑ์และบริการของ Big Apple Store ค้นหาการสนับสนุน หรือเชื่อมต่อกับทีมงานของเรา
          </p>
        </header>

        {/* Contact methods grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactCard
            title="ฝ่ายบริการช่วยเหลือ Big Apple Store"
            description="รับความช่วยเหลือด้านปัญหาทางเทคนิค การแก้ไขปัญหา และคำถามเกี่ยวกับผลิตภัณฑ์"
            linkText="เยี่ยมชมฝ่ายบริการช่วยเหลือ Big Apple Store"
            linkHref="#"
            icon={<Phone size={40} strokeWidth={1.5} />}
          />
          <ContactCard
            title="การขายออนไลน์สโตร์"
            description="ความช่วยเหลือเกี่ยวกับการซื้อ สถานะคำสั่งซื้อ และการคืนสินค้าจาก Big Apple Store Online Store"
            linkText="ซื้อสินค้าออนไลน์"
            linkHref="#"
            icon={<ShoppingCart size={40} strokeWidth={1.5} />}
          />
          <ContactCard
            title="ฝ่ายบริการช่วยเหลือ Big Apple Store"
            description="ค้นหาร้านค้า จองเวลา หรือรับความช่วยเหลือเกี่ยวกับบริการภายในร้าน"
            linkText="ค้นหาร้านค้า"
            linkHref="#"
            icon={<Globe size={40} strokeWidth={1.5} />}
          />
          <ContactCard
            title="สอบถามสำหรับธุรกิจ"
            description="โซลูชั่นและบริการช่วยเหลือสำหรับธุรกิจทุกขนาด"
            linkText="Big Apple Store สำหรับธุรกิจ"
            linkHref="#"
            icon={<Briefcase size={40} strokeWidth={1.5} />}
          />
          <ContactCard
            title="สอบถามสำหรับสถาบันการศึกษา"
            description="เรียนรู้เกี่ยวกับผลิตภัณฑ์และบริการของ Big Apple Store สำหรับนักเรียน นักศึกษา ครู และสถาบันการศึกษา"
            linkText="Big Apple Store สำหรับการศึกษา"
            linkHref="#"
            icon={<BookOpen size={40} strokeWidth={1.5} />}
          />
          <ContactCard
            title="สื่อและข่าวสาร"
            description="สำหรับนักข่าวและผู้เชี่ยวชาญด้านสื่อที่ต้องการข้อมูลเกี่ยวกับ Big Apple Store"
            linkText="เยี่ยมชม Big Apple Store Newsroom"
            linkHref="#"
            icon={<Mail size={40} strokeWidth={1.5} />}
          />
        </section>
      </main>

      {/* Simple footer 
      <footer className="bg-apple-light-gray py-8 mt-12 text-center text-apple-gray text-sm">
        <p>&copy; {new Date().getFullYear()} Big Apple Store Inc. สงวนลิขสิทธิ์ทุกประการ</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:underline">นโยบายความเป็นส่วนตัว</Link>
          <Link href="#" className="hover:underline">ข้อตกลงการใช้งาน</Link>
          <Link href="#" className="hover:underline">กฎหมาย</Link>
          <Link href="/sitemap" className="hover:underline">แผนผังเว็บไซต์</Link>
        </div>
      </footer>
      */}
    </div>
  );
};

export default ContactPage;