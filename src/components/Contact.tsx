import { MapPin, Phone, Instagram, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 lg:py-40"
      style={{ backgroundColor: '#1A1A1E', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-4"
            style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
          >
            Мы в Алматы
          </p>
          <h2
            className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
          >
            Адрес и контакты
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: info */}
          <div className="flex flex-col gap-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {/* Address */}
            <div
              className="flex gap-5 py-8"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,159,28,0.07)', borderRadius: '2px' }}
              >
                <MapPin size={17} strokeWidth={1.5} style={{ color: '#FF9F1C' }} />
              </div>
              <div>
                <p
                  className="text-[11px] tracking-[0.18em] uppercase mb-2"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
                >
                  Адрес
                </p>
                <p
                  className="text-[15px] font-medium"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
                >
                  ул. Рыскулбекова, 28/10
                </p>
                <p
                  className="text-[13px] mt-0.5"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
                >
                  Алматы, Казахстан
                </p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+77077758880"
              className="flex gap-5 py-8 group transition-colors duration-200 hover:bg-white/[0.02]"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,159,28,0.07)', borderRadius: '2px' }}
              >
                <Phone size={17} strokeWidth={1.5} style={{ color: '#FF9F1C' }} />
              </div>
              <div>
                <p
                  className="text-[11px] tracking-[0.18em] uppercase mb-2"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
                >
                  Телефон
                </p>
                <p
                  className="text-[15px] font-medium group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
                >
                  +7 707 775 88 80
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/swag.detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-5 py-8 group transition-colors duration-200 hover:bg-white/[0.02]"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,159,28,0.07)', borderRadius: '2px' }}
              >
                <Instagram size={17} strokeWidth={1.5} style={{ color: '#FF9F1C' }} />
              </div>
              <div>
                <p
                  className="text-[11px] tracking-[0.18em] uppercase mb-2"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
                >
                  Instagram
                </p>
                <p
                  className="text-[15px] font-medium group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
                >
                  @swag.detailing
                </p>
              </div>
            </a>

            {/* Working hours */}
            <div
              className="flex gap-5 py-8"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,159,28,0.07)', borderRadius: '2px' }}
              >
                <span style={{ color: '#FF9F1C', fontSize: '14px' }}>⏱</span>
              </div>
              <div>
                <p
                  className="text-[11px] tracking-[0.18em] uppercase mb-2"
                  style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
                >
                  Режим работы
                </p>
                <p
                  className="text-[15px] font-medium"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
                >
                  Ежедневно, 9:00 — 21:00
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
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
            </div>
          </div>

          {/* Right: map placeholder */}
          <div
            className="relative overflow-hidden min-h-[400px] lg:min-h-[500px]"
            style={{
              backgroundColor: '#0D0D0F',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '2px',
            }}
          >
            <iframe
              title="Swag Detailing на карте"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.0!2d76.896!3d43.238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzE3LjkiTiA3NsKwNTMnNDcuMiJF!5e0!3m2!1sru!2skz!4v1700000000000!5m2!1sru!2skz"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Address overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3"
              style={{ backgroundColor: 'rgba(13,13,15,0.92)', backdropFilter: 'blur(8px)' }}
            >
              <MapPin size={14} style={{ color: '#FF9F1C', flexShrink: 0 }} />
              <span
                className="text-[12px] tracking-[0.06em]"
                style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
              >
                ул. Рыскулбекова, 28/10, Алматы
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
