import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 }
      ]
    }
  ];

  const techIcons = [
    { name: "JavaScript", icon: "💛" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "💚" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚀" },
    { name: "Git", icon: "📚" },
    { name: "VS Code", icon: "💙" },
    { name: "Firebase", icon: "🔥" }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-40 left-10 w-28 h-28 bg-gradient-accent rounded-full blur-2xl opacity-30 floating-element" />
      <div className="absolute bottom-40 right-10 w-36 h-36 bg-gradient-primary rounded-full blur-3xl opacity-20 floating-element" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 slide-up">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full mt-8" />
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-20 slide-up-delayed">
          {techIcons.map((tech, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl card-glow hover:scale-110 transition-all duration-300 cursor-pointer floating-element"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto slide-up-delayed-2">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-glow group">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-muted/30"
                      />
                      <div 
                        className="absolute top-0 left-0 h-3 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;