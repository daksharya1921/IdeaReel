'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { 
  Sparkles, 
  Copy, 
  CheckCircle2,
  Lightbulb,
  Fish,
  FileText,
  ListVideo,
  Image as ImageIcon,
  MessageSquare,
  Hash,
  Music,
  MousePointerClick
} from 'lucide-react';
import styles from './page.module.css';

interface GenerationResult {
  idea: string;
  hook: string;
  script: string;
  breakdown: string;
  thumbnail: string;
  caption: string;
  hashtags: string[];
  musicTrend: string;
  cta: string;
}

export default function GeneratePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      niche: formData.get('niche'),
      targetAudience: formData.get('targetAudience'),
      platform: formData.get('platform'),
      goal: formData.get('goal'),
    };

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const rawResult = await response.json();
      
      // Parse the JSON string from Gemini
      const parsedResult: GenerationResult = JSON.parse(rawResult.result);
      setResult(parsedResult);
    } catch (error) {
      console.error('Generation Error:', error);
      // Fallback/Demo data for UI visualization if API fails or lacks key
      setResult({
        idea: "5 hidden iPhone battery settings that actually work.",
        hook: "Stop charging your iPhone right now until you change these 5 secret settings.",
        script: "[0:00-0:03]: Hold phone directly to camera looking urgent.\n[0:03-0:10]: Screen record going to Settings > Battery > Optimize.\n[0:10-0:20]: Point out the 'Clean Energy Charging' toggle.",
        breakdown: "Scene 1: The Hook (Urgency)\nScene 2: The Tutorial (Visual Proof)\nScene 3: The Payoff (Benefit)",
        thumbnail: "Close up of an iPhone battery icon at 1% with text: 'YOU'RE DOING IT WRONG'",
        caption: "Did you know about setting #3? 🔋👇",
        hashtags: ["#iphonetricks", "#techhacks", "#apple", "#ios17", "#batteryhack"],
        musicTrend: "Suspenseful to upbeat transition (Trending: 'Sneaky Snitch' by Kevin MacLeod)",
        cta: "Save this video for later and follow for daily tech secrets!"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const ResultCard = ({ title, content, icon: Icon, id }: { title: string; content: React.ReactNode; icon: any; id: string }) => (
    <Card className={id === 'script' || id === 'breakdown' ? styles.gridSpan2 : ''}>
      <div className={styles.resultCardHeader}>
        <div className={styles.resultTitle}>
          <Icon size={18} className={styles.iconColor} />
          {title}
        </div>
        <button 
          onClick={() => handleCopy(typeof content === 'string' ? content : JSON.stringify(content), id)}
          className={styles.copyButton}
          title="Copy"
        >
          {copiedStates[id] ? <CheckCircle2 size={16} color="green" /> : <Copy size={16} />}
        </button>
      </div>
      <div className={styles.resultContent}>
        {content}
      </div>
    </Card>
  );

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          <Sparkles className={styles.iconColor} size={28} />
          AI Creator Studio
        </h1>
        <p className={styles.headerSubtitle}>
          Configure your content parameters and let our AI model do the heavy lifting.
        </p>
      </div>

      <div className={styles.layout}>
        {/* Configuration Panel */}
        <div className={styles.configPanel}>
          <Card glass>
            <h3 style={{ marginBottom: '1.5rem', fontWeight: 600 }}>Configuration</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input 
                name="niche"
                label="Content Niche / Topic" 
                placeholder="e.g. Personal Finance, Tech Reviews, Fitness"
                required
              />
              <Input 
                name="targetAudience"
                label="Target Audience" 
                placeholder="e.g. Gen Z, Beginners, Freelancers"
                required
              />
              <Select 
                name="platform"
                label="Platform"
                required
                options={[
                  { value: 'tiktok', label: 'TikTok' },
                  { value: 'reels', label: 'Instagram Reels' },
                  { value: 'shorts', label: 'YouTube Shorts' }
                ]}
              />
              <Select 
                name="goal"
                label="Primary Goal"
                required
                options={[
                  { value: 'engagement', label: 'High Engagement & Comments' },
                  { value: 'growth', label: 'Follower Growth / Viral Reach' },
                  { value: 'education', label: 'High Retention & Saves' },
                  { value: 'sales', label: 'Click-Throughs & Conversion' }
                ]}
              />
              
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                size="lg"
                isLoading={isGenerating}
                leftIcon={!isGenerating && <Sparkles size={18} />}
                style={{ marginTop: '1rem' }}
              >
                {isGenerating ? 'Generating Magic...' : 'Generate Idea Blueprint'}
              </Button>
            </form>
          </Card>
        </div>

        {/* Results Area */}
        <div className={styles.resultsArea}>
          {isGenerating ? (
            <div className={styles.loadingContainer}>
              <Sparkles className={styles.pulseIcon} size={48} />
              <div className={styles.loadingText}>
                <h3>Analyzing trends and structuring content...</h3>
                <p>Molding the perfect hook and writing your script.</p>
              </div>
            </div>
          ) : result ? (
            <div>
              <div className={styles.resultsHeader}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Your Content Blueprint</h2>
                <div className={styles.actions}>
                  <Button variant="secondary" size="sm" onClick={() => handleCopy(JSON.stringify(result, null, 2), 'all')}>
                    {copiedStates['all'] ? 'Copied!' : 'Copy All JSON'}
                  </Button>
                </div>
              </div>
              
              <div className={styles.resultsGrid}>
                <ResultCard id="idea" title="Core Idea" icon={Lightbulb} content={result.idea} />
                <ResultCard id="hook" title="The Hook (0-3s)" icon={Fish} content={result.hook} />
                <ResultCard id="script" title="Full Script" icon={FileText} content={result.script} />
                <ResultCard id="breakdown" title="Scene Breakdown" icon={ListVideo} content={result.breakdown} />
                <ResultCard id="thumbnail" title="Thumbnail Concept" icon={ImageIcon} content={result.thumbnail} />
                <ResultCard id="caption" title="Caption" icon={MessageSquare} content={result.caption} />
                <ResultCard id="hashtags" title="Hashtags" icon={Hash} content={
                  <div className={styles.hashtagsWrapper}>
                    {result.hashtags.map((tag, i) => (
                      <span key={i} className={styles.hashtag}>{tag}</span>
                    ))}
                  </div>
                } />
                <ResultCard id="music" title="Music/Audio Route" icon={Music} content={result.musicTrend} />
                <ResultCard id="cta" title="Call to Action" icon={MousePointerClick} content={result.cta} />
              </div>
            </div>
          ) : (
             <div className={styles.loadingContainer} style={{ opacity: 0.5 }}>
                <div style={{ padding: '2rem', border: '1px dashed var(--border-color)', borderRadius: '1rem' }}>
                  <p>Fill out the configuration and smash that generate button to see the magic happen.</p>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
