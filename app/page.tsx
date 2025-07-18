import Link from 'next/link';
import SaleSection from '@/components/sale-section';

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[var(--background)] p-6 space-y-10"
      role="main"
      aria-label="الصفحة الرئيسية"
    >
      <h1
        className="text-center text-2xl md:text-3xl font-bold text-[var(--foreground)] mt-6"
        tabIndex={0}
      >
        مرحبا بكم في Ezone!
      </h1>
      {/* Required link as per task */}
      <div className="text-center">
        <Link
          href="/product/5516"
          className="mt-4 inline-block text-xl font-medium text-blue-600 underline hover:text-blue-800 transition"
          aria-label="عرض تفاصيل المنتج رقم 5516"
        >
          عرض تفاصيل المنتج
        </Link>
      </div>
      <SaleSection />
    </main>
  );
}
