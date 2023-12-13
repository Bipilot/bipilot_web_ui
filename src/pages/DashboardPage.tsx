// DashboardPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/stylesheets/DashboardPage.module.css';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here, like clearing tokens or user data
    navigate('/login'); // Redirect to the login page
  };

  const handleProfile = () => {
    // Perform any logout logic here, like clearing tokens or user data
    navigate('/profile'); // Redirect to the login page
  };

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.tabBar}>
        <ul className={styles.tabList}>
          <li>DM Automation</li>
          <li>Comment Automation</li>
          <li>Settings</li>
          {/* Additional tabs can be added here */}
          <li className={styles.ProfileItem} onClick={handleProfile}>Profile</li>
          <li className={styles.logoutItem} onClick={handleLogout}>Logout</li>
        </ul>
      </aside>
      <main className={styles.mainContent}>
        <h1>Dashboard</h1>
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default DashboardPage;
