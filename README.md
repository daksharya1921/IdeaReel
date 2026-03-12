# 🎬 IdeaReel

IdeaReel is a modern, AI-powered web application designed to help content creators generate viral short-form video ideas, scripts, hooks, thumbnails, and captions for TikTok, Instagram Reels, and YouTube Shorts in seconds.

## ✨ Features

- **Viral Hook Generator**: Get psychology-backed opening lines guaranteed to capture attention in the first 3 seconds.
- **AI Script Writer**: Generate full 30-45 second spoken scripts formatted scene-by-scene.
- **Thumbnail Concepts**: Receive high-CTR text and visual concepts to make your videos stand out.
- **Captions & Hashtags**: SEO-optimized captions and trending hashtags tailored to your specific niche and platform.
- **Creator Dashboard**: View trending ideas and saved video blueprints.

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: Custom CSS Modules with responsive variables, glassmorphism, and dark/light modes.
- **AI Integration**: [Google Gemini AI API](https://ai.google.dev/) (`gemini-2.5-flash` model).

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daksharya1921/ideareel.git
   cd ideareel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root of the project and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Open the App:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 Contribution

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📜 License

This project is licensed under the MIT License.
