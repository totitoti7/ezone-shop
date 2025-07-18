import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1 style={{ color: '#d32f2f' }}>الصفحة غير موجودة</h1>
      <p>عذراً، الصفحة التي تبحث عنها غير متوفرة.</p>
      <Link
        href="/"
        style={{
          color: '#1976d2',
          textDecoration: 'underline',
          marginTop: 32,
          display: 'inline-block',
        }}
      >
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
}
