import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/app/components/ui/sheet';

const navigation = [
  { name: 'Головна', href: '/' },
  { name: 'Про заклад', href: '/about' },
  { name: 'Освітня діяльність', href: '/education' },
  { name: 'Учасникам', href: '/participants' },
  { name: 'Кадри', href: '/staff' },
  { name: 'Прозорість', href: '/transparency' },
  { name: 'Безпека', href: '/safety' },
  { name: 'Антибулінг', href: '/anti-bullying' },
  { name: 'Новини', href: '/news' },
  { name: 'Контакти', href: '/contacts' },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Школа №225</h1>
              <p className="text-xs text-gray-500">м. Київ</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
