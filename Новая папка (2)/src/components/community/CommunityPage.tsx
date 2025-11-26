import { useState } from 'react';
import { Heart, Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';

export function CommunityPage() {
  const { t } = useLanguage();
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  const eventImages = [
    'https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
  ];

  const photos = [
    { 
      title: t.community.gallery.photos[0], 
      url: 'https://images.unsplash.com/photo-1542800952-e5471ed41326?w=800&h=600&fit=crop' 
    },
    { 
      title: t.community.gallery.photos[1], 
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop' 
    },
    { 
      title: t.community.gallery.photos[2], 
      url: 'https://images.unsplash.com/photo-1589470288084-ecad61835772?w=800&h=600&fit=crop' 
    },
  ];

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    setTimeout(() => setVolunteerSubmitted(false), 3000);
  };

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSurveySubmitted(true);
    setTimeout(() => setSurveySubmitted(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-blue-900 mb-8">{t.community.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Volunteer Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            {t.community.volunteer.title}
          </h2>
          
          {volunteerSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-green-700">{t.community.volunteer.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">{t.community.volunteer.fields.name} *</label>
                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.community.volunteer.fields.contact} *</label>
                <input type="text" required placeholder={t.community.volunteer.fields.contactPlaceholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.community.volunteer.fields.area} *</label>
                <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">{t.community.volunteer.areas.select}</option>
                  <option value="environment">{t.community.volunteer.areas.environment}</option>
                  <option value="education">{t.community.volunteer.areas.education}</option>
                  <option value="elderly">{t.community.volunteer.areas.elderly}</option>
                  <option value="events">{t.community.volunteer.areas.events}</option>
                  <option value="other">{t.community.volunteer.areas.other}</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t.community.volunteer.fields.availability} *</label>
                <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">{t.community.volunteer.availabilities.select}</option>
                  <option value="weekdays">{t.community.volunteer.availabilities.weekdays}</option>
                  <option value="weekends">{t.community.volunteer.availabilities.weekends}</option>
                  <option value="flexible">{t.community.volunteer.availabilities.flexible}</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                {t.community.volunteer.submitButton}
              </button>
            </form>
          )}
        </div>

        {/* Events Calendar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            {t.community.events.title}
          </h2>
          <div className="space-y-4">
            {t.community.events.items.map((event, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r-lg hover:bg-purple-100 transition-colors cursor-pointer">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={eventImages[index]}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-purple-600">{event.date}</div>
                    <div className="text-gray-900">{event.title}</div>
                    <div className="text-sm text-gray-600">{event.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Survey */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-green-600" />
          {t.community.survey.title}
        </h2>
        
        {surveySubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <p className="text-green-700">{t.community.survey.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSurveySubmit} className="max-w-2xl">
            <label className="block text-gray-700 mb-2">{t.community.survey.question}</label>
            <textarea
              required
              rows={4}
              placeholder={t.community.survey.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              {t.community.survey.submitButton}
            </button>
          </form>
        )}
      </div>

      {/* Photo Gallery */}
      <div>
        <h2 className="text-gray-900 mb-4">{t.community.gallery.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-900">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}