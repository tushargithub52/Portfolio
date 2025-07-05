import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const formRef = useRef(null);
  const contactDetailsRef = useRef([]);
  const socialLinksRef = useRef([]);
  const formFieldsRef = useRef([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // Left column animation
      gsap.fromTo(
        leftColumnRef.current,
        {
          opacity: 0,
          x: -100,
          rotationY: -45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          x: 100,
          rotationY: 45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact details stagger animation
      gsap.fromTo(
        contactDetailsRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: contactDetailsRef.current[0],
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Social links animation
      gsap.fromTo(
        socialLinksRef.current,
        {
          opacity: 0,
          scale: 0,
          rotation: 180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: socialLinksRef.current[0],
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form fields animation
      gsap.fromTo(
        formFieldsRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: formFieldsRef.current[0],
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
    // Add success animation
    gsap.to(formRef.current, {
      scale: 1.05,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    //get back to display the form
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-emerald-400" />,
      title: "Email",
      value: "tusharraiku6020@gmail.com",
      color: "emerald",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Phone",
      value: "+91-6394298667",
      color: "green",
    },
    {
      icon: <MapPin className="w-6 h-6 text-teal-400" />,
      title: "Location",
      value: "Delhi, India",
      color: "teal",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/tushargithub52",
      color: "emerald",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/tushar-rai-7801a4254/",
      color: "green",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      url: "https://x.com/TusharR17246648",
      color: "teal",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/code.with.tushar/",
      color: "teal",
    },
  ];

  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-emerald-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-green-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-green-200 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss opportunities, projects, or just have a chat about
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div ref={leftColumnRef} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  I'm always open to discussing new opportunities, collaborating
                  on projects, or simply connecting with fellow developers and
                  tech enthusiasts.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div
                    key={index}
                    ref={(el) => (contactDetailsRef.current[index] = el)}
                    className={`flex items-center p-4 bg-${detail.color}-500/5 backdrop-blur-sm rounded-lg border border-${detail.color}-500/20 hover:bg-${detail.color}-500/10 hover:border-${detail.color}-500/30 transition-all duration-300 transform hover:scale-105 hover:rotate-1 group cursor-pointer`}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-emerald-300 transition-colors duration-300">
                        {detail.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      ref={(el) => (socialLinksRef.current[index] = el)}
                      href={social.url}
                      target="_blank"
                      className={`p-3 bg-${social.color}-500/5 backdrop-blur-sm rounded-lg border border-${social.color}-500/20 hover:border-${social.color}-500/30 hover:bg-${social.color}-500/10 transition-all duration-300 group transform hover:scale-110 hover:rotate-12`}
                    >
                      <div
                        className={`text-gray-400 group-hover:text-${social.color}-400 transition-colors duration-300`}
                      >
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-emerald-500/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
              {submitted ? (
                <p className="text-green-400 text-center text-lg font-semibold">
                  ✅ Thanks for your message! I’ll reach out to you soon.
                </p>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div ref={(el) => (formFieldsRef.current[0] = el)}>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div ref={(el) => (formFieldsRef.current[1] = el)}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div ref={(el) => (formFieldsRef.current[2] = el)}>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div ref={(el) => (formFieldsRef.current[3] = el)}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-emerald-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none hover:bg-white/15"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    ref={(el) => (formFieldsRef.current[4] = el)}
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
