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
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Mohit</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Front-end Web Developer | JavaScript & React Expert
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Passionate about creating innovative web solutions that bridge the gap between 
              stunning frontend experiences and robust backend architectures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="btn-primary group w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="group w-full sm:w-auto">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Hire Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full animate-float neon-glow overflow-hidden">
        <img src={reactIcon} alt="React" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-float overflow-hidden" style={{ animationDelay: '1s' }}>
        <img src={jsIcon} alt="JavaScript" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-1/2 right-8 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full animate-float overflow-hidden" style={{ animationDelay: '2s' }}>
        <img src={htmlIcon} alt="HTML5" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;