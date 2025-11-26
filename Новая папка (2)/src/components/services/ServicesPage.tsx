import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BusinessLicenseForm } from './BusinessLicenseForm';
import { BuildingPermitForm } from './BuildingPermitForm';
import { ComplaintForm } from './ComplaintForm';
import { EventPermitForm } from './EventPermitForm';

type FormType = 'business' | 'building' | 'complaint' | 'event' | null;

export function ServicesPage() {
  const { t } = useLanguage();
  const [selectedForm, setSelectedForm] = useState<FormType>(null);

  const forms = [
    { id: 'business' as FormType, title: t.services.forms.business.title, description: t.services.forms.business.description },
    { id: 'building' as FormType, title: t.services.forms.building.title, description: t.services.forms.building.description },
    { id: 'complaint' as FormType, title: t.services.forms.complaint.title, description: t.services.forms.complaint.description },
    { id: 'event' as FormType, title: t.services.forms.event.title, description: t.services.forms.event.description },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-blue-900 mb-4">{t.services.title}</h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        {t.services.description}
      </p>

      {!selectedForm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((form) => (
            <button
              key={form.id}
              onClick={() => setSelectedForm(form.id)}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left border border-gray-200"
            >
              <h3 className="text-gray-900 mb-2">{form.title}</h3>
              <p className="text-gray-600">{form.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedForm(null)}
            className="mb-6 text-blue-600 hover:text-blue-700"
          >
            {t.services.backButton}
          </button>
          
          {selectedForm === 'business' && <BusinessLicenseForm />}
          {selectedForm === 'building' && <BuildingPermitForm />}
          {selectedForm === 'complaint' && <ComplaintForm />}
          {selectedForm === 'event' && <EventPermitForm />}
        </div>
      )}
    </div>
  );
}