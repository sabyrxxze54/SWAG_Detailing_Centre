import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Асхат М.',
    vehicle: 'BMW X5 2021',
    text: 'Сдал машину после зимы — сколы, матовость, соль на пороги въелась. Забрал как новую. Полировка выше всяких похвал, салон пахнет свежестью. Работают чётко и быстро — уложились в день.',
    rating: 5,
  },
  {
    name: 'Айгерим С.',
    vehicle: 'Toyota Camry 2022',
    text: 'Делала химчистку кожаного салона — убрали пятна, которые я считала вечными. Плюс оклеили капот виниловой матовой плёнкой. Результат на уровне европейских студий. Рекомендую без оговорок.',
    rating: 5,
  },
  {
    name: 'Дамир К.',
    vehicle: 'Mercedes C-Class',
    text: 'PDR — убрали три вмятины на крыле и двери без покраски. Дешевле и быстрее, чем в любом кузовном. Мастер объяснил каждый шаг. Теперь вожу только сюда.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-28 lg:py-40"
      style={{ backgroundColor: '#0D0D0F', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 lg:mb-20">
          <div>
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
            >
              Что говорят клиенты
            </p>
            <h2
              className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
            >
              Отзывы
            </h2>
          </div>

          {/* Big stat */}
          <div
            className="flex items-center gap-6 px-8 py-6"
            style={{
              backgroundColor: '#1A1A1E',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '2px',
            }}
          >
            <div>
              <div
                className="text-5xl font-bold tracking-[-0.03em]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FF9F1C' }}
              >
                4.9
              </div>
              <div className="flex items-center gap-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FF9F1C" stroke="none" />
                ))}
              </div>
            </div>
            <div
              style={{ width: '1px', height: '48px', backgroundColor: 'rgba(255,255,255,0.08)' }}
            />
            <div>
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
              >
                137+
              </div>
              <div
                className="text-[11px] tracking-[0.12em] uppercase mt-1"
                style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
              >
                отзывов · 2ГИС
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-8 lg:p-10 transition-colors duration-300 hover:bg-white/[0.02]"
              style={{ backgroundColor: '#0D0D0F' }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={13} fill="#FF9F1C" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[13px] leading-relaxed flex-1 mb-8"
                style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
                <div
                  className="text-[14px] font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
                >
                  {t.name}
                </div>
                <div
                  className="text-[11px] tracking-[0.1em] mt-0.5"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
                >
                  {t.vehicle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
