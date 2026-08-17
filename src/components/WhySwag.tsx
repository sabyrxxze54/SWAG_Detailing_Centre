import { ShieldCheck, Zap, Eye, Package } from 'lucide-react';

const points = [
  {
    icon: Eye,
    title: 'Работа под лупой',
    body: 'Каждый этап контролируем под специализированным светом — инспекционные лампы выявляют дефекты, незаметные при обычном освещении. Брак не проходит дальше.',
  },
  {
    icon: Package,
    title: 'Только премиальная химия',
    body: 'Koch Chemie, Meguiar\'s, Gyeon — материалы, которые используют профессиональные студии по всей Европе. Без дешёвых замен и неизвестных составов.',
  },
  {
    icon: ShieldCheck,
    title: 'Мастера с опытом',
    body: 'Команда с 7+ годами практики на автомобилях любого класса — от городских хэтчбеков до суперкаров. Сложные случаи — наша специализация.',
  },
  {
    icon: Zap,
    title: 'Быстрые сроки',
    body: 'Химчистка — день. Полировка — 1–2 дня. Оклейка — от 2 дней. Не держим машину неделями: у нас есть процесс и он работает чётко.',
  },
];

export default function WhySwag() {
  return (
    <section
      id="why"
      className="py-28 lg:py-40"
      style={{ backgroundColor: '#0D0D0F', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: header */}
          <div className="lg:sticky lg:top-32">
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#FF9F1C' }}
            >
              Почему Swag
            </p>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
            >
              Мы не&nbsp;просто моем.
              <br />
              Мы&nbsp;возвращаем.
            </h2>
            <p
              className="text-[14px] leading-relaxed max-w-sm"
              style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
            >
              Детейлинг — это не автомойка. Это восстановление. Каждый
              автомобиль выезжает из студии так, будто его только что забрали
              из салона.
            </p>
          </div>

          {/* Right: points */}
          <div className="flex flex-col gap-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group flex gap-6 py-8 transition-colors duration-300 hover:bg-white/[0.02]"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingLeft: '16px', paddingRight: '16px' }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: 'rgba(255,159,28,0.07)',
                      borderRadius: '2px',
                    }}
                  >
                    <Icon size={18} strokeWidth={1.5} style={{ color: '#FF9F1C' }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F0F0F2' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#8A8A96' }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
