import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { niche, targetAudience, platform, goal } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      console.error("Missing GEMINI_API_KEY environment variable");
      return NextResponse.json({ error: 'Missing API Key' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      You are an elite social media content strategist and viral video producer for ${platform}. 
      Your task is to generate a highly engaging, algorithm-optimized short-form video concept.

      Parameters:
      - Niche/Topic: ${niche}
      - Target Audience: ${targetAudience}
      - Platform: ${platform}
      - Primary Goal: ${goal}

      Generate a creative blueprint and return ONLY a valid JSON object with the following keys exactly:
      - idea: (string) A concise, 1-sentence description of the core video concept.
      - hook: (string) A psychological, scroll-stopping 0-3 second opening line.
      - script: (string) A full 30-45 second spoken script, formatted line by line.
      - breakdown: (string) A scene-by-scene visual and audio breakdown (e.g. [Scene 1: Close up...]).
      - thumbnail: (string) Text and visual concept for the cover/thumbnail if applicable.
      - caption: (string) An SEO-optimized caption ending with a question or engagement prompt.
      - hashtags: (array of strings) 5 highly relevant, trending hashtags.
      - musicTrend: (string) Suggestion for background audio style or trending sound format.
      - cta: (string) A strong call to action at the end to achieve the specified goal (${goal}).

      Important: Ensure the response is valid JSON and contains absolutely no markdown formatting outside of the JSON block itself. Do not include \`\`\`json or \`\`\`. Start directly with {.
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Attempt to clean the response in case the model wrapps it in markdown
    let cleanJson = responseText.trim();
    if (cleanJson.startsWith('```json')) {
        cleanJson = cleanJson.replace(/```json\n?/, '');
        if (cleanJson.endsWith('```')) {
             cleanJson = cleanJson.slice(0, -3).trim();
        }
    } else if (cleanJson.startsWith('```')) {
        cleanJson = cleanJson.replace(/```\n?/, '');
        if (cleanJson.endsWith('```')) {
             cleanJson = cleanJson.slice(0, -3).trim();
        }
    }

    return NextResponse.json({ result: cleanJson });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
