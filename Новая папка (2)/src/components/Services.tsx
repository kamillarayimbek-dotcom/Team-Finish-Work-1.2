import { useState } from 'react';
import { BusinessLicenseForm } from './forms/BusinessLicenseForm';
import { BuildingPermitForm } from './forms/BuildingPermitForm';
import { ComplaintForm } from './forms/ComplaintForm';
import { EventPermitForm } from './forms/EventPermitForm';

export function Services() {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const forms = [
    { id: 'business', label: 'Business License Application', color: 'bg-blue-600' },
    { id: 'building', label: 'Building Permit Request', color: 'bg-green-600' },
    { id: 'complaint', label: 'Public Complaint Form', color: 'bg-purple-600' },
    { id: 'event', label: 'Event Permit Application', color: 'bg-orange-600' }
  ];

  const renderForm = () => {
    switch (activeForm) {
      case 'business':
        return <BusinessLicenseForm onClose={() => setActiveForm(null)} />;
      case 'building':
        return <BuildingPermitForm onClose={() => setActiveForm(null)} />;
      case 'complaint':
        return <ComplaintForm onClose={() => setActiveForm(null)} />;
      case 'event':
        return <EventPermitForm onClose={() => setActiveForm(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl p-8 md:p-12 mb-8 shadow-sm">
        <h1 className="mb-4">Online Services</h1>
        <p className="text-gray-600 max-w-3xl">
          Use the forms below to submit applications, complaints, or requests. All submissions are 
          automatically saved and reviewed by city officials.
        </p>
      </div>

      {activeForm ? (
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {renderForm()}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((form) => (
            <button
              key={form.id}
              onClick={() => setActiveForm(form.id)}
              className={`${form.color} text-white p-8 rounded-xl hover:opacity-90 transition-opacity text-left shadow-lg`}
            >
              <h3 className="text-white mb-2">{form.label}</h3>
              <p className="text-white/80">Click to open form</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
