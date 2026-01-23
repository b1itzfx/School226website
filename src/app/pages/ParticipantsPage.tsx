import { Users, UserCheck, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function ParticipantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Учасникам освітнього процесу</h1>
          <p className="text-xl text-purple-100">
            Інформація для учнів, батьків та педагогів
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="students" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="students">Учням</TabsTrigger>
            <TabsTrigger value="parents">Батькам</TabsTrigger>
            <TabsTrigger value="teachers">Педагогам</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Права та обов'язки учнів
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="rights">
                    <AccordionTrigger>Права учнів</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Безоплатне здобуття повної загальної середньої освіти</li>
                        <li>• Безпечні та нешкідливі умови навчання</li>
                        <li>• Повагу людської гідності</li>
                        <li>• Захист від булінгу та будь-яких форм насильства</li>
                        <li>• Вільний вираз поглядів, переконань та думок</li>
                        <li>• Участь в управлінні закладом освіти</li>
                        <li>• Безоплатне користування бібліотекою, навчальними приміщеннями</li>
                        <li>• Участь у культурних, спортивних та інших заходах</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="duties">
                    <AccordionTrigger>Обов'язки учнів</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Дотримуватися вимог законодавства, Статуту та Правил внутрішнього розпорядку</li>
                        <li>• Виконувати вимоги освітньої програми</li>
                        <li>• Поважати гідність, права, свободи та законні інтереси інших учасників освітнього процесу</li>
                        <li>• Дбайливо ставитися до власного здоров'я</li>
                        <li>• Бережливо ставитися до майна закладу</li>
                        <li>• Дотримуватися принципів академічної доброчесності</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Правила поведінки учнів</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Правила внутрішнього розпорядку регулюють поведінку учнів у закладі освіти та 
                  спрямовані на створення безпечного та комфортного середовища для навчання.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Основні положення:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Приходити до школи за 10-15 хвилин до початку уроків</li>
                    <li>• Дотримуватися дрес-коду (діловий стиль одягу)</li>
                    <li>• Виконувати домашні завдання</li>
                    <li>• Відключати мобільні телефони під час уроків</li>
                    <li>• Берегти шкільне майно</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Булінг: що робити і куди звертатися</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Якщо ти або хтось із твоїх друзів стикається з булінгом (цькуванням), 
                  важливо не мовчати та звернутися за допомогою.
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">Куди звертатися:</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• Класний керівник</li>
                      <li>• Шкільний психолог</li>
                      <li>• Соціальний педагог</li>
                      <li>• Заступник директора</li>
                      <li>• Директор школи</li>
                      <li>• Телефон довіри: 116 111 (безкоштовно)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="parents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-6 w-6" />
                  Права та обов'язки батьків
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="parent-rights">
                    <AccordionTrigger>Права батьків</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Обирати заклад освіти для дитини</li>
                        <li>• Захищати права та законні інтереси дитини</li>
                        <li>• Звертатися до адміністрації закладу з питань освіти дитини</li>
                        <li>• Отримувати інформацію про успішність та поведінку дитини</li>
                        <li>• Брати участь в управлінні закладом освіти</li>
                        <li>• Надавати добровільні пожертвування</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="parent-duties">
                    <AccordionTrigger>Обов'язки батьків</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Забезпечити здобуття дитиною повної загальної середньої освіти</li>
                        <li>• Сприяти виконанню дитиною освітньої програми</li>
                        <li>• Поважати гідність дитини та інших учасників освітнього процесу</li>
                        <li>• Виховувати в дитині повагу до законів та цінностей</li>
                        <li>• Підтримувати зв'язок із закладом освіти</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Порядок зарахування до школи</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Документи для зарахування:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Заява батьків (законних представників)</li>
                    <li>• Свідоцтво про народження дитини (копія)</li>
                    <li>• Медична картка</li>
                    <li>• Документ про попереднє навчання (для 2-11 класів)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Терміни подачі заяв до 1 класу:</h4>
                  <p className="text-sm text-gray-700">
                    1 червня – 31 липня поточного року
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Переведення та відрахування</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Переведення до іншого закладу:</h4>
                  <p className="text-gray-700 text-sm">
                    Здійснюється на підставі заяви батьків з наданням довідки про зарахування 
                    до іншого закладу освіти.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Відрахування:</h4>
                  <p className="text-gray-700 text-sm">
                    Здійснюється у випадках, передбачених законодавством (переведення до іншого 
                    закладу, завершення навчання, тощо).
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6" />
                  Вакансії
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Наша школа завжди відкрита для талановитих та відданих своїй справі педагогів.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Актуальні вакансії оновлюються щомісяця. Для отримання інформації звертайтеся 
                    до відділу кадрів за телефоном: +380 (44) 123-45-67
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Підвищення кваліфікації</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Педагогічні працівники мають право та зобов'язані підвищувати свою кваліфікацію 
                  не рідше одного разу на 5 років.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Форми підвищення кваліфікації:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Інституційна (курси підвищення кваліфікації)</li>
                    <li>• Дуальна (поєднання інституційної та самоосвіти)</li>
                    <li>• Самоосвіта (індивідуальна освітня траєкторія)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Атестація педагогічних працівників</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Атестація проводиться з метою підтвердження відповідності педагогічних працівників 
                  займаній посаді та присвоєння кваліфікаційних категорій.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Кваліфікаційні категорії:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium">Спеціаліст</p>
                      <p className="text-sm text-gray-600">Початковий рівень</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-medium">Спеціаліст другої категорії</p>
                      <p className="text-sm text-gray-600">Базовий рівень</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="font-medium">Спеціаліст першої категорії</p>
                      <p className="text-sm text-gray-600">Підвищений рівень</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-medium">Спеціаліст вищої категорії</p>
                      <p className="text-sm text-gray-600">Найвищий рівень</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
