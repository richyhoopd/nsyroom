import React, { useState, useEffect } from 'react';
import rocknroll from './assets/cover1.png';
import NSYROOM from './assets/NSYROOM.png';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Space+Mono:wght@400;700&display=swap');
        
        body {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          width: 30px;
          height: 30px;
          border: 2px solid #ff0000;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.2s ease;
        }
        
        .logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          letter-spacing: -0.08em;
          text-transform: uppercase;
        }
        
        .nav-item {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          position: relative;
          font-weight: 400;
        }
        
        .nav-item:hover {
          text-decoration: line-through;
        }
        
        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.04;
          z-index: 100;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          animation: grain 8s steps(10) infinite;
        }
        
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(9%, 4%); }
          90% { transform: translate(-1%, 7%); }
        }
        
        .image-placeholder {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }
        
        .image-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 48%, rgba(255,0,0,0.02) 49%, rgba(255,0,0,0.02) 51%, transparent 52%);
          background-size: 30px 30px;
        }
        
        .basquiat-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          line-height: 0.9;
        }
        
        .scribble {
          position: relative;
        }
        
        .scribble::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: repeating-linear-gradient(
            90deg,
            #ff0000,
            #ff0000 2px,
            transparent 2px,
            transparent 6px
          );
        }
        
        .cross-out {
          position: relative;
        }
        
        .cross-out::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -5%;
          right: -5%;
          height: 3px;
          background: #ff0000;
          transform: rotate(-2deg);
        }
        
        .handwritten {
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          transform: rotate(-1deg);
        }
        
        .graffiti-box {
          border: 3px solid #fff;
          position: relative;
        }
        
        .graffiti-box::before {
          content: '×';
          position: absolute;
          top: -15px;
          right: -15px;
          font-size: 2rem;
          color: #ff0000;
          font-weight: 700;
        }
        
        .street-style {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 300;
          letter-spacing: -0.02em;
        }
        
        .rough-line {
          height: 2px;
          background: #fff;
          position: relative;
        }
        
        .rough-line::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 4px;
          background: #fff;
          clip-path: polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0);
        }
      `}</style>

      <div 
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="grain"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
        <div className="container mx-auto px-8 py-8 flex justify-between items-center">
          <h1 className="logo-text text-5xl md:text-6xl text-white cursor-pointer">
            NOISY ROOM
          </h1>
          <div className="flex gap-8 md:gap-12 items-center">
            <a href="#tracks" className="nav-item text-white hover:text-red-600">
              TRACKS
            </a>
            <a href="#info" className="nav-item text-white hover:text-red-600">
              INFO
            </a>
            <a href="#shows" className="nav-item text-white hover:text-red-600">
              SHOWS
            </a>
            <a href="#shop" className="nav-item text-white hover:text-red-600">
              SHOP
            </a>
          </div>
        </div>
      </nav>

    {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="relative z-10 px-8 w-full max-w-7xl mx-auto">

          
          {/* Big Centered Image */}
          <div className="w-full max-w-5xl mx-auto mt-5">
            {/* Replace 'rocknroll' with your actual image import */}
            <img src={NSYROOM} alt="Latest Drop" className="w-full h-auto object-cover" />
          </div>
                    <div className="flex flex-col items-center text-center mb-12">
            <div className="handwritten text-red-600 text-sm mb-6 uppercase tracking-wider">
              → Latest Drop / Out Now
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="basquiat-text text-5xl md:text-7xl lg:text-8xl">
              <span className="text-red-600">ALTERNATIVE</span>
            </div>
            <div className="basquiat-text text-5xl md:text-7xl lg:text-8xl text-white mb-8">
              EXPERIMENTS
            </div>
            <div className="handwritten text-white text-lg md:text-xl">
              (we make music in GDL)
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-32 px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="street-style text-white/60 text-sm mb-6 uppercase tracking-widest">
                Est. 2024 / GDL, MX
              </div>
              <h2 className="basquiat-text text-5xl md:text-6xl text-white mb-8 scribble inline-block">
                HOLA
                <br />
                COMO ESTAN?
              </h2>
            </div>
            <div>
              <p className="street-style text-white/80 text-xl mb-6 leading-relaxed">
                Sometimes hard crushing, sometimes romantic, sometimes weird.
              </p>
              <p className="street-style text-white/60 text-base leading-relaxed">
                Born in a room full of noise, made us crazy, made our families crazy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Section 1 */}
      <section className="relative h-screen">
        <div className="image-placeholder w-full h-full">
          <img src={rocknroll} alt="Rock n Roll" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black to-transparent">
          <div className="handwritten text-red-600 text-lg mb-2">
            13/11 2025
          </div>
          <h3 className="basquiat-text text-4xl md:text-6xl text-white">
            LIVE IN
            <br />
            SEMILLERO STUDIO
          </h3>
        </div>
      </section>

      {/* Split Section */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="bg-red-600 p-16 md:p-24 flex flex-col justify-center">
          <div className="handwritten text-black text-base mb-8">
            → what people say
          </div>
          <blockquote className="basquiat-text text-4xl md:text-5xl text-black leading-tight mb-12">
            "TOO LOUD"
            <br />
            "CAN'T HEAR
            <br />
            MYSELF THINK"
          </blockquote>
          <div className="street-style text-black/70 text-sm">
            — LITERALLY EVERYONE
          </div>
        </div>
        <div className="relative image-placeholder min-h-[50vh] md:min-h-0"></div>
      </section>

      {/* <section className="py-32 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="graffiti-box p-12 md:p-20 bg-black">
            <div className="handwritten text-red-600 text-sm mb-6 uppercase tracking-wider">
              Currently
            </div>
            <h3 className="basquiat-text text-5xl md:text-7xl text-white mb-8">
              MAKING
              <br />
              MORE
              <br />
              NOISE
            </h3>
            <div className="street-style text-white/70 text-base max-w-md">
              New recordings. New shows. Same attitude.
              <br />
              Follow along or don't.
            </div>
          </div>
        </div>
      </section> */}

      {/* Large Image Section 2 */}
      {/* <section className="relative h-screen">
        <div className="image-placeholder w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="handwritten text-white text-2xl md:text-3xl bg-black/50 backdrop-blur-sm px-12 py-8">
            (MORE IMAGES HERE)
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-black py-20 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <h2 className="logo-text text-6xl md:text-7xl text-white mb-8 md:mb-0">
              NOISY<br className="md:hidden" /> ROOM
            </h2>
            <div className="flex gap-12">
              <a href="#" className="text-white hover:text-red-600 transition-colors text-sm uppercase tracking-widest">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors text-sm uppercase tracking-widest">
                Spotify
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors text-sm uppercase tracking-widest">
                Bandcamp
              </a>
            </div>
          </div>
          <div className="rough-line mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="street-style text-white/40 text-xs mb-4 md:mb-0">
              © 2025 NOISY ROOM. ALL RIGHTS RESERVED OR WHATEVER.
            </div>
            <div className="handwritten text-white/60 text-sm">
              Made with too much coffee in Brooklyn
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;