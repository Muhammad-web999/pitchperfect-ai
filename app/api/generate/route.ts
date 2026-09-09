import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { jobDesc, niche, experience, tone } = await req.json();
    
    const prompt = `You are a senior full-stack web developer who wins 40% of Upwork proposals by writing short, specific, non-generic pitches.

CLIENT JOB DESCRIPTION:
${jobDesc}

DEVELOPER PROFILE:
- Niche: ${niche}
- Experience: ${experience}
- Tone: ${tone}

Write 3 proposal variants for a WEB DEVELOPMENT job. Each must follow these rules:

1. FIRST LINE: Make a specific observation about THEIR project or tech stack. Prove you read it. Examples:
   - "Your Figma file shows a multi-step checkout — are you planning Stripe or PayPal?"
   - "Moving from WordPress to Next.js for speed is smart — I've done this exact migration 3 times."
   - "The job mentions a custom booking system — are you open to Cal.com integration or full custom build?"

2. PAST RESULT: Include 1 realistic past project with numbers. Examples:
   - "Reduced a React app's load time from 4.2s to 0.8s for a SaaS client."
   - "Built a Shopify custom theme that increased conversion 23%."
   - "Migrated a Laravel app to Next.js, cutting server costs 60%."

3. SMART QUESTION: Ask 1 question that shows expertise and starts a conversation. Examples:
   - "Do you have existing API documentation, or should I design the schema from scratch?"
   - "Is the design mobile-first, or are we retrofitting desktop?"
   - "Are you set on WordPress, or would you consider a headless CMS for better performance?"

4. LENGTH: 100–140 words max. Short proposals win.

5. CLOSE: End with "Worth a 10-min call to align on the stack?" or "Happy to share a quick Loom walkthrough of a similar build." Never say "Hire me" or "I am excited."

6. TONE: ${tone}
   - Professional = direct, confident, no fluff
   - Casual = friendly, "Hey [Name]", conversational
   - Bold = challenges their current approach, "Most agencies over-engineer this..."

Output EXACTLY:

VARIANT 1 — [The Observer]:
[Text]

VARIANT 2 — [The Proven Result]:
[Text]

VARIANT 3 — [The Curious Expert]:
[Text]`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Groq API error:', errorData);
      throw new Error('Groq API request failed');
    }

    const data = await response.json();
    const proposals = data.choices[0].message.content;
    
    return NextResponse.json({ proposals });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to generate proposals. Please try again.' },
      { status: 500 }
    );
  }
}
