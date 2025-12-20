import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Code2, Trophy, Send, Download, FileText } from "lucide-react";
import cvPdf from "@/assets/Alaa Mobarak Taha Resume.pdf";

const contactInfo = [
  { icon: Mail, label: "Email", value: "3laa.m0o0barak@gmail.com", href: "mailto:3laa.m0o0barak@gmail.com" },
  { icon: Phone, label: "Phone", value: "+20 106 813 4463", href: "tel:+201068134463" },
  { icon: MapPin, label: "Location", value: "Qena, Egypt", href: null },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/alaa-mobarak", color: "hover:text-[#0077B5]" },
  { icon: Github, label: "GitHub", href: "https://github.com/3laamobarak", color: "hover:text-foreground" },
  { icon: Code2, label: "Codeforces", href: "https://codeforces.com/profile/3ElWaa", color: "hover:text-[#1F8ACB]" },
  { icon: Trophy, label: "LeetCode", href: "https://leetcode.com/u/3laa_mobarak/", color: "hover:text-[#FFA116]" },
  { icon: FileText, label: "CV", href: cvPdf, color: "hover:text-primary", download: "Alaa Mobarak Taha Resume.pdf" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="card-gradient rounded-2xl p-6 glass">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-medium hover:text-primary transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-gradient rounded-2xl p-6 glass">
                  <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.download ? undefined : "_blank"}
                        rel={link.download ? undefined : "noopener noreferrer"}
                        download={link.download}
                        className={`p-4 rounded-xl bg-secondary hover:shadow-glow transition-all duration-300 ${link.color}`}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={link.label}
                      >
                        <link.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Message Card */}
              <motion.div
                className="card-gradient rounded-2xl p-6 glass flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently open to new opportunities and collaborations. 
                  Whether you have a project idea or just want to connect, I'd love to hear from you!
                </p>
                <motion.a
                  href="mailto:3laa.m0o0barak@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
