import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface BuildingPermitFormProps {
  onClose: () => void;
}

export function BuildingPermitForm({ onClose }: BuildingPermitFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    propertyAddress: '',
    constructionType: '',
    startDate: '',
    endDate: '',
    safetyConfirmation: false,
    designPlan: ''
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
        <h2 className="mb-2">Request Submitted!</h2>
        <p className="text-gray-600 mb-6">Your building permit request has been received and will be reviewed.</p>
        <button onClick={onClose} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Close
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2>Building Permit Request</h2>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Contact Info *</label>
            <input
              type="email"
              required
              value={formData.contactInfo}
              onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700">Property Address *</label>
            <input
              type="text"
              required
              value={formData.propertyAddress}
              onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700">Type of Construction *</label>
            <select
              required
              value={formData.constructionType}
              onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select type</option>
              <option value="new">New Construction</option>
              <option value="renovation">Renovation</option>
              <option value="addition">Addition</option>
              <option value="demolition">Demolition</option>
              <option value="repair">Repair</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Start Date *</label>
            <input
              type="date"
              required
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">End Date *</label>
            <input
              type="date"
              required
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700">Design Plan</label>
            <textarea
              value={formData.designPlan}
              onChange={(e) => setFormData({ ...formData, designPlan: e.target.value })}
              rows={3}
              placeholder="Describe your design plan or attach documents"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                checked={formData.safetyConfirmation}
                onChange={(e) => setFormData({ ...formData, safetyConfirmation: e.target.checked })}
                className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
              />
              <span className="text-gray-700">I confirm that all safety regulations will be followed *</span>
            </label>
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
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}
