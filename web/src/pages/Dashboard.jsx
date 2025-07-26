import Header from '../components/layout/Header';
import { CheckCircle, ClipboardList, MessageSquare} from 'lucide-react';

export default function Dashboard() {
  const stats = {
    totalTasks: 120,
    completedTasks: 85,
    ongoingProjects: 5,
    upcomingMeetings: 3,
    activeMembers: 12,
  };

  return (
    <div className="main">
      <Header title="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Tasks Overview</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold text-purple-600">{stats.completedTasks}/{stats.totalTasks}</p>
              <p className="text-gray-500">Completed Tasks</p>
            </div>
            <div className="w-24 h-24">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  className="circle"
                  strokeDasharray={`${(stats.completedTasks / stats.totalTasks) * 100}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Active Projects</h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">{stats.ongoingProjects}</p>
          <p className="text-gray-500">Ongoing Projects</p>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Team Members</h3>
          <p className="text-3xl font-bold text-green-600 mb-2">{stats.activeMembers}</p>
          <p className="text-gray-500">Active Members</p>
        </div>

        {/* Recent Activity */}
        <div className="card p-6 md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { id: 1, action: 'completed', task: 'UI Redesign', by: 'John', time: '2 hours ago' },
              { id: 2, action: 'assigned', task: 'API Integration', by: 'Sarah', time: '4 hours ago' },
              { id: 3, action: 'commented', task: 'Dashboard Layout', by: 'Mike', time: '1 day ago' }
            ].map(activity => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                  {activity.action === 'completed' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : activity.action === 'assigned' ? (
                    <ClipboardList className="w-5 h-5" />
                  ) : (
                    <MessageSquare className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-medium">{activity.by}</span> {activity.action} {activity.task}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Meetings</h3>
          <div className="space-y-4">
            {[
              { id: 1, title: 'Project Kickoff', time: 'Today, 3:00 PM', participants: 5 },
              { id: 2, title: 'Sprint Planning', time: 'Tomorrow, 10:00 AM', participants: 4 }
            ].map(meeting => (
              <div key={meeting.id} className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800">{meeting.title}</p>
                <p className="text-sm text-gray-500 mb-2">{meeting.time}</p>
                <p className="text-xs text-gray-400">{meeting.participants} participants</p>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-purple-500 hover:text-purple-700">
            View All Meetings
          </button>
        </div>
      </div>
    </div>
  );
}
