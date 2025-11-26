import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function EventPermitForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h2 className="text-green-900 mb-2">{t.services.forms.event.successTitle}</h2>
        <p className="text-green-700">{t.services.forms.event.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-3xl">
      <h2 className="text-gray-900 mb-6">{t.services.forms.event.title}</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.organizerName} {t.services.required}</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.email} {t.services.required}</label>
            <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.phone} {t.services.required}</label>
            <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.eventTitle} {t.services.required}</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.eventType} {t.services.required}</label>
          <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">{t.services.forms.event.types.select}</option>
            <option value="festival">{t.services.forms.event.types.festival}</option>
            <option value="concert">{t.services.forms.event.types.concert}</option>
            <option value="parade">{t.services.forms.event.types.parade}</option>
            <option value="sports">{t.services.forms.event.types.sports}</option>
            <option value="fair">{t.services.forms.event.types.fair}</option>
            <option value="other">{t.services.forms.event.types.other}</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.location} {t.services.required}</label>
          <input type="text" required placeholder={t.services.forms.event.fields.locationPlaceholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.date} {t.services.required}</label>
            <input type="date" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.time} {t.services.required}</label>
            <input type="time" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.participants} {t.services.required}</label>
          <input type="number" required min="1" placeholder={t.services.forms.event.fields.participantsPlaceholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.event.fields.safetyPlan} {t.services.required}</label>
          <textarea required rows={4} placeholder={t.services.forms.event.fields.safetyPlanPlaceholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {t.services.forms.event.submitButton}
      </button>
    </form>
  );
}