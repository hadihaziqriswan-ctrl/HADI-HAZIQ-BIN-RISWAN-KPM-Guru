import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { 
  Trophy, 
  Medal, 
  Timer, 
  Map, 
  Users, 
  ChevronRight, 
  ChevronDown,
  Star,
  Zap,
  Award,
  Target,
  Clock
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const targetDate = new Date("2026-04-09T08:00:00").getTime();

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 mt-8">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hrs", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds }
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-track/10 border border-track/20 rounded-xl flex items-center justify-center text-track font-display font-bold text-2xl">
            {String(item.value).padStart(2, '0')}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

const achievements = [
  {
    id: 1,
    title: "MSSB Merentas Desa 2026",
    event: "Individual (L12)",
    athlete: "Theodor",
    result: "Rank #33",
    category: "Cross Country",
    icon: <Map className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "MSSB Merentas Desa 2026",
    event: "Individual (P12)",
    athlete: "Avril",
    result: "Rank #40",
    category: "Cross Country",
    icon: <Map className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "MSSB Merentas Desa 2026",
    event: "Individual (P12)",
    athlete: "illyvia",
    result: "Rank #57",
    category: "Cross Country",
    icon: <Map className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "MSSB Merentas Desa 2026",
    event: "Individual (L12)",
    athlete: "Robbin",
    result: "Rank #62",
    category: "Cross Country",
    icon: <Map className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "MSSB Merentas Desa 2026",
    event: "Individual (L12)",
    athlete: "Jarvis",
    result: "Rank #68",
    category: "Cross Country",
    icon: <Map className="w-5 h-5" />,
  },
];

const stats = [
  { label: "Gold Medals", value: "15", icon: <Medal className="text-accent" /> },
  { label: "Total Athletes", value: "32", icon: <Users className="text-blue-500" /> },
];

const merentasDesaResults = {
  overall: {
    lelaki: "No. 10",
    perempuan: "No. 11",
    keseluruhan: "No. 10"
  },
  boys: [
    { name: "Theodor", rank: 33, image: "https://lh3.googleusercontent.com/d/1ECHDULPW4200Tv8dVWWFS364pvFfKFbF" },
    { name: "Robbin", rank: 62, image: "https://lh3.googleusercontent.com/d/1D2jJkRDyaFmO_NQn8LDp7GCCgJkRyGA0" },
    { name: "Jarvis", rank: 68, image: "https://lh3.googleusercontent.com/d/1wZrWf5jTfXToPWPNsjUvEuAQJ08k6GgK" },
    { name: "Khedribvand", rank: 135, image: "https://lh3.googleusercontent.com/d/1UpYmJ_rBe-vzkKXZ3vJ_34egeukpGLQe" },
    { name: "Azzad", rank: 246, image: "https://lh3.googleusercontent.com/d/1HKL57IfTyeIm3zgiOWbjP0FhPq9NlNQj" },
  ],
  girls: [
    { name: "Avril", rank: 40, image: "https://lh3.googleusercontent.com/d/1A60ZT1vrVjoky9-AhsHEdhsS803iLP3h" },
    { name: "illyvia", rank: 57, image: "https://lh3.googleusercontent.com/d/1rDk2pvcPo7YztSnVJGypvVSfFQTT_S4X" },
    { name: "Maxclyn", rank: 84, image: "https://lh3.googleusercontent.com/d/1eNILaUwzNmXPV9EKU_iWDsUaS2J7NwRY" },
    { name: "Ashley", rank: 228, image: "https://lh3.googleusercontent.com/d/1Qhbbx9k-MrApcjNZVxicBnWIq6e7DHpc" },
    { name: "Clarisse", rank: 283, image: "https://lh3.googleusercontent.com/d/1cNoTNZ21UAScnnc5GTVEf-vGehO2J27F" },
  ]
};

