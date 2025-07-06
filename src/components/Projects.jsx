import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsRef = useRef(null);
  const headerRef = useRef(null);
  const featuredProjectsRef = useRef([]);
  const nonFeaturedProjectsRef = useRef([]);
  const viewAllButtonRef = useRef(null);

  const projects = [
    {
      title: "ShopifyX",
      description:
        "A modern e-commerce platform built with React.js (frontend) and JSON Server (fake backend API) to simulate a real-world shopping experience. This app supports both Admin and User roles with full authentication and authorization features.",
      image: "/assets/shopifyx.png",
      technologies: [
        "React.js",
        "Redux",
        "React Router",
        "Tailwind CSS",
        "Axios",
        "JSON Server",
      ],
      liveUrl: "https://shopify-x-xi.vercel.app/",
      githubUrl: "https://github.com/tushargithub52/ShopifyX",
      featured: true,
    },
    {
      title: "VanillaOS",
      description:
        "VanillaOS is a fully interactive desktop environment built entirely using Vanilla JavaScript, SCSS, and DOM APIs — with no external frameworks or libraries. It simulates the experience of a real operating system right inside the browser.⚡️ Inspired by Windows OS - Developed from scratch to showcase deep frontend skills, creativity, and UI logic mastery.",
      image: "/assets/vanillaos.png",
      technologies: [
        "Vanilla JavaScript (ES6+)",
        "SCSS",
        "HTML5",
        "LocalStorage",
      ],
      liveUrl: "https://vanillaos.onrender.com/",
      githubUrl: "https://github.com/tushargithub52/VanillaOS",
      featured: true,
    },
    {
      title: "Hirrd",
      description:
        "Hirrd is a modern job portal built using React.js, Shadcn UI, Supabase, Tailwind CSS, and Clerk. It enables job seekers and recruiters to seamlessly connect through an intuitive interface.",
      image: "/assets/hirrd.png",
      technologies: [
        "React.js",
        "Shadcn UI",
        "Tailwind CSS",
        "Supabase",
        "Clerk",
      ],
      liveUrl: "https://github.com/tushargithub52/Hirrd-Job-Portal",
      githubUrl: "https://github.com/tushargithub52/Hirrd-Job-Portal",
      featured: true,
    },
    {
      title: "Recipedia",
      description:
        "Recipedia is a sleek and intuitive web application built with React, enabling users to create, manage, and explore recipes effortlessly. All user-created data is saved to the browser's local storage, ensuring a persistent experience without the need for a backend.",
      image: "/assets/recipedia.png",
      technologies: ["React.js", "React-Router-DOM", "Tailwind CSS", "React Toastify", "LocalStorage"],
      liveUrl: "https://recipedia-sooty.vercel.app/",
      githubUrl: "https://github.com/tushargithub52/Recipedia",
      featured: false,
    },
    {
      title: "DriveBox",
      description:
        "DriveBox is a Google Drive clone built using MongoDB, Express, Node.js, and EJS. It allows users to register, log in, upload, view, and download files seamlessly with Cloudinary for file storage.",
      image: "/assets/drivebox.png",
      technologies: ["Node.js", "Express", "MongoDB", "Cloudinary", "EJS"],
      liveUrl: "https://github.com/tushargithub52/DriveBox",
      githubUrl: "https://github.com/tushargithub52/DriveBox",
      featured: false,
    },
    {
      title: "EmpTrack - EMS portal",
      description:
        "The Employee Management System (EMS) is a React-based web application designed to streamline employee task management. It provides an admin panel for managing employees and assigning tasks, while employees can track their new, active, completed, and failed tasks in a structured manner.",
      image: "/assets/emptrack.png",
      technologies: ["React.js", "Tailwind CSS", "React hooks", "LocalStorage"],
      liveUrl: "https://github.com/tushargithub52/EmpTrack---EMS-portal",
      githubUrl: "https://github.com/tushargithub52/EmpTrack---EMS-portal",
      featured: false,
    },
    {
      title: "To-Do List",
      description:
        "A simple and responsive To-Do List web application built as part of my learning journey. It allows users to add, view, and delete tasks with a clean UI.",
      image: "/assets/TODO.png",
      technologies: ["React.js", "Tailwind CSS", "LocalStorage"],
      liveUrl: "https://todo-list-ashy-pi-24.vercel.app/",
      githubUrl: "https://github.com/tushargithub52/Todo-List",
      featured: false,
    },
    {
      title: "GithubProfileFinder",
      description:
        "A basic website to get the details of any Github user, with the help of GitHub API",
      image: "/assets/githubprofilefinder.png",
      technologies: ["HTML5", "CSS", "JavaScript", "DOM"],
      liveUrl: "https://tushargithub52.github.io/GithubProfileFinder/",
      githubUrl: "https://github.com/tushargithub52/GithubProfileFinder",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const nonFeaturedProjects = projects.filter(project => !project.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        {
          opacity: 0,
          y: 50
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
            toggleActions: "play none none reverse"
          }
        }
      );

      // View All button animation
      gsap.fromTo(viewAllButtonRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: viewAllButtonRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );


    }, projectsRef);

    return () => ctx.revert();
  }, [showAllProjects]);

  const handleViewAllClick = () => {
    setShowAllProjects(!showAllProjects);
  };

  const ProjectCard = ({ project, index, isFeatured = false }) => (
    <div
      ref={el => {
        if (isFeatured) {
          featuredProjectsRef.current[index] = el;
        } else {
          nonFeaturedProjectsRef.current[index] = el;
        }
      }}
      className={`group relative overflow-hidden rounded-2xl bg-emerald-500/5 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 ${
        project.featured ? "lg:grid-cols-2" : ""
      }`}
    >
      <div
        className={`grid ${
          project.featured ? "md:grid-cols-2" : "md:grid-cols-3"
        } gap-0`}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          {/* Live Preview Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div
          className={`p-8 ${
            project.featured ? "md:col-span-1" : "md:col-span-2"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm rounded-full animate-pulse">
                Featured
              </span>
            )}
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-sm border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex space-x-4">
            <a
              href={project.liveUrl}
              target="_blank"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group/link"
            >
              <span className="mr-2">View Project</span>
              <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-emerald-950 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-green-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={`featured-${index}`} 
                project={project} 
                index={index} 
                isFeatured={true}
              />
            ))}
          </div>

          {/* View All Projects Button */}
          <div ref={viewAllButtonRef} className="text-center mb-12">
            <button
              onClick={handleViewAllClick}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              {showAllProjects ? (
                <>
                  Show Less Projects
                  <ChevronUp className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  View All Projects
                  <ChevronDown className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>

          {/* Non-Featured Projects Grid (Expandable) */}
          {showAllProjects && (
            <div className="grid gap-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-200 via-emerald-200 to-green-200 bg-clip-text text-transparent">
                  More Projects
                </h3>
              </div>
              {nonFeaturedProjects.map((project, index) => (
                <ProjectCard 
                  key={`non-featured-${index}`} 
                  project={project} 
                  index={index} 
                  isFeatured={false}
                />
              ))}
            </div>
          )}

          {/* GitHub Link */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/tushargithub52"
              target="_blank"
              className="inline-flex items-center px-8 py-4 border border-emerald-500/30 text-emerald-300 font-semibold rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;