'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function ToolPage() {
  const [jobDesc, setJobDesc] = useState('');
  const [niche, setNiche] = useState('React / Next.js');
  const [experience, setExperience] = useState('Intermediate');
  const [tone, setTone] = useState('Professional');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const generateProposals = async () => {
    if (!jobDesc.trim()) {
      setError('Please paste a job description first.');
      return;
    }
    
    setLoading(true);
    setError('');
    setResult('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDesc, niche, experience, tone }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setResult(data.proposals);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">PitchPerfect AI</h1>
          <p className="text-slate-400">Internal Tool — Generate winning proposals in seconds</p>
        </div>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Job Description (paste from Upwork)</Label>
              <Textarea
                placeholder="Paste the full job description here..."
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="min-h-[200px] bg-slate-950 border-slate-700 text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Niche</Label>
                <select 
                  value={niche} 
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full p-2 rounded-md bg-slate-950 border border-slate-700 text-white"
                >
                  <option>React / Next.js</option>
                  <option>WordPress</option>
                  <option>Shopify / E-commerce</option>
                  <option>Full-Stack (Node.js)</option>
                  <option>Frontend (HTML/CSS/JS)</option>
                  <option>Web Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Experience</Label>
                <select 
                  value={experience} 
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full p-2 rounded-md bg-slate-950 border border-slate-700 text-white"
                >
                  <option>Beginner (0-1 years)</option>
                  <option>Intermediate (2-4 years)</option>
                  <option>Expert (5+ years)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Tone</Label>
                <select 
                  value={tone} 
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full p-2 rounded-md bg-slate-950 border border-slate-700 text-white"
                >
                  <option>Professional</option>
                  <option>Casual</option>
                  <option>Bold</option>
                </select>
              </div>
            </div>

            <Button 
              onClick={generateProposals} 
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-6"
            >
              {loading ? 'Writing your proposals...' : 'Generate 3 Proposals'}
            </Button>

            {error && (
              <div className="p-4 bg-red-900/30 border border-red-800 rounded-md text-red-300">
                {error}
              </div>
            )}
          </CardContent>
        </Card>

        {result && (
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Your Proposals</CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(result)}
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Copy All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950 p-6 rounded-md border border-slate-800 whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-300">
                {result}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
