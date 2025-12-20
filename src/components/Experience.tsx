import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Users } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            My journey in software development and competitive programming
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Internship */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Internship</h3>
              </div>

              <div className="card-gradient rounded-2xl p-6 glass">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-lg">Information Technology Institute (ITI)</h4>
                    <p className="text-primary font-medium">Full Stack .NET Development Track</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">03/2025 – 08/2025</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Built robust APIs with ASP.NET Core Web API and Swagger documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Created dynamic UIs with Angular, HTML5, CSS3, TypeScript
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Managed data with Entity Framework and LINQ
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Ensured quality through unit testing with XUnit
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">Graduation Project: Excellent</span>
                </div>
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Competitive Programming</h3>
              </div>

              <div className="space-y-4">
                <div className="card-gradient rounded-2xl p-5 glass hover:shadow-glow transition-all duration-300">
                  <h4 className="font-bold mb-2">ECPC Participant</h4>
                  <p className="text-sm text-muted-foreground">
                    Participated in ECPC 2021 • Achieved 63rd place in ECPC Upper Egypt 2022
                  </p>
                </div>
                <div className="card-gradient rounded-2xl p-5 glass hover:shadow-glow transition-all duration-300">
                  <h4 className="font-bold mb-2">ACPC Kick-off 2022</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced algorithmic thinking with solutions shared to 150+ participants
                  </p>
                </div>
                <div className="card-gradient rounded-2xl p-5 glass hover:shadow-glow transition-all duration-300">
                  <h4 className="font-bold mb-2">IEEE Arduino Workshop</h4>
                  <p className="text-sm text-muted-foreground">
                    Hands-on experience with Arduino development in 2021
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Volunteer Experience */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="p-3 rounded-xl bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Volunteer Experience</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="card-gradient rounded-2xl p-5 glass text-center">
                <h4 className="font-bold mb-2">SVU ACPC Community</h4>
                <p className="text-sm text-muted-foreground">
                  Problem Setting Member (2022-2024) • Media Member (2021-2022) • Marketing Member (2020-2021)
                </p>
              </div>
              <div className="card-gradient rounded-2xl p-5 glass text-center">
                <h4 className="font-bold mb-2">Student For Egypt</h4>
                <p className="text-sm text-muted-foreground">
                  HR Member (2022-2023) • Media Member (2021-2022)
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
