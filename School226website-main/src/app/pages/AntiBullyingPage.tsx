import { AlertCircle, Phone, Mail, UserX, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { Button } from '@/app/components/ui/button';

export function AntiBullyingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Антибулінг та захист прав дитини</h1>
          <p className="text-xl text-orange-100">
            Нульова толерантність до булінгу
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Важливо знати!</AlertTitle>
          <AlertDescription>
            Булінг (цькування) - це систематичні дії, спрямовані на приниження, залякування чи дискримінацію. 
            Якщо ти або хтось із твоїх знайомих стикається з булінгом, не мовчи - звернися за допомогою!
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserX className="h-6 w-6" />
              Що таке булінг?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Булінг (цькування) - це діяння (дії або бездіяльність) учасників освітнього процесу, 
              які полягають у психологічному, фізичному, економічному, сексуальному насильстві, 
              у тому числі із застосуванням засобів електронних комунікацій.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-800">Фізичний булінг</h4>
                <p className="text-sm text-gray-700">
                  Штовхання, удари, пошкодження речей, примусові дії
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-orange-800">Психологічний булінг</h4>
                <p className="text-sm text-gray-700">
                  Приниження, образи, погрози, ізоляція, розповсюдження чуток
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-800">Кібербулінг</h4>
                <p className="text-sm text-gray-700">
                  Цькування в інтернеті, соціальних мережах, месенджерах
                </p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-pink-800">Економічний булінг</h4>
                <p className="text-sm text-gray-700">
                  Вимагання грошей, пошкодження чи крадіжка речей
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Як розпізнати булінг?</CardTitle>
            <CardDescription>
              Ознаки, на які варто звернути увагу
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Поведінкові зміни:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Небажання йти до школи</li>
                  <li>Зниження успішності</li>
                  <li>Замкнутість, тривожність, депресія</li>
                  <li>Порушення сну та апетиту</li>
                  <li>Часті хвороби, скарги на погане самопочуття</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Фізичні ознаки:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Синці, подряпини без пояснень</li>
                  <li>Пошкоджений одяг або речі</li>
                  <li>Втрата грошей або особистих речей</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-6 w-6" />
              Контакти відповідальних осіб
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4 py-3">
                <p className="font-semibold">Координатор з протидії булінгу</p>
                <p className="text-gray-700">Петренко Андрій Сергійович</p>
                <p className="text-sm text-gray-600">Тел.: +380 (44) 123-45-68</p>
                <p className="text-sm text-gray-600">Email: antibullying@school225.edu.ua</p>
              </div>

              <div className="border-l-4 border-green-600 pl-4 py-3">
                <p className="font-semibold">Шкільний психолог</p>
                <p className="text-gray-700">Коваленко Олена Миколаївна</p>
                <p className="text-sm text-gray-600">Тел.: +380 (44) 123-45-69</p>
                <p className="text-sm text-gray-600">Прийом: Пн-Пт, 9:00-16:00</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4 py-3">
                <p className="font-semibold">Соціальний педагог</p>
                <p className="text-gray-700">Мельник Світлана Іванівна</p>
                <p className="text-sm text-gray-600">Тел.: +380 (44) 123-45-70</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Телефон довіри для дітей та молоді</h4>
                <p className="text-2xl font-bold text-blue-700">116 111</p>
                <p className="text-sm text-gray-600">Безкоштовно, анонімно, цілодобово</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Національна дитяча «гаряча лінія»</h4>
                <p className="text-2xl font-bold text-green-700">0 800 500 335</p>
                <p className="text-sm text-gray-600">Безкоштовно з будь-якого телефону</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Порядок подання заяв про булінг
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                Заява про випадок булінгу може бути подана:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-sm font-medium">1</span>
                  <span className="text-gray-700">
                    Усно - безпосередньо координатору, психологу, класному керівнику або директору
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-sm font-medium">2</span>
                  <span className="text-gray-700">
                    Письмово - через скриньку довіри (розташована на 1 поверсі біля входу)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-sm font-medium">3</span>
                  <span className="text-gray-700">
                    Електронно - на email: antibullying@school225.edu.ua
                  </span>
                </li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Важливо:</strong> Усі заяви розглядаються конфіденційно. 
                  Протягом 3 робочих днів проводиться розслідування, за результатами 
                  якого вживаються відповідні заходи реагування.
                </p>
              </div>

              <Button className="w-full md:w-auto">Завантажити бланк заяви</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Нормативна база</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Закон України «Про освіту» (Стаття 52)</span>
                <Button variant="outline" size="sm">Переглянути</Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Положення про протидію булінгу в школі</span>
                <Button variant="outline" size="sm">Переглянути</Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Алгоритм реагування на випадки булінгу</span>
                <Button variant="outline" size="sm">Переглянути</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
