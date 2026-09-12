import { CheckCircle, Zap, MessageSquare, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-medium">
          <Zap className="w-4 h-4" />
          Built by a freelancer who got tired of ghosted proposals
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Stop Sending Proposals<br />
          <span className="text-emerald-400">Into the Void</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          I write 5 client-specific, AI-optimized proposals for web developers 
          that get replies — not ignored. <span className="text-white font-semibold">$25. Delivered in 2 hours.</span>
        </p>

        <div className="pt-4">
          <a href="YOUR_GUMROAD_LINK_HERE" target="_blank" rel="noopener noreferrer">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get My Proposals — $25
            </button>
          </a>
        </div>
        
        <p className="text-sm text-slate-500">No subscription. One-time payment. 5 proposals.</p>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 bg-slate-900/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center text-white">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold text-white">Paste the Job</h3>
              <p className="text-slate-400">Send me the Upwork job description or URL after payment.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold text-white">AI + Human Edit</h3>
              <p className="text-slate-400">My AI studies the client's tech stack. I lightly edit for perfection.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold text-white">Copy & Send</h3>
              <p className="text-slate-400">You get 5 proposals in your inbox. Copy, paste, win the job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-white">Why These Proposals Win</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4 p-6 rounded-lg bg-slate-900/50 border border-slate-800">
            <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-1">Tech-Specific Openers</h3>
              <p className="text-slate-400 text-sm">We quote their stack back to them — React, Next.js, WordPress, Shopify. Proves you read the spec.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg bg-slate-900/50 border border-slate-800">
            <MessageSquare className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-1">Conversation Starters</h3>
              <p className="text-slate-400 text-sm">Every proposal ends with a smart question about their API, design, or architecture. Clients reply.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg bg-slate-900/50 border border-slate-800">
            <Zap className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-1">3 Different Angles</h3>
              <p className="text-slate-400 text-sm">Results-focused, Process-focused, and Curiosity-driven. Test what works for your niche.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-lg bg-slate-900/50 border border-slate-800">
            <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-1">Zero-Risk Guarantee</h3>
              <p className="text-slate-400 text-sm">Send all 5 and get 0 replies? I'll rewrite them free. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 bg-slate-900/50">
        <div className="max-w-md mx-auto">
          <div className="bg-slate-900 border border-emerald-800/50 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
            <div className="pt-8 pb-8 px-6 text-center space-y-6">
              <h3 className="text-2xl font-bold text-white">One-Time Purchase</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-white">$25</span>
              </div>
              <p className="text-slate-400">No subscription. No hidden fees.</p>
              
              <ul className="text-left space-y-3 max-w-xs mx-auto">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  5 tailored proposals
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  3 different angles
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  Delivered in 2 hours
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  1 free revision
                </li>
              </ul>

              <a href="YOUR_GUMROAD_LINK_HERE" target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors">
                  Get My Proposals — $25
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>© 2026 PitchPerfect AI. Not affiliated with Upwork.</p>
      </footer>
    </div>
  );
}
