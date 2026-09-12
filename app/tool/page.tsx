'use client';

import { useState } from 'react';

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">PitchPerfect AI</h1>
          <p className="text-slate-400">Internal Tool — Generate winning proposals in seconds</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-white">Job Details</h2>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Job Description (paste from Upwork)</label>
            <textarea
              placeholder="Paste the full job description here..."
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              className="w-full min-h-[200px] p-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">Niche</label>
              <select 
                value={niche} 
                onChange={(e) => setNiche(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              <label className="block text-sm font-medium text-slate-300">Experience</label>
              <select 
                value={experience} 
                onChange={(e) => setExperience(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option>Beginner (0-1 years)</option>
                <option>Intermediate (2-4 years)</option>
                <option>Expert (5+ years)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">Tone</label>
              <select 
                value={tone} 
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option>Professional</option>
                <option>Casual</option>
                <option>Bold</option>
              </select>
            </div>
          </div>

          <button 
            onClick={generateProposals} 
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors"
          >
            {loading ? 'Writing your proposals...' : 'Generate 3 Proposals'}
          </button>

          {error && (
            <div className="p-4 bg-red-900/30 border border-red-800 rounded-lg text-red-300">
              {error}
            </div>
          )}
        </div>

        {result && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Your Proposals</h2>
              <button 
                onClick={copyToClipboard}
                className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors text-sm"
              >
                Copy All
              </button>
            </div>
            <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-300">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
