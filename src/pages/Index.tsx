import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/0fe37939-ae10-4d9e-ad02-b0acda00bf71/files/e1aeeec7-3289-4a1f-8162-e1a5d4ad3388.jpg";

const services = [
  { title: "Стрижка и укладка", desc: "Авторские техники, подчёркивающие вашу индивидуальность", price: "от 3 500 ₽" },
  { title: "Окрашивание", desc: "Balayage, омбре, сложное многоуровневое окрашивание", price: "от 7 000 ₽" },
  { title: "Уход за волосами", desc: "Восстановление, питание и защита с премиальными средствами", price: "от 4 000 ₽" },
  { title: "Маникюр и педикюр", desc: "Безупречное покрытие, spa-процедуры, дизайн ногтей", price: "от 2 500 ₽" },
  { title: "Косметология", desc: "Чистки, пилинги, аппаратные процедуры для сияния кожи", price: "от 5 000 ₽" },
  { title: "Макияж", desc: "Дневной, вечерний и свадебный — для любого случая", price: "от 4 500 ₽" },
];

const reasons = [
  {
    icon: "Award",
    title: "Мастера с образованием",
    desc: "Каждый специалист прошёл обучение в европейских школах красоты и регулярно повышает квалификацию.",
  },
  {
    icon: "Leaf",
    title: "Премиальные средства",
    desc: "Только сертифицированная косметика ведущих мировых брендов — без компромиссов с качеством.",
  },
  {
    icon: "Clock",
    title: "Уважение к вашему времени",
    desc: "Строгое соблюдение записи. Вы никогда не будете ждать — ваш день расписан по минутам.",
  },
  {
    icon: "Heart",
    title: "Индивидуальный подход",
    desc: "Мы помним ваши предпочтения с первого визита и создаём образ, который говорит о вас.",
  },
];

