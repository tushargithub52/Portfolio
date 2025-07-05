import React, { useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Palette, Server, Zap, Github, Rocket, Braces } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const headerRef = useRef(null);
  const skillCardsRef = useRef([]);
  const learningRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Learning section animation
      gsap.fromTo(learningRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: learningRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for skill cards
      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: -10,
            duration: 2 + (index * 0.2),
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.3
          });
        }
      });

    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "React", "Redux", "JavaScript"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/5",
      borderColor: "border-emerald-500/20",
      hoverBg: "hover:bg-emerald-500/10",
      hoverBorder: "hover:border-emerald-500/30"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "REST APIs", "Authentication & Authorization"],
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-500/5",
      borderColor: "border-green-500/20",
      hoverBg: "hover:bg-green-500/10",
      hoverBorder: "hover:border-green-500/30"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Tools",
      skills: ["MongoDB", "MySQL", "Git & Github", "Postman", "VS Code"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/5",
      borderColor: "border-teal-500/20",
      hoverBg: "hover:bg-teal-500/10",
      hoverBorder: "hover:border-teal-500/30"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["WebSocket", "Performance Optimization", "SEO", "JSON/AJAX", "API Integration"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-500/5",
      borderColor: "border-blue-500/20",
      hoverBg: "hover:bg-blue-500/10",
      hoverBorder: "hover:border-blue-500/30"
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["C++", "Python", "JavaScript"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/5",
      borderColor: "border-indigo-500/20",
      hoverBg: "hover:bg-indigo-500/10",
      hoverBorder: "hover:border-indigo-500/30"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment & DevOps",
      skills: ["Vercel", "Netlify", "Render", "CI/CD(Basics)"],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/5",
      borderColor: "border-cyan-500/20",
      hoverBg: "hover:bg-cyan-500/10",
      hoverBorder: "hover:border-cyan-500/30"
    },
  ];

  return (
    <section ref={skillsRef} id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-green-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                ref={el => skillCardsRef.current[index] = el}
                className={`group ${category.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${category.borderColor} ${category.hoverBorder} ${category.hoverBg} transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 group/skill"
                    >
                      <span className="text-gray-200 font-medium group-hover/skill:text-white transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Learning Section */}
          <div ref={learningRef} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-green-500/15 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
                frameworks, and best practices in web development and programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;