import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ShoppingCart, Utensils, Heart, Store, Globe, Code } from "lucide-react";

const backendProjects = [
  {
    title: "iHerb Backend",
    year: "2026",
    description: "Scalable .NET 8 RESTful API for a gym supplements and healthy products e-commerce platform using Clean Architecture.",
    tech: [".NET 8", "Clean Architecture", "EF Core", "JWT", "Stripe", "SignalR", "Swagger"],
    highlights: [
      "Developed using Clean Architecture, Unit of Work and Repository Pattern",
      "Implemented secure JWT Authentication with OTP email verification",
      "Integrated Stripe Payment Gateway for seamless checkout processing",
      "Built real-time notification system using SignalR",
      "Fully documented REST API with Swagger"
    ],
    icon: Code,
    github: "https://github.com/3laamobarak/ITI-Final-Project/tree/master/Company.Project",
  },
  {
    title: "Base Repository – Clean Architecture",
    year: "2025",
    description: "Professional .NET 8 backend foundation with Generic Repository, Unit of Work, JWT, Stripe, and AI Chatbot.",
    tech: [".NET 8", "Clean Architecture", "EF Core", "JWT", "Stripe.net"],
    highlights: [
      "Strict layer separation for maximum maintainability",
      "UnitOfWork + Generic Repository pattern",
      "Full Stripe payment flow with refunds",
      "AI chatbot with conversation history"
    ],
    icon: Code,
    github: "https://github.com/3laamobarak/Base-Repository-.Net",
  },
  {
    title: "Medica",
    year: "2024",
    description: "ASP.NET Web API integrating hospitals, clinics, pharmacies, and labs.",
    tech: ["ASP.NET Web API", "C#", "Entity Framework", "Clean Architecture"],
    highlights: [
      "40% boost in operational efficiency",
      "50% reduction in scheduling time",
      "Real-time pharmacy stock checks",
      "Support for 20,000+ daily transactions"
    ],
    icon: Heart,
    github: "https://github.com/3laamobarak/MedicalSystem",
  },
];

const frontendProjects = [
  {
    title: "iHerb Frontend",
    year: "2026",
    description: "Modern Angular e-commerce application with search, filtering, cart, checkout and real-time chat bot.",
    tech: ["Angular", "TypeScript", "RxJS", "SignalR", "Tailwind CSS"],
    highlights: [
      "Advanced product search & filtering",
      "Fully functional shopping cart and checkout",
      "Protected routes with Angular Guards",
      "Real-time chat bot using SignalR",
      "Responsive and smooth user experience"
    ],
    icon: ShoppingCart,
    github: "https://github.com/3laamobarak/ITI.Final.Front",
  },
  {
    title: "Storeify",
    year: "2025",
    description: "Responsive e-commerce web app integrating FakeStoreAPI with single-page navigation.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    highlights: [
      "20% reduction in load times",
      "30% improvement in user interaction",
      "Modular JavaScript components"
    ],
    icon: Store,
    github: "https://github.com/elkbany/Storeify",
    demo: "https://elkbany.github.io/Storeify/HTML/Home.html",
  },
  {
    title: "ECommerce",
    year: "2025",
    description: "Desktop e-commerce application using .NET Windows Forms with Onion Architecture.",
    tech: [".NET WinForms", "Entity Framework Core", "SQL Server"],
    highlights: [
      "30% improvement in code maintainability",
      "25% optimization in data retrieval",
      "Repository pattern implementation"
    ],
    icon: ShoppingCart,
    github: "https://github.com/3laamobarak/ECommerceVC-Project",
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
            Backend Projects <span className="text-primary">•</span> Frontend Projects
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* ==================== LEFT COLUMN - BACKEND ==================== */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Code className="w-7 h-7 text-primary" />
                Backend Projects
              </h3>
              <div className="space-y-8">
                {backendProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group card-gradient rounded-2xl p-6 glass hover:shadow-glow transition-all duration-500 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Same card content as before - Icon, Title, Year, Description, Tech, Highlights */}
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

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    </div>

                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-1.5">
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
            </div>

            {/* ==================== RIGHT COLUMN - FRONTEND ==================== */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <ShoppingCart className="w-7 h-7 text-primary" />
                Frontend Projects
              </h3>
              <div className="space-y-8">
                {frontendProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group card-gradient rounded-2xl p-6 glass hover:shadow-glow transition-all duration-500 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    whileHover={{ y: -5 }}
                  >
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

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    </div>

                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-1.5">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
