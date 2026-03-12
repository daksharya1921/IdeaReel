'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Video, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme as 'light' | 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={`${styles.header} ${styles.glass}`}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logoArea}>
          <Video color="var(--accent-primary)" size={28} />
          <span className={styles.logoText}>IdeaReel</span>
        </Link>
        <div className={styles.actions}>
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link href="/generate">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
