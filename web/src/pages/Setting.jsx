import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Calendar, Save, Camera, Github, Linkedin, Globe } from 'lucide-react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px'
  },
  header: {
    marginBottom: '32px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  },
};

export default function Settings() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rollNumber: '',
    branch: '',
    year: '',
    position: 'Member',
    bio: '',
    skills: '',
    socialLinks: {
      github: '',
      linkedin: '',
      portfolio: ''
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/auth/user', {
            withCredentials: true
          });
          
          if (response.status !== 200) {
            throw new Error('Failed to fetch user data');
          }

          const userData = response.data;
          setUser(userData);
          
          setFormData({
            name: userData.name || '',
            email: userData.email || '',
            phone: userData.phone || '',
            rollNumber: userData.rollNumber || '',
            branch: userData.branch || '',
            year: userData.year || '',
            position: userData.position || 'Member',
            bio: userData.bio || '',
            skills: Array.isArray(userData.skills) ? 
                   userData.skills.join(', ') : 
                   userData.skills || '',
            socialLinks: {
              github: userData.socialLinks?.github || userData.html_url || '',
              linkedin: userData.socialLinks?.linkedin || '',
              portfolio: userData.socialLinks?.portfolio || ''
            }
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
          if (error.response?.status === 401) {
            navigate('/login');
          } else {
            // Show user-friendly error message
            alert('Failed to load user data. Please try again later.');
          }
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('social_')) {
      const socialKey = name.replace('social_', '');
      setFormData(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [socialKey]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await axios.put('http://localhost:5000/auth/profile', formData);
      setUser(response.data);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(error.response?.data?.error || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh' 
      }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '4px solid #e5e7eb', 
          borderTopColor: '#8b5cf6', 
          borderRadius: '50%', 
          animation: 'spin 1s linear infinite'
        }}></div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Profile Settings</h1>
        <p style={styles.subtitle}>Manage your team profile and preferences</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '24px' }}>
        {/* Profile Picture Section */}
        <div style={styles.card}>
          <div style={styles.avatarContainer}>
            <img 
              src={user?.avatar_url || 'https://via.placeholder.com/120'} 
              alt="Profile" 
              style={styles.avatar}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/120';
              }}
            />
            <button style={styles.avatarButton}>
              <Camera size={16} />
            </button>
          </div>
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '4px' }}>
            {user?.name}
          </h3>
          <p style={{ color: '#8b5cf6', fontWeight: '500', marginBottom: '16px' }}>
            {formData.position}
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            {formData.branch} • Year {formData.year}
          </p>

          {/* Social Links */}
          {user?.socialLinks?.github && (
            <a 
              href={user.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {user?.socialLinks?.linkedin && (
            <a 
              href={user.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          )}
          {user?.socialLinks?.portfolio && (
            <a 
              href={user.socialLinks.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              <Globe size={16} />
              Portfolio
            </a>
          )}
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} style={styles.card}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '24px' }}>
            Personal Information
          </h2>
          
          <div style={styles.formGrid}>
            {/* Basic Info */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <User size={16} />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <Mail size={16} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <Phone size={16} />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Roll Number
              </label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Branch/Department
              </label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                style={styles.input}
              >
                <option value="">Select Branch</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Electronics">Electronics</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
                <option value="Electrical">Electrical</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Academic Year
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                style={styles.input}
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Team Position
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                style={styles.input}
              >
                <option value="Member">Member</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Analyst">Analyst</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Skills (comma separated)
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="React, Node.js, Python, UI/UX"
                style={styles.input}
              />
            </div>
          </div>

          {/* Bio Section */}
          <div style={{ margin: '24px 0' }}>
            <label style={styles.label}>
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows="4"
              placeholder="Tell us about yourself and your interests..."
              style={{ ...styles.input, minHeight: '100px' }}
            />
          </div>

          {/* Social Links Section */}
          <div style={{ margin: '24px 0' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '16px' }}>
              Social Links
            </h3>
            <div style={styles.formGrid}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <Github size={16} />
                  GitHub URL
                </label>
                <input
                  type="url"
                  name="social_github"
                  value={formData.socialLinks.github}
                  onChange={handleInputChange}
                  placeholder="https://github.com/username"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <Linkedin size={16} />
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="social_linkedin"
                  value={formData.socialLinks.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/username"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <Globe size={16} />
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="social_portfolio"
                  value={formData.socialLinks.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://yourportfolio.com"
                  style={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              disabled={saving}
              style={{ 
                ...styles.button, 
                ...(isHovered && !saving ? styles.buttonHover : {}),
                opacity: saving ? 0.7 : 1
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {saving ? (
                <>
                  <div style={{ 
                    width: '16px', 
                    height: '16px', 
                    border: '2px solid rgba(255,255,255,0.3)', 
                    borderTopColor: 'white', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
