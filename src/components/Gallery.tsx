const images = [
  {
    src: 'https://images.pexels.com/photos/14615260/pexels-photo-14615260.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    alt: 'Машинная полировка кузова',
    label: 'Полировка',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/10126663/pexels-photo-10126663.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Оклейка виниловой плёнкой',
    label: 'Vinyl Wrap',
    span: 'lg:col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/5233285/pexels-photo-5233285.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Химчистка сидений',
    label: 'Химчистка',
    span: 'lg:col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/14908957/pexels-photo-14908957.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Детейлинг в студии',
    label: 'PDR',
    span: 'lg:col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/10126661/pexels-photo-10126661.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Оклейка капота',
    label: 'Vinyl Wrap',
    span: 'lg:col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/33602226/pexels-photo-33602226.jpeg?auto=compress&cs=tinysrgb&h=400&w=800',
    alt: 'Красный суперкар — результат полировки',
    label: 'Результат',
    span: 'lg:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 lg:py-40"
      style={{ backgroundColor: '#1A1A1E', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 lg:mb-18">
          <div>
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
            >
              Наши работы
            </p>
            <h2
              className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
            >
              Галерея
            </h2>
          </div>
          <a
            href="https://www.instagram.com/swag.detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[0.14em] uppercase transition-colors duration-200 hover:text-white self-start sm:self-end"
            style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
          >
            Больше в Instagram →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-3 auto-rows-[220px] lg:auto-rows-[180px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${img.span}`}
              style={{ borderRadius: '2px' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{
                  background: 'linear-gradient(to top, rgba(13,13,15,0.85) 0%, transparent 60%)',
                }}
              >
                <span
                  className="text-[11px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
