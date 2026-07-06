import React, { useState } from 'react';
import { 
  MapPin, Calendar, Users, Search, Award, Compass, 
  ShieldCheck, Headphones, ArrowUpRight, ChevronDown, 
  Send, Menu, X, Phone, Heart, Star, Sparkles, MessageSquare
} from 'lucide-react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Public folder direct absolute paths
  const imgSwat = '/assets/swat.jfif';
  const imgNeelum = '/assets/nelum.jpg';
  const imgHunza = '/assets/hunza.jpg';
  const imgSkardu = '/assets/skardu.jpg';

  // Enhanced Destinations Grid Data
  const destinations = [
    { name: 'Hunza Valley', image: imgHunza, tours: '12+ Tours', rating: '4.9', tags: ['Culture', 'Peaks'] },
    { name: 'Swat Valley', image: imgSwat, tours: '8+ Tours', rating: '4.7', tags: ['Meadows', 'Rivers'] },
    { name: 'Skardu Capital', image: imgSkardu, tours: '15+ Tours', rating: '4.9', tags: ['Lakes', 'Glaciers'] },
    { name: 'Neelum Valley', image: imgNeelum, tours: '10+ Tours', rating: '4.8', tags: ['Forests', 'Waterfalls'] },
  ];

  // Upgraded Featured Trips
  const featuredTrips = [
    { title: '8 Days Naran Kaghan Tour with Shogran', price: '50,000', location: 'Naran Valley', duration: '7 Night / 8 Days', image: imgHunza, badge: 'Best Seller', reviews: '142' },
    { title: '4 Days Neelum Shogran Couple Tour', price: '110,000', location: 'Neelum Valley', duration: '3 Night / 4 Days', image: imgNeelum, badge: 'Couple Special', reviews: '98' },
    { title: '5 Days Swat Valley Tour from Lahore', price: '162,000', location: 'Swat Valley', duration: '4 Night / 5 Days', image: imgSwat, badge: 'Trending', reviews: '210' },
    { title: '5 Days Neelum Valley Romantic Trip', price: '85,000', location: 'Azad Kashmir', duration: '4 Night / 5 Days', image: imgSkardu, badge: 'New Tour', reviews: '45' },
    { title: 'Hunza Valley by Air Luxury Tour', price: '105,000', location: 'Hunza', duration: '3 Night / 4 Days', image: imgHunza, badge: 'Premium Air', reviews: '87' },
    { title: '3 Days Northern Valley Honeymoon Package', price: '20,500', location: 'Kaghan', duration: '2 Night / 3 Days', image: imgSwat, badge: 'Budget Friendly', reviews: '315' },
  ];

  // Modern Customer Reviews Data
  const customerReviews = [
    {
      name: 'Zainab Ahmed',
      role: 'Family Trip Organizer',
      location: 'Karachi',
      review: 'We booked a 5-day customized family package for Swat. The Coaster was brand new, hotel stays were exceptionally clean, and the tour guide felt like family. Highly recommended for family security!',
      rating: 5,
      date: 'June 2026'
    },
    {
      name: 'Bilal Khan',
      role: 'Software Engineer',
      location: 'Lahore',
      review: 'Amazing experience with North Voyagers on the Hunza luxury tour. The photography track checkpoints they managed were superb, and the itinerary was relaxed—no unnecessary rushing.',
      rating: 5,
      date: 'May 2026'
    },
    {
      name: 'Dr. Asad Raheem',
      role: 'Corporate Group Lead',
      location: 'Islamabad',
      review: 'Managed our annual corporate retreat pipeline with them. From seamless transport logistics to premium live music setup at Skardu, everything was top-tier and professionally executed.',
      rating: 5,
      date: 'Daily Departures'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-sky-500 selection:text-white overflow-x-hidden">
      
      {/* 0. LIVELY LIGHT NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-sky-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                <Compass className="text-sky-500" size={24} />
                North<span className="text-sky-600">Voyagers</span>
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-bold text-sky-600 border-b-2 border-sky-500 pb-1">Home</a>
              <div className="relative group cursor-pointer">
                <span className="text-sm font-semibold text-slate-600 hover:text-sky-600 flex items-center gap-1 transition-colors">
                  Domestic Packages <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </span>
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-sky-100 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-sky-50 hover:text-sky-600">Hunza Valley Gems</a>
                  <a href="#" className="block px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-sky-50 hover:text-sky-600">Skardu Expeditions</a>
                  <a href="#" className="block px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-sky-50 hover:text-sky-600">Swat & Malam Jabba</a>
                </div>
              </div>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">International Tours</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">About Us</a>
            </div>

            {/* CTA Group */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+9230000000" className="text-slate-600 hover:text-sky-600 p-2 transition-colors flex items-center gap-2 text-sm font-bold">
                <Phone size={16} className="text-sky-500" /> +92 300 000000
              </a>
              <button className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Book Caravan
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-sky-600 p-2 transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`md:hidden bg-white border-b border-sky-50 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
          <div className="px-4 space-y-2">
            <a href="#" className="block text-sm font-bold text-sky-600 py-2.5 border-b border-slate-100">Home</a>
            <a href="#" className="block text-sm font-semibold text-slate-600 py-2.5 border-b border-slate-100">Domestic Packages</a>
            <a href="#" className="block text-sm font-semibold text-slate-600 py-2.5 border-b border-slate-100">International Tours</a>
            <a href="#" className="block text-sm font-semibold text-slate-600 py-2.5">About Us</a>
          </div>
        </div>
      </nav>

      {/* 1. FRESH VIBRANT HERO SECTION */}
      <section className="relative min-h-[100vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 via-sky-50/20 to-white pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHunza} 
            alt="Vibrant Northern Landscape" 
            className="w-full h-full object-cover opacity-15 md:opacity-20 blend-luminosity"
          />
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center py-12 md:py-8">
          <span className="text-sky-700 font-bold uppercase tracking-widest text-[11px] sm:text-xs bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6 shadow-sm">
            <Sparkles size={12} className="text-amber-500 fill-amber-500" /> Pakistan's Premier Travel Caravan Framework
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Chase The Sun In Majestic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-500 to-amber-500">
              Northern Valleys
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 sm:mb-14 font-medium px-4">
            Skip the stress of logistics. Experience premium hospitality, curated photography tracks, and handpicked local stays across Pakistan.
          </p>

          {/* Lively Search bar */}
          <div className="bg-white p-4 rounded-3xl shadow-xl shadow-sky-900/5 max-w-5xl mx-auto border border-sky-100/80 grid grid-cols-1 md:grid-cols-4 gap-3 text-left">
            <div className="p-3 hover:bg-sky-50/50 rounded-2xl transition-colors duration-200 cursor-pointer flex flex-col justify-center">
              <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider flex items-center gap-1"><MapPin size={12}/> Destination</span>
              <span className="text-sm font-extrabold text-slate-800 mt-1">Where to explore?</span>
            </div>
            <div className="p-3 hover:bg-sky-50/50 rounded-2xl transition-colors duration-200 cursor-pointer flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
              <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider flex items-center gap-1"><Calendar size={12}/> Month Setup</span>
              <span className="text-sm font-extrabold text-slate-800 mt-1">Choose Timeline</span>
            </div>
            <div className="p-3 hover:bg-sky-50/50 rounded-2xl transition-colors duration-200 cursor-pointer flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
              <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider flex items-center gap-1"><Users size={12}/> Travel Style</span>
              <span className="text-sm font-extrabold text-slate-800 mt-1">Group / Family</span>
            </div>
            <div className="flex items-center justify-center p-1">
              <button className="w-full h-14 md:h-full bg-gradient-to-r from-sky-500 to-sky-600 text-white text-sm font-bold rounded-2xl shadow-md flex items-center justify-center gap-2">
                <Search size={16}/> Find My Trip
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION (BRIGHT CARDS) */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold text-[11px] uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full">Premium Execution</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">Why Travel Enthusiasts Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Award className="text-amber-500" size={24}/>, color: 'bg-amber-50', title: 'Top-Tier Hospitality', desc: 'Verified premium local hotels with continuous backup setups.' },
            { icon: <Compass className="text-sky-500" size={24}/>, color: 'bg-sky-50', title: 'Curated Itineraries', desc: 'No rushed timetables. Enjoy photography stops and local music nights.' },
            { icon: <ShieldCheck className="text-teal-500" size={24}/>, color: 'bg-teal-50', title: 'Family Security Focus', desc: 'Dedicated professional transit protocols with reliable tracking pipelines.' },
            { icon: <Headphones className="text-rose-500" size={24}/>, color: 'bg-rose-50', title: 'Realtime Help Desk', desc: 'Our coordination teams track your transport status 24/7.' }
          ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-sky-100/50 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300">
              <div className={`w-12 h-12 ${feat.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POPULAR DESTINATIONS */}
      <section className="py-20 bg-gradient-to-b from-white via-sky-50/40 to-white border-y border-sky-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sky-600 font-extrabold uppercase tracking-wider text-[11px] sm:text-xs block">Handpicked Paradises</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">Explore Popular Basins</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-md border border-sky-100 hover:border-sky-300 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[11px] font-bold text-amber-600 flex items-center gap-1 shadow-sm">
                    <Star size={12} className="fill-amber-500 text-amber-500" /> {dest.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-1.5 mb-2">
                    {dest.tags.map((tag, idx) => (
                      <span key={idx} className="bg-sky-50 text-sky-600 text-[10px] font-bold px-2 py-0.5 rounded-md">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{dest.name}</h3>
                  <p className="text-xs font-semibold text-slate-400 mt-1">{dest.tours} active this season</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM CTA */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-sky-500 to-teal-500 px-6 py-12 shadow-xl sm:px-16 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">Planning a Custom Group Trip?</h2>
            <p className="mt-3 text-sm text-sky-50 font-medium">Pick your target dates, hotel grade, and specific valleys. We'll handle the rest.</p>
          </div>
          <button className="w-full lg:w-auto bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-8 py-4 rounded-2xl transition-all duration-300 relative z-10">
            Launch Custom Planner
          </button>
        </div>
      </section>

      {/* 5. ACTIVE packages */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-sky-600 font-bold text-[11px] uppercase tracking-widest bg-sky-50 border border-sky-200/50 px-3 py-1 rounded-full">Top Departures</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">Featured Active Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTrips.map((trip, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-sky-100/60 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-60 overflow-hidden">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-extrabold text-sky-600-wider shadow-sm">{trip.badge}</div>
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-bold text-white flex items-center gap-1"><MapPin size={12} className="text-sky-400"/> {trip.location}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase mb-2">
                  <span>{trip.duration}</span>
                  <span className="flex items-center gap-0.5 text-amber-500"><Star size={12} className="fill-current"/> 4.8 ({trip.reviews})</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">{trip.title}</h3>
                <div className="mt-6 pt-5 border-t border-sky-50 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-slate-900">PKR {trip.price}</span>
                  </div>
                  <button className="bg-sky-50 text-sky-600 p-3.5 rounded-2xl"><ArrowUpRight size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NEW LIVELY CUSTOMER REVIEWS SECTION (Replaced Photo Gallery) */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50/50 border-t border-sky-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-[11px] uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full flex items-center justify-center gap-1.5 w-max mx-auto">
              <MessageSquare size={12} /> True Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">What Our Voyagers Say</h2>
            <p className="text-sm text-slate-500 mt-2 font-medium">Real reviews from families, couples, and corporate groups who traveled with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {customerReviews.map((rev, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-sky-100 shadow-sm shadow-sky-900/5 hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                {/* Decorative background accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-sky-400 to-teal-400" />
                
                <div>
                  {/* Stars Row */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                    "{rev.review}"
                  </p>
                </div>

                {/* User Info Footer */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{rev.name}</h4>
                    <span className="text-xs text-sky-600 font-semibold">{rev.role} &bull; {rev.location}</span>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-400 font-bold px-2 py-1 rounded-md">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-white text-slate-500 pt-16 pb-8 border-t border-sky-100 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-slate-900 font-black text-2xl tracking-tight mb-4 flex items-center gap-1.5"><Compass className="text-sky-500" size={20} /> NorthVoyagers</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Premium travel architectures specializing in secure, elite, and absolute group tour logs across Pakistan.</p>
          </div>
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase mb-4">Caravan Formats</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#" className="hover:text-sky-600">Corporate Retreat Pipelines</a></li>
              <li><a href="#" className="hover:text-sky-600">Family Fixed Frameworks</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase mb-4">Quick Valley Routes</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#" className="hover:text-sky-600">Hunza High Valleys</a></li>
              <li><a href="#" className="hover:text-sky-600">Swat Riverside Resorts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase mb-4">Stay Logged In</h4>
            <div className="relative">
              <input type="email" placeholder="Enter email address" className="w-full bg-slate-50 border border-sky-100 rounded-xl py-3 px-4 text-xs text-slate-800" />
              <button className="absolute right-1.5 top-1.5 bg-sky-500 text-white p-2 rounded-lg"><Send size={12}/></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-sky-50 text-center text-xs font-medium text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} North Voyagers. Built with React & Tailwind CSS.</span>
        </div>
      </footer>

    </div>
  );
};

export default Home;