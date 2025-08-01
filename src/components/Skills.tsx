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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {techIcons.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 bg-card rounded-lg card-glow hover:scale-105 transition-transform duration-200"
            >
              <span className="text-3xl mb-2">{tech.icon}</span>
              <span className="text-sm text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-glow">
              <CardHeader>
                <CardTitle className="text-center text-xl gradient-text">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
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