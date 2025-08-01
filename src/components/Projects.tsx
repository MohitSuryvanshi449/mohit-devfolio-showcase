import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "MERN Blog Platform",
      description: "A full-featured blogging platform with user authentication, rich text editor, and comment system. Built with React, Node.js, Express, and MongoDB.",
      image: "https://images.unsplash.com/photo-1486312338219-ce686d2c6f44?w=800&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, user presence, and file sharing capabilities using Socket.io and React.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "E-commerce Website",
      description: "Complete e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      tech: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Weather App",
      description: "Interactive weather application with location-based forecasts, hourly predictions, and beautiful weather animations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
      tech: ["React", "OpenWeather API", "CSS3", "JavaScript"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Manager App",
      description: "Productive task management application with drag-and-drop functionality, categories, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "React DnD"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Portfolio Generator CLI",
      description: "Command-line tool to generate professional portfolio websites with customizable themes and templates.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      tech: ["Node.js", "Commander.js", "Inquirer", "EJS"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-secondary rounded-full blur-2xl opacity-25 floating-element" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-accent rounded-full blur-3xl opacity-20 floating-element" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 slide-up">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full mt-8" />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 slide-up-delayed">
          {projects.map((project, index) => (
            <Card key={index} className="card-glow group overflow-hidden cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" variant="secondary" className="btn-secondary h-8 w-8 p-0">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="btn-primary h-8 w-8 p-0">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 group/btn">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 btn-primary group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 slide-up-delayed-2">
          <Button variant="outline" size="lg" className="group btn-secondary text-lg px-8 py-4">
            <Github className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;