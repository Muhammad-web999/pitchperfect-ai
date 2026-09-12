import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { jobDesc, niche, experience, tone } = await req.json();
    
    const apiKey = process.env.GROQ_API_KEY;
    
    // Check 1: Is the API key missing?
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GROQ_API_KEY is missing in Vercel Environment Variables. Go to Vercel → Project Settings → Environment Variables and add it.' },
        { status: 500 }
      );
    }

    const prompt = `You are a senior full-stack web developer who wins 40% of Upwork proposals by writing short, specific, non-generic pitches.

CLIENT JOB DESCRIPTION:
${jobDesc}

DEVELOPER PROFILE:
- Niche: ${niche}
- Experience: ${experience}
- Tone: ${tone}

Write 3 proposal variants for a WEB DEVELOPMENT job. Each must:
1. Open with a SPECIFIC observation about THEIR project or tech stack
2. Include 1 realistic past result with numbers
3. Ask 1 smart question that shows expertise
4. Stay under 150 words
5. End with "Worth a 10-min call to align on the stack?" Never say "Hire me" or "I am excited."

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
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    // Check 2: Did Groq return an error?
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      const errorMessage = errorData.error?.message || errorData.message || JSON.stringify(errorData);
      
      return NextResponse.json(
        { error: `Groq API Error (${response.status}): ${errorMessage}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    const proposals = data.choices[0].message.content;
    
    return NextResponse.json({ proposals });
  } catch (error: any) {
    return NextResponse.json(
      { error: `Server crashed: ${error.message}` },
      { status: 500 }
    );
  }
}
