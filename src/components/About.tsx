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
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Building Digital Experiences
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Front-end Web Developer currently pursuing my BCA, 
                with a deep love for creating innovative web solutions. My journey in 
                software development has equipped me with a comprehensive understanding 
                of both frontend technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive on turning complex problems into simple, beautiful, and 
                intuitive solutions. When I'm not coding, you'll find me exploring 
                new technologies, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Available for opportunities
                </span>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="card-glow hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;