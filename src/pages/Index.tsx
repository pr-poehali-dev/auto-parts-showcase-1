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
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 md:mb-8 leading-[0.9] tracking-tighter">
                Оригинальные
                <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                  запчасти
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-white/60 mb-8 md:mb-12 font-light tracking-tight max-w-3xl mx-auto px-4">
                Премиальное качество. Абсолютная надёжность.
                <span className="block mt-2">Гарантия на всю продукцию.</span>
              </p>
            </div>
            
            <div className="animate-scale-in animation-delay-200 mb-8 md:mb-16">
              <img 
                src="https://cdn.poehali.dev/projects/331961d7-afe2-4e0f-a712-575fe0e1021c/files/b5706634-2cb1-4366-8146-080a54daf45a.jpg" 
                alt="Автозапчасти" 
                className="w-full h-auto rounded-2xl md:rounded-3xl shadow-[0_0_100px_rgba(255,119,0,0.3)]"
              />
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 h-auto font-bold rounded-full shadow-[0_0_50px_rgba(255,119,0,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_80px_rgba(255,119,0,0.6)]"
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter px-4">
                15 лет опыта
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/50 font-light tracking-tight px-4">
                На рынке автозапчастей
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={200}>
              <p className="text-lg sm:text-xl md:text-3xl text-white/70 leading-relaxed text-center font-light tracking-tight mb-12 md:mb-20 px-4">
                Мы специализируемся на поставке оригинальных автозапчастей для всех марок автомобилей. 
                Тысячи довольных клиентов и безупречная репутация.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { number: '15+', label: 'Лет опыта', desc: 'На рынке' },
                { number: '50K+', label: 'Клиентов', desc: 'Довольны выбором' },
                { number: '100%', label: 'Оригинал', desc: 'Гарантия качества' }
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={300 + index * 150}>
                  <div className="text-center p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all hover:scale-105 group">
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-primary group-hover:to-orange-500 transition-all">
                      {stat.number}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl text-white/90 font-semibold mb-1 md:mb-2">{stat.label}</div>
                    <div className="text-sm sm:text-base text-white/50 font-light">{stat.desc}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-40 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter px-4">
                Преимущества
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/50 font-light tracking-tight px-4">
                Почему выбирают нас
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {[
              {
                icon: 'ShieldCheck',
                title: 'Гарантия качества',
                description: 'Официальная гарантия на все автозапчасти'
              },
              {
                icon: 'Truck',
                title: 'Быстрая доставка',
                description: 'Доставка по всей России за 1-3 дня'
              },
              {
                icon: 'BadgePercent',
                title: 'Выгодные цены',
                description: 'Конкурентные цены без посредников'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Консультации специалистов в любое время'
              }
            ].map((advantage, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all group hover:scale-[1.02]">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-orange-500 transition-all group-hover:scale-110">
                      <Icon name={advantage.icon} size={32} className="text-primary group-hover:text-black transition-colors md:w-10 md:h-10" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 tracking-tight">{advantage.title}</h3>
                      <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light">{advantage.description}</p>
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
              <div className="text-center mb-12 md:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-8 tracking-tighter px-4">
                  Консультация
                </h2>
                <p className="text-base sm:text-lg md:text-2xl text-white/50 font-light tracking-tight px-4">
                  Свяжемся в течение 15 минут
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8">
                  <div>
                    <label className="block text-sm sm:text-base md:text-lg font-semibold text-white/90 mb-2 md:mb-4">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 sm:h-14 md:h-16 text-base md:text-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base md:text-lg font-semibold text-white/90 mb-2 md:mb-4">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 sm:h-14 md:h-16 text-base md:text-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base md:text-lg font-semibold text-white/90 mb-2 md:mb-4">
                      Ваш вопрос
                    </label>
                    <Textarea
                      placeholder="Опишите, какие запчасти вам нужны..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 md:min-h-40 text-base md:text-lg bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-black h-14 sm:h-16 md:h-20 text-base sm:text-lg md:text-xl font-bold rounded-full shadow-[0_0_50px_rgba(255,119,0,0.5)] hover:shadow-[0_0_80px_rgba(255,119,0,0.6)] transition-all hover:scale-[1.02]"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm sm:text-base md:text-lg text-white/40 font-light">
            © 2024 Автозапчасти Премиум
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;