import React, { useEffect, useState } from 'react';
import { Download, Mail, Github, Linkedin, Code, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const fullText = 'Mohit Suryavanshi';

  useEffect(() => {
    // Typewriter effect
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    // Generate sparkles
    const sparkleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setSparkles(sparkleArray);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Sparkle Effect */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 gradient-glow rounded-full blur-3xl opacity-30 floating-element" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-glow rounded-full blur-3xl opacity-20 floating-element" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="slide-up">
          <div className="mb-8">
            {/* Main Heading with Typewriter */}
            <div className="text-6xl md:text-8xl font-bold mb-6 min-h-[120px] flex items-center justify-center">
              <span className="mr-4">Hi, I'm</span>
              <span className="gradient-text typewriter overflow-hidden whitespace-nowrap">
                {displayedText}
              </span>
            </div>
            
            {/* Subtitle with staggered animation */}
            <div className="slide-up-delayed">
              <h2 className="text-2xl md:text-4xl mb-6 leading-relaxed">
                <span className="gradient-text-secondary">Full Stack Developer</span> | 
                <span className="gradient-text-accent mx-2">UI/UX Designer</span> | 
                <span className="gradient-text">Tech Innovator</span>
              </h2>
            </div>
            
            {/* Description */}
            <div className="slide-up-delayed-2">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Crafting digital experiences that merge 
                <span className="gradient-text-secondary"> cutting-edge technology</span> with 
                <span className="gradient-text-accent"> beautiful design</span>. 
                Let's build something extraordinary together.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="slide-up-delayed-2">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="btn-primary group text-lg px-8 py-4">
                <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button size="lg" className="btn-secondary group text-lg px-8 py-4">
                <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="slide-up-delayed-2">
            <div className="flex justify-center space-x-8 mb-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Github size={28} className="group-hover:animate-pulse" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card/30 backdrop-blur-sm border border-secondary/20 hover:border-secondary/50 text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110 hover:rotate-12 group"
              >
                <Linkedin size={28} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Tech Icons */}
          <div className="slide-up-delayed-2">
            <div className="flex justify-center space-x-12 opacity-60">
              <div className="floating-element p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Code size={24} className="text-primary" />
              </div>
              <div className="floating-element p-3 rounded-lg bg-secondary/10 border border-secondary/20" style={{ animationDelay: '1s' }}>
                <Zap size={24} className="text-secondary" />
              </div>
              <div className="floating-element p-3 rounded-lg bg-accent/10 border border-accent/20" style={{ animationDelay: '2s' }}>
                <Star size={24} className="text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-primary rounded-full floating-element opacity-30 blur-sm" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-secondary rounded-full floating-element opacity-40 blur-sm" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-accent rounded-full floating-element opacity-35 blur-sm" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-20 w-18 h-18 bg-gradient-primary rounded-full floating-element opacity-25 blur-sm" style={{ animationDelay: '3s' }} />
      
      {/* Rotating Glow Ring */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 rotate-glow" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/15 rotate-glow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      </div>
    </section>
  );
};

export default Hero;