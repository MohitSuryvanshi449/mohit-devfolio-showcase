import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import reactIcon from '@/assets/react-icon.png';
import jsIcon from '@/assets/js-icon.png';
import htmlIcon from '@/assets/html-icon.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-sparkle"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-blue-400 rounded-full animate-sparkle" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-sparkle" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/60 to-cyan-900/40" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-slide-up">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-typewriter inline-block">Mohit</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-white/90 mb-8 font-light animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Front-end Web Developer | <span className="text-cyan-300 animate-pulse">JavaScript</span> & <span className="text-blue-300 animate-pulse" style={{ animationDelay: '1s' }}>React</span> Expert
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 animate-slide-up hover:bg-white/10 transition-all duration-500 hover:scale-105" style={{ animationDelay: '1s' }}>
              Passionate about creating innovative web solutions that bridge the gap between 
              stunning frontend experiences and robust backend architectures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group w-full sm:w-auto hover:shadow-cyan-500/50 animate-pulse">
              <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-full backdrop-blur-sm group w-full sm:w-auto transform hover:scale-110 transition-all duration-300 hover:shadow-white/30 hover:border-white/50">
              <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform group-hover:text-cyan-300" />
              Hire Me
            </Button>
          </div>

          <div className="flex justify-center space-x-8 animate-slide-up" style={{ animationDelay: '2s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-cyan-300 transition-all duration-500 hover:scale-150 transform p-4 rounded-full hover:bg-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-400/30 group"
            >
              <Github size={32} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-300 transition-all duration-500 hover:scale-150 transform p-4 rounded-full hover:bg-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-400/30 group"
            >
              <Linkedin size={32} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with More Animation */}
      <div className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full animate-float overflow-hidden shadow-2xl ring-4 ring-cyan-400/30 hover:ring-cyan-400/60 transition-all duration-300 hover:scale-110" style={{ filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))', animationDelay: '0s' }}>
        <img src={reactIcon} alt="React" className="w-full h-full object-cover hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full animate-float overflow-hidden shadow-2xl ring-4 ring-yellow-400/30 hover:ring-yellow-400/60 transition-all duration-300 hover:scale-110" style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))' }}>
        <img src={jsIcon} alt="JavaScript" className="w-full h-full object-cover hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="absolute top-1/2 right-8 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-float overflow-hidden shadow-2xl ring-4 ring-orange-400/30 hover:ring-orange-400/60 transition-all duration-300 hover:scale-110" style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.4))' }}>
        <img src={htmlIcon} alt="HTML5" className="w-full h-full object-cover hover:rotate-12 transition-transform duration-300" />
      </div>
      
      {/* More Decorative Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-sparkle hover:scale-150 transition-transform"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-sparkle hover:scale-150 transition-transform" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-sparkle hover:scale-150 transition-transform" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-sparkle hover:scale-150 transition-transform" style={{ animationDelay: '3.5s' }}></div>
      <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-blue-400 rounded-full animate-sparkle hover:scale-150 transition-transform" style={{ animationDelay: '4.5s' }}></div>
    </section>
  );
};

export default Hero;