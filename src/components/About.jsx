import React, { useEffect, useRef } from "react";
import { GraduationCap, Code2, Heart, Target } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Quote animation
      gsap.fromTo(
        quoteRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const aboutCards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      title: "Education",
      content:
        "I'm currently in my final year of B.Tech in Computer Science at ABES Engineering College. Throughout my academic journey, I've built a strong foundation in data structures, algorithms, and software design. My focus has always been on bridging theory with hands-on development by building meaningful real-world projects.",
      color: "emerald",
    },
    {
      icon: <Heart className="w-6 h-6 text-green-400" />,
      title: "Passion",
      content:
        "For me, web development is more than just writing code—it's about solving real-world problems through thoughtful design, clean architecture, and seamless user experience. I'm passionate about building things that are both functional and impactful.",
      color: "green",
    },
    {
      icon: <Code2 className="w-6 h-6 text-teal-400" />,
      title: "Skills",
      content:
        "Proficient in the MERN stack with experience building full-stack web applications. Skilled in JavaScript, HTML, CSS, and Tailwind CSS for creating responsive, accessible UIs. Comfortable with RESTful API development, database integration, and backend logic using Node.js and Express. Strong foundation in C++ and Python, with solid problem-solving and data structures knowledge. Experienced with Git, debugging, and web performance optimization.",
      color: "teal",
    },
    {
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: "Goals",
      content:
        "My mission is to become a full-stack developer who can engineer innovative, efficient, and accessible digital products. I aim to work at the intersection of development and design—delivering high-performance web experiences while contributing meaningfully to the tech community.",
      color: "cyan",
    },
  ];

  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-emerald-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-green-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Turning Passion Into Purpose—One Line of Code at a Time.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {aboutCards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`bg-${card.color}-500/5 backdrop-blur-sm rounded-2xl p-8 border border-${card.color}-500/20 hover:bg-${card.color}-500/10 hover:border-${card.color}-500/30 transition-all duration-300 transform hover:scale-105 hover:rotate-1 group cursor-pointer`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 mr-3 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {card.content}
                </p>
              </div>
            ))}
          </div>

          {/* Personal Statement */}
          <div ref={quoteRef} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-green-500/15 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105">
              <blockquote className="text-xl text-gray-200 italic max-w-3xl mx-auto">
                "I believe that great software is not just about code—it's about
                understanding people, solving problems, and creating experiences
                that make a difference."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
