import { Play, Calendar, DollarSign, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function CityHallPage() {
  const { t } = useLanguage();

  const budget = [
    { category: t.cityHall.budget.categories.education, amount: 500000, color: 'bg-blue-500' },
    { category: t.cityHall.budget.categories.infrastructure, amount: 350000, color: 'bg-green-500' },
    { category: t.cityHall.budget.categories.healthcare, amount: 200000, color: 'bg-red-500' },
    { category: t.cityHall.budget.categories.parks, amount: 100000, color: 'bg-yellow-500' },
  ];

  const contacts = [
    { department: t.cityHall.contacts.departments.publicWorks, email: 'works@sunrisecity.gov' },
    { department: t.cityHall.contacts.departments.health, email: 'health@sunrisecity.gov' },
    { department: t.cityHall.contacts.departments.council, email: 'council@sunrisecity.gov' },
  ];

  const maxBudget = Math.max(...budget.map(b => b.amount));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-blue-900 mb-8">{t.cityHall.title}</h1>

      {/* Mayor's Video */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-gray-900 mb-4">{t.cityHall.mayorVideo.title}</h2>
        <div className="aspect-video rounded-lg overflow-hidden relative group cursor-pointer">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=675&fit=crop"
            alt="Mayor John Smith"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-colors shadow-lg">
              <Play className="w-10 h-10 text-blue-600 ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <p className="text-lg">
              {t.cityHall.mayorVideo.message}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Council Schedule */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            {t.cityHall.schedule.title}
          </h2>
          <div className="space-y-4">
            {t.cityHall.schedule.items.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="text-sm text-gray-500">{item.date}</div>
                <div className="text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-600" />
            {t.cityHall.budget.title}
          </h2>
          <div className="space-y-4">
            {budget.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{item.category}</span>
                  <span className="text-gray-900">${item.amount.toLocaleString()}</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color}`}
                    style={{ width: `${(item.amount / maxBudget) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between">
              <span className="text-gray-900">{t.cityHall.budget.total}</span>
              <span className="text-gray-900">${budget.reduce((sum, b) => sum + b.amount, 0).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Department Contacts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-gray-900 mb-4 flex items-center gap-2">
          <Mail className="w-6 h-6 text-purple-600" />
          {t.cityHall.contacts.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contacts.map((contact, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="text-gray-900 mb-2">{contact.department}</div>
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-700 text-sm">
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}