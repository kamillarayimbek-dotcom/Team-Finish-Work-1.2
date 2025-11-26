import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function BusinessLicenseForm() {
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
        <h2 className="text-green-900 mb-2">{t.services.forms.business.successTitle}</h2>
        <p className="text-green-700">{t.services.forms.business.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-3xl">
      <h2 className="text-gray-900 mb-6">{t.services.forms.business.title}</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.fullName} {t.services.required}</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.companyName} {t.services.required}</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.email} {t.services.required}</label>
            <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.phone} {t.services.required}</label>
            <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.businessType} {t.services.required}</label>
          <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">{t.services.forms.business.types.select}</option>
            <option value="retail">{t.services.forms.business.types.retail}</option>
            <option value="restaurant">{t.services.forms.business.types.restaurant}</option>
            <option value="service">{t.services.forms.business.types.service}</option>
            <option value="manufacturing">{t.services.forms.business.types.manufacturing}</option>
            <option value="other">{t.services.forms.business.types.other}</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.address} {t.services.required}</label>
          <textarea required rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.category} {t.services.required}</label>
          <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">{t.services.forms.business.categories.select}</option>
            <option value="general">{t.services.forms.business.categories.general}</option>
            <option value="food">{t.services.forms.business.categories.food}</option>
            <option value="retail">{t.services.forms.business.categories.retail}</option>
            <option value="professional">{t.services.forms.business.categories.professional}</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.documents}</label>
          <input type="file" multiple className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <p className="text-sm text-gray-500 mt-1">{t.services.forms.business.documentsHelp}</p>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.business.fields.date} {t.services.required}</label>
          <input type="date" required defaultValue="2025-11-26" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {t.services.forms.business.submitButton}
      </button>
    </form>
  );
}