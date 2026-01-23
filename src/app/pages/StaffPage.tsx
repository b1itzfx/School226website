import { Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

const staff = [
  { name: 'Іваненко Олена Петрівна', position: 'Вчитель української мови', education: 'Вища педагогічна', category: 'Вища категорія', title: 'Заслужений вчитель України' },
  { name: 'Коваленко Марія Іванівна', position: 'Вчитель математики', education: 'Вища педагогічна', category: 'Перша категорія', title: '' },
  { name: 'Петренко Андрій Сергійович', position: 'Вчитель фізики', education: 'Вища педагогічна', category: 'Вища категорія', title: 'Вчитель-методист' },
  { name: 'Сидоренко Наталія Олександрівна', position: 'Вчитель англійської мови', education: 'Вища філологічна', category: 'Друга категорія', title: '' },
  { name: 'Мельник Ігор Васильович', position: 'Вчитель інформатики', education: 'Вища технічна', category: 'Перша категорія', title: '' },
  { name: 'Гончаренко Світлана Миколаївна', position: 'Вчитель історії', education: 'Вища педагогічна', category: 'Вища категорія', title: 'Старший вчитель' },
];

export function StaffPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Кадровий склад</h1>
          <p className="text-xl text-indigo-100">
            Педагогічні працівники закладу освіти
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Всього педагогів</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">65</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Вища категорія</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">28</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Вчених ступенів</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">5</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Педагогічні працівники</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {staff.map((person, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{person.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{person.category}</Badge>
                      {person.title && <Badge>{person.title}</Badge>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <p><strong>Посада:</strong> {person.position}</p>
                    <p><strong>Освіта:</strong> {person.education}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
