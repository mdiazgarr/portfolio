import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Languages, X, Github, Flower2, ChevronRight, Mail, Linkedin, Globe, Database, Cpu, Code2, BarChart3 } from "lucide-react";

const content = {
  en: {
    nav: { intro: "Intro", about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
    portfolio: "2026 Portfolio",
    tagline: "Transforming data into beauty & retail strategies",
    getKnowMe: "Get to know me",
    bio1: "Born in Barcelona and raised academically in Boston, I am driven by the conviction that data analytics is the secret ingredient behind the world's most successful luxury brands.",
    bio2: "My goal is to build a career at the intersection of Tech and Beauty, ensuring that innovation and consumer planning work hand in hand to create seamless brand experiences.",
    quote: "Behind every great brand, there is data that explains it all, my job is to find it and turn it into strategy",
    experience: "Experience",
    experiences: [
      {
        role: "Computer Assistant / Programmer",
        company: "Questrom Tech Services Lab",
        period: "Dec 2025 – May 2026",
        location: "Boston, MA",
        bullets: [
          "Provided advanced technical support to 300+ faculty and students, managing incidents across software systems, booking platforms, and virtual lab environments to maintain operational continuity.",
          "Developed and maintained Python scripts and automation tools to streamline internal workflows and support database management, reducing manual administrative work.",
          "Automated operational reporting workflows using SQL and pandas, producing usage reports that improved planning and resource allocation across lab facilities."
        ]
      },
      {
        role: "Database & Analytics Engineer",
        company: "Self-Serve",
        period: "May 2025 – May 2026",
        location: "Cambridge, MA",
        bullets: [
          "Developed predictive models for demand forecasting and dynamic pricing, enabling data-driven revenue decisions that improved commercial performance for hotel partners.",
          "Built QA checks and validation scripts to ensure data accuracy and consistency across reporting outputs, reducing errors and improving reliability for business stakeholders.",
          "Partnered with product and operations teams to translate technical findings into actionable recommendations on pricing, promotions, and performance incentives."
        ]
      },
      {
        role: "Analytical Strategist",
        company: "MARE",
        period: "Sep 2025 – Nov 2025",
        location: "Boston, MA",
        bullets: [
          "Engineered a full-funnel measurement framework tracking reach, activation, and conversion KPIs, delivering weekly performance insights for stakeholder decision-making.",
          "Designed and analyzed end-to-end A/B tests using statistical significance and sample size modeling to deliver data-backed budget and channel optimization recommendations.",
          "Synthesized complex technical findings into executive-ready summaries, aligning creative and media stakeholders around unified performance targets and strategic goals."
        ]
      }
    ],
    projects: "Selected Projects",
    skills: "My Skills",
    contact: "Get in touch!",
    footer: "Boston • Madrid • Barcelona • 2026",
    skillCats: { data: "Data & Analytics", tech: "Engineering & Tools", languages: "Languages" },
    details: {
      roi: {
        title: "Marketing ROI Optimizer",
        tech: "Python • XGBoost • Scikit-learn",
        impact: "R² Score: 0.82 | RMSE: 0.15",
        fullDesc: "A machine learning project to predict campaign ROI and optimize marketing spend allocation using real-world ad performance datasets (Facebook/Google Ads).",
        link: "https://github.com/mdiazgarr/marketing-roi-optimizer",
        isGitHub: true,
        workflow: [
          { label: "Data Acquisition", desc: "Standardizing campaign identifiers and calculating metrics like CTR, CPC, and ROI." },
          { label: "Modeling", desc: "Gradient Boosting Regressor to predict ROI based on spend, channel, and geo-location." },
          { label: "Simulation", desc: "Tool to recommend budget reallocation toward the top 25% of performing campaigns." }
        ],
        subtitle: "Marketing Modeling"
      },
      payment: {
        title: "Payment Efficiency Tracker",
        tech: "Python • Isolation Forest • ETL",
        impact: "Identified $2M/year in simulated inefficiencies",
        fullDesc: "Detecting failed and delayed transactions in payment systems. Quantifying revenue impact through statistical thresholds and anomaly detection.",
        link: "https://github.com/mdiazgarr/payment-processing-efficiency-tracker",
        isGitHub: true,
        workflow: [
          { label: "EDA & Features", desc: "Parsing timestamps and flagging transactions above the 90th percentile of delay." },
          { label: "Anomaly Detection", desc: "Using Isolation Forest to detect unusual spikes in failures across different time buckets." },
          { label: "Cost Estimation", desc: "Multiplying failure rates by average transaction amounts to estimate loss." }
        ],
        subtitle: "Data Engineering"
      },
      airbnb: {
        title: "Airbnb Paris Prices Prediction",
        tech: "Python • XGBoost • Data Science",
        impact: "Top Model: XGBoost (R² 0.44)",
        fullDesc: "Predictive analysis of rental prices in Paris using open datasets to identify key market drivers and pricing trends.",
        link: "https://github.com/mdiazgarr/airbnb-paris-price-prediction",
        isGitHub: true,
        workflow: [
          { label: "Feature Engineering", desc: "Building geospatial (distance to centre) and demand-related features." },
          { label: "Model Comparison", desc: "Benchmarking XGBoost, Random Forest, and Ridge Regression." },
          { label: "EDA", desc: "Exploring log-transformed price distributions and correlation matrices." }
        ],
        subtitle: "Predictive Analytics"
      },
      campaign: {
        title: "Social Media Campaign Tracker",
        tech: "React • Django • PostgreSQL",
        impact: "Integrated Google OAuth 2.0 & Relational Modeling",
        fullDesc: "A full-stack analytics platform to centralize marketing data and track real-time engagement with relational PostgreSQL.",
        link: "https://github.com/mdiazgarr/social-media-campaign-tracker",
        isGitHub: true,
        workflow: [
          { label: "Hierarchical Management", desc: "Full CRUD for Channels, Campaigns, and Posts using Foreign Key relationships." },
          { label: "Performance Tracking", desc: "Recording granular metrics (impressions, clicks, shares) for every content piece." },
          { label: "Analytics Dashboard", desc: "Dynamic filtering by platform and date range to generate aggregated ROI and CTR reports." }
        ],
        subtitle: "Full-Stack Dev"
      },
      gcf: {
        title: "GCF Consult Web",
        tech: "React • Vercel • UI/UX Design",
        impact: "Professional Client Project",
        fullDesc: "Designed and developed the official corporate website for GCF Consult. This professional commission involved creating a high-performance, responsive interface using React.",
        link: "https://www.gcfconsult.com/",
        isGitHub: false,
        workflow: [
          { label: "Client Requirements", desc: "Translating corporate vision into a functional digital experience." },
          { label: "Development", desc: "Building a modular architecture with React for scalability and speed." },
          { label: "Deployment", desc: "Configuring CI/CD pipelines in Vercel for instant, global delivery." }
        ],
        subtitle: "Professional Commission"
      }
    }
  },
  es: {
    nav: { intro: "Inicio", about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", skills: "Habilidades", contact: "Contacto" },
    portfolio: "Portfolio 2026",
    tagline: "Transformando datos en estrategias para el sector Beauty & Retail",
    getKnowMe: "Sobre mí",
    bio1: "Nacida en Barcelona y formada académicamente en Boston, soy una estudiante de Ingeniería Informática impulsada por la convicción de que el análisis de datos es el ingrediente secreto detrás de las marcas de lujo más exitosas del mundo.",
    bio2: "Mi objetivo es construir una carrera en la intersección entre la tecnología y la belleza, asegurando que la innovación y la planificación comercial trabajen de la mano para crear experiencias de marca impecables.",
    quote: "Detrás de cada gran marca hay datos que lo explican todo, mi objetivo es encontrarlos y convertirlos en estrategia.",
    experience: "Experiencia",
    experiences: [
      {
        role: "Programadora y Asistente Técnica",
        company: "Questrom Tech Services Lab",
        period: "Dic 2025 – May 2026",
        location: "Boston, MA",
        bullets: [
          "Soporte técnico avanzado a más de 300 personas, gestionando incidencias en sistemas de software, plataformas de reservas y entornos de laboratorio virtual para mantener la continuidad operativa.",
          "Desarrollo y mantenimiento de scripts Python y herramientas de automatización para optimizar flujos internos y gestión de bases de datos, reduciendo el trabajo administrativo manual.",
          "Automatización de reportes operativos con SQL y pandas, generando informes de uso que mejoraron la planificación y asignación de recursos en las instalaciones del laboratorio."
        ]
      },
      {
        role: "Ingeniera de Datos y Analítica",
        company: "Self-Serve",
        period: "May 2025 – May 2026",
        location: "Cambridge, MA",
        bullets: [
          "Desarrollé modelos predictivos de previsión de demanda y precios dinámicos, permitiendo decisiones de ingresos basadas en datos que mejoraron el rendimiento comercial de socios hoteleros.",
          "Construí scripts de validación y control de calidad para garantizar la precisión y consistencia de los datos en los informes, reduciendo errores para los stakeholders.",
          "Colaboré con equipos de producto y operaciones para traducir hallazgos técnicos en recomendaciones accionables sobre precios, promociones e incentivos de rendimiento."
        ]
      },
      {
        role: "Estratega Analítica",
        company: "MARE",
        period: "Sep 2025 – Nov 2025",
        location: "Boston, MA",
        bullets: [
          "Diseñé un framework de medición full-funnel (alcance, activación, conversión), rastreando KPIs de rendimiento y entregando insights semanales para la toma de decisiones.",
          "Diseñé y analicé A/B tests de extremo a extremo con significancia estadística y modelado de tamaño de muestra para optimizar presupuesto y canales con respaldo de datos.",
          "Sinteticé hallazgos técnicos complejos en resúmenes ejecutivos, alineando a stakeholders creativos y de medios en torno a objetivos de rendimiento y metas estratégicas compartidas."
        ]
      }
    ],
    projects: "Proyectos Seleccionados",
    skills: "Mis Habilidades",
    contact: "¡Ponte en contacto!",
    footer: "Boston • Madrid • Barcelona • 2026",
    skillCats: { data: "Datos y Analítica", tech: "Ingeniería y Herramientas", languages: "Idiomas" },
    details: {
      roi: {
        title: "Optimizador de Inversión en Marketing",
        tech: "Python • XGBoost • Scikit-learn",
        impact: "R² Score: 0.82 | RMSE: 0.15",
        fullDesc: "Proyecto de Machine Learning para predecir el ROI de campañas y optimizar el gasto basándose en datos de Facebook y Google Ads.",
        link: "https://github.com/mdiazgarr/marketing-roi-optimizer",
        isGitHub: true,
        workflow: [
          { label: "Adquisición", desc: "Estandarización de métricas (CTR, CPC, ROI) y limpieza de datasets." },
          { label: "Modelado", desc: "Uso de Gradient Boosting para predecir el retorno según canal y geografía." },
          { label: "Simulación", desc: "Recomendación de reasignación de presupuesto al top 25% de campañas." }
        ],
        subtitle: "Modelado de Marketing"
      },
      payment: {
        title: "Analizador de Eficiencia de Pagos",
        tech: "Python • Isolation Forest • ETL",
        impact: "Identificó 2M$/año en ineficiencias",
        fullDesc: "Detección de transacciones fallidas y retrasadas. Cuantificación del impacto en ingresos mediante detección de anomalías.",
        link: "https://github.com/mdiazgarr/payment-processing-efficiency-tracker",
        isGitHub: true,
        workflow: [
          { label: "EDA y Features", desc: "Procesamiento de timestamps para marcar retrasos por encima del percentil 90." },
          { label: "Detección", desc: "Uso de Isolation Forest para detectar picos inusuales de fallos." },
          { label: "Coste", desc: "Estimación de pérdida según tasas de fallo y montos promedio." }
        ],
        subtitle: "Ingeniería de Datos"
      },
      airbnb: {
        title: "Predicción de Precios Airbnb París",
        tech: "Python • XGBoost • Data Science",
        impact: "Modelo Top: XGBoost (R² 0.44)",
        fullDesc: "Análisis predictivo de precios en París utilizando machine learning para identificar factores clave del mercado.",
        link: "https://github.com/mdiazgarr/airbnb-paris-price-prediction",
        isGitHub: true,
        workflow: [
          { label: "Features", desc: "Creación de variables geoespaciales y de demanda." },
          { label: "Comparativa", desc: "Benchmarking de XGBoost, Random Forest y Ridge Regression." },
          { label: "EDA", desc: "Exploración de distribuciones de precio y matrices de correlación." }
        ],
        subtitle: "Analítica Predictiva"
      },
      campaign: {
        title: "Gestor de Rendimiento de Campañas",
        tech: "React • Django • PostgreSQL",
        impact: "Integración Google OAuth 2.0 y Modelo Relacional",
        fullDesc: "App web para visualizar el rendimiento multiplataforma de marketing con actualizaciones en tiempo real.",
        link: "https://github.com/mdiazgarr/social-media-campaign-tracker",
        isGitHub: true,
        workflow: [
          { label: "Gestión Jerárquica", desc: "CRUD completo para Canales y Campañas con integridad referencial." },
          { label: "Rendimiento", desc: "Registro de métricas granulares (clics, impresiones) para cada contenido." },
          { label: "Dashboard", desc: "Filtrado dinámico por plataforma para generar informes de ROI y CTR." }
        ],
        subtitle: "Desarrollo Full-Stack"
      },
      gcf: {
        title: "Web GCF Consult",
        tech: "React • Vercel • Diseño UI/UX",
        impact: "Proyecto Profesional para Cliente",
        fullDesc: "Diseño y desarrollo de la web corporativa oficial de GCF Consult. Interfaz responsiva de alto rendimiento con React.",
        link: "https://www.gcfconsult.com/",
        isGitHub: false,
        workflow: [
          { label: "Requisitos", desc: "Traducción de la visión corporativa a una experiencia digital funcional." },
          { label: "Desarrollo", desc: "Arquitectura modular con React para asegurar escalabilidad y rapidez." },
          { label: "Despliegue", desc: "Configuración de pipelines CI/CD en Vercel para una entrega global instantánea." }
        ],
        subtitle: "Encargo Profesional"
      }
    }
  }
};

const ProjectModal = ({ isOpen, onClose, data, lang }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
          className="bg-[#F9F6F0] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-white"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-[#F9F6F0]/90 backdrop-blur-md p-6 flex justify-between items-center border-b border-gray-200 z-10">
            <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-bold">{data.tech}</span>
            <button onClick={onClose} className="text-[#A89276] hover:rotate-90 transition-transform"><X size={24} /></button>
          </div>
          <div className="p-8 md:p-12">
            <h2 className="font-serif text-5xl mb-4">{data.title}</h2>
            <p className="text-[#A89276] text-sm tracking-widest mb-10 font-bold">{data.impact}</p>
            
            <div className="space-y-12 text-left">
              <div>
                <h4 className="font-serif text-2xl mb-4 italic">{lang === "en" ? "Overview" : "Resumen"}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">{data.fullDesc}</p>
              </div>

              {data.workflow && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.workflow.map((step, i) => (
                    <div key={i} className="bg-white/50 p-6 rounded-2xl border border-[#EEEAE3]">
                      <h5 className="font-serif text-lg mb-2 text-[#D4AF37]">{step.label}</h5>
                      <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              )}
              
              <a href={data.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white border border-[#D4AF37] px-8 py-4 rounded-full text-[10px] tracking-widest hover:bg-gold-accent hover:text-white transition-all">
                {data.isGitHub ? <><Github size={16} /> GitHub Repository</> : <><Globe size={16} /> Live Website</>}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

function App() {
  const [lang, setLang] = useState("en");
  const [selectedProject, setSelectedProject] = useState(null);
  const t = content[lang];

  const projects = [
    { data: t.details.roi, color: "bg-[#FFD1DC]" },
    { data: t.details.payment, color: "bg-[#E6E6FA]" },
    { data: t.details.airbnb, color: "bg-[#E0F2F1] border border-[#B2DFDB]" },
    { data: t.details.campaign, color: "bg-[#FFFDD0]" }, 
    { data: t.details.gcf, color: "bg-[#D4AF37]" }
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#4A4A4A] selection:bg-beauty-pink">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-[#F9F6F0]/60 backdrop-blur-lg border-b border-[#D4AF37]/10">
        <span className="font-serif italic text-lg tracking-tighter">María Díaz Garrido</span>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] font-medium mr-4">
            <a href="#intro" className="hover:text-gold-accent transition-colors">{t.nav.intro}</a>
            <a href="#about" className="hover:text-gold-accent transition-colors">{t.nav.about}</a>
            <a href="#experience" className="hover:text-gold-accent transition-colors">{t.nav.experience}</a>
            <a href="#projects" className="hover:text-gold-accent transition-colors">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-gold-accent transition-colors">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-gold-accent transition-colors">{t.nav.contact}</a>
          </div>
          
          <button 
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="relative flex items-center bg-white border border-[#D4AF37] rounded-full p-1 w-20 transition-all hover:shadow-md group"
          >
            <div className="absolute left-2 text-[8px] font-bold text-[#A89276] group-hover:text-[#D4AF37]">ES</div>
            <div className="absolute right-2 text-[8px] font-bold text-[#A89276] group-hover:text-[#D4AF37]">EN</div>
            <motion.div 
              animate={{ x: lang === "en" ? 40 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="z-10 bg-[#D4AF37] w-8 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold shadow-sm"
            >
              {lang.toUpperCase()}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* 1. INTRO */}
      <section id="intro" className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <motion.div key={lang} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="tracking-[0.5em] text-[10px] mb-8 text-[#A89276]">{t.portfolio}</p>
          <h1 className="font-serif text-6xl md:text-[110px] leading-none mb-6">María <br/><span className="italic font-light text-[#A89276] capitalize">Díaz Garrido</span></h1>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto my-8" />
          <p className="font-serif italic text-xl text-[#D4AF37] max-w-lg mx-auto">{t.tagline}</p>
        </motion.div>
      </section>

      {/* 2. ABOUT */}
      <section id="about" className="py-32 px-6 md:px-20 bg-white/50 border-y border-[#EEEAE3]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="aspect-[4/5] bg-[#E6E6FA] rounded-t-full border-[12px] border-white shadow-2xl relative flex items-center justify-center overflow-hidden">
            <img 
              src="/mi-foto.jpeg" 
              alt="María Díaz Garrido" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="text-left">
            <h2 className="font-serif text-6xl mb-10">{t.getKnowMe}</h2>
            <div className="space-y-8 font-sans text-gray-600 leading-relaxed text-xl text-balance">
              <p>{t.bio1}</p>
              <p>{t.bio2}</p>
              <p className="font-serif italic text-3xl text-black border-l-4 border-[#D4AF37] pl-8">"{t.quote}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE */}
      <section id="experience" className="py-32 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-5xl italic text-center mb-24">{t.experience}</h2>
          <div className="relative border-l-2 border-[#D4AF37]/30 ml-4 md:ml-8 space-y-16">
            {t.experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pl-10 md:pl-16 relative"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#D4AF37]" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-1">
                  <div>
                    <h3 className="font-serif text-2xl">{exp.role}</h3>
                    <p className="text-[#D4AF37] text-sm tracking-widest font-bold mt-1">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-[#A89276] font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-500 text-sm leading-relaxed">
                      <ChevronRight size={12} className="text-[#D4AF37] mt-1 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section id="projects" className="py-32 px-10 bg-white/50 border-y border-[#EEEAE3]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl italic text-center mb-24">{t.projects}</h2>
          <div className="flex flex-wrap justify-center gap-16">
            {projects.map((proj, i) => (
              <motion.div key={i} onClick={() => setSelectedProject(proj.data)} whileHover={{ y: -10 }} className="flex flex-col items-center cursor-pointer group w-48 text-center">
                <div className={`relative w-40 h-28 ${proj.color} rounded-tr-3xl rounded-bl-3xl shadow-sm group-hover:shadow-xl transition-all flex items-center justify-center`}>
                  <div className={`absolute -top-3 left-0 w-16 h-6 ${proj.color.split(' ')[0]} rounded-t-lg opacity-80`}/>
                </div>
                <h3 className="mt-8 font-serif text-xl leading-tight">{proj.data.title}</h3>
                <p className="text-[10px] tracking-widest text-[#A89276] mt-2 flex items-center justify-center gap-1">
                  {proj.data.subtitle} <ChevronRight size={10} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SKILLS */}
      <section id="skills" className="py-32 px-6 md:px-20 border-y border-[#EEEAE3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl italic text-center mb-24">{t.skills}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left md:pl-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#D4AF37]">
                <BarChart3 size={32} />
                <h3 className="font-serif text-2xl">{t.skillCats.data}</h3>
              </div>
              <ul className="space-y-4 font-sans text-sm tracking-widest text-gray-500">
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> Python (Pandas, NumPy)</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> Machine Learning (XGBoost, Sklearn)</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> SQL (PostgreSQL, SQLite)</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> Statistical Modeling & A/B Testing</li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#D4AF37]">
                <Code2 size={32} />
                <h3 className="font-serif text-2xl">{t.skillCats.tech}</h3>
              </div>
              <ul className="space-y-4 font-sans text-sm tracking-widest text-gray-500">
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> React.js & JavaScript (ES6+)</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> Django (Python Framework)</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> Git / GitHub & Linux</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> ETL Pipelines & Automation</li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#D4AF37]">
                <Languages size={32} />
                <h3 className="font-serif text-2xl">{t.skillCats.languages}</h3>
              </div>
              <ul className="space-y-4 font-sans text-sm tracking-widest text-gray-500">
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> Spanish (Native)</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> English (Fluent / C1)</li>
                <li className="flex items-center gap-2"><ChevronRight size={12} className="text-[#D4AF37]" /> French (Intermediate / B1)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section id="contact" className="py-40 px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="tracking-[0.5em] text-[10px] mb-8 text-[#A89276]">Contact</p>
          <h2 className="font-serif text-7xl md:text-9xl mb-20">{t.contact}</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <a href="mailto:diazgarmaria@gmail.com" className="group flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full border border-[#D4AF37] flex items-center justify-center group-hover:bg-gold-accent group-hover:text-white transition-all">
                <Mail size={32} />
              </div>
              <span className="font-sans text-[10px] tracking-widest font-bold">Email</span>
            </a>
            <a href="https://github.com/mdiazgarr" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full border border-[#D4AF37] flex items-center justify-center group-hover:bg-gold-accent group-hover:text-white transition-all">
                <Github size={32} />
              </div>
              <span className="font-sans text-[10px] tracking-widest font-bold">GitHub</span>
            </a>
          </div>
        </motion.div>
      </section>

      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} data={selectedProject || {}} lang={lang} />

      <footer className="py-20 text-center bg-white/30 border-t border-[#EEEAE3]">
        <p className="text-[10px] tracking-[0.5em] text-[#A89276]">{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;