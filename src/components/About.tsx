import { Code, Lightbulb, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that exceed expectations"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to software development"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-glow opacity-30" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-20 floating-element" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-secondary rounded-full blur-2xl opacity-25 floating-element" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 slide-up-delayed">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text-secondary">Building</span> Digital <span className="gradient-text-accent">Experiences</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Web Developer currently pursuing my BCA, 
                with a deep love for creating innovative web solutions. My journey in 
                software development has equipped me with a comprehensive understanding 
                of both frontend and backend technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on turning complex problems into simple, beautiful, and 
                intuitive solutions. When I'm not coding, you'll find me exploring 
                new technologies, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>
              <div className="flex items-center space-x-6 text-lg">
                <span className="flex items-center text-secondary">
                  <div className="w-4 h-4 bg-secondary rounded-full mr-3 animate-pulse" />
                  Available for opportunities
                </span>
              </div>
            </div>

            <div className="relative slide-up-delayed-2">
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <Card key={index} className="card-glow group cursor-pointer" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-accent rounded-full floating-element opacity-40 blur-sm" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-secondary rounded-full floating-element opacity-50 blur-sm" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;