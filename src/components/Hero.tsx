import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0D0D0F' }}
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/14231701/pexels-photo-14231701.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Car being polished in a detail bay"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Multi-layer overlay for the dark, workshop feel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(13,13,15,0.96) 0%, rgba(13,13,15,0.82) 45%, rgba(13,13,15,0.55) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, #0D0D0F 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Accent line — vertical */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px hidden lg:block z-10"
        style={{ backgroundColor: '#FF9F1C', opacity: 0.6 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div
            className="inline-flex items-center gap-2.5 mb-8 px-4 py-2"
            style={{
              backgroundColor: 'rgba(255,159,28,0.1)',
              border: '1px solid rgba(255,159,28,0.25)',
              borderRadius: '2px',
            }}
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill="#FF9F1C"
                  stroke="none"
                />
              ))}
            </div>
            <span
              className="text-[12px] tracking-[0.1em]"
              style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
            >
              4.9 · 137+ отзывов на 2ГИС
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.0] tracking-[-0.02em] mb-6"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#F0F0F2',
            }}
          >
            Ваш автомобиль
            <br />
            <span style={{ color: '#F0F0F2' }}>заслуживает</span>
            <br />
            <span
              className="relative inline-block"
              style={{ color: '#F0F0F2' }}
            >
              идеала.
              {/* Accent underline */}
              <span
                className="absolute bottom-1 left-0 h-[3px] w-full"
                style={{ backgroundColor: '#FF9F1C', borderRadius: '1px' }}
              />
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-[15px] lg:text-[16px] leading-relaxed mb-10 max-w-xl"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              color: '#8A8A96',
              letterSpacing: '0.01em',
            }}
          >
            Полировка и коррекция лакокрасочного покрытия, химчистка салона,
            оклейка виниловой плёнкой, удаление вмятин без покраски — каждая
            работа под светом лампы, без компромиссов.
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="https://wa.me/77077758880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 text-[13px] font-medium tracking-[0.14em] uppercase transition-all duration-200 hover:gap-4 hover:opacity-95 active:scale-[0.98]"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                backgroundColor: '#FF9F1C',
                color: '#0D0D0F',
                borderRadius: '2px',
              }}
            >
              Записаться в WhatsApp
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+77077758880"
              className="inline-flex items-center gap-2 px-7 py-4 text-[13px] tracking-[0.14em] uppercase transition-all duration-200 hover:border-white/30"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                color: '#8A8A96',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '2px',
              }}
            >
              +7 707 775 88 80
            </a>
          </div>

          {/* Bottom stat row */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {[
              { value: '7+', label: 'лет опыта' },
              { value: '1 200+', label: 'автомобилей' },
              { value: '4.9★', label: 'рейтинг 2ГИС' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl lg:text-3xl font-bold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[11px] tracking-[0.14em] uppercase mt-1"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
