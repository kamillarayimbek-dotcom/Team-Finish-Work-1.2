import { FileText, BarChart3, PieChart as PieChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useLanguage } from '../../contexts/LanguageContext';

export function DataReportsPage() {
  const { t } = useLanguage();

  const businessData = [
    { id: 1, name: 'Tech Solutions LLC', type: 'Service', date: '15/11/2025', status: 'Approved' },
    { id: 2, name: 'Main Street Cafe', type: 'Restaurant', date: '18/11/2025', status: 'Pending' },
    { id: 3, name: 'Green Garden Shop', type: 'Retail', date: '20/11/2025', status: 'Approved' },
    { id: 4, name: 'City Fitness Center', type: 'Service', date: '22/11/2025', status: 'Pending' },
  ];

  const buildingPermits = [
    { id: 1, owner: 'John Smith', type: 'Renovation', address: '123 Oak St', status: 'Approved' },
    { id: 2, owner: 'Sarah Johnson', type: 'New Construction', address: '456 Pine Ave', status: 'Pending' },
    { id: 3, owner: 'Mike Brown', type: 'Addition', address: '789 Maple Dr', status: 'Rejected' },
  ];

  const complaints = [
    { id: 1, category: 'Roads', location: 'Main St', urgency: 'High', status: 'Pending' },
    { id: 2, category: 'Noise', location: 'Park Ave', urgency: 'Medium', status: 'Approved' },
    { id: 3, category: 'Sanitation', location: 'Oak St', urgency: 'High', status: 'Approved' },
  ];

  const eventApplications = [
    { id: 1, event: 'Winter Festival', organizer: 'City Events Team', date: '05/12/2025', status: 'Approved' },
    { id: 2, event: 'Charity Run', organizer: 'Local Sports Club', date: '10/12/2025', status: 'Pending' },
  ];

  const businessTypeData = [
    { name: 'Retail', value: 35 },
    { name: 'Restaurant', value: 25 },
    { name: 'Service', value: 30 },
    { name: 'Other', value: 10 },
  ];

  const complaintData = [
    { category: 'Roads', count: 15 },
    { category: 'Noise', count: 8 },
    { category: 'Sanitation', count: 12 },
    { category: 'Parks', count: 5 },
    { category: 'Utilities', count: 10 },
  ];

  const eventData = [
    { month: 'Sep', count: 3 },
    { month: 'Oct', count: 5 },
    { month: 'Nov', count: 7 },
    { month: 'Dec', count: 9 },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  const getStatusColor = (status: string) => {
    const statusMap: Record<string, string> = {
      'Approved': 'text-green-700 bg-green-50',
      'Pending': 'text-yellow-700 bg-yellow-50',
      'Rejected': 'text-red-700 bg-red-50',
    };
    return statusMap[status] || 'text-gray-700 bg-gray-50';
  };

  const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
      'Approved': t.data.tables.statuses.approved,
      'Pending': t.data.tables.statuses.pending,
      'Rejected': t.data.tables.statuses.rejected,
    };
    return statusMap[status] || status;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-blue-900 mb-4">{t.data.title}</h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        {t.data.description}
      </p>

      {/* Data Tables */}
      <div className="space-y-8 mb-12">
        {/* Business License Submissions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            {t.data.tables.businessLicense}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.companyName}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.type}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.date}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.status}</th>
                </tr>
              </thead>
              <tbody>
                {businessData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{item.name}</td>
                    <td className="py-3 px-4 text-gray-600">{item.type}</td>
                    <td className="py-3 px-4 text-gray-600">{item.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Building Permit Requests */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-600" />
            {t.data.tables.buildingPermit}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.owner}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.type}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.address}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.status}</th>
                </tr>
              </thead>
              <tbody>
                {buildingPermits.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{item.owner}</td>
                    <td className="py-3 px-4 text-gray-600">{item.type}</td>
                    <td className="py-3 px-4 text-gray-600">{item.address}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Public Complaints */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" />
            {t.data.tables.complaints}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.category}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.location}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.urgency}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.status}</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{item.category}</td>
                    <td className="py-3 px-4 text-gray-600">{item.location}</td>
                    <td className="py-3 px-4 text-gray-600">{item.urgency}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Event Applications */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-600" />
            {t.data.tables.eventApplications}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.eventName}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.organizer}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.date}</th>
                  <th className="text-left py-3 px-4 text-gray-700">{t.data.tables.headers.status}</th>
                </tr>
              </thead>
              <tbody>
                {eventApplications.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{item.event}</td>
                    <td className="py-3 px-4 text-gray-600">{item.organizer}</td>
                    <td className="py-3 px-4 text-gray-600">{item.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-8">
        <h2 className="text-gray-900">{t.data.charts.title}</h2>

        {/* Pie Chart - Business Types */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <PieChartIcon className="w-5 h-5 text-blue-600" />
            {t.data.charts.businessTypes}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={businessTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {businessTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Complaints by Category */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-orange-600" />
            {t.data.charts.complaintsByCategory}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={complaintData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#F59E0B" name={t.data.charts.complaintsLabel} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Event Requests per Month */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            {t.data.charts.eventRequests}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={eventData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8B5CF6" name={t.data.charts.eventsLabel} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}