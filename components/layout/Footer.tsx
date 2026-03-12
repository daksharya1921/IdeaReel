import React from 'react';
import Link from 'next/link';
import { Video, Twitter, Github, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.logoArea}>
              <div className={styles.logoText}>
                <Video color="var(--accent-primary)" size={24} />
                IdeaReel
              </div>
              <p className={styles.tagline}>
                Generate viral hooks, scripts, and thumbnails for your short-form content in seconds using AI.
              </p>
            </div>
          </div>
          
          <div className={styles.col}>
            <h4>Product</h4>
            <ul className={styles.links}>
              <li><Link href="/generate">AI Generator</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Resources</h4>
            <ul className={styles.links}>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Creator Guide</Link></li>
              <li><Link href="#">Trending Sounds</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Company</h4>
            <ul className={styles.links}>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} IdeaReel. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
