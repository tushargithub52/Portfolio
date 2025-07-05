import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Twitter,
  Github,
  Linkedin,
  Mail,
  X,
  Instagram,
} from "lucide-react";
import { gsap } from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const socialLinksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial header animation
      gsap.fromTo(headerRef.current,
        {
          y: -100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Logo animation
      gsap.fromTo(logoRef.current,
        {
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.5
        }
      );

      // Navigation items stagger animation
      gsap.fromTo(navItemsRef.current,
        {
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.8
        }
      );

      // Social links animation
      gsap.fromTo(socialLinksRef.current,
        {
          scale: 0,
          rotation: 180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 1.2
        }
      );

    }, headerRef);

    return () => ctx.revert();
  }, []);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/20 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            ref={logoRef}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                ref={el => navItemsRef.current[index] = el}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 relative group font-medium transform hover:scale-110"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              ref={el => socialLinksRef.current[0] = el}
              href="https://github.com/tushargithub52"
              target="_blank"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 p-2 rounded-lg hover:bg-emerald-500/10 backdrop-blur-sm transform hover:scale-110 hover:rotate-12"
            >
              <Github size={20} />
            </a>
            <a
              ref={el => socialLinksRef.current[1] = el}
              href="https://www.linkedin.com/in/tushar-rai-7801a4254/"
              target="_blank"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 p-2 rounded-lg hover:bg-emerald-500/10 backdrop-blur-sm transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={20} />
            </a>
            <a
              ref={el => socialLinksRef.current[2] = el}
              href="https://x.com/TusharR17246648"
              target="_blank"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 p-2 rounded-lg hover:bg-emerald-500/10 backdrop-blur-sm transform hover:scale-110 hover:rotate-12"
            >
              <Twitter size={20} />
            </a>
            <a
              ref={el => socialLinksRef.current[3] = el}
              href="https://www.instagram.com/code.with.tushar/"
              target="_blank"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 p-2 rounded-lg hover:bg-emerald-500/10 transform hover:scale-110 hover:rotate-12"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors duration-200 p-2 rounded-lg hover:bg-emerald-500/10 backdrop-blur-sm transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/30 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-2xl animate-fadeInUp">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-emerald-500/10 transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-emerald-500/20 px-4">
                <a
                  href="https://github.com/tushargithub52"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 p-2 rounded-lg hover:bg-emerald-500/10 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tushar-rai-7801a4254/"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 p-2 rounded-lg hover:bg-emerald-500/10 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/TusharR17246648"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 p-2 rounded-lg hover:bg-emerald-500/10 transform hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/code.with.tushar/"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 p-2 rounded-lg hover:bg-emerald-500/10 transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;