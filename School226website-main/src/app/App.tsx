import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { EducationPage } from '@/app/pages/EducationPage';
import { ParticipantsPage } from '@/app/pages/ParticipantsPage';
import { StaffPage } from '@/app/pages/StaffPage';
import { TransparencyPage } from '@/app/pages/TransparencyPage';
import { SafetyPage } from '@/app/pages/SafetyPage';
import { AntiBullyingPage } from '@/app/pages/AntiBullyingPage';
import { NewsPage } from '@/app/pages/NewsPage';
import { ContactsPage } from '@/app/pages/ContactsPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/participants" element={<ParticipantsPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/transparency" element={<TransparencyPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/anti-bullying" element={<AntiBullyingPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
