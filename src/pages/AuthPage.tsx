// AuthPage.tsx
import React, { useState } from 'react';
import styles from '../assets/stylesheets/AuthPage.module.css';

// Define types for your form states if needed, for example:
type LoginFormState = {
  username: string;
  password: string;
};

type RegisterFormState = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true); // Toggle state between login and register
  const [loginForm, setLoginForm] = useState<LoginFormState>({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState<RegisterFormState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handlers for form inputs
  const handleLoginInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const handleRegisterInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });
  };

  // Mock submit handlers
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };

  const handleRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} >
            <input
              type="text"
              name="username"
              value={loginForm.username}
              onChange={handleLoginInputChange}
              placeholder="Username"
              className={styles.input}
            />
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleLoginInputChange}
              placeholder="Password"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Login</button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} >
            <input
              type="text"
              name="username"
              value={registerForm.username}
              onChange={handleRegisterInputChange}
              placeholder="Username"
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              value={registerForm.email}
              onChange={handleRegisterInputChange}
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              name="password"
              value={registerForm.password}
              onChange={handleRegisterInputChange}
              placeholder="Password"
              className={styles.input}
            />
            <input
              type="password"
              name="confirmPassword"
              value={registerForm.confirmPassword}
              onChange={handleRegisterInputChange}
              placeholder="Confirm Password"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Register</button>
          </form>
        )}
        <button onClick={() => setIsLogin(!isLogin)} className={styles.toggleButton}>
          {isLogin ? 'Need to create an account?' : 'Already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