const galleryImages = [
  { url: "https://lh3.googleusercontent.com/d/1LZv4HyaNe_MpPpAxzBX-xl5asevMi5nN", category: "Merentas Desa", title: "Cross Country Moment" },
  { url: "https://lh3.googleusercontent.com/d/11kdRWhL4PdIXAjEjK8QpqrPr2SDqfBlr", category: "Merentas Desa", title: "Determination" },
  { url: "https://lh3.googleusercontent.com/d/1VxtDvarrRv2FhSpBT2fqfjJnRSMxadO8", category: "Merentas Desa", title: "Team Effort" },
  { url: "https://lh3.googleusercontent.com/d/1xvsOLZBBud0XFUBMgG-kdbQOT8_gUu8f", category: "Merentas Desa", title: "Finish Line" },
  { url: "https://lh3.googleusercontent.com/d/1bLLA93tyeKwAXYGa2WOqdxCxh_o-fS15", category: "Merentas Desa", title: "Event Highlight" },
  { url: "https://lh3.googleusercontent.com/d/1ABDMDLmaytk4zupqGkzf4lg7-DG8UXkC", category: "Merentas Desa", title: "Race Day" },
  { url: "https://lh3.googleusercontent.com/d/1QTyX-50vbZCA_5fsRQQh3JvCt55MR4Av", category: "Merentas Desa", title: "Athlete Spirit" },
  { url: "https://lh3.googleusercontent.com/d/1dyxz4s3xcC-OdRmGLEbYbbUnaNaEps1H", category: "Merentas Desa", title: "Merentas Desa Action" },
  { url: "https://lh3.googleusercontent.com/d/1llIMfkzAKrKYM8hXji6hBAU8PFWV7tPB", category: "Merentas Desa", title: "School Pride" },
  { url: "https://lh3.googleusercontent.com/d/1A60ZT1vrVjoky9-AhsHEdhsS803iLP3h", category: "Merentas Desa", title: "Avril" },
  { url: "https://lh3.googleusercontent.com/d/1UpYmJ_rBe-vzkKXZ3vJ_34egeukpGLQe", category: "Merentas Desa", title: "Khedribvand" },
  { url: "https://lh3.googleusercontent.com/d/1D2jJkRDyaFmO_NQn8LDp7GCCgJkRyGA0", category: "Merentas Desa", title: "Robbin" },
  { url: "https://lh3.googleusercontent.com/d/1wZrWf5jTfXToPWPNsjUvEuAQJ08k6GgK", category: "Merentas Desa", title: "Jarvis" },
  { url: "https://lh3.googleusercontent.com/d/1HKL57IfTyeIm3zgiOWbjP0FhPq9NlNQj", category: "Merentas Desa", title: "Azzad" },
  { url: "https://lh3.googleusercontent.com/d/1rDk2pvcPo7YztSnVJGypvVSfFQTT_S4X", category: "Merentas Desa", title: "Illyvia" },
  { url: "https://lh3.googleusercontent.com/d/1eNILaUwzNmXPV9EKU_iWDsUaS2J7NwRY", category: "Merentas Desa", title: "Maxclyn" },
  { url: "https://lh3.googleusercontent.com/d/1Qhbbx9k-MrApcjNZVxicBnWIq6e7DHpc", category: "Merentas Desa", title: "Ashley" },
];

