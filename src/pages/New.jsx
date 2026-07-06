import React, { useState } from 'react';
import { 
  MapPin, Calendar, Compass, ShieldCheck, ArrowRight, 
  Send, Menu, X, Phone, Star, Sparkles, 
  MessageSquare, Layers, HelpCircle, CheckCircle2, TrendingUp
} from 'lucide-react';

const New = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Optimized WebP paths (Public folder setup)
  const imgSwat = '/swat.jpg';
  const imgNeelum = '/nelum.jpg';
  const imgHunza = '/hunza.jpg';
  const imgSkardu = '/skardu.jpg';

  const categories = [
    { id: 'all', name: 'All Expeditions' },
    { id: 'luxury', name: 'Luxury Caravans' },
    { id: 'budget', name: 'Backpacker Trails' },
    { id: 'family', name: 'Family Frameworks' }
  ];

  const featuredTrips = [
    { title: '8 Days Naran Kaghan Tour with Shogran', price: '50,000', location: 'Naran Valley', duration: '8 Days', image: imgHunza, cat: 'family', rating: '4.9', views: '1.2k' },
    { title: '4 Days Neelum Shogran Couple Tour', price: '110,000', location: 'Neelum Valley', duration: '4 Days', image: imgNeelum, cat: 'luxury', rating: '4.8', views: '940' },
    { title: '5 Days Swat Valley Tour from Lahore', price: '162,000', location: 'Swat Valley', duration: '5 Days', image: imgSwat, cat: 'luxury', rating: '4.9', views: '2.1k' },
    { title: '5 Days Neelum Valley Romantic Trip', price: '85,000', location: 'Azad Kashmir', duration: '5 Days', image: imgSkardu, cat: 'luxury', rating: '4.7', views: '610' },
    { title: 'Hunza Valley by Air Luxury Tour', price: '105,000', location: 'Hunza', duration: '4 Days', image: imgHunza, cat: 'budget', rating: '4.9', views: '870' },
    { title: '3 Days Northern Valley Honeymoon Package', price: '20,500', location: 'Kaghan', duration: '3 Days', image: imgSwat, cat: 'budget', rating: '4.6', views: '3.4k' },
  ];

  const filteredTrips = activeTab === 'all' ? featuredTrips : featuredTrips.filter(t => t.cat === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-sky-500 selection:text-white overflow-x-hidden">
      
      {/* 1. DYNAMIC FLOATING GLASS NAVIGATION (FIXED OVERFLOW & X-AXIS ISSUES) */}
      <nav className="fixed top-4 left-0 right-0 max-w-7xl mx-auto w-[92%] z-50 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl shadow-sm transition-all duration-300">
        <div className="px-5 sm:px-6 py-3.5 flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-2">
            <Compass className="text-sky-500 animate-spin-slow" size={24} />
            North<span className="text-sky-600 font-medium">Voyagers</span>
          </span>

          <div className="hidden md:flex items-center gap-6 font-semibold text-sm text-slate-600">
            <a href="#" className="text-sky-600 font-bold bg-sky-50 px-4 py-1.5 rounded-xl">Explore Hub</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Our Standard</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Reviews</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Framework</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+9230000000" className="text-slate-600 hover:text-sky-600 flex items-center gap-2 text-sm font-bold">
              <Phone size={15} className="text-sky-500" /> +92 300 00000
            </a>
            <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm">
              Book Caravan
            </button>
          </div>

          {/* Clean Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-slate-700 p-1.5 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Seamless Mobile Dropdown Container — No Overflow Guarantee */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen border-t border-slate-100' : 'max-h-0'}`}>
          <div className="px-5 py-4 space-y-4 bg-white/95 backdrop-blur-lg rounded-b-2xl">
            <div className="flex flex-col gap-3 font-semibold text-sm text-slate-600">
              <a href="#" className="text-sky-600 font-bold bg-sky-50 px-4 py-2 rounded-xl w-max">Explore Hub</a>
              <a href="#" className="hover:text-sky-600 transition-colors px-2 py-1">Our Standard</a>
              <a href="#" className="hover:text-sky-600 transition-colors px-2 py-1">Reviews</a>
              <a href="#" className="hover:text-sky-600 transition-colors px-2 py-1">Framework</a>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a href="tel:+9230000000" className="text-slate-600 hover:text-sky-600 flex items-center gap-2 text-sm font-bold px-2">
                <Phone size={15} className="text-sky-500" /> +92 300 00000
              </a>
              <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all w-full shadow-sm">
                Book Caravan
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. ASYMMETRIC AVANT-GARDE HERO SECTION WITH AESTHETIC AURORA BLOBS */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 bg-gradient-to-tr from-sky-50 via-white to-slate-50">
        
        {/* Soft Mesh Gradient / Aurora Background System */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-sky-200/30 to-teal-100/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-amber-100/20 to-rose-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-slate-700 shadow-sm">
              <Sparkles size={13} className="text-amber-500 fill-amber-500" /> Anti-Lag Image Micro-Optimizations Installed
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Unveiling <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">
                Untamed Peaks
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl leading-relaxed">
              We engineer custom transit routes across Pakistan's highest valleys featuring elite coasters, persistent logistics, and handpicked photography basecamps.
            </p>

            {/* Micro-Aesthetic Stats Bar */}
            <div className="grid grid-cols-3 gap-4 py-2 border-y border-slate-200/60 max-w-md">
              <div>
                <span className="text-xl font-black text-slate-900 block">4.9<span className="text-sky-500 text-sm font-normal">★</span></span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">User Index</span>
              </div>
              <div>
                <span className="text-xl font-black text-slate-900 block">12k+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Voyagers</span>
              </div>
              <div>
                <span className="text-xl font-black text-slate-900 block">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Safety Log</span>
              </div>
            </div>

            {/* Modern Search Strip */}
            <div className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-sm max-w-lg flex flex-col sm:flex-row gap-2">
              <div className="flex-grow flex items-center gap-2 px-3 py-1.5">
                <MapPin className="text-sky-500 flex-shrink-0" size={16} />
                <input type="text" placeholder="Search Valley (Hunza, Swat)..." className="w-full bg-transparent text-xs focus:outline-none font-semibold placeholder-slate-400" />
              </div>
              <button className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm">
                Initialize <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Right Layout: Geometric Clean Image Cards (Asymmetric Minimalist Style) */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[520px] w-full flex items-center justify-center">
            
            {/* Main Crisp Image Card */}
            <div className="absolute w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-md border-4 border-white -rotate-2 hover:rotate-0 transition-all duration-500 group transform-gpu will-change-transform z-20">
              <img src={imgHunza} alt="Hunza Ridge" loading="lazy" className="w-full h-full object-cover transform scale-102 group-hover:scale-100 transition-all duration-500 ease-out transform-gpu will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <span className="text-white text-sm font-black bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">Hunza Ridge</span>
                <span className="text-white text-xs font-semibold flex items-center gap-1"><TrendingUp size={14} className="text-emerald-400"/> Top Choice</span>
              </div>
            </div>

            {/* Subtle Aesthetic Floating Element behind main card */}
            <div className="absolute w-[50%] h-[45%] right-2 top-2 rounded-2xl overflow-hidden shadow-sm border-2 border-white rotate-3 group transform-gpu will-change-transform z-10 opacity-70">
              <img src={imgSwat} alt="Swat Track" loading="lazy" className="w-full h-full object-cover transform-gpu will-change-transform" />
            </div>

            {/* Front Small Accent Card */}
            <div className="absolute w-[40%] h-[32%] left-2 bottom-2 rounded-2xl overflow-hidden shadow-md border-2 border-white -rotate-6 group transform-gpu will-change-transform z-30">
              <img src={imgNeelum} alt="Neelum Valley" loading="lazy" className="w-full h-full object-cover transform-gpu will-change-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC TABBED CARAVAN HUB */}
      <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-1">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest bg-sky-50 px-2.5 py-1 rounded-md">Curated Tracks</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Active Departures Hub</h2>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl w-max">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs font-bold px-3.5 py-2 rounded-lg transition-all duration-200 ${activeTab === cat.id ? 'bg-white text-sky-600 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Anti-Lag Dynamic Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.map((trip, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-200/60 hover:shadow-md transition-all duration-300 flex flex-col h-full transform-gpu">
              
              {/* Image Box with Hardware Accelerated Transform Performance */}
              <div className="relative h-60 overflow-hidden bg-slate-100 m-2.5 rounded-xl">
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out will-change-transform transform-gpu"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-sky-600 shadow-2xs flex items-center gap-1">
                  <Star size={11} className="fill-sky-500 text-sky-500" /> {trip.rating}
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-950/70 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-white flex items-center gap-1">
                  <MapPin size={11} className="text-sky-400"/> {trip.location}
                </div>
              </div>

              {/* Panel Meta */}
              <div className="p-5 pt-1.5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{trip.duration}</span>
                    <span>{trip.views} active logs</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors line-clamp-2">
                    {trip.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-bold uppercase">Estimated Caravan Fare</span>
                    <span className="text-xl font-black text-slate-900">PKR {trip.price}</span>
                  </div>
                  <button className="bg-slate-100 group-hover:bg-sky-600 text-slate-800 group-hover:text-white p-2.5 rounded-xl transition-all duration-300">
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM VERIFIED TESTIMONIALS LOGS */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/50 px-5 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-1">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded-md inline-flex items-center gap-1">
              <MessageSquare size={12} /> Verified Logs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">What Our Voyagers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Zainab Ahmed', role: 'Family Organizer', loc: 'Karachi', text: 'We booked a 5-day customized family package for Swat. The Coaster was brand new, hotel stays were exceptionally clean.' },
              { name: 'Bilal Khan', role: 'Software Engineer', loc: 'Lahore', text: 'Amazing experience with North Voyagers on the Hunza luxury tour. The photography track checkpoints they managed were superb.' },
              { name: 'Dr. Asad Raheem', role: 'Corporate Lead', loc: 'Islamabad', text: 'Managed our annual corporate retreat pipeline with them. From seamless transport logistics to premium live music setup at Skardu.' }
            ].map((rev, i) => (
              <div key={i} className="bg-white border border-slate-200/60 p-6 rounded-2xl hover:shadow-xs transition-all duration-300 flex flex-col justify-between transform-gpu">
                <div className="space-y-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={12} className="fill-amber-500 text-amber-500" />)}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium italic">"{rev.text}"</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <span className="text-[11px] text-sky-600 font-semibold">{rev.role} &bull; {rev.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MODERN MINIMALIST FOOTER */}
      <footer className="bg-white text-slate-500 pt-12 pb-6 border-t border-slate-100 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="text-slate-900 font-black text-lg tracking-tight flex items-center gap-1.5">
              <Compass className="text-sky-500" size={20} /> NorthVoyagers
            </h3>
            <p className="text-xs font-medium leading-relaxed max-w-xs">
              Premium travel architectures specializing in crafting secure, elite, and absolute group tour logs across majestic valleys of Pakistan.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider mb-3">Framework</h4>
            <ul className="space-y-1.5 text-xs font-semibold">
              <li><a href="#" className="hover:text-sky-600">Corporate Retreats</a></li>
              <li><a href="#" className="hover:text-sky-600">Family Fixed Packages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider mb-3">Quick Valleys</h4>
            <ul className="space-y-1.5 text-xs font-semibold">
              <li><a href="#" className="hover:text-sky-600">Hunza Peak Valleys</a></li>
              <li><a href="#" className="hover:text-sky-600">Swat Riverside Hubs</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Stay Logged In</h4>
            <div className="flex bg-slate-50 border border-slate-200 rounded-xl p-1">
              <input type="email" placeholder="Email Address" className="w-full bg-transparent px-2.5 text-xs focus:outline-none" />
              <button className="bg-sky-600 text-white p-2 rounded-lg" aria-label="Subscribe"><Send size={11}/></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-4 border-t border-slate-100 text-center text-xs font-medium text-slate-400">
          <span>&copy; {new Date().getFullYear()} North Voyagers. Enhanced Anti-Lag Architecture.</span>
        </div>
      </footer>

    </div>
  );
};

export default New;