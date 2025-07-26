import Header from '../components/layout/Header';
import { Folder, Users, GitBranch, Clock, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'TeamHub Dashboard',
      description: 'College team management system',
      progress: 75,
      members: 4,
      branches: 3,
      deadline: '2023-12-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Library App',
      description: 'Digital library management',
      progress: 30,
      members: 3,
      branches: 2,
      deadline: '2024-01-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'Alumni Portal',
      description: 'College alumni network',
      progress: 100,
      members: 5,
      branches: 4,
      deadline: '2023-11-10',
      status: 'completed'
    }
  ];

  return (
    <div className="main">
      <Header title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="card p-6 hover:transform hover:-translate-y-1 transition-transform">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                <Folder className="w-6 h-6" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {project.status === 'completed' ? 'Completed' : 'Active'}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-1">{project.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    project.progress === 100 ? 'bg-green-500' : 'bg-purple-500'
                  }`} 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{project.members}</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4" />
                <span>{project.branches}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{project.deadline}</span>
              </div>
            </div>
          </div>
        ))}
        
        <div className="card p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-purple-300 transition-colors">
          <div className="p-3 rounded-xl bg-gray-100 text-gray-500 mb-4">
            <Folder className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-gray-500 mb-2">New Project</h3>
          <button className="text-sm text-purple-500 hover:text-purple-700">
            + Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
