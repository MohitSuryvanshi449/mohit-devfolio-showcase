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
        { name: "Visual Studio Code", level: 90 },
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 }
      ]
    }
  ];

  const techIcons = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "💛" },
    { name: "React", icon: "⚛️" },
    { name: "Bootstrap", icon: "🔷" },
    { name: "VS Code", icon: "💻" },
    { name: "Git", icon: "📚" },
    { name: "GitHub", icon: "🐙" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            My <span className="text-white">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {techIcons.map((tech, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-purple-300 font-medium">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
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