const reviews = [
  {
    name: "Анастасия К.",
    date: "Март 2024",
    text: "Пришла впервые и влюбилась в атмосферу. Мастер выслушала каждое пожелание, результат превзошёл ожидания. Теперь хожу только сюда.",
    rating: 5,
  },
  {
    name: "Елена В.",
    date: "Январь 2024",
    text: "Делала окрашивание — сложный balayage с несколькими оттенками. Всё идеально, цвет держится уже третий месяц. Рекомендую от всей души.",
    rating: 5,
  },
  {
    name: "Мария Т.",
    date: "Февраль 2024",
    text: "Лучший маникюр в Москве. Чисто, аккуратно, быстро. Мастер Юлия — настоящий профессионал, каждый раз предлагает что-то новое.",
    rating: 5,
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "О нас" },
    { href: "#services", label: "Услуги" },
    { href: "#why", label: "Почему мы" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--salon-cream)", color: "var(--salon-dark)" }}>

      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backgroundColor: "rgba(247,243,238,0.95)", borderColor: "var(--salon-beige)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-cormorant text-xl uppercase"
            style={{ color: "var(--salon-dark)", letterSpacing: "0.2em" }}
          >
            Maria Shosheva
          </a>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-golos text-xs uppercase transition-opacity hover:opacity-60"
                style={{ color: "var(--salon-dark)", letterSpacing: "0.15em" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+74955063211"
            className="hidden md:flex items-center gap-2 font-golos text-xs"
            style={{ color: "var(--salon-gold)", letterSpacing: "0.05em" }}
          >
            <Icon name="Phone" size={13} />
            +7 (495) 506-32-11
          </a>
          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div
            className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
            style={{ borderColor: "var(--salon-beige)", backgroundColor: "var(--salon-cream)" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-golos text-sm uppercase"
                style={{ letterSpacing: "0.15em" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+74955063211" className="font-golos text-sm" style={{ color: "var(--salon-gold)" }}>
              +7 (495) 506-32-11
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, filter: "brightness(0.42)" }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="animate-fade-up font-golos text-xs uppercase mb-6"
            style={{ color: "var(--salon-taupe)", letterSpacing: "0.4em", animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Москва · Крылатские Холмы
          </p>
          <h1
            className="animate-fade-up font-cormorant text-5xl md:text-7xl font-light leading-tight mb-6"
            style={{ color: "#F7F3EE", animationDelay: "0.25s", animationFillMode: "both" }}
          >
            Maria Shosheva
          </h1>
          <div
            className="animate-fade-up w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: "var(--salon-taupe)", animationDelay: "0.4s", animationFillMode: "both" }}
          />
          <p
            className="animate-fade-up font-cormorant text-xl md:text-2xl italic font-light"
            style={{ color: "var(--salon-beige)", animationDelay: "0.5s", animationFillMode: "both" }}
          >
            Салон, где вырастают крылья
          </p>
          <div
            className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center mt-12"
            style={{ animationDelay: "0.65s", animationFillMode: "both" }}
          >
            <a
              href="tel:+74955063211"
              className="px-10 py-3.5 font-golos text-xs uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--salon-gold)", color: "#F7F3EE", letterSpacing: "0.15em" }}
            >
              Записаться
            </a>
            <a
              href="#services"
              className="px-10 py-3.5 font-golos text-xs uppercase border transition-opacity hover:opacity-70"
              style={{ borderColor: "var(--salon-beige)", color: "var(--salon-beige)", letterSpacing: "0.15em" }}
            >
              Услуги
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} style={{ color: "var(--salon-taupe)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32" style={{ backgroundColor: "var(--salon-cream)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p
              className="font-golos text-xs uppercase mb-4"
              style={{ color: "var(--salon-gold)", letterSpacing: "0.3em" }}
            >
              О салоне
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-snug mb-6" style={{ color: "var(--salon-dark)" }}>
              Пространство,<br />
              <em>созданное для вас</em>
            </h2>
            <div className="w-10 h-px mb-8" style={{ backgroundColor: "var(--salon-taupe)" }} />
            <p className="font-golos text-sm leading-7 mb-4" style={{ color: "#5A4A3A" }}>
              Maria Shosheva — это не просто салон красоты. Это место, где время замедляется, а каждый визит становится ритуалом заботы о себе. Мы работаем в сердце Крылатского с 2015 года.
            </p>
            <p className="font-golos text-sm leading-7" style={{ color: "#5A4A3A" }}>
              Наша философия — красота через гармонию. Мы не гонимся за трендами, мы создаём образы, которые остаются актуальными и подчёркивают вашу уникальность.
            </p>
          </AnimatedSection>
          <AnimatedSection className="grid grid-cols-2 gap-4">
            {[
              { num: "9", label: "лет опыта" },
              { num: "12", label: "мастеров" },
              { num: "3 000+", label: "довольных клиентов" },
              { num: "4.9 ★", label: "средний рейтинг" },
            ].map((s) => (
              <div key={s.label} className="p-6 border" style={{ borderColor: "var(--salon-beige)" }}>
                <p className="font-cormorant text-3xl font-light mb-1" style={{ color: "var(--salon-gold)" }}>
                  {s.num}
                </p>
                <p className="font-golos text-xs uppercase" style={{ color: "#8A7A6A", letterSpacing: "0.1em" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: "var(--salon-beige)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-golos text-xs uppercase mb-4" style={{ color: "var(--salon-gold)", letterSpacing: "0.3em" }}>
              Наши услуги
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--salon-dark)" }}>
              Всё для вашей красоты
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--salon-taupe)" }}>
            {services.map((s, i) => (
              <AnimatedSection key={s.title}>
                <div
                  className="p-8 h-full flex flex-col gap-3 hover:bg-white transition-colors duration-300 cursor-default"
                  style={{ backgroundColor: "var(--salon-cream)" }}
                >
                  <p className="font-golos text-xs uppercase" style={{ color: "var(--salon-gold)", letterSpacing: "0.2em" }}>
                    0{i + 1}
                  </p>
                  <h3 className="font-cormorant text-xl font-light" style={{ color: "var(--salon-dark)" }}>
                    {s.title}
                  </h3>
                  <p className="font-golos text-xs leading-6 flex-1" style={{ color: "#7A6A5A" }}>
                    {s.desc}
                  </p>
                  <p className="font-cormorant text-lg" style={{ color: "var(--salon-gold)" }}>
                    {s.price}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 md:py-32" style={{ backgroundColor: "var(--salon-cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-golos text-xs uppercase mb-4" style={{ color: "var(--salon-gold)", letterSpacing: "0.3em" }}>
              Почему мы
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--salon-dark)" }}>
              Выбирают Maria Shosheva
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {reasons.map((r) => (
              <AnimatedSection key={r.title}>
                <div className="flex flex-col gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center border"
                    style={{ borderColor: "var(--salon-taupe)" }}
                  >
                    <Icon name={r.icon} fallback="Star" size={20} style={{ color: "var(--salon-gold)" }} />
                  </div>
                  <h3 className="font-cormorant text-xl font-light" style={{ color: "var(--salon-dark)" }}>
                    {r.title}
                  </h3>
                  <p className="font-golos text-xs leading-6" style={{ color: "#7A6A5A" }}>
                    {r.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="py-20 text-center px-6" style={{ backgroundColor: "var(--salon-dark)" }}>
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: "var(--salon-taupe)" }} />
            <p
              className="font-cormorant text-3xl md:text-4xl italic font-light leading-relaxed"
              style={{ color: "var(--salon-cream)" }}
            >
              «Красота — это не то, как вы выглядите.<br />
              Это то, как вы себя чувствуете.»
            </p>
            <div className="w-8 h-px mx-auto mt-8" style={{ backgroundColor: "var(--salon-taupe)" }} />
            <p
              className="font-golos text-xs uppercase mt-6"
              style={{ color: "var(--salon-taupe)", letterSpacing: "0.3em" }}
            >
              — Maria Shosheva
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32" style={{ backgroundColor: "var(--salon-beige)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-golos text-xs uppercase mb-4" style={{ color: "var(--salon-gold)", letterSpacing: "0.3em" }}>
              Отзывы
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--salon-dark)" }}>
              Говорят клиенты
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <AnimatedSection key={r.name}>
                <div className="p-8 h-full flex flex-col gap-4" style={{ backgroundColor: "var(--salon-cream)" }}>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i} style={{ color: "var(--salon-gold)" }}>★</span>
                    ))}
                  </div>
                  <p className="font-golos text-sm leading-7 flex-1 italic" style={{ color: "#5A4A3A" }}>
                    "{r.text}"
                  </p>
                  <div className="border-t pt-4 flex justify-between items-center" style={{ borderColor: "var(--salon-beige)" }}>
                    <p className="font-cormorant text-lg" style={{ color: "var(--salon-dark)" }}>
                      {r.name}
                    </p>
                    <p className="font-golos text-xs" style={{ color: "#A09080" }}>
                      {r.date}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32" style={{ backgroundColor: "var(--salon-cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-golos text-xs uppercase mb-4" style={{ color: "var(--salon-gold)", letterSpacing: "0.3em" }}>
              Контакты
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--salon-dark)" }}>
              Мы ждём вас
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="flex flex-col gap-8">
                {[
                  { icon: "MapPin", label: "Адрес", value: "ул. Крылатские Холмы, 47\nМосква" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 506-32-11", href: "tel:+74955063211" },
                  { icon: "Clock", label: "Режим работы", value: "Ежедневно, 10:00 – 21:00" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-5 items-start">
                    <div
                      className="w-10 h-10 flex-shrink-0 flex items-center justify-center border"
                      style={{ borderColor: "var(--salon-taupe)" }}
                    >
                      <Icon name={c.icon} fallback="MapPin" size={16} style={{ color: "var(--salon-gold)" }} />
                    </div>
                    <div>
                      <p
                        className="font-golos text-xs uppercase mb-1"
                        style={{ color: "#A09080", letterSpacing: "0.15em" }}
                      >
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="font-cormorant text-xl hover:opacity-70 transition-opacity"
                          style={{ color: "var(--salon-dark)" }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-cormorant text-xl whitespace-pre-line" style={{ color: "var(--salon-dark)" }}>
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                <a
                  href="tel:+74955063211"
                  className="mt-2 inline-block px-10 py-3.5 font-golos text-xs uppercase text-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "var(--salon-gold)", color: "var(--salon-cream)", letterSpacing: "0.15em" }}
                >
                  Записаться на приём
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="w-full overflow-hidden border" style={{ borderColor: "var(--salon-beige)", height: "400px" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.376000%2C55.760000&z=16&pt=37.375984,55.759847,pm2rdm&text=%D1%83%D0%BB.%20%D0%9A%D1%80%D1%8B%D0%BB%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B5%20%D0%A5%D0%BE%D0%BB%D0%BC%D1%8B%2C%2047%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта салона Maria Shosheva"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t" style={{ backgroundColor: "var(--salon-dark)", borderColor: "#3A3028" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-lg" style={{ color: "var(--salon-cream)", letterSpacing: "0.2em" }}>
            Maria Shosheva
          </p>
          <p className="font-golos text-xs text-center" style={{ color: "var(--salon-taupe)" }}>
            ул. Крылатские Холмы, 47 · Москва · Ежедневно 10:00–21:00
          </p>
          <a
            href="tel:+74955063211"
            className="font-golos text-xs hover:opacity-70 transition-opacity"
            style={{ color: "var(--salon-gold)" }}
          >
            +7 (495) 506-32-11
          </a>
        </div>
      </footer>

    </div>
  );
}