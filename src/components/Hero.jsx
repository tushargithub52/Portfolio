import React, { useEffect, useRef } from "react";
import { ChevronDown, Code, Palette, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillsRef = useRef(null);
  const buttonsRef = useRef([]);
  const badgeRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const backgroundElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background elements animation
      gsap.fromTo(
        backgroundElementsRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          stagger: 0.3,
        }
      );

      // Badge animation
      gsap.fromTo(
        badgeRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      // Name animation with typewriter effect
      gsap.fromTo(
        nameRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 1.2,
        }
      );

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 1.6,
        }
      );

      // Skills preview animation
      gsap.fromTo(
        skillsRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 2,
        }
      );

      // Buttons stagger animation
      gsap.fromTo(
        buttonsRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          delay: 2.4,
        }
      );

      // Scroll indicator animation
      gsap.fromTo(
        scrollIndicatorRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 3,
          repeat: -1,
          yoyo: true,
          repeatDelay: 1,
        }
      );

      // Parallax effect for background elements
      gsap.to(backgroundElementsRef.current, {
        y: -50,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-emerald-950"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Floating Elements */}
      <div
        ref={(el) => (backgroundElementsRef.current[0] = el)}
        className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        ref={(el) => (backgroundElementsRef.current[1] = el)}
        className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        ref={(el) => (backgroundElementsRef.current[2] = el)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-full blur-3xl"
      ></div>

      {/* Available Badge - Top Right */}
      <div className="absolute top-16 right-6 z-20">
        <div
          ref={badgeRef}
          className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-sm text-emerald-300 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <Zap className="w-4 h-4 mr-2 text-emerald-400" />
          Available for opportunities
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span ref={titleRef} className="block text-white mb-2 mt-8">
                Hello, I'm
              </span>
              <span
                ref={nameRef}
                className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block"
              >
                Tushar Rai
              </span>
            </h1>

            <p
              ref={descriptionRef}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Turning ideas into purposeful{" "}
              <span className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors duration-300">
                web experiences
              </span>{" "}
              through precise{" "}
              <span className="text-green-400 font-semibold hover:text-green-300 transition-colors duration-300">
                code
              </span>
              , thoughtful{" "}
              <span className="text-green-400 font-semibold hover:text-green-300 transition-colors duration-300">
                design
              </span>{" "}
              , and real-world{" "}
              <span className="text-green-400 font-semibold hover:text-green-300 transition-colors duration-300">
                problem solving
              </span>{" "}
              .
            </p>

            {/* Skills Preview */}
            <div
              ref={skillsRef}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <div className="flex items-center px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 hover:bg-emerald-500/20 hover:scale-105 transition-all duration-300">
                <Code className="w-4 h-4 mr-2 text-emerald-400" />
                <span className="text-sm text-emerald-300">
                  Full Stack Developer
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a
                ref={(el) => (buttonsRef.current[0] = el)}
                href="#projects"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                View My Work
              </a>
              <a
                ref={(el) => (buttonsRef.current[1] = el)}
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full border border-emerald-500/30 text-emerald-300 font-semibold hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1Kkj9YCSim_c0ks-E1DKeZ5NYmAXOLT1-/view?usp=drive_link"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-800 to-green-600 text-white font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              View my Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
