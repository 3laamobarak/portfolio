import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ShoppingCart, Utensils, Heart, Store, Globe } from "lucide-react";

const projects = [
  {
    title: "Storeify",
    year: "2025",
    description: "Responsive e-commerce web app integrating FakeStoreAPI with single-page navigation and DOM manipulation.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    highlights: [
      "20% reduction in load times",
      "30% improvement in user interaction",
      "15% acceleration in team productivity",
      "Modular JavaScript components"
    ],
    icon: Store,
    github: "https://github.com/elkbany/Storeify",
    demo: "https://elkbany.github.io/Storeify/HTML/Home.html",
  },
  {
    title: "ECommerce",
    year: "2025",
    description: "Desktop e-commerce application using .NET Windows Forms and Entity Framework Core with Onion Architecture.",
    tech: [".NET WinForms", "Entity Framework Core", "SQL Server", "Onion Architecture"],
    highlights: [
      "30% improvement in code maintainability",
      "25% optimization in data retrieval",
      "20% boost in delivery efficiency",
      "Repository pattern implementation"
    ],
    icon: ShoppingCart,
    github: "https://github.com/3laamobarak/ECommerceVC-Project",
  },
  {
    title: "Restaurant",
    year: "2024",
    description: "MVC-based restaurant management system with real-time inventory and order tracking, used by 15+ staff daily.",
    tech: ["ASP.NET MVC", "Entity Framework", "LINQ", "C#"],
    highlights: [
      "30% performance optimization",
      "Real-time inventory tracking",
      "40% increase in user satisfaction",
      "Staff workflow optimization"
    ],
    icon: Utensils,
    github: "https://github.com/3laamobarak/Restaurant",
  },
  {
    title: "Medica",
    year: "2024",
    description: "ASP.NET Web API integrating hospitals, clinics, pharmacies, and labs, streamlining cross-facility operations.",
    tech: ["ASP.NET Web API", "C#", "Entity Framework", "Clean Architecture", "LINQ"],
    highlights: [
      "40% boost in efficiency",
      "50% reduction in scheduling time",
      "35% improvement in prescription accuracy",
      "20,000+ daily transactions"
    ],
    icon: Heart,
    github: "https://github.com/3laamobarak/MedicalSystem",
  },
  {
    title: "MeeM",
    year: "2022",
    description: "Static e-commerce web page with responsive UI design ensuring 100% cross-device compatibility.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    highlights: [
      "30% increase in user engagement",
      "100% cross-device compatibility",
      "40% reduction in bounce rate",
      "Enhanced navigation and interactivity"
    ],
    icon: Globe,
    github: "https://github.com/3laamobarak/Meem",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A selection of projects I've worked on
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group card-gradient rounded-2xl p-6 glass hover:shadow-glow transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
                
                <div className="flex items-start justify-between mb-4 relative">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group/icon"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group/icon"
                      >
                        <Globe className="w-5 h-5 text-primary" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 relative">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4 relative">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-1.5 relative">
                  {project.highlights.map((highlight) => (
                    <p key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
