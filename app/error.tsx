'use client';
import Link from 'next/link';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1 style={{ color: '#d32f2f' }}>حدث خطأ غير متوقع</h1>
      <p>يرجى المحاولة لاحقاً أو التواصل مع الدعم الفني.</p>
      <pre
        style={{
          color: '#888',
          background: '#f7f7f7',
          padding: 16,
          borderRadius: 8,
          marginTop: 24,
        }}
      >
        {error.message}
      </pre>
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
