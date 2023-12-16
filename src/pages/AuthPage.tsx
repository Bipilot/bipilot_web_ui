// AuthPage.tsx
import styles from '../assets/stylesheets/AuthPage.module.css';
import instagramLogo from '../assets/images/Instagram_icon.png'; // Make sure you have an Instagram logo image


const AuthPage: React.FC = () => {
  const instagramClientId = '168261799683361';
  const instagramRedirectUri = 'https://socialsizzle.herokuapp.com/auth/';
  const instagramScope = 'user_profile,user_media';
  const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${instagramClientId}&redirect_uri=${instagramRedirectUri}&scope=${instagramScope}&response_type=code`;


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <button onClick={() => window.location.href = instagramAuthUrl} className={styles.instagramAuthButton}>
          <div>
            <img src={instagramLogo} alt="Instagram logo" className={styles.logo} />
          </div>
          <div>
            <span>Sign in with Instagram</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
