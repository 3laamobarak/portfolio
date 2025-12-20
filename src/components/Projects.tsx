import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ShoppingCart, Utensils, Heart, Store } from "lucide-react";

const projects = [
  {
    title: "Medica",
    year: "2024",
    description: "Healthcare platform integrating hospitals, clinics, pharmacies, and labs with booking system and real-time stock checks.",
    tech: ["ASP.NET Web API", "C#", "Entity Framework", "Clean Architecture"],
    highlights: ["40% efficiency boost", "50% faster scheduling", "20,000+ daily transactions"],
    icon: Heart,
  },
  {
    title: "Restaurant Management",
    year: "2024",
    description: "MVC-based restaurant system with real-time inventory tracking and staff management, used by 15+ staff daily.",
    tech: ["ASP.NET MVC", "Entity Framework", "LINQ", "C#"],
    highlights: ["30% performance boost", "Real-time inventory", "40% user satisfaction increase"],
    icon: Utensils,
  },
  {
    title: "Ecommerce Desktop",
    year: "2025",
    description: "Desktop e-commerce application using .NET Windows Forms with Onion Architecture and Repository patterns.",
    tech: [".NET WinForms", "Entity Framework Core", "SQL Server", "Onion Architecture"],
    highlights: ["30% better maintainability", "25% faster data retrieval", "20% delivery efficiency"],
    icon: ShoppingCart,
  },
  {
    title: "Storeify",
    year: "2024",
    description: "Responsive e-commerce web app with FakeStoreAPI integration, single-page navigation, and modular components.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    highlights: ["20% faster load times", "30% better interaction", "15% team productivity boost"],
    icon: Store,
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
