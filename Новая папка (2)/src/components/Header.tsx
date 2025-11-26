import { Building2, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Page = 'home' | 'services' | 'city-hall' | 'community' | 'data';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: t.header.nav.home },
    { id: 'services', label: t.header.nav.services },
    { id: 'city-hall', label: t.header.nav.cityHall },
    { id: 'community', label: t.header.nav.community },
    { id: 'data', label: t.header.nav.data },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-blue-900">{t.header.title}</h1>
              <p className="text-sm text-gray-600">{t.header.subtitle}</p>
            </div>
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-gray-600" />
            <button
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'en' ? 'Русский' : 'English'}
            </button>
          </div>
        </div>
        
        <nav className="flex gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                currentPage === item.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}