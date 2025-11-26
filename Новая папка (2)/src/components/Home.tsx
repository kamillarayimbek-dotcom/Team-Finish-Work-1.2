import { AlertTriangle, FileText, MessageSquare, Building, Calendar } from 'lucide-react';

export function Home() {
  const quickLinks = [
    { icon: FileText, label: 'Apply for Business License', color: 'bg-blue-600' },
    { icon: MessageSquare, label: 'Submit a Complaint', color: 'bg-green-600' },
    { icon: Building, label: 'Request Building Permit', color: 'bg-purple-600' },
    { icon: Calendar, label: 'Apply for Event Permit', color: 'bg-orange-600' }
  ];

  const news = [
    { title: 'City park renovation completed!', date: '15/11/2025' },
    { title: 'Community festival scheduled for 05/12/2025.', date: '20/11/2025' },
    { title: 'New volunteer opportunities available this month.', date: '22/11/2025' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-8">
        <h1 className="text-white mb-4">Welcome to Sunrise City Digital Office</h1>
        <p className="text-blue-100 max-w-2xl">
          Welcome to Sunrise City's official digital office. Here you can find city services, 
          submit requests, and stay updated on news and alerts.
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
        <div className="flex items-start">
          <AlertTriangle className="text-yellow-600 mr-3 flex-shrink-0" size={24} />
          <div>
            <p className="text-yellow-800">
              <strong>⚠️ Emergency Alert:</strong> City water maintenance scheduled on 28/11/2025 from 10:00 to 16:00.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <section className="mb-12">
        <h2 className="mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                className={`${link.color} text-white p-6 rounded-xl hover:opacity-90 transition-opacity text-left shadow-lg`}
              >
                <Icon className="mb-3" size={32} />
                <p>{link.label}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* News Section */}
      <section>
        <h2 className="mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-600" size={24} />
              </div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
