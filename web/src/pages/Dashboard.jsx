import Header from '../components/layout/Header';
import { CheckCircle, ClipboardList, MessageSquare } from 'lucide-react';

const styles = {
  card: {
    background: 'linear-gradient(145deg, #f0f0f5, #ffffff)',
    boxShadow: '6px 6px 20px #d1d1d6, -6px -6px 20px #ffffff',
    borderRadius: '20px',
    padding: '24px',
    transition: 'transform 0.2s ease'
  },
  statValue: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#8b5cf6',
    marginBottom: '4px'
  },
  statLabel: {
    color: '#6b7280',
    fontSize: '0.875rem'
  }
};

export default function Dashboard() {
  const stats = {
    totalTasks: 120,
    completedTasks: 85,
    ongoingProjects: 5,
    activeMembers: 12,
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Header title="Dashboard" />
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginTop: '24px'
      }}>
        {/* Stats Cards */}
        <div style={styles.card}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>
            Tasks Overview
          </h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={styles.statValue}>{stats.completedTasks}/{stats.totalTasks}</p>
              <p style={styles.statLabel}>Completed Tasks</p>
            </div>
            <div style={{ width: '96px', height: '96px' }}>
              <svg viewBox="0 0 36 36" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', maxHeight: '100%' }}>
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  strokeDasharray={`${(stats.completedTasks / stats.totalTasks) * 100}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  style={{ animation: 'progress 1s ease-out forwards' }}
                />
              </svg>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>
            Active Projects
          </h3>
          <p style={{ ...styles.statValue, color: '#3b82f6' }}>{stats.ongoingProjects}</p>
          <p style={styles.statLabel}>Ongoing Projects</p>
        </div>

        <div style={styles.card}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>
            Team Members
          </h3>
          <p style={{ ...styles.statValue, color: '#10b981' }}>{stats.activeMembers}</p>
          <p style={styles.statLabel}>Active Members</p>
        </div>
      </div>
    </div>
  );
}
