import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.5),transparent)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Оригинальные
                <span className="block text-primary">запчасти</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
                Премиальное качество для вашего автомобиля. 
                Гарантия на всю продукцию.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto font-semibold shadow-2xl shadow-primary/30 transition-all hover:scale-105"
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Консультация специалиста
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            
            <div className="animate-scale-in animation-delay-200">
              <img 
                src="https://cdn.poehali.dev/projects/331961d7-afe2-4e0f-a712-575fe0e1021c/files/b5706634-2cb1-4366-8146-080a54daf45a.jpg" 
                alt="Автозапчасти" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-black text-secondary mb-4 tracking-tight">
              О компании
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Мы специализируемся на поставке оригинальных автозапчастей для всех марок автомобилей. 
              Более 15 лет на рынке, тысячи довольных клиентов и безупречная репутация.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { number: '15+', label: 'Лет опыта' },
                { number: '50K+', label: 'Довольных клиентов' },
                { number: '100%', label: 'Оригинальные запчасти' }
              ].map((stat, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-black text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-secondary mb-4 tracking-tight">
              Преимущества
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={advantage.icon} size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black text-secondary mb-4 tracking-tight">
                Консультация
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
              </p>
            </div>
            
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Ваш вопрос
                    </label>
                    <Textarea
                      placeholder="Опишите, какие запчасти вам нужны..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 text-base"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                  >
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-light opacity-90">
            © 2024 Автозапчасти Премиум. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
