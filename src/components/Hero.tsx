import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Code2, Trophy, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import cvPdf from "@/assets/Alaa Mobarak Taha Resume.pdf";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/alaa-mobarak", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/3laamobarak", label: "GitHub" },
  { icon: Code2, href: "https://codeforces.com/profile/3ElWaa", label: "Codeforces" },
  { icon: Trophy, href: "https://leetcode.com/u/3laa_mobarak/", label: "LeetCode" },
  { icon: Download, href: cvPdf, label: "Download CV", download: "Alaa Mobarak Taha Resume.pdf" },
] as const;

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary font-mono text-sm md:text-base mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Alaa Mobarak
              <span className="block text-gradient mt-2">.NET & Angular Developer</span>
            </motion.h1>
            
            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer with expertise in building scalable web applications. 
              1000+ solved algorithmic problems. ECPC Participant.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:shadow-glow hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  aria-label={link.label}
                  download={(link as any).download}
                >
                  <link.icon className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={profilePhoto}
                  alt="Alaa Mobarak"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