export default function App() {
  const [viewerStats, setViewerStats] = useState({ live: 1, total: 0 });

  useEffect(() => {
    // Fetch initial stats
    fetch("/api/stats")
      .then(res => res.json())
      .then(data => setViewerStats(data))
      .catch(err => console.error("Failed to fetch stats", err));

    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}`;
    const socket = new WebSocket(wsUrl);

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "VIEWER_STATS") {
          setViewerStats({ live: data.live, total: data.total });
        }
      } catch (err) {
        console.error("Failed to parse WebSocket message", err);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  const [isB10Expanded, setIsB10Expanded] = useState(false);
  const [isB11Expanded, setIsB11Expanded] = useState(false);
  const [isB12Expanded, setIsB12Expanded] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/16FRnWS7xfkPJP-KaPe-shf9B1jtkEci1" 
                  alt="SJK Sungai Jaong Logo" 
                  className="w-8 h-8 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
                SJK SUNGAI JAONG SPORTS
              </span>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 ml-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">{viewerStats.live} Live</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-50 text-zinc-500 rounded-full border border-zinc-100 ml-2">
                <Users className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">{viewerStats.total} Total Views</span>
              </div>
              
              {/* Mobile Stats - More compact */}
              <div className="flex sm:hidden items-center gap-2 ml-2">
                <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold">{viewerStats.live}</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-zinc-50 text-zinc-500 rounded-full border border-zinc-100">
                  <Users className="w-2.5 h-2.5" />
                  <span className="text-[10px] font-bold">{viewerStats.total}</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex gap-6 text-sm font-medium text-zinc-600">
              <a href="#track-field" className="hover:text-primary transition-colors">Track & Field</a>
              <a href="#merentas-desa" className="hover:text-primary transition-colors">Merentas Desa</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              <a href="#hall-of-fame" className="hover:text-primary transition-colors">Hall of Fame</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/d/16FRnWS7xfkPJP-KaPe-shf9B1jtkEci1" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3 h-3 fill-accent" />
              Excellence in Motion
            </div>
            <h1 className="font-display text-6xl sm:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              CHAMPIONS <br />
              <span className="text-accent">BEYOND</span> <br />
              LIMITS.
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
              Celebrating the speed, endurance, and spirit of SJK Sungai Jaong's finest athletes in Track & Field and Merentas Desa.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                View Achievements <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                School Records
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-zinc-100 flex flex-col gap-2"
              >
                <div className="p-2 w-fit rounded-lg bg-zinc-50">
                  {stat.icon}
                </div>
                <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Star Highlights Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-zinc-200" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-sm">
              <Star className="w-4 h-4 fill-accent" />
              Star Highlights
            </div>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Theodor",
                rank: "#33",
                category: "L12 Individual",
                image: "https://lh3.googleusercontent.com/d/1ECHDULPW4200Tv8dVWWFS364pvFfKFbF",
                achievement: "Top Performer for Boys L12",
                color: "bg-emerald-500"
              },
              {
                name: "Avril",
                rank: "#40",
                category: "P12 Individual",
                image: "https://lh3.googleusercontent.com/d/1A60ZT1vrVjoky9-AhsHEdhsS803iLP3h",
                achievement: "Top Performer for Girls P12",
                color: "bg-pink-500"
              },
              {
                name: "Jarvis",
                rank: "#68",
                category: "L12 Individual",
                image: "https://lh3.googleusercontent.com/d/1wZrWf5jTfXToPWPNsjUvEuAQJ08k6GgK",
                achievement: "Consistent Pace & Grit",
                color: "bg-blue-500"
              }
            ].map((star, i) => (
              <motion.div
                key={star.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-primary aspect-[16/9] flex items-center"
              >
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                  <img src={star.image} alt={star.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
                </div>
                
                <div className="relative p-10 z-10">
                  <div className={cn("inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-white mb-4", star.color)}>
                    Future Athlete
                  </div>
                  <h3 className="text-4xl font-display font-black text-white mb-2">{star.name}</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-accent text-2xl font-display font-bold">{star.rank}</div>
                    <div className="h-4 w-px bg-white/20" />
                    <div className="text-zinc-400 font-medium uppercase tracking-wider text-xs">{star.category}</div>
                  </div>
                  <p className="text-zinc-300 text-sm max-w-xs italic">
                    "{star.achievement}"
                  </p>
                </div>

                <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Star className="w-24 h-24 text-accent stroke-[0.5px]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* Track & Field Section */}
        <section id="track-field" className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-track font-bold uppercase tracking-widest text-sm mb-4">
              <Timer className="w-4 h-4" />
              Speed & Precision
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
              Track and Field <br />
              Athletes.
            </h2>
            <div className="mb-8 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">
                <Clock className="w-4 h-4" />
                Next Event: 9 April 2026
              </div>
              <CountdownTimer />
            </div>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              From the explosive 100m sprints to the technical precision of the long jump, our athletes have consistently pushed the boundaries of what's possible.
            </p>
            <div className="space-y-6">
              {/* B10 Collapsible Section */}
              <div className="border border-zinc-200 rounded-3xl overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setIsB10Expanded(!isB10Expanded)}
                  className="w-full flex items-center justify-between p-6 hover:bg-zinc-50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-track/10 flex items-center justify-center text-track">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-display font-bold text-primary">B10 Athletes</h3>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">L10 & P10 Categories</p>
                    </div>
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center transition-transform duration-300",
                    isB10Expanded ? "rotate-180 bg-track text-white border-track" : "bg-white text-zinc-400 group-hover:border-zinc-300"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isB10Expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 space-y-12 border-t border-zinc-100 bg-zinc-50/30">
                        {[
                          {
                            category: "L10",
                            athletes: [
                              { name: "Hayyan", events: ["80M"] },
                              { name: "Keegan", events: ["80M", "Lompat Jauh"] },
                              { name: "Rayyan", events: ["100M"] },
                              { name: "Faiq", events: ["Lompat Jauh"] },
                              { name: "Jericho", events: ["Lontar Peluru"] },
                              { name: "Adrian Raymond", events: ["Lontar Peluru"] }
                            ]
                          },
                          {
                            category: "P10",
                            athletes: [
                              { name: "Eunice", events: ["80M", "Lompat Tinggi"] },
                              { name: "Reverly", events: ["80M", "Lontar Peluru"] },
                              { name: "Jing Wen", events: ["100M", "Lompat Jauh"] },
                              { name: "Clarissa", events: ["Lompat Jauh"] },
                              { name: "Jeannea", events: ["100M", "Lompat Jauh"] }
                            ]
                          }
                        ].map((group, groupIdx) => (
                          <div key={group.category} className="space-y-4">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="px-3 py-1 bg-track text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
                                Category: {group.category}
                              </div>
                              <div className="h-px flex-1 bg-zinc-200" />
                            </div>
                            
                            {group.athletes.map((athlete, idx) => (
                              <motion.div 
                                key={athlete.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative flex items-center gap-6 p-4 rounded-2xl bg-white border border-zinc-100 hover:border-track/30 hover:shadow-xl hover:shadow-track/5 transition-all duration-300"
                              >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-xl font-display font-black text-zinc-300 group-hover:bg-track group-hover:text-white transition-colors duration-300">
                                  {String(idx + 1).padStart(2, '0')}
                                </div>
                                
                                <div className="flex-1">
                                  <h4 className="font-bold text-zinc-900 group-hover:text-track transition-colors">{athlete.name}</h4>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {athlete.events.map(event => (
                                      <span key={event} className="px-2 py-0.5 bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-wider rounded-md group-hover:bg-track/10 group-hover:text-track transition-colors">
                                        {event}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                  <ChevronRight className="w-5 h-5 text-track" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* B11 Collapsible Section */}
              <div className="border border-zinc-200 rounded-3xl overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setIsB11Expanded(!isB11Expanded)}
                  className="w-full flex items-center justify-between p-6 hover:bg-zinc-50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-track/10 flex items-center justify-center text-track">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-display font-bold text-primary">B11 Athletes</h3>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">L11 & P11 Categories</p>
                    </div>
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center transition-transform duration-300",
                    isB11Expanded ? "rotate-180 bg-track text-white border-track" : "bg-white text-zinc-400 group-hover:border-zinc-300"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isB11Expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 space-y-12 border-t border-zinc-100 bg-zinc-50/30">
                        {[
                          {
                            category: "L11",
                            athletes: [
                              { name: "Robbin", events: ["100M", "Lompat Tinggi"] },
                              { name: "Khedribvand", events: ["100M", "Lompat Jauh"] },
                              { name: "Celvin", events: ["200M"] },
                              { name: "Gerald", events: ["200M", "80M Berpagar"] },
                              { name: "Alexson", events: ["80M Berpagar"] },
                              { name: "Ben Yuan", events: ["Lompat Tinggi"] },
                              { name: "Admin", events: ["Lompat Jauh"] },
                              { name: "Chris Samuel", events: ["Lontar Peluru"] }
                            ]
                          },
                          {
                            category: "P11",
                            athletes: [
                              { name: "Avril", events: ["100M", "Lompat Tinggi"] },
                              { name: "Ashley", events: ["200M", "Lompat Jauh"] },
                              { name: "Illyvia", events: ["200M", "Lontar Peluru"] }
                            ]
                          }
                        ].map((group, groupIdx) => (
                          <div key={group.category} className="space-y-4">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="px-3 py-1 bg-track text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
                                Category: {group.category}
                              </div>
                              <div className="h-px flex-1 bg-zinc-200" />
                            </div>
                            
                            {group.athletes.map((athlete, idx) => (
                              <motion.div 
                                key={athlete.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative flex items-center gap-6 p-4 rounded-2xl bg-white border border-zinc-100 hover:border-track/30 hover:shadow-xl hover:shadow-track/5 transition-all duration-300"
                              >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-xl font-display font-black text-zinc-300 group-hover:bg-track group-hover:text-white transition-colors duration-300">
                                  {String(idx + 1).padStart(2, '0')}
                                </div>
                                
                                <div className="flex-1">
                                  <h4 className="font-bold text-zinc-900 group-hover:text-track transition-colors">{athlete.name}</h4>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {athlete.events.map(event => (
                                      <span key={event} className="px-2 py-0.5 bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-wider rounded-md group-hover:bg-track/10 group-hover:text-track transition-colors">
                                        {event}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                  <ChevronRight className="w-5 h-5 text-track" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* B12 Collapsible Section */}
              <div className="border border-zinc-200 rounded-3xl overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setIsB12Expanded(!isB12Expanded)}
                  className="w-full flex items-center justify-between p-6 hover:bg-zinc-50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-track/10 flex items-center justify-center text-track">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-display font-bold text-primary">B12 Athletes</h3>
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">L12 & P12 Categories</p>
                    </div>
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center transition-transform duration-300",
                    isB12Expanded ? "rotate-180 bg-track text-white border-track" : "bg-white text-zinc-400 group-hover:border-zinc-300"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isB12Expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 space-y-12 border-t border-zinc-100 bg-zinc-50/30">
                        {[
                          {
                            category: "L12",
                            athletes: [
                              { name: "Aazad", events: ["100M", "80M Berpagar"] },
                              { name: "Jarvis", events: ["100M", "Lompat Tinggi"] },
                              { name: "William", events: ["200M", "Lompat Jauh"] },
                              { name: "Theodor", events: ["200M", "Lompat Tinggi"] },
                              { name: "Ariq Ziqri", events: ["Lontar Peluru"] },
                              { name: "Chris Evans", events: ["Lontar Peluru"] },
                              { name: "Daniel Mickhael", events: ["Lontar Peluru"] },
                              { name: "Michelle Steanly", events: ["Lontar Peluru"] }
                            ]
                          },
                          {
                            category: "P12",
                            athletes: [
                              { name: "Maxclyn", events: ["100M", "200M"] },
                              { name: "Clarisse", events: ["100M", "Lompat Jauh"] },
                              { name: "Yancy", events: ["200M", "80M Berpagar"] },
                              { name: "Hong Chen Ling", events: ["Lontar Peluru"] },
                              { name: "Jessy Wong", events: ["Lontar Peluru"] }
                            ]
                          }
                        ].map((group, groupIdx) => (
                          <div key={group.category} className="space-y-4">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="px-3 py-1 bg-track text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
                                Category: {group.category}
                              </div>
                              <div className="h-px flex-1 bg-zinc-200" />
                            </div>
                            
                            {group.athletes.map((athlete, idx) => (
                              <motion.div 
                                key={athlete.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative flex items-center gap-6 p-4 rounded-2xl bg-white border border-zinc-100 hover:border-track/30 hover:shadow-xl hover:shadow-track/5 transition-all duration-300"
                              >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-xl font-display font-black text-zinc-300 group-hover:bg-track group-hover:text-white transition-colors duration-300">
                                  {String(idx + 1).padStart(2, '0')}
                                </div>
                                
                                <div className="flex-1">
                                  <h4 className="font-bold text-zinc-900 group-hover:text-track transition-colors">{athlete.name}</h4>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {athlete.events.map(event => (
                                      <span key={event} className="px-2 py-0.5 bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-wider rounded-md group-hover:bg-track/10 group-hover:text-track transition-colors">
                                        {event}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                  <ChevronRight className="w-5 h-5 text-track" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-200 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/track/800/800" 
                alt="Track and Field" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-2xl p-6 flex flex-col justify-end shadow-xl">
              <Award className="w-8 h-8 text-primary mb-4" />
              <div className="text-2xl font-display font-bold text-primary leading-none">15 GOLD</div>
              <div className="text-xs text-primary/60 font-bold uppercase tracking-wider mt-1">MSSR ZON BARAM HILIR 2025</div>
            </div>
          </div>
        </section>

        {/* Merentas Desa Section */}
        <section id="merentas-desa" className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-200 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/crosscountry/800/800" 
                  alt="Merentas Desa" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-600 rounded-2xl p-8 flex flex-col justify-end shadow-xl text-white">
                <Map className="w-10 h-10 text-white mb-6" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-xs font-bold uppercase opacity-60">Lelaki</span>
                    <span className="text-xl font-display font-bold">{merentasDesaResults.overall.lelaki}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-xs font-bold uppercase opacity-60">Perempuan</span>
                    <span className="text-xl font-display font-bold">{merentasDesaResults.overall.perempuan}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-bold uppercase opacity-60">Keseluruhan</span>
                    <span className="text-xl font-display font-bold text-accent">{merentasDesaResults.overall.keseluruhan}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-field font-bold uppercase tracking-widest text-sm mb-4">
                <Users className="w-4 h-4" />
                Endurance & Grit
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                Merentas Desa <br />
                Champions.
              </h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                Our cross-country runners demonstrate incredible stamina and mental toughness, conquering challenging terrains across the district. This year, our team achieved a remarkable Top 10 overall finish.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-200">
                  <div className="text-2xl font-display font-bold text-primary">No. 10</div>
                  <div className="text-xs text-zinc-500 font-bold uppercase">Overall Rank</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-200">
                  <div className="text-2xl font-display font-bold text-primary">10 Athletes</div>
                  <div className="text-xs text-zinc-500 font-bold uppercase">Top Performers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Results Bento Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Boys Results */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-xl shadow-black/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">Keputusan Lelaki</h3>
              </div>
              <div className="space-y-4">
                {merentasDesaResults.boys.map((boy, i) => (
                  <div key={boy.name} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-200">
                        <img src={boy.image} alt={boy.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-primary">{boy.name}</div>
                          {boy.name === "Jarvis" && <Star className="w-3 h-3 fill-accent text-accent" />}
                        </div>
                        <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Athlete L12</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-zinc-400">Rank</div>
                      <div className="text-xl font-display font-bold text-primary">#{boy.rank}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Girls Results */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-xl shadow-black/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">Keputusan Perempuan</h3>
              </div>
              <div className="space-y-4">
                {merentasDesaResults.girls.map((girl, i) => (
                  <div key={girl.name} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-pink-200 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-200">
                        <img src={girl.image} alt={girl.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-primary">{girl.name}</div>
                          {girl.name === "Avril" && <Star className="w-3 h-3 fill-accent text-accent" />}
                        </div>
                        <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Athlete P12</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-zinc-400">Rank</div>
                      <div className="text-xl font-display font-bold text-primary">#{girl.rank}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section id="gallery" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Merentas Desa Gallery</h2>
            <p className="text-zinc-500 mb-8">Capturing the moments of triumph and determination from our cross-country events.</p>
            <a 
              href="https://drive.google.com/drive/folders/1GttKBmc2LO2SlVE1-tllDUUFiuagt3Wx?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-black/10"
            >
              <Map className="w-4 h-4" />
              View Full Google Drive Gallery
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.url}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 shadow-lg"
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{image.category}</span>
                  <span className="text-white font-bold text-sm leading-tight">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Merentas Desa Achievements Table */}
        <section id="hall-of-fame" className="pt-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Merentas Desa Highlights</h2>
            <p className="text-zinc-500">Top individual performances from the MSSB Merentas Desa 2026 competition.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-zinc-100 overflow-hidden">
            <div className="hidden sm:grid grid-cols-4 p-6 border-b border-zinc-100 bg-zinc-50/50 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <div>Athlete</div>
              <div>Event</div>
              <div>Achievement</div>
              <div className="text-right">Competition</div>
            </div>
            <div className="divide-y divide-zinc-100">
              {achievements.map((item) => (
                <div key={item.id} className="grid sm:grid-cols-4 p-6 items-center hover:bg-zinc-50 transition-colors group">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-accent group-hover:text-primary transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-primary">{item.athlete}</div>
                      <div className="text-xs text-zinc-500 sm:hidden">{item.event}</div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-zinc-600 font-medium">{item.event}</div>
                  <div>
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider",
                      item.result.includes("Gold") ? "bg-accent/20 text-accent-700 border border-accent/30" : 
                      item.result.includes("Silver") ? "bg-zinc-100 text-zinc-700 border border-zinc-200" :
                      "bg-blue-50 text-blue-700 border border-blue-100"
                    )}>
                      {item.result}
                    </span>
                  </div>
                  <div className="text-right text-xs font-bold text-zinc-400 mt-2 sm:mt-0">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/d/16FRnWS7xfkPJP-KaPe-shf9B1jtkEci1" 
                    alt="SJK Sungai Jaong Logo" 
                    className="w-10 h-10 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="font-display font-bold text-xl leading-none">
                  SJK <br />
                  <span className="text-accent">SUNGAI JAONG</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Nurturing champions through discipline, perseverance, and sportsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Sports</h4>
                <ul className="space-y-4 text-sm text-zinc-400">
                  <li><a href="#" className="hover:text-white transition-colors">Track & Field</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Merentas Desa</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Badminton</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Table Tennis</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
                <ul className="space-y-4 text-sm text-zinc-400">
                  <li><a href="#" className="hover:text-white transition-colors">Training Schedule</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Hall of Fame</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Coach</a></li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Stay Updated</h4>
              <p className="text-xs text-zinc-400 mb-6">Get the latest results and announcements directly to your inbox.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accent transition-colors"
                />
                <button className="bg-accent text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-accent/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
            <div className="flex flex-col gap-1">
              <p>© 2024 SJK Sungai Jaong. All rights reserved.</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span>{viewerStats.live} Live Now</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Users className="w-3 h-3" />
                  <span>{viewerStats.total} Total Platform Views</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
