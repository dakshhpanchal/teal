import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Teal</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
	<li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

