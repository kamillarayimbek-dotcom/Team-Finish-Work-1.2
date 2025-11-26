import { AlertTriangle, FileText, Building, CalendarCheck, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';

interface HomePageProps {
  onNavigate: (page: 'services') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  const quickLinks = [
    { icon: Building, label: t.home.quickLinks.businessLicense, color: 'bg-blue-500' },
    { icon: MessageSquare, label: t.home.quickLinks.complaint, color: 'bg-orange-500' },
    { icon: FileText, label: t.home.quickLinks.buildingPermit, color: 'bg-green-500' },
    { icon: CalendarCheck, label: t.home.quickLinks.eventPermit, color: 'bg-purple-500' },
  ];

  const newsImages = [
    'https://images.unsplash.com/photo-1542800952-e5471ed41326?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1761503390713-a1fd8b8bb6c5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1706806594967-44e2b31f01d0?w=800&h=600&fit=crop',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-blue-900 mb-4">{t.home.title}</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          {t.home.description}
        </p>
      </div>

      {/* Emergency Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-amber-900">
              <strong>{t.home.alert.title}</strong> {t.home.alert.message}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-12">
        <h2 className="text-gray-900 mb-6">{t.home.quickLinks.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                onClick={() => onNavigate('services')}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left border border-gray-200"
              >
                <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-900">{link.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* News Section */}
      <div>
        <h2 className="text-gray-900 mb-6">{t.home.news.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.home.news.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48">
                <ImageWithFallback 
                  src={newsImages[index]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className="text-gray-900">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}