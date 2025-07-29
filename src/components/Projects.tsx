import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import mernBlogImage from '@/assets/mern-blog-platform.jpg';

const Projects = () => {
  const projects = [
    {
      title: "MERN Blog Platform",
      description: "A full-featured blogging platform with user authentication, rich text editor, and comment system. Built with React, Node.js, Express, and MongoDB.",
      image: mernBlogImage,
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden card-glow border-gray-800/50 hover:border-purple-500/50 transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-gray-800/50 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                  <Button size="sm" variant="outline" className="flex-1 group/btn border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
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

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="group border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;