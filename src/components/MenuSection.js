// components/MenuSection.js
export default function MenuSection({ title, children }) {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">{title}</h2>
      <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  );
}
