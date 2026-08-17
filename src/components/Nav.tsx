import { useState, useEffect } from 'react';

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(26,26,30,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="text-xl lg:text-2xl font-bold tracking-[0.18em] transition-colors duration-200"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
          >
            SWAG
          </span>
          <span
            className="text-[10px] font-normal tracking-[0.25em] uppercase mt-0.5 transition-colors duration-200"
            style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
          >
            DETAILING
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-[0.12em] uppercase transition-colors duration-200 hover:text-white"
              style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/77077758880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-medium tracking-[0.12em] uppercase transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              backgroundColor: '#FF9F1C',
              color: '#0D0D0F',
              borderRadius: '2px',
            }}
          >
            Записаться
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: '#F0F0F2',
              transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: '#F0F0F2',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: '#F0F0F2',
              transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          backgroundColor: 'rgba(26,26,30,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[13px] tracking-[0.14em] uppercase py-2 transition-colors duration-200 hover:text-white"
              style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/77077758880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-medium tracking-[0.14em] uppercase mt-2 transition-all duration-200 hover:opacity-90"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              backgroundColor: '#FF9F1C',
              color: '#0D0D0F',
              borderRadius: '2px',
            }}
          >
            Записаться
          </a>
        </div>
      </div>
    </nav>
  );
}
