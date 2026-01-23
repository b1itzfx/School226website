import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Школа №226
            </h3>
            <p className="text-sm mb-4">
              Сучасний заклад освіти, що забезпечує якісну
              освіту та всебічний розвиток учнів відповідно до
              вимог законодавства України.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Швидкі посилання
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Про заклад освіти
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="hover:text-white transition-colors"
                >
                  Освітня діяльність
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="hover:text-white transition-colors"
                >
                  Публічна інформація
                </Link>
              </li>
              <li>
                <Link
                  to="/anti-bullying"
                  className="hover:text-white transition-colors"
                >
                  Запобігання булінгу
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Контакти
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>вул. Шкільна, 1, м. Київ, 01001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+380 (44) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>school225@edu.ua</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Школа №225. Усі права захищені.</p>
          <p className="mt-2">
            <Link
              to="/transparency"
              className="hover:text-white transition-colors"
            >
              Політика конфіденційності
            </Link>
            {" • "}
            <Link
              to="/transparency"
              className="hover:text-white transition-colors"
            >
              Захист персональних даних
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}