'use client'

import { useEffect, useRef } from 'react'
import { 
  Zap, Shield, BarChart2, Smartphone, Check, Gavel, 
  Activity, ShieldCheck, Menu, ArrowRight, Twitter, 
  Instagram, Linkedin 
} from 'lucide-react'
import Image from 'next/image'
import LightRays from '@/components/LightRays'

export default function Home() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            ;(entry.target as HTMLElement).style.opacity = '1'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.glass-card')
    cards.forEach((card, index) => {
      ;(card as HTMLElement).style.opacity = '0'
      ;(card as HTMLElement).style.animationDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-dot-grid bg-grid-32 opacity-100" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-dark/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="heading-serif font-bold text-2xl tracking-tight z-10 hover:text-primary transition-colors duration-300">
            Open Mazad
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[11px] uppercase tracking-[0.15em] hover:text-primary transition-colors text-white/80">Features</a>
            <a href="#auctions" className="text-[11px] uppercase tracking-[0.15em] hover:text-primary transition-colors text-white/80">Live Auctions</a>
            <a href="#pricing" className="text-[11px] uppercase tracking-[0.15em] hover:text-primary transition-colors text-white/80">Pricing</a>
            <a href="#team" className="text-[11px] uppercase tracking-[0.15em] hover:text-primary transition-colors text-white/80">Team</a>
          </div>

          <a href="#trial" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(14,173,167,0.4)] hover:shadow-[0_0_30px_rgba(14,173,167,0.6)]">
            Start Free Trial
          </a>

          <button className="md:hidden text-white/80 hover:text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 z-10 overflow-visible">
        {/* LightRays Background */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#0EADA7"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.15}
        />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="heading-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] mb-8 max-w-5xl opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            The Intelligent Future of <span className="text-primary">Asset</span> Auctions
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 font-light opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Secure, transparent, and AI-driven bidding for high-value assets across the GCC and Arab markets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-24 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <a href="#explore" className="px-8 py-4 bg-white text-dark rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
              Explore Auctions
              <ArrowRight className="text-lg" size={18} />
            </a>
            <a href="#demo" className="px-8 py-4 glass-panel rounded-full font-medium hover:bg-white/10 transition-colors text-white">
              Request Demo
            </a>
          </div>

          {/* Visual System */}
          <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.2/1] opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 aspect-video glass-panel rounded-2xl z-20 flex flex-col items-center justify-center border border-primary/30 shadow-glow-teal">
              <div className="text-primary mb-2">
                <Gavel size={32} />
              </div>
              <span className="heading-serif text-2xl font-bold">Open Mazad</span>
              <div className="mt-4 flex gap-2">
                <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3 animate-pulse" />
                </div>
                <div className="h-1.5 w-8 bg-white/10 rounded-full" />
              </div>
              <div className="absolute -bottom-12 flex gap-4 text-xs text-white/40 uppercase tracking-widest">
                <span>Live</span>
                <span>Secure</span>
                <span>Smart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="heading-serif text-4xl md:text-5xl max-w-md">
              Engineered for <span className="text-secondary italic">High-Stakes</span> Transactions
            </h2>
            <p className="text-white/50 max-w-sm mt-6 md:mt-0">
              Our platform combines robust security with intuitive design to facilitate seamless auctions.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, color: 'primary', title: 'Real-time Bidding', desc: 'Millisecond-latency updates ensure you never miss an auction event or bid update.' },
              { icon: Shield, color: 'secondary', title: 'Bank-Grade Security', desc: 'End-to-end encryption and strict verification processes for all participants.' },
              { icon: BarChart2, color: 'accent', title: 'Market Analytics', desc: 'Deep insights and valuation history to inform your bidding strategy effectively.' },
              { icon: Smartphone, color: 'white', title: 'Mobile Native', desc: 'Full functionality across all devices with a responsive, app-like experience.' },
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 group">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center text-${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl md:text-5xl mb-4">Transparent Pricing</h2>
            <p className="text-white/50">Choose the plan that fits your volume.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Starter */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-medium text-white/80 mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-serif">$</span>
                <span className="text-5xl font-serif">0</span>
                <span className="text-white/40 text-sm ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-white/60">
                <li className="flex items-center gap-3"><Check className="text-white" size={16} /> Up to 3 auctions</li>
                <li className="flex items-center gap-3"><Check className="text-white" size={16} /> Basic analytics</li>
                <li className="flex items-center gap-3"><Check className="text-white" size={16} /> Email support</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">Get Started</button>
            </div>

            {/* Pro */}
            <div className="glass-card p-8 border-primary/50 relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-dark text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-primary/20">
                Most Popular
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Professional</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-serif">$</span>
                <span className="text-5xl font-serif">299</span>
                <span className="text-white/40 text-sm ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-white/80">
                <li className="flex items-center gap-3"><Check className="text-primary" size={16} /> Unlimited auctions</li>
                <li className="flex items-center gap-3"><Check className="text-primary" size={16} /> Advanced valuation AI</li>
                <li className="flex items-center gap-3"><Check className="text-primary" size={16} /> 24/7 Priority support</li>
                <li className="flex items-center gap-3"><Check className="text-primary" size={16} /> Verified badge</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium shadow-lg shadow-primary/25">Start Free Trial</button>
            </div>

            {/* Enterprise */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-medium text-white/80 mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-serif">$</span>
                <span className="text-5xl font-serif">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-white/60">
                <li className="flex items-center gap-3"><Check className="text-white" size={16} /> White-label solution</li>
                <li className="flex items-center gap-3"><Check className="text-white" size={16} /> API Access</li>
                <li className="flex items-center gap-3"><Check className="text-white" size={16} /> Dedicated account mgr</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative z-10 bg-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="heading-serif text-4xl md:text-5xl mb-16">Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Omar Al-Fayed', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop' },
              { name: 'Layla Mansour', role: 'Head of Technology', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop' },
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <Image 
                    src={member.img} 
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60" />
                </div>
                <div className="flex items-end justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="heading-serif text-2xl">{member.name}</h3>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                  <Linkedin className="text-white/40 group-hover:text-white transition-colors" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 relative z-10 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="heading-serif font-bold text-2xl tracking-tight mb-6 block">Open Mazad</a>
              <div className="flex gap-4">
                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            
            {[
              { title: 'Platform', links: ['Auctions', 'Valuation', 'Security'] },
              { title: 'Company', links: ['About', 'Careers', 'Press'] },
              { title: 'Legal', links: ['Terms', 'Privacy', 'Licenses'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">{col.title}</h4>
                <ul className="space-y-4 text-sm text-white/60">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Join Digest</h4>
              <form className="flex flex-col gap-2">
                <input type="email" placeholder="Enter your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" />
                <button type="submit" className="bg-white text-dark text-sm font-medium py-3 rounded-lg hover:bg-gray-200 transition-colors">Subscribe</button>
              </form>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© 2024 Open Mazad Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Dubai</span>
              <span>Riyadh</span>
              <span>London</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
