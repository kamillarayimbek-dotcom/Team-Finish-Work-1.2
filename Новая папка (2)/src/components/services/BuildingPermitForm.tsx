import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function BuildingPermitForm() {
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
        <h2 className="text-green-900 mb-2">{t.services.forms.building.successTitle}</h2>
        <p className="text-green-700">{t.services.forms.building.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-3xl">
      <h2 className="text-gray-900 mb-6">{t.services.forms.building.title}</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.building.fields.fullName} {t.services.required}</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.building.fields.email} {t.services.required}</label>
            <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.building.fields.phone} {t.services.required}</label>
            <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.building.fields.propertyAddress} {t.services.required}</label>
          <textarea required rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.building.fields.constructionType} {t.services.required}</label>
          <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">{t.services.forms.building.types.select}</option>
            <option value="new">{t.services.forms.building.types.new}</option>
            <option value="renovation">{t.services.forms.building.types.renovation}</option>
            <option value="addition">{t.services.forms.building.types.addition}</option>
            <option value="demolition">{t.services.forms.building.types.demolition}</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.building.fields.startDate} {t.services.required}</label>
            <input type="date" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t.services.forms.building.fields.endDate} {t.services.required}</label>
            <input type="date" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
          <input type="checkbox" required id="safety" className="mt-1" />
          <label htmlFor="safety" className="text-gray-700">
            {t.services.forms.building.fields.safetyConfirmation} {t.services.required}
          </label>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">{t.services.forms.building.fields.designPlan}</label>
          <input type="file" accept=".pdf,.jpg,.png" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <p className="text-sm text-gray-500 mt-1">{t.services.forms.building.planHelp}</p>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {t.services.forms.building.submitButton}
      </button>
    </form>
  );
}