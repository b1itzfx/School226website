import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';

export function ContactsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Контакти</h1>
          <p className="text-xl text-slate-100">
            Зв'яжіться з нами будь-яким зручним способом
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Контактна інформація</CardTitle>
                <CardDescription>
                  Основні контакти для зв'язку
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Адреса</h4>
                    <p className="text-gray-700">вул. Шкільна, 1</p>
                    <p className="text-gray-700">м. Київ, 01001, Україна</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Телефони</h4>
                    <p className="text-gray-700">Приймальня: +380 (44) 123-45-67</p>
                    <p className="text-gray-700">Бухгалтерія: +380 (44) 123-45-68</p>
                    <p className="text-gray-700">Завуч: +380 (44) 123-45-69</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Електронна пошта</h4>
                    <p className="text-gray-700">school226@edu.ua</p>
                    <p className="text-gray-700">director@school226.edu.ua</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Графік роботи</h4>
                    <p className="text-gray-700">Понеділок - П'ятниця: 8:00 - 18:00</p>
                    <p className="text-gray-700">Субота: 9:00 - 14:00</p>
                    <p className="text-gray-700">Неділя: вихідний</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Прийом директора</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Іваненко Олена Петрівна</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    Особистий прийом громадян:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Вівторок: 14:00 - 17:00</li>
                    <li>• Четвер: 9:00 - 12:00</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    * Попередній запис за телефоном: +380 (44) 123-45-67
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Форма зворотного зв'язку</CardTitle>
                <CardDescription>
                  Залиште своє повідомлення, і ми обов'язково з вами зв'яжемося
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ім'я та прізвище *</Label>
                    <Input
                      id="name"
                      placeholder="Введіть ваше ім'я"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Електронна пошта *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+380 (XX) XXX-XX-XX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Тема звернення *</Label>
                    <Input
                      id="subject"
                      placeholder="Коротко опишіть тему"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Повідомлення *</Label>
                    <Textarea
                      id="message"
                      placeholder="Введіть ваше повідомлення..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Відправити повідомлення
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Натискаючи кнопку, ви погоджуєтесь з{' '}
                    <a href="#" className="underline">
                      Політикою конфіденційності
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Карта проїзду</CardTitle>
            <CardDescription>
              Як до нас дістатися
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Тут буде інтерактивна карта</p>
                <p className="text-sm mt-2">вул. Шкільна, 1, м. Київ</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Громадський транспорт:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Метро: станція "Майдан Незалежності" (5 хв пішки)</li>
                  <li>• Автобус: №24, №38 - зупинка "Школа №225"</li>
                  <li>• Тролейбус: №11, №22 - зупинка "Шкільна"</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Автомобілем:</h4>
                <p className="text-sm text-gray-700">
                  Паркування доступне на території школи (обмежена кількість місць) 
                  та на прилеглих вулицях.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
