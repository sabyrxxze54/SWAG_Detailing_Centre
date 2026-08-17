export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: '#0D0D0F',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="text-base font-bold tracking-[0.18em]"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
          >
            SWAG
          </span>
          <span
            className="text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
          >
            DETAILING
          </span>
        </div>

        <p
          className="text-[11px] tracking-[0.08em] text-center"
          style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
        >
          © {new Date().getFullYear()} SWAG Detailing Studio · Алматы
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/swag.detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 hover:text-white"
            style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
          >
            Instagram
          </a>
          <a
            href="https://wa.me/77077758880"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 hover:text-white"
            style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#555560' }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
