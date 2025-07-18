export default function ProductDescriptionCard({ description }: { description: string }) {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 text-right space-y-4">
      <h2 className="text-2xl font-bold text-black">تفاصيل المنتج</h2>
      <p className="text-lg text-black leading-relaxed">{description}</p>
    </div>
  );
}
