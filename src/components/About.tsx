import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import cvPdf from "@/assets/Alaa Mobarak Taha Resume.pdf";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A passionate software engineer building impactful applications
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Software Engineer specialized in <span className="text-primary font-semibold">.NET Core and Angular</span>, 
                experienced in building scalable RESTful APIs, MVC applications, and full-stack solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled in C#, ASP.NET Core, Entity Framework, SQL Server, Angular, and integrating 
                AI-powered chatbots into web applications. Strong foundation in data structures, 
                algorithms, and clean architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about combining problem-solving expertise, modern development, 
                and AI integration to build impactful applications.
              </p>
              <div className="pt-2">
                <Button asChild variant="default" size="lg">
                  <a href={cvPdf} download="Alaa Mobarak Taha Resume.pdf" className="inline-flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="card-gradient rounded-2xl p-6 glass">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bachelor's in Computer Science</h3>
                    <p className="text-sm text-muted-foreground">Faculty of Computer and Information Technology, SVU</p>
                    <p className="text-sm text-primary">2020 - 2024 • Good Grade</p>
                    <p className="text-sm text-muted-foreground">Graduation Project Grade: Excellent</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-2xl p-6 glass">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Qena, Egypt</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-gradient rounded-2xl p-4 glass text-center">
                  <p className="text-3xl font-bold text-gradient">1000+</p>
                  <p className="text-sm text-muted-foreground">Problems Solved</p>
                </div>
                <div className="card-gradient rounded-2xl p-4 glass text-center">
                  <p className="text-3xl font-bold text-gradient">63rd</p>
                  <p className="text-sm text-muted-foreground">ECPC Upper Egypt</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
