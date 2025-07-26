import Header from '../components/layout/Header';
import { Bell, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'completed',
      title: 'Task completed',
      message: 'UI Redesign task marked as complete by John',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'upcoming',
      title: 'Meeting reminder',
      message: 'Project kickoff meeting in 30 minutes',
      time: '30 minutes ago',
      read: true
    },
    {
      id: 3,
      type: 'alert',
      title: 'Deadline approaching',
      message: 'API integration task due tomorrow',
      time: '1 day ago',
      read: false
    }
  ];

  return (
    <div className="main">
      <Header title="Notifications" />
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Notifications</h2>
          <button className="text-sm text-purple-500 hover:text-purple-700">
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-4 rounded-xl transition-all ${notification.read ? 'bg-white' : 'bg-purple-50'} shadow-sm hover:shadow-md`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${notification.type === 'completed' ? 'bg-green-100 text-green-600' : 
                               notification.type === 'upcoming' ? 'bg-yellow-100 text-yellow-600' : 
                               'bg-red-100 text-red-600'}`}>
                  {notification.type === 'completed' ? <CheckCircle className="w-5 h-5" /> : 
                   notification.type === 'upcoming' ? <Clock className="w-5 h-5" /> : 
                   <AlertCircle className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{notification.title}</h3>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
