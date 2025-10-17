import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const AnimatedSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
                Оригинальные
                <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                  запчасти
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/60 mb-12 font-light tracking-tight max-w-3xl mx-auto">
                Премиальное качество. Абсолютная надёжность.
                <span className="block mt-2">Гарантия на всю продукцию.</span>
              </p>
            </div>
            
            <div className="animate-scale-in animation-delay-200 mb-16">
              <img 
                src="https://cdn.poehali.dev/projects/331961d7-afe2-4e0f-a712-575fe0e1021c/files/b5706634-2cb1-4366-8146-080a54daf45a.jpg" 
                alt="Автозапчасти" 
                className="w-full h-auto rounded-3xl shadow-[0_0_100px_rgba(255,119,0,0.3)]"
              />
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black text-xl px-12 py-8 h-auto font-bold rounded-full shadow-[0_0_50px_rgba(255,119,0,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_80px_rgba(255,119,0,0.6)]"
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Консультация специалиста
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter">
                15 лет опыта
              </h2>
              <p className="text-2xl text-white/50 font-light tracking-tight">
                На рынке автозапчастей
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={200}>
              <p className="text-2xl md:text-3xl text-white/70 leading-relaxed text-center font-light tracking-tight mb-20">
                Мы специализируемся на поставке оригинальных автозапчастей для всех марок автомобилей. 
                Тысячи довольных клиентов и безупречная репутация.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '15+', label: 'Лет опыта', desc: 'На рынке' },
                { number: '50K+', label: 'Клиентов', desc: 'Довольны выбором' },
                { number: '100%', label: 'Оригинал', desc: 'Гарантия качества' }
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={300 + index * 150}>
                  <div className="text-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all hover:scale-105 group">
                    <div className="text-7xl md:text-8xl font-black bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-4 group-hover:from-primary group-hover:to-orange-500 transition-all">
                      {stat.number}
                    </div>
                    <div className="text-xl text-white/90 font-semibold mb-2">{stat.label}</div>
                    <div className="text-white/50 font-light">{stat.desc}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter">
                Преимущества
              </h2>
              <p className="text-2xl text-white/50 font-light tracking-tight">
                Почему выбирают нас
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {[
              {
                icon: 'ShieldCheck',
                title: 'Гарантия качества',
                description: 'Официальная гарантия на все автозапчасти. Только оригинальная продукция от проверенных производителей.'
              },
              {
                icon: 'Truck',
                title: 'Быстрая доставка',
                description: 'Доставка по всей России за 1-3 дня. Собственная логистическая сеть для максимальной скорости.'
              },
              {
                icon: 'BadgePercent',
                title: 'Выгодные цены',
                description: 'Конкурентные цены без посредников. Прямые поставки от производителей и официальных дилеров.'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Консультации специалистов в любое время. Команда профессионалов всегда готова помочь с выбором.'
              }
            ].map((advantage, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all group hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-orange-500 transition-all group-hover:scale-110">
                      <Icon name={advantage.icon} size={40} className="text-primary group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{advantage.title}</h3>
                      <p className="text-xl text-white/60 leading-relaxed font-light">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-40 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-20">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
                  Консультация
                </h2>
                <p className="text-2xl text-white/50 font-light tracking-tight">
                  Наш специалист свяжется с вами в течение 15 минут
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-white/90 mb-4">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-16 text-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-white/90 mb-4">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-16 text-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-white/90 mb-4">
                      Ваш вопрос
                    </label>
                    <Textarea
                      placeholder="Опишите, какие запчасти вам нужны..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-40 text-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-black h-20 text-xl font-bold rounded-full shadow-[0_0_50px_rgba(255,119,0,0.5)] hover:shadow-[0_0_80px_rgba(255,119,0,0.6)] transition-all hover:scale-[1.02]"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-white/40 font-light">
            © 2024 Автозапчасти Премиум
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
