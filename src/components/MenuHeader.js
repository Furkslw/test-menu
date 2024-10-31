// components/MenuHeader.js
export default function MenuHeader() {
  return (
    <section
      className="text-center py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/menu_bg.jpg')", width: '100%', height: '300px' }}
    >
      <div className="flex justify-center py-6">
        <Image src="/logo.png" alt="Restaurant Logo" className="h-16 w-auto" />
      </div>
      <h2 className="text-3xl  text-white">Sosunu Seç </h2>
      <h2 className="text-3xl  mb-4 text-white">Dönerin Gelsin</h2>
    </section>
  );
}
