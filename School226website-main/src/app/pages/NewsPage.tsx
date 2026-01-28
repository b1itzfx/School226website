import { Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const news = [
  {
    id: 1,
    title: 'Учні школи перемогли в олімпіаді з математики',
    date: '21 січня 2026',
    category: 'Досягнення',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njg5OTczMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Наші учні 10-А класу здобули призові місця на міській олімпіаді з математики. Вітаємо переможців!',
  },
  {
    id: 2,
    title: 'Відкриття нового комп\'ютерного класу',
    date: '19 січня 2026',
    category: 'Події',
    image: 'https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjkwNTk5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'У школі відкрито сучасний комп\'ютерний клас, обладнаний новітніми технологіями для навчання програмування та робототехніки.',
  },
  {
    id: 3,
    title: 'Майстер-клас з креативного письма',
    date: '17 січня 2026',
    category: 'Майстер-класи',
    image: 'https://images.unsplash.com/photo-1660351174962-e2a1fbb9af09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5MDI5Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Відомий письменник провів цікавий майстер-клас з креативного письма для учнів 8-11 класів.',
  },
  {
    id: 4,
    title: 'Спортивні змагання між класами',
    date: '15 січня 2026',
    category: 'Спорт',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njg5OTczMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Відбулись традиційні зимові спортивні змагання. Переможцем стала команда 9-Б класу.',
  },
  {
    id: 5,
    title: 'Екологічна акція "Чиста школа"',
    date: '12 січня 2026',
    category: 'Екологія',
    image: 'https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjkwNTk5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Учні 7-х класів провели екологічну акцію з прибирання та озеленення шкільної території.',
  },
  {
    id: 6,
    title: 'Зустріч з ветеранами',
    date: '10 січня 2026',
    category: 'Патріотичне виховання',
    image: 'https://images.unsplash.com/photo-1660351174962-e2a1fbb9af09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5MDI5Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Учні школи зустрілись з ветеранами та вислухали їхні спогади про героїчні події.',
  },
];

export function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Новини та події</h1>
          <p className="text-xl text-teal-100">
            Актуальна інформація про життя школи
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">
                    <Tag className="h-3 w-3 mr-1" />
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
