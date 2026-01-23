import { BookOpen, Calendar, ClipboardList, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function EducationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Освітня діяльність</h1>
          <p className="text-xl text-green-100">
            Освітні програми, режим роботи та система оцінювання
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="programs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="programs">Освітні програми</TabsTrigger>
            <TabsTrigger value="schedule">Режим роботи</TabsTrigger>
            <TabsTrigger value="assessment">Оцінювання</TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  Освітні програми за рівнями
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Початкова освіта (1-4 класи)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Освітня програма початкової школи спрямована на формування ключових компетентностей 
                          та розвиток особистості дитини.
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">Освітні компоненти:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Українська мова та література</li>
                            <li>Іноземна мова (з 1 класу)</li>
                            <li>Математика</li>
                            <li>Я досліджую світ</li>
                            <li>Мистецтво</li>
                            <li>Фізична культура</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Базова середня освіта (5-9 класи)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Програма базової середньої освіти забезпечує поглиблене вивчення предметів 
                          та розвиток компетентностей учнів.
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">Освітні компоненти:</h4>
                          <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                            <li>• Українська мова та література</li>
                            <li>• Іноземні мови (2)</li>
                            <li>• Математика</li>
                            <li>• Історія України та Всесвітня історія</li>
                            <li>• Громадянська освіта</li>
                            <li>• Природничі науки</li>
                            <li>• Інформатика</li>
                            <li>• Мистецтво та технології</li>
                            <li>• Фізична культура</li>
                            <li>• Основи здоров'я</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Профільна середня освіта (10-11 класи)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Профільне навчання передбачає поглиблене вивчення предметів відповідно до 
                          обраного профілю.
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">Доступні профілі:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="border-l-4 border-green-600 pl-4">
                              <h5 className="font-semibold">Природничо-математичний</h5>
                              <p className="text-sm text-gray-600">Математика, фізика, хімія, біологія</p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4">
                              <h5 className="font-semibold">Гуманітарний</h5>
                              <p className="text-sm text-gray-600">Українська література, історія, іноземні мови</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Режим роботи закладу
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Тривалість навчального року</h3>
                  <p className="text-gray-700">1 вересня 2025 р. – 31 травня 2026 р.</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Розклад дзвінків</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">1 зміна (1-6 класи)</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>1 урок: 08:30 – 09:15</li>
                        <li>2 урок: 09:25 – 10:10</li>
                        <li>3 урок: 10:30 – 11:15</li>
                        <li>4 урок: 11:35 – 12:20</li>
                        <li>5 урок: 12:30 – 13:15</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">2 зміна (7-11 класи)</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>1 урок: 13:30 – 14:15</li>
                        <li>2 урок: 14:25 – 15:10</li>
                        <li>3 урок: 15:20 – 16:05</li>
                        <li>4 урок: 16:15 – 17:00</li>
                        <li>5 урок: 17:10 – 17:55</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Канікули</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Осінні: 28 жовтня – 3 листопада 2025 р.</li>
                    <li>• Зимові: 23 грудня 2025 р. – 8 січня 2026 р.</li>
                    <li>• Весняні: 23 березня – 30 березня 2026 р.</li>
                    <li>• Літні: 1 червня – 31 серпня 2026 р.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assessment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-6 w-6" />
                  Система оцінювання
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Оцінювання навчальних досягнень</h3>
                  <p className="text-gray-700 mb-4">
                    У школі застосовується 12-бальна система оцінювання (5-11 класи) та 
                    вербальне оцінювання (1-4 класи).
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-green-700">10-12</p>
                      <p className="text-sm text-gray-700">Високий рівень</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-blue-700">7-9</p>
                      <p className="text-sm text-gray-700">Достатній рівень</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-yellow-700">4-6</p>
                      <p className="text-sm text-gray-700">Середній рівень</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-red-700">1-3</p>
                      <p className="text-sm text-gray-700">Початковий рівень</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Академічна доброчесність</h3>
                  <p className="text-gray-700 mb-3">
                    Наш заклад дотримується принципів академічної доброчесності та виховує у здобувачів освіти:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Чесність у навчанні та оцінюванні</li>
                    <li>• Самостійність виконання навчальних завдань</li>
                    <li>• Повагу до інтелектуальної власності</li>
                    <li>• Відповідальність за результати навчання</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Критерії оцінювання</h3>
                  <p className="text-gray-700">
                    Детальні критерії оцінювання розробляються для кожного предмета відповідно до 
                    Державних стандартів освіти та оприлюднюються на початку навчального року.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
