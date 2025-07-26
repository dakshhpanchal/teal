import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

export default function Dashboard() {
  const stats = {
    totalTasks: 120,
    completedTasks: 85,
    ongoingProjects: 5,
    upcomingMeetings: 3,
    activeMembers: 12,
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col p-8">
        <Header />
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="card col-span-2">
            <h2 className="text-xl font-bold mb-4">Team Activity Overview</h2>
            <div className="flex justify-around text-center">
              <div>
                <p className="text-3xl font-semibold text-purple-500">120</p>
                <p className="text-gray-500 text-sm">Total Tasks</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-green-500">85</p>
                <p className="text-gray-500 text-sm">Completed</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-pink-500">5</p>
                <p className="text-gray-500 text-sm">Ongoing Projects</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-yellow-500">3</p>
                <p className="text-gray-500 text-sm">Meetings</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-blue-500">12</p>
                <p className="text-gray-500 text-sm">Active Members</p>
              </div>
            </div>
          </div>

          <div className="card flex flex-col justify-between">
            <h2 className="text-lg font-bold mb-2">Next Meeting</h2>
            <p className="text-gray-600">Project Kickoff</p>
            <p className="text-sm text-gray-400">Today at 3:00 PM</p>
            <button className="button mt-4">Join Meeting</button>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Tasks Progress</h3>
            <p className="text-gray-500 mb-2">85 / 120 Completed</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-green-400 h-4 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Project Completion</h3>
            <p className="text-gray-500 mb-2">3 out of 5 Projects On Track</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className="bg-purple-400 h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✔️ Task "UI Redesign" marked complete</li>
              <li>🕒 Meeting scheduled with Client X</li>
              <li>📝 New Task assigned: "API Integration"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
