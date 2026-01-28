import { Building2, Users, Award, Target, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';

const managementTeam = [
  { role: 'Директор', name: 'Іваненко Олена Петрівна', education: 'Вища педагогічна', experience: '15 років' },
  { role: 'Заступник з навчальної роботи', name: 'Коваленко Марія Іванівна', education: 'Вища педагогічна', experience: '12 років' },
  { role: 'Заступник з виховної роботи', name: 'Петренко Андрій Сергійович', education: 'Вища педагогічна', experience: '10 років' },
];

const values = [
  {
    icon: Heart,
    title: 'Турбота',
    description: 'Індивідуальний підхід до кожної дитини',
  },
  {
    icon: Award,
    title: 'Якість',
    description: 'Високі стандарти освітнього процесу',
  },
  {
    icon: Users,
    title: 'Співпраця',
    description: 'Партнерство з батьками та громадою',
  },
  {
    icon: Lightbulb,
    title: 'Інновації',
    description: 'Сучасні методики та технології',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Про заклад освіти</h1>
          <p className="text-xl text-blue-100">
            Інформація відповідно до ст. 30 Закону України «Про освіту»
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="general" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">Загальна інформація</TabsTrigger>
            <TabsTrigger value="mission">Місія та цінності</TabsTrigger>
            <TabsTrigger value="management">Керівництво</TabsTrigger>
          </TabsList>

          {/* General Information */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6" />
                  Загальна інформація про заклад
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Повна назва закладу</h3>
                    <p className="text-gray-700">
                      Комунальний заклад «Загальноосвітня школа І-ІІІ ступенів №226 Київської міської ради»
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Тип та форма власності</h3>
                    <p className="text-gray-700">
                      Загальноосвітня школа І-ІІІ ступенів, комунальна власність
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Засновник</h3>
                    <p className="text-gray-700">
                      Київська міська рада
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Мова освітнього процесу</h3>
                    <p className="text-gray-700">
                      Українська
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ліцензія</h3>
                    <p className="text-gray-700">
                      Серія АЕ №285647 від 15.09.2020
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Кількість учнів</h3>
                    <p className="text-gray-700">
                      852 учні (станом на 2025/2026 н.р.)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Історія школи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Школа №226 розпочала свою діяльність у 1975 році як середня загальноосвітня школа. 
                  Протягом майже 50 років наш заклад виховав тисячі випускників, багато з яких стали 
                  видатними діячами науки, культури, освіти та інших сфер. Сьогодні школа продовжує 
                  традиції якісної освіти, впроваджуючи інноваційні методики та сучасні технології навчання.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mission and Values */}
          <TabsContent value="mission" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Місія школи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Забезпечити якісну, доступну та інклюзивну освіту, що сприяє всебічному розвитку 
                  особистості учня, формуванню його компетентностей та цінностей, необхідних для 
                  успішної самореалізації у сучасному суспільстві.
                </p>
                <h3 className="font-semibold text-lg mb-4">Візія</h3>
                <p className="text-gray-700 leading-relaxed">
                  Бути провідним закладом освіти, що формує особистість з критичним мисленням, 
                  високим рівнем компетентностей, активною громадянською позицією та готовністю 
                  до навчання впродовж життя.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Наші цінності</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg h-fit">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{value.title}</h3>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Пріоритетні напрямки діяльності</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5">1</Badge>
                    <span className="text-gray-700">
                      Впровадження компетентнісного підходу до навчання
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5">2</Badge>
                    <span className="text-gray-700">
                      Розвиток цифрової грамотності та STEM-освіти
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5">3</Badge>
                    <span className="text-gray-700">
                      Формування здорового способу життя та екологічної свідомості
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5">4</Badge>
                    <span className="text-gray-700">
                      Підтримка інклюзивного освітнього середовища
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge className="mt-0.5">5</Badge>
                    <span className="text-gray-700">
                      Виховання патріотизму та демократичних цінностей
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Management */}
          <TabsContent value="management" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Керівництво закладу
                </CardTitle>
                <CardDescription>
                  Адміністративна команда школи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {managementTeam.map((member, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Badge variant="outline" className="mb-2">{member.role}</Badge>
                          <h3 className="font-semibold text-lg">{member.name}</h3>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <p><strong>Освіта:</strong> {member.education}</p>
                        <p><strong>Досвід роботи:</strong> {member.experience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Органи громадського самоврядування</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Педагогічна рада</h3>
                    <p className="text-gray-700 text-sm">
                      Колегіальний орган управління закладом освіти, що вирішує питання навчально-виховної та методичної роботи.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Батьківський комітет</h3>
                    <p className="text-gray-700 text-sm">
                      Представляє інтереси батьків та опікунів, сприяє налагодженню взаємодії між школою та родинами.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Учнівське самоврядування</h3>
                    <p className="text-gray-700 text-sm">
                      Забезпечує участь учнів у вирішенні питань шкільного життя, розвиває лідерські якості та відповідальність.
                    </p>
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
