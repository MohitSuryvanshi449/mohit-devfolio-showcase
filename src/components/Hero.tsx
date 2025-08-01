import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import reactIcon from '@/assets/react-icon.png';
import jsIcon from '@/assets/js-icon.png';
import htmlIcon from '@/assets/html-icon.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/60 to-cyan-900/40" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Mohit</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-white/90 mb-8 font-light">
              Front-end Web Developer | <span className="text-cyan-300">JavaScript</span> & <span className="text-blue-300">React</span> Expert
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              Passionate about creating innovative web solutions that bridge the gap between 
              stunning frontend experiences and robust backend architectures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto">
              <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full backdrop-blur-sm group w-full sm:w-auto transform hover:scale-105 transition-all duration-300">
              <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Hire Me
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-cyan-300 transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-300 transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full animate-float overflow-hidden shadow-2xl ring-4 ring-cyan-400/30" style={{ filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))' }}>
        <img src={reactIcon} alt="React" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full animate-float overflow-hidden shadow-2xl ring-4 ring-yellow-400/30" style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))' }}>
        <img src={jsIcon} alt="JavaScript" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-1/2 right-8 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-float overflow-hidden shadow-2xl ring-4 ring-orange-400/30" style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.4))' }}>
        <img src={htmlIcon} alt="HTML5" className="w-full h-full object-cover" />
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
    </section>
  );
};

export default Hero;