import { FileText, DollarSign, Building, Scale } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Button } from '@/app/components/ui/button';

export function TransparencyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Прозорість та публічна інформація</h1>
          <p className="text-xl text-cyan-100">
            Відповідно до ст. 30 Закону України «Про освіту»
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="financial" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="financial">Фінансова звітність</TabsTrigger>
            <TabsTrigger value="documents">Нормативні документи</TabsTrigger>
            <TabsTrigger value="reports">Звіти керівника</TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  Фінансова звітність
                </CardTitle>
                <CardDescription>
                  Інформація про використання бюджетних коштів
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4 py-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">Кошторис на 2026 рік</h4>
                        <p className="text-sm text-gray-600">Затверджений бюджет закладу</p>
                      </div>
                      <Button variant="outline" size="sm">Завантажити</Button>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4 py-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">Фінансовий звіт за 2025 рік</h4>
                        <p className="text-sm text-gray-600">Звіт про виконання кошторису</p>
                      </div>
                      <Button variant="outline" size="sm">Завантажити</Button>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4 py-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">Використання бюджетних коштів</h4>
                        <p className="text-sm text-gray-600">Квартальна звітність</p>
                      </div>
                      <Button variant="outline" size="sm">Завантажити</Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Благодійна допомога</h3>
                  <p className="text-gray-700 mb-4">
                    Інформація про добровільні внески батьків та інших благодійників.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Усі благодійні внески є добровільними та використовуються виключно для 
                      покращення матеріально-технічної бази школи. Звітність про використання 
                      благодійних коштів оприлюднюється щокварталу.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Нормативні документи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Scale className="h-5 w-5" />
                      Установчі документи
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Статут закладу</p>
                          <p className="text-sm text-gray-600">Редакція від 15.03.2024</p>
                        </div>
                        <Button variant="outline" size="sm">Переглянути</Button>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Ліцензія на освітню діяльність</p>
                          <p className="text-sm text-gray-600">Серія АЕ №285647</p>
                        </div>
                        <Button variant="outline" size="sm">Переглянути</Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      Внутрішні документи
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Правила внутрішнього розпорядку</p>
                          <p className="text-sm text-gray-600">Для учнів та працівників</p>
                        </div>
                        <Button variant="outline" size="sm">Переглянути</Button>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Колективний договір</p>
                          <p className="text-sm text-gray-600">На 2024-2026 роки</p>
                        </div>
                        <Button variant="outline" size="sm">Переглянути</Button>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Політика конфіденційності</p>
                          <p className="text-sm text-gray-600">Захист персональних даних</p>
                        </div>
                        <Button variant="outline" size="sm">Переглянути</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Звіти керівника</CardTitle>
                <CardDescription>
                  Щорічна звітність про діяльність закладу
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4 py-4">
                    <h4 className="font-semibold text-lg mb-2">
                      Звіт директора за 2024/2025 навчальний рік
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Підсумки навчального року, досягнення, виклики та плани розвитку
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Переглянути</Button>
                      <Button variant="outline" size="sm">Завантажити</Button>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4 py-4">
                    <h4 className="font-semibold text-lg mb-2">
                      Звіт про виконання освітньої програми
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Аналіз виконання навчальних планів та результатів навчання
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Переглянути</Button>
                      <Button variant="outline" size="sm">Завантажити</Button>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4 py-4">
                    <h4 className="font-semibold text-lg mb-2">
                      Звіт про атестацію педагогічних працівників
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Результати атестації за 2025 рік
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Переглянути</Button>
                      <Button variant="outline" size="sm">Завантажити</Button>
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
