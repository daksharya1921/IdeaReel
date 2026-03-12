import Link from 'next/link';
import { Sparkles, MessageSquare, Image as ImageIcon, Hash, TrendingUp, Scissors, Video, UserCheck, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="main">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className="container">
          <div className={styles.heroBadge}>
            <Sparkles size={16} />
            <span>AI-Powered Content Creation 2.0</span>
          </div>
          <h1 className={`heading-1 ${styles.heroTitle}`}>
            Create Viral Video <span className="text-gradient">Ideas in Seconds</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Generate hooks, scripts, thumbnails and captions for TikTok, Reels and YouTube Shorts using advanced AI.
          </p>
          <div className={styles.heroActions}>
            <Link href="/generate">
              <Button size="lg" leftIcon={<Play size={20} />}>
                Generate Video Idea
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="secondary" size="lg">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-2 sectionTitle">Everything You Need to Go Viral</h2>
            <p className={styles.sectionDescription}>
              Our AI tool analyzes trends and proven formats to generate complete content packages.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <Card hoverable>
              <div className={styles.featureIcon}>
                <MessageSquare size={24} />
              </div>
              <h3>Viral Hook Generator</h3>
              <p className={styles.sectionDescription} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Stop the scroll with psychology-backed opening lines guaranteed to capture attention in the first 3 seconds.
              </p>
            </Card>
            
            <Card hoverable>
              <div className={styles.featureIcon}>
                <Scissors size={24} />
              </div>
              <h3>AI Script Writer</h3>
              <p className={styles.sectionDescription} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Get full 30-60 second scripts formatted scene-by-scene, optimized for retention and engagement.
              </p>
            </Card>

            <Card hoverable>
              <div className={styles.featureIcon}>
                <ImageIcon size={24} />
              </div>
              <h3>Thumbnail Concepts</h3>
              <p className={styles.sectionDescription} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Receive high-CTR text and visual concepts to make your videos stand out on YouTube Shorts.
              </p>
            </Card>

            <Card hoverable>
              <div className={styles.featureIcon}>
                <Hash size={24} />
              </div>
              <h3>Captions & Hashtags</h3>
              <p className={styles.sectionDescription} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                SEO-optimized captions and trending hashtags tailored to your specific niche and platform.
              </p>
            </Card>
            
            <Card hoverable>
              <div className={styles.featureIcon}>
                <TrendingUp size={24} />
              </div>
              <h3>Trending Formats</h3>
              <p className={styles.sectionDescription} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Discover current audio trends and popular editing styles mapped to your content.
              </p>
            </Card>

            <Card hoverable>
              <div className={styles.featureIcon}>
                <Video size={24} />
              </div>
              <h3>Multi-Platform</h3>
              <p className={styles.sectionDescription} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Outputs specifically tuned for the unique algorithms of TikTok, IG Reels, and YT Shorts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo/How it works */}
      <section className={styles.demo}>
        <div className={`container ${styles.demoContainer}`}>
          <div className={styles.demoContent}>
            <h2 className="heading-2">From Idea to Script in <span className="text-gradient">One Click</span></h2>
            <p>
              Simply tell us your niche, target audience, and goal. Our specialized AI model handles the rest, 
              delivering a complete blueprint for your next viral hit.
            </p>
            
            <ul className={styles.demoList}>
              <li className={styles.demoListItem}>
                <UserCheck className={styles.demoListItemIcon} size={20} />
                Input: "Tech Reviews" for "Gen Z"
              </li>
              <li className={styles.demoListItem}>
                <UserCheck className={styles.demoListItemIcon} size={20} />
                Select Platform: "TikTok"
              </li>
              <li className={styles.demoListItem}>
                <UserCheck className={styles.demoListItemIcon} size={20} />
                Goal: "Engagement & Growth"
              </li>
            </ul>
          </div>
          <div className={styles.demoVisual}>
            <div className={styles.demoCode}>
              {`{`}
              <br />
              &nbsp;&nbsp;<span className={styles.demoCodeHighlight}>"hook"</span>: "Stop buying the iPhone 15 until you see this hidden feature...",
              <br />
              &nbsp;&nbsp;<span className={styles.demoCodeHighlight}>"script"</span>: "[Scene 1]: Hold phone up to camera...",
              <br />
              &nbsp;&nbsp;<span className={styles.demoCodeHighlight}>"musicTrend"</span>: "Sped up alternative indie track",
              <br />
              &nbsp;&nbsp;<span className={styles.demoCodeHighlight}>"cta"</span>: "Save this video so you don't forget!"
              <br />
              {`}`}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
           <div className={styles.sectionHeader}>
            <h2 className="heading-2 sectionTitle">Loved by Creators</h2>
          </div>
          
          <div className={styles.testimonialGrid}>
            <Card>
              <p className={styles.testimonialQuote}>
                "I used to spend hours staring at a blank page trying to write hooks. IdeaReel cuts my prep time down to 5 minutes per video."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>S</div>
                <div className={styles.testimonialInfo}>
                  <h4>Sarah M.</h4>
                  <span>Tech Creator • 1.2M Followers</span>
                </div>
              </div>
            </Card>
            
            <Card>
              <p className={styles.testimonialQuote}>
                "The scene-by-scene script breakdown is a game changer. It feels like having a professional producer in my pocket."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>J</div>
                <div className={styles.testimonialInfo}>
                  <h4>James K.</h4>
                  <span>Finance • 500K Followers</span>
                </div>
              </div>
            </Card>

            <Card>
              <p className={styles.testimonialQuote}>
                "My engagement went up 40% after I started using the AI's optimized hooks and CTAs. Highly recommend this tool!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>A</div>
                <div className={styles.testimonialInfo}>
                  <h4>Alex T.</h4>
                  <span>Fitness Coach • 850K Followers</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className="heading-2">Ready to Boost Your Views?</h2>
            <p>Join thousands of creators using IdeaReel to dominate short-form algorithms.</p>
            <Link href="/generate">
              <Button size="lg" variant="primary">
                Start Generating for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
