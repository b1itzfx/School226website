import { Link } from 'react-router-dom';
import { BookOpen, Users, Shield, Bell, FileText, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const quickLinks = [
  {
    title: 'Прийом учнів',
    description: 'Інформація про порядок зарахування до школи',
    icon: Users,
    href: '/participants',
    color: 'bg-blue-500',
  },
  {
    title: 'Документи',
    description: 'Статут, правила, ліцензія',
    icon: FileText,
    href: '/transparency',
    color: 'bg-green-500',
  },
  {
    title: 'Контакти',
    description: 'Адреса, телефони, графік роботи',
    icon: Phone,
    href: '/contacts',
    color: 'bg-purple-500',
  },
  {
    title: 'Електронний щоденник',
    description: 'Доступ до навчальної платформи',
    icon: BookOpen,
    href: '#',
    color: 'bg-orange-500',
  },
];

const announcements = [
  {
    date: '22 січня 2026',
    title: 'Початок реєстрації до 1 класу',
    type: 'Важливо',
    badge: 'new',
  },
  {
    date: '20 січня 2026',
    title: 'Зустріч батьків майбутніх першокласників',
    type: 'Подія',
    badge: '',
  },
  {
    date: '18 січня 2026',
    title: 'Канікули влітку: розклад',
    type: 'Оголошення',
    badge: '',
  },
];

const news = [
  {
    date: '21 січня 2026',
    title: 'Учні школи перемогли в олімпіаді з математики',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njg5OTczMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    date: '19 січня 2026',
    title: 'Відкриття нового комп\'ютерного класу',
    image: 'https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjkwNTk5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    date: '17 січня 2026',
    title: 'Майстер-клас з креативного письма',
    image: 'https://images.unsplash.com/photo-1660351174962-e2a1fbb9af09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5MDI5Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Загальноосвітня школа №225
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Сучасна освіта. Якісне навчання. Турбота про кожну дитину.
              </p>
              <p className="mb-8 text-blue-100">
                Забезпечуємо відкритість та прозорість відповідно до вимог Закону України «Про освіту» та «Про повну загальну середню освіту»
              </p>
              <Link to="/about">
                <Button size="lg" variant="secondary">
                  Дізнатися більше
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592066575517-58df903152f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkwNjY4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Школа"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Швидкі посилання</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link to={link.href} key={index}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Актуальні оголошення</h2>
            <Link to="/news">
              <Button variant="outline">Всі оголошення</Button>
            </Link>
          </div>
          <div className="grid gap-4">
            {announcements.map((announcement, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={announcement.badge === 'new' ? 'default' : 'secondary'}>
                          {announcement.type}
                        </Badge>
                        {announcement.badge === 'new' && (
                          <Badge variant="destructive">Нове</Badge>
                        )}
                        <span className="text-sm text-gray-500">{announcement.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold">{announcement.title}</h3>
                    </div>
                    <Bell className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Новини та події</h2>
            <Link to="/news">
              <Button variant="outline">Всі новини</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Наша місія</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Забезпечити якісну, доступну та інклюзивну освіту, що сприяє всебічному розвитку особистості учня, формуванню його компетентностей та цінностей, необхідних для успішної самореалізації у сучасному суспільстві.
          </p>
        </div>
      </section>
    </div>
  );
}
