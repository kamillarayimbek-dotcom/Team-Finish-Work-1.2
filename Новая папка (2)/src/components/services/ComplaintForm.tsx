import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function ComplaintForm() {
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
        <h2 className="text-green-900 mb-2">{t.services.forms.complaint.successTitle}</h2>
        <p className="text-green-700">{t.services.forms.complaint.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-3xl">
      <h2 className="text-gray-900 mb-6">{t.services.forms.complaint.title}</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.complaint.fields.name}</label>
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <p className="text-sm text-gray-500 mt-1">{t.services.forms.complaint.fields.nameHelp}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.complaint.fields.email}</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.complaint.fields.phone}</label>
            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.complaint.fields.category} {t.services.required}</label>
          <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">{t.services.forms.complaint.categories.select}</option>
            <option value="roads">{t.services.forms.complaint.categories.roads}</option>
            <option value="noise">{t.services.forms.complaint.categories.noise}</option>
            <option value="sanitation">{t.services.forms.complaint.categories.sanitation}</option>
            <option value="parks">{t.services.forms.complaint.categories.parks}</option>
            <option value="utilities">{t.services.forms.complaint.categories.utilities}</option>
            <option value="other">{t.services.forms.complaint.categories.other}</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.complaint.fields.description} {t.services.required}</label>
          <textarea required rows={5} placeholder={t.services.forms.complaint.fields.descriptionPlaceholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.complaint.fields.location} {t.services.required}</label>
          <input type="text" required placeholder={t.services.forms.complaint.fields.locationPlaceholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.complaint.fields.date} {t.services.required}</label>
          <input type="date" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.complaint.fields.urgency} {t.services.required}</label>
          <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">{t.services.forms.complaint.urgencyLevels.select}</option>
            <option value="low">{t.services.forms.complaint.urgencyLevels.low}</option>
            <option value="medium">{t.services.forms.complaint.urgencyLevels.medium}</option>
            <option value="high">{t.services.forms.complaint.urgencyLevels.high}</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {t.services.forms.complaint.submitButton}
      </button>
    </form>
  );
}