import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer content animation
      gsap.fromTo(contentRef.current,
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
            trigger: contentRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Sections stagger animation
      gsap.fromTo(sectionsRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionsRef.current[0],
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Bottom section animation
      gsap.fromTo(bottomRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const contactInfo = [
    "tusharraiku6020@gmail.com",
    "+91-6394298667",
    "Delhi, India"
  ];

  return (
    <footer ref={footerRef} className="bg-black border-t border-emerald-500/20 py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div ref={el => sectionsRef.current[0] = el} className="group">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                Tushar's Portfolio
              </div>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                A passionate student developer creating digital experiences that inspire and engage.
              </p>
            </div>
            
            {/* Quick Links */}
            <div ref={el => sectionsRef.current[1] = el} className="group">
              <h4 className="text-white font-semibold mb-4 group-hover:text-emerald-300 transition-colors duration-300">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div ref={el => sectionsRef.current[2] = el} className="group">
              <h4 className="text-white font-semibold mb-4 group-hover:text-emerald-300 transition-colors duration-300">Get In Touch</h4>
              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <p 
                    key={index}
                    className="text-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2 cursor-pointer"
                  >
                    {info}
                  </p>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            ref={bottomRef}
            className="border-t border-emerald-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              © 2025 Tushar's Portfolio. All rights reserved.
            </div>
            <div className="flex items-center mt-4 md:mt-0 text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              {/* <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 ml-1 text-emerald-400" /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;