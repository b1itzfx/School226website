import { Shield, HeartPulse, Users2, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';

export function SafetyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Безпека та інклюзія</h1>
          <p className="text-xl text-red-100">
            Турбота про безпеку та комфорт кожного учня
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Важливо!</AlertTitle>
          <AlertDescription>
            У разі виникнення надзвичайної ситуації дзвоніть: 101 (пожежна), 102 (поліція), 103 (швидка допомога)
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Охорона праці та техніка безпеки
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Безпека учасників освітнього процесу є першочерговим пріоритетом нашого закладу.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Контрольно-перепускна система</h4>
                  <p className="text-sm text-gray-600">
                    Доступ до території школи здійснюється через пункт охорони
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Пожежна безпека</h4>
                  <p className="text-sm text-gray-600">
                    Регулярні інструктажі, навчальні тривоги, справна пожежна сигналізація
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <HeartPulse className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Медичний кабінет</h4>
                  <p className="text-sm text-gray-600">
                    Кваліфікований медичний працівник, надання першої допомоги
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Цивільний захист
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Алгоритм дій під час повітряної тривоги</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>При отриманні сигналу повітряної тривоги припинити навчальний процес</li>
                <li>Організовано перейти до укриття (підвальне приміщення школи)</li>
                <li>Залишатися в укритті до отримання сигналу «Відбій»</li>
                <li>Слідувати інструкціям педагогів та адміністрації</li>
                <li>Зберігати спокій та допомагати один одному</li>
              </ol>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Місце розташування укриття:</strong> підвал головного корпусу школи, 
                вхід з лівого боку будівлі. Укриття обладнане всім необхідним для перебування 
                до 200 осіб протягом тривалого часу.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users2 className="h-6 w-6" />
              Інклюзивне навчання
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Наша школа створює умови для навчання дітей з особливими освітніми потребами, 
              забезпечуючи рівний доступ до якісної освіти.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Інклюзивно-ресурсний центр</h4>
                <p className="text-sm text-gray-700">
                  Надає психолого-педагогічну допомогу дітям з особливими освітніми потребами, 
                  проводить комплексну оцінку розвитку дитини та розробляє індивідуальні програми.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Асистенти вчителя</h4>
                <p className="text-sm text-gray-700">
                  У класах з інклюзивним навчанням працюють кваліфіковані асистенти, 
                  які надають додаткову підтримку учням.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Психологічна служба</h4>
                <p className="text-sm text-gray-700">
                  Команда фахівців: практичний психолог, соціальний педагог, логопед.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Доступність приміщень</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Школа поступово впроваджує заходи з покращення доступності для осіб з інвалідністю:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Пандус при вході до будівлі</li>
              <li>• Розширені дверні прорізи</li>
              <li>• Тактильна плитка на сходах</li>
              <li>• Санітарний вузол для осіб з інвалідністю (перший поверх)</li>
              <li>• Навчальні класи на першому поверсі для маломобільних учнів</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
