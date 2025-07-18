'use client';

import { useState } from 'react';
import { Copy, Share2, Check } from 'lucide-react';

export default function CopyShareActions({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url,
      });
    } else {
      alert('ميزة المشاركة غير مدعومة في هذا المتصفح.');
    }
  };

  return (
    <>
      {copied ? (
        <Check className="w-5 h-5 text-gray-600" />
      ) : (
        <Copy className="w-5 h-5 cursor-pointer hover:text-black" onClick={handleCopy} />
      )}
      <Share2 className="w-5 h-5 cursor-pointer hover:text-black" onClick={handleShare} />
    </>
  );
}
