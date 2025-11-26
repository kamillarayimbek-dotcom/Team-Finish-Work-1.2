import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HomePage } from './components/home/HomePage';
import { ServicesPage } from './components/services/ServicesPage';
import { CityHallPage } from './components/city-hall/CityHallPage';
import { CommunityPage } from './components/community/CommunityPage';
import { DataReportsPage } from './components/data/DataReportsPage';
import { Footer } from './components/Footer';

type Page = 'home' | 'services' | 'city-hall' | 'community' | 'data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <main>
          {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
          {currentPage === 'services' && <ServicesPage />}
          {currentPage === 'city-hall' && <CityHallPage />}
          {currentPage === 'community' && <CommunityPage />}
          {currentPage === 'data' && <DataReportsPage />}
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}