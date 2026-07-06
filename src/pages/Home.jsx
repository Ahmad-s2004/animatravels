import React, { useState } from 'react';
import { 
  MapPin, Calendar, Users, Search, Award, Compass, 
  ShieldCheck, Headphones, ArrowUpRight, ChevronDown, 
  Send, Menu, X, Phone
} from 'lucide-react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Directly defining asset paths without importing at the top
  const imgSwat = './public/assets/swat.jfif';
  const imgNeelum = './public/assets/nelum.jpg'; // Filesystem name 'nelum.jpg'
  const imgHunza = './public/assets/hunza.jpg';
  const imgSkardu = './public/assets/skardu.jpg';

  // Destinations Array using direct paths
  const destinations = [
    { name: 'Hunza Valley', image: imgHunza, tours: '12+ Tours' },
    { name: 'Swat Valley', image: imgSwat, tours: '8+ Tours' },
    { name: 'Skardu', image: imgSkardu, tours: '15+ Tours' },
    { name: 'Neelum Valley', image: imgNeelum, tours: '10+ Tours' },
  ];

  // Featured Trips Array using direct paths
  const featuredTrips = [
    { title: '8 Days Naran Kaghan Tour with Shogran', price: '50,000', location: 'Naran Valley', duration: '7 Night / 8 Days', image: imgHunza, badge: 'Best Seller' },
    { title: '4 Days Neelum Shogran Couple Tour', price: '110,000', location: 'Neelum Valley', duration: '3 Night / 4 Days', image: imgNeelum, badge: 'Couple Special' },
    { title: '5 Days Swat Valley Tour from Lahore', price: '162,000', location: 'Swat Valley', duration: '4 Night / 5 Days', image: imgSwat, badge: 'Trending' },
    { title: '5 Days Neelum Valley Romantic Trip', price: '85,000', location: 'Azad Kashmir', duration: '4 Night / 5 Days', image: imgSkardu, badge: 'New Tour' },
    { title: 'Hunza Valley by Air Luxury Tour', price: '105,000', location: 'Hunza', duration: '3 Night / 4 Days', image: imgHunza, badge: 'Premium Air' },
    { title: '3 Days Northern Valley Honeymoon Package', price: '20,500', location: 'Kaghan', duration: '2 Night / 3 Days', image: imgSwat, badge: 'Budget Friendly' },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      
      {/* 0. PREMIUM NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white">
                North<span className="text-white">Voyagers</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-white transition-colors">Home</a>
              <div className="relative group cursor-pointer">
                <span className="text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors">
                  Domestic Packages <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white">Hunza Valley</a>
                  <a href="#" className="block px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white">Skardu Tour</a>
                  <a href="#" className="block px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white">Swat & Malam Jabba</a>
                </div>
              </div>
              <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">International Tours</a>
              <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">About Us</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+9230000000" className="text-slate-300 hover:text-white p-2 transition-colors flex items-center gap-2 text-sm font-semibold">
                <Phone size={16} /> Contact
              </a>
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Book Caravan
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-400 hover:text-white p-2 transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden bg-slate-950 border-b border-slate-900 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
          <div className="px-4 space-y-2">
            <a href="#" className="block text-sm font-semibold text-white py-2.5 border-b border-slate-900">Home</a>
            <a href="#" className="block text-sm font-semibold text-slate-300 hover:text-white py-2.5 border-b border-slate-900">Domestic Packages</a>
            <a href="#" className="block text-sm font-semibold text-slate-300 hover:text-white py-2.5 border-b border-slate-900">International Tours</a>
            <a href="#" className="block text-sm font-semibold text-slate-300 hover:text-white py-2.5">About Us</a>
            <div className="pt-4 border-t border-slate-900 flex flex-col gap-2">
              <button className="w-full bg-slate-900 text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                <Phone size={14} /> Call Expert
              </button>
              <button className="w-full bg-emerald-600 text-white text-sm font-bold py-3 rounded-xl">
                Book Caravan
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. HERO & SEARCH SECTION */}
      <section className="relative min-h-[100vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-16 sm:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHunza} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 md:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-950/50 to-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-12 md:py-0">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs bg-emerald-500/10 px-3 py-1 rounded-full backdrop-blur-md inline-block mb-4 sm:mb-6">
            The Ultimate Northern Pakistan Experience
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.2] md:leading-[1.1] mb-4 sm:mb-6">
            Explore the World with <br className="hidden sm:inline"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              North Voyagers
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            Discover unmissable destinations, tailored tour packages, and unforgettable premium journeys across majestic peaks and valleys.
          </p>

          <div className="bg-white/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl mx-auto border border-white/20 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 text-left">
            <div className="p-2 sm:p-3 hover:bg-white/50 rounded-xl sm:rounded-2xl transition-colors duration-200 cursor-pointer flex flex-col justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><MapPin size={12}/> Destination</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">Where are you going?</span>
            </div>
            <div className="p-2 sm:p-3 hover:bg-white/50 rounded-xl sm:rounded-2xl transition-colors duration-200 cursor-pointer flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-200/60">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Calendar size={12}/> Timeline</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">Select Month / Date</span>
            </div>
            <div className="p-2 sm:p-3 hover:bg-white/50 rounded-xl sm:rounded-2xl transition-colors duration-200 cursor-pointer flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-200/60">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Users size={12}/> Tour Type</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">Family, Group, Couple</span>
            </div>
            <div className="flex items-center justify-center p-1 mt-2 md:mt-0">
              <button className="w-full h-12 md:h-full bg-slate-900 hover:bg-emerald-600 text-white text-sm font-bold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2">
                <Search size={16}/> Search Trips
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight px-2">Making Travel Seamless & Extraordinary</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-3">We structure every single package with ultimate comfort, security, and elite guidance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: <Award className="text-emerald-500" size={24}/>, title: 'Award Winning', desc: 'Top-rated tour management certifications for northern operations.' },
            { icon: <Compass className="text-blue-500" size={24}/>, title: 'Local Experts', desc: 'Deeply rooted guides who know every hidden stream and pass.' },
            { icon: <ShieldCheck className="text-indigo-500" size={24}/>, title: 'Trusted Payments', desc: '100% secure payment structures with seamless refund protocols.' },
            { icon: <Headphones className="text-rose-500" size={24}/>, title: '24/7 Support', desc: 'Our team is just a single call away from anywhere on the route.' }
          ].map((feat, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 shadow-inner">
                {feat.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POPULAR DESTINATIONS */}
      <section className="py-16 bg-slate-100/60 border-y border-slate-200/50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <div>
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-[10px] sm:text-xs">Handpicked Escapes</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-0.5">Popular Destinations</h2>
            </div>
            <button className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 flex items-center gap-1 shrink-0">
              See All <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto snap-x scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {destinations.map((dest, i) => (
              <div key={i} className="group relative h-80 sm:h-96 w-64 sm:w-auto shrink-0 snap-start rounded-2xl sm:rounded-3xl overflow-hidden shadow-md cursor-pointer">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white uppercase tracking-wide">
                    {dest.tours}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOMIZE TOUR CTA SECTION */}
      <section className="py-8 sm:py-12 px-4 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 px-6 py-12 shadow-2xl sm:px-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="absolute -top-24 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-1">Tailor-Made Adventures</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Can't find your ideal package? <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Customize your own trip.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Tell us your desired spots, timeline, and dynamic budgeting rules. Our travel coordinators will engineer a personalized experience down to the finest details.
            </p>
          </div>
          <div className="w-full lg:w-auto relative z-10 flex-shrink-0">
            <button className="w-full sm:w-auto bg-white hover:bg-emerald-500 hover:text-white text-slate-950 text-sm font-bold px-6 py-3.5 rounded-xl shadow-xl transition-all duration-300">
              Create Customized Tour
            </button>
          </div>
        </div>
      </section>

      {/* 5. FEATURED TRIPS */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full">Top Collections</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">Featured Active Tours</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5">Book seasonal fixed departures with premium luxury transit facilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredTrips.map((trip, i) => (
            <div key={i} className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-200">
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                  {trip.badge}
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-slate-800 flex items-center gap-1 shadow-sm">
                  <MapPin size={10}/> {trip.location}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                  {trip.duration}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2 leading-snug">
                  {trip.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 line-clamp-2">
                  Complete guided tour including luxury transport, standard hotel accommodations, and traditional dining arrangements.
                </p>

                <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase tracking-wider font-bold">Total Package</span>
                    <span className="text-xl sm:text-2xl font-black text-slate-900">Rs {trip.price}</span>
                  </div>
                  <button className="bg-slate-900 text-white p-3 rounded-full group-hover:bg-emerald-600 transition-colors duration-300 shadow-md">
                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SOCIAL EXPLORER GRID */}
      <section className="py-16 bg-slate-900 text-white px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest">#NorthVoyagers</span>
          <h2 className="text-2xl font-extrabold tracking-tight mt-1.5">Shared Moments from Our Explorers</h2>
          <p className="text-slate-400 text-xs mt-1.5">Follow our live journey updates across official streams.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {[
            { tag: '@explorer_pk', img: imgNeelum },
            { tag: 'Live Campfire', img: imgHunza },
            { tag: 'Summit 2026', img: imgSkardu },
            { tag: '@voyage_life', img: imgSwat }
          ].map((item, i) => (
            <div key={i} className="relative group rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800 shadow-lg">
              <img src={item.img} alt="Social feed" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] sm:text-xs font-semibold text-emerald-400 tracking-wider">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MODERN FOOTER */}
      <footer className="bg-slate-950 text-slate-400 pt-12 sm:pt-16 pb-8 border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-white font-black text-xl sm:text-2xl tracking-tight mb-3">North Voyagers</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Premium travel agency specializing in crafting absolute, secure, and unmatched trekking, family, and group tour services across Northern Pakistan.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="p-2 bg-slate-900 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300" aria-label="Youtube">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Tours & Services</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">International Fixed Frameworks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pakistan Corporate Expeditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Group Backpacking Challenges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Dynamic Itinerary Planner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Explore Destinations</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Hunza Valley Routes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skardu Glacial Bases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Swat Valley Meadows</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Neelum Valley Streams</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Subscribe</h4>
            <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">Get flash discount updates logs direct to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="absolute right-1.5 top-1.5 bg-emerald-600 hover:bg-emerald-500 text-white p-1.5 rounded-md transition-colors">
                <Send size={12}/>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 text-center text-[11px] text-slate-600 flex flex-col sm:flex-row justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} North Voyagers. Built with React & Tailwind.</span>
          <div className="flex gap-4 justify-center">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;