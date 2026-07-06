import React, { useState } from 'react';
import { 
  MapPin, Calendar, Compass, ShieldCheck, ArrowRight, 
  ChevronDown, Send, Menu, X, Phone, Star, Sparkles, 
  MessageSquare, Layers, HelpCircle, CheckCircle2
} from 'lucide-react';

const New = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const imgSwat = '/assets/swat.jfif';
  const imgNeelum = '/assets/nelum.jpg';
  const imgHunza = '/assets/hunza.jpg';
  const imgSkardu = '/assets/skardu.jpg';

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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-sky-500 selection:text-white">
      
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 bg-white/70 backdrop-blur-xl border border-sky-100/50 rounded-[2rem] shadow-lg shadow-sky-900/5 transition-all duration-300">
        <div className="px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-2">
            <Compass className="text-sky-500 animate-spin-slow" size={26} />
            North<span className="text-sky-600 font-medium">Voyagers</span>
          </span>

          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <a href="#" className="text-sky-600 font-bold bg-sky-50 px-4 py-2 rounded-full">Explore Hub</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Our Standard</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Reviews</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Framework</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+9230000000" className="text-slate-600 hover:text-sky-600 flex items-center gap-2 text-sm font-bold">
              <Phone size={16} className="text-sky-500" /> +92 300 00000
            </a>
            <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md">
              Book Caravan
            </button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-700 p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-tr from-sky-100/60 via-white to-amber-50/40">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/10 to-teal-500/10 border border-sky-200/50 px-4 py-2 rounded-full text-xs font-bold text-sky-700 shadow-sm">
              <Sparkles size={14} className="text-amber-500 fill-amber-500" /> Next-Gen Anti-Lag Booking Architecture
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
              Experience <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-teal-500">
                Pure Northern
              </span> <br />
              Hospitality.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl leading-relaxed">
              No generic packages. We build dynamic travel tracks featuring premium transit coasters, continuous logistics tracking, and curated photography stations.
            </p>

            <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-sky-100 shadow-xl shadow-sky-900/5 max-w-lg flex flex-col sm:flex-row gap-2">
              <div className="flex-grow flex items-center gap-2 px-3 py-2">
                <MapPin className="text-sky-500 flex-shrink-0" size={18} />
                <input type="text" placeholder="Search Valley (e.g. Hunza, Swat)..." className="w-full bg-transparent text-sm focus:outline-none font-semibold placeholder-slate-400" />
              </div>
              <button className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-sky-500/20 flex items-center justify-center gap-2">
                Initialize Search <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[500px] sm:h-[600px] w-full flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-sky-300/40 rounded-full blur-3xl -top-10 -left-10 pointer-events-none animate-pulse" />
            <div className="absolute w-72 h-72 bg-amber-200/30 rounded-full blur-3xl -bottom-10 -right-10 pointer-events-none" />

            <div className="absolute w-4/5 h-[75%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-3deg] hover:rotate-0 transition-all duration-700 group transform-gpu will-change-transform z-20">
              <img src={imgHunza} alt="Hunza Grid" loading="lazy" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-all duration-700 ease-out transform-gpu will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 text-white text-lg font-black bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl">Hunza Ridge</span>
            </div>

            <div className="absolute w-[60%] h-[50%] right-0 top-6 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white rotate-[6deg] hover:rotate-0 transition-all duration-700 group transform-gpu will-change-transform z-10 opacity-80 hover:opacity-100">
              <img src={imgSwat} alt="Swat Grid" loading="lazy" className="w-full h-full object-cover transform-gpu will-change-transform" />
            </div>

            <div className="absolute w-[45%] h-[35%] left-0 bottom-4 rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white rotate-[-12deg] hover:rotate-0 transition-all duration-700 group transform-gpu will-change-transform z-30">
              <img src={imgNeelum} alt="Neelum Grid" loading="lazy" className="w-full h-full object-cover transform-gpu will-change-transform" />
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-sky-600 font-black text-xs uppercase tracking-widest bg-sky-100/60 px-3 py-1 rounded-full">Curated Tracks</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Active Departures Hub</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-slate-100 p-2 rounded-2xl w-max">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 ${activeTab === cat.id ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map((trip, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl border border-sky-100/50 transition-all duration-300 flex flex-col h-full transform-gpu">
              
              <div className="relative h-64 overflow-hidden bg-slate-100 m-3 rounded-[2rem]">
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform transform-gpu"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-sky-600 shadow-sm flex items-center gap-1">
                  <Star size={12} className="fill-sky-500 text-sky-500" /> {trip.rating}
                </div>
                <div className="absolute bottom-4 left-4 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold text-white flex items-center gap-1">
                  <MapPin size={12} className="text-sky-400"/> {trip.location}
                </div>
              </div>

              <div className="p-6 pt-2 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{trip.duration} Package</span>
                    <span>{trip.views} interested</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors line-clamp-2">
                    {trip.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-sky-50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">Estimated Ticket</span>
                    <span className="text-2xl font-black text-slate-900">PKR {trip.price}</span>
                  </div>
                  <button className="bg-slate-900 group-hover:bg-sky-500 text-white group-hover:text-white p-3.5 rounded-full transition-all duration-300 shadow-sm">
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-sky-100 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full inline-flex items-center gap-1">
              <MessageSquare size={12} /> Verified Logs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">What Our Voyagers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Zainab Ahmed', role: 'Family Trip Organizer', loc: 'Karachi', text: 'We booked a 5-day customized family package for Swat. The Coaster was brand new, hotel stays were exceptionally clean.' },
              { name: 'Bilal Khan', role: 'Software Engineer', loc: 'Lahore', text: 'Amazing experience with North Voyagers on the Hunza luxury tour. The photography track checkpoints they managed were superb.' },
              { name: 'Dr. Asad Raheem', role: 'Corporate Group Lead', loc: 'Islamabad', text: 'Managed our annual corporate retreat pipeline with them. From seamless transport logistics to premium live music setup at Skardu.' }
            ].map((rev, i) => (
              <div key={i} className="bg-white/80 border border-sky-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between transform-gpu">
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={14} className="fill-amber-500 text-amber-500" />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium italic">"{rev.text}"</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <h4 className="text-base font-bold text-slate-900">{rev.name}</h4>
                  <span className="text-xs text-sky-600 font-semibold">{rev.role} &bull; {rev.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white text-slate-500 pt-16 pb-8 border-t border-sky-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-slate-900 font-black text-xl tracking-tight flex items-center gap-2">
              <Compass className="text-sky-500" size={22} /> NorthVoyagers
            </h3>
            <p className="text-xs font-medium leading-relaxed max-w-sm">
              Premium travel architectures specializing in crafting secure, elite, and absolute group tour logs across majestic valleys of Pakistan.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider mb-4">Framework Formats</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#" className="hover:text-sky-600">Corporate Retreat Pipelines</a></li>
              <li><a href="#" className="hover:text-sky-600">Family Fixed Frameworks</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider mb-4">Quick Valley Routes</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#" className="hover:text-sky-600">Hunza High Valleys</a></li>
              <li><a href="#" className="hover:text-sky-600">Swat Riverside Resorts</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Stay Logged In</h4>
            <div className="flex bg-slate-50 border border-sky-100 rounded-xl p-1">
              <input type="email" placeholder="Email Address" className="w-full bg-transparent px-3 text-xs focus:outline-none" />
              <button className="bg-sky-500 text-white p-2.5 rounded-lg"><Send size={12}/></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-sky-50 text-center text-xs font-medium text-slate-400">
          <span>&copy; {new Date().getFullYear()} North Voyagers. Enhanced Performance Structure.</span>
        </div>
      </footer>

    </div>
  );
};

export default New;