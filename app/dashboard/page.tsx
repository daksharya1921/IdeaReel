'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Clock, Bookmark, Play, BarChart3 } from 'lucide-react';
import styles from './page.module.css';

// Mock Data
const TRENDING_IDEAS = [
  {
    id: 1,
    niche: 'Tech & Gadgets',
    title: 'The "Invisible" iPhone Feature',
    description: 'A 30-second hook showing a hidden accessibility feature that changes how you take screenshots.',
    platform: 'TikTok',
    trendScore: '98/100',
    timeAgo: '2h ago'
  },
  {
    id: 2,
    niche: 'Personal Finance',
    title: 'The 50/30/20 Rule Visualized',
    description: 'Using physical objects (like coffee beans or coins) to explain the classic budgeting rule in a fast-paced format.',
    platform: 'Instagram Reels',
    trendScore: '95/100',
    timeAgo: '4h ago'
  },
  {
    id: 3,
    niche: 'Fitness',
    title: '3 Mistakes Ruining Your Squat',
    description: 'Point-of-view camera angle showing common form mistakes followed by the immediate correction.',
    platform: 'YouTube Shorts',
    trendScore: '92/100',
    timeAgo: '5h ago'
  },
  {
    id: 4,
    niche: 'Productivity',
    title: 'Notion vs Obsidian 2024',
    description: 'A rapid-fire comparison highlighting which app is better for students vs professionals.',
    platform: 'TikTok',
    trendScore: '89/100',
    timeAgo: '8h ago'
  },
  {
    id: 5,
    niche: 'Cooking',
    title: '15-Minute High Protein Dinner',
    description: 'ASMR-style cooking video focusing entirely on the sounds of food prep, no voiceover needed.',
    platform: 'Instagram Reels',
    trendScore: '88/100',
    timeAgo: '12h ago'
  },
  {
    id: 6,
    niche: 'Travel',
    title: 'Cheapest European Cities (Summer)',
    description: 'Quick cuts of aesthetic locations with text overlays showing average daily budget.',
    platform: 'YouTube Shorts',
    trendScore: '85/100',
    timeAgo: '1d ago'
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'trending' | 'saved'>('trending');

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Creator Dashboard</h1>
        <p className={styles.headerSubtitle}>
          Discover what's working right now or revisit your generated ideas.
        </p>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'trending' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={18} />
            Trending Ideas
          </div>
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'saved' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('saved')}
        >
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bookmark size={18} />
            Saved Content
          </div>
        </button>
      </div>

      {activeTab === 'trending' && (
        <div className={styles.grid}>
          {TRENDING_IDEAS.map((idea) => (
            <Card key={idea.id} hoverable>
              <div className={styles.cardHeader}>
                <span className={styles.trendBadge}>
                  <TrendingUp size={14} />
                  {idea.trendScore}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, background: 'var(--bg-primary)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', border: '1px solid var(--border-color)' }}>
                  {idea.niche}
                </span>
              </div>
              
              <h3 className={styles.cardTitle}>{idea.title}</h3>
              <p className={styles.cardDescription}>{idea.description}</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.cardMeta}>
                  <Play size={14} />
                  {idea.platform}
                </div>
                <div className={styles.cardMeta}>
                  <Clock size={14} />
                  {idea.timeAgo}
                </div>
              </div>
              
              <Button variant="secondary" fullWidth size="sm" style={{ marginTop: '1rem' }} leftIcon={<BarChart3 size={16} />}>
                Use This Template
              </Button>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'saved' && (
        <div style={{ padding: '3rem', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius)', border: '1px dashed var(--border-color)' }}>
          <Bookmark size={48} color="var(--text-secondary)" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
          <h3 style={{ marginBottom: '0.5rem' }}>No Saved Ideas Yet</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Generate your first viral concept and save it to your dashboard.
          </p>
          <Button variant="primary">Go to Generator</Button>
        </div>
      )}
    </div>
  );
}
