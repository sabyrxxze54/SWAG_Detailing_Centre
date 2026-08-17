import { Sparkles, Sofa, Layers, Wrench } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Полировка и коррекция',
    description:
      'Многоступенчатая машинная полировка устраняет царапины, голограммы и потёртости. Покрытие восстанавливается до зеркального блеска.',
    price: 'от 35 000 ₸',
    tag: 'Paint Correction',
    wide: true,
    image: 'https://images.pexels.com/photos/14615260/pexels-photo-14615260.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
  },
  {
    icon: Sofa,
    title: 'Химчистка салона',
    description:
      'Глубокая чистка обивки, ковров, кожи и пластика. Устранение запахов, жирных пятен и аллергенов.',
    price: 'от 18 000 ₸',
    tag: 'Interior Detailing',
    wide: false,
    image: 'https://images.pexels.com/photos/5233285/pexels-photo-5233285.jpeg?auto=compress&cs=tinysrgb&h=400&w=500',
  },
  {
    icon: Layers,
    title: 'Оклейка виниловой плёнкой',
    description:
      'Смена цвета, защита ЛКП, матовые и глянцевые финиши. Работаем с KPMF, Avery Dennison и 3M.',
    price: 'от 80 000 ₸',
    tag: 'Vinyl Wrap',
    wide: false,
    image: 'https://images.pexels.com/photos/10126663/pexels-photo-10126663.jpeg?auto=compress&cs=tinysrgb&h=400&w=500',
  },
  {
    icon: Wrench,
    title: 'PDR — удаление вмятин',
    description:
      'Безкраскoвое удаление вмятин и сколов. Оригинальное ЛКП сохраняется — дешевле и быстрее покраски.',
    price: 'от 8 000 ₸',
    tag: 'Paintless Dent Repair',
    wide: true,
    image: 'https://images.pexels.com/photos/14908957/pexels-photo-14908957.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-40" style={{ backgroundColor: '#0D0D0F' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-4"
            style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
          >
            Что мы делаем
          </p>
          <h2
            className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
          >
            Услуги
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isWide = s.wide;
            return (
              <div
                key={s.title}
                className={`group relative flex flex-col overflow-hidden transition-all duration-300 ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                } ${i === 0 ? 'min-h-[340px]' : 'min-h-[280px]'}`}
                style={{ backgroundColor: '#0D0D0F' }}
              >
                {/* Background image — subtle, always dark */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                    style={{ objectPosition: 'center' }}
                  />
                </div>

                <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full">
                  {/* Tag + icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-1"
                      style={{
                        fontFamily: 'IBM Plex Mono, monospace',
                        color: '#555560',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '2px',
                      }}
                    >
                      {s.tag}
                    </span>
                    <div
                      className="w-9 h-9 flex items-center justify-center transition-colors duration-300"
                      style={{
                        backgroundColor: 'rgba(255,159,28,0.08)',
                        borderRadius: '2px',
                      }}
                    >
                      <Icon size={17} strokeWidth={1.5} style={{ color: '#FF9F1C' }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-semibold leading-tight mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13px] leading-relaxed flex-1 mb-6"
                    style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
                  >
                    {s.description}
                  </p>

                  {/* Price */}
                  <div
                    className="text-[14px] font-medium tracking-[0.04em]"
                    style={{
                      fontFamily: 'IBM Plex Mono, monospace',
                      color: '#FF9F1C',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      paddingTop: '16px',
                    }}
                  >
                    {s.price}
                    <span
                      className="text-[11px] ml-2 tracking-[0.08em]"
                      style={{ color: '#555560' }}
                    >
                      {/* editable pricing */}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p
          className="text-[11px] tracking-[0.1em] mt-6 text-center"
          style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
        >
          * Точная стоимость зависит от модели и состояния автомобиля. Уточняйте при записи.
        </p>
      </div>
    </section>
  );
}
