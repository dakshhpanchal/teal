import Header from '../components/layout/Header';
import { ClipboardList, CheckCircle, AlertCircle, Clock, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Design dashboard UI',
      project: 'TeamHub',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2023-12-10',
      assignedTo: 'You'
    },
    {
      id: 2,
      title: 'Implement authentication',
      project: 'TeamHub',
      priority: 'medium',
      status: 'todo',
      dueDate: '2023-12-15',
      assignedTo: 'John'
    },
    {
      id: 3,
      title: 'Write API documentation',
      project: 'Library App',
      priority: 'low',
      status: 'completed',
      dueDate: '2023-11-28',
      assignedTo: 'Sarah'
    }
  ];

  return (
    <div className="main">
      <Header title="Tasks" />
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">My Tasks</h2>
          <Link to="/tasks/new" className="button flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Task
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3">Task</th>
                <th className="pb-3">Project</th>
                <th className="pb-3">Priority</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Due Date</th>
                <th className="pb-3">Assigned To</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <ClipboardList className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">{task.title}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600">{task.project}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      task.priority === 'high' ? 'bg-red-100 text-red-600' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      {task.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : task.status === 'in-progress' ? (
                        <Clock className="w-4 h-4 text-yellow-500" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-gray-400" />
                      )}
                      <span className="capitalize">{task.status}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600">{task.dueDate}</td>
                  <td className="py-4 text-gray-600">{task.assignedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
