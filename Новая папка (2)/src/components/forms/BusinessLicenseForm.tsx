import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface BusinessLicenseFormProps {
  onClose: () => void;
}

export function BusinessLicenseForm({ onClose }: BusinessLicenseFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    contactInfo: '',
    businessType: '',
    address: '',
    licenseCategory: '',
    documents: '',
    dateOfApplication: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-600" size={32} />
        </div>
        <h2 className="mb-2">Application Submitted!</h2>
        <p className="text-gray-600 mb-6">Your business license application has been received and will be reviewed.</p>
        <button onClick={onClose} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Close
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2>Business License Application</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-gray-700">Full Name *</label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Company Name *</label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Contact Info *</label>
            <input
              type="email"
              required
              value={formData.contactInfo}
              onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Business Type *</label>
            <select
              required
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select type</option>
              <option value="retail">Retail</option>
              <option value="restaurant">Restaurant</option>
              <option value="service">Service</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Address *</label>
            <input
              type="text"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">License Category *</label>
            <select
              required
              value={formData.licenseCategory}
              onChange={(e) => setFormData({ ...formData, licenseCategory: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select category</option>
              <option value="general">General Business</option>
              <option value="food">Food Service</option>
              <option value="health">Health & Wellness</option>
              <option value="professional">Professional Services</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700">Supporting Documents</label>
            <textarea
              value={formData.documents}
              onChange={(e) => setFormData({ ...formData, documents: e.target.value })}
              rows={3}
              placeholder="List any supporting documents you will provide"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Date of Application</label>
            <input
              type="date"
              value={formData.dateOfApplication}
              onChange={(e) => setFormData({ ...formData, dateOfApplication: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
