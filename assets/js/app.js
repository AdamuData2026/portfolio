/**
 * Adamu Yakubu - Personal Portfolio Application Logic
 * Author: Adamu Yakubu
 * Stack: HTML5, Tailwind CSS, Vanilla ES6+ JavaScript, Lucide Icons
 */

// Initial Default Authentic Data
const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Adamu Yakubu",
    title: "Aspiring Data Professional | Electrical & Solar Energy Specialist",
    shortIntro: "Hello, I'm Adamu Yakubu, an aspiring data professional with a background in Electrical Technology and Solar System Installation. I am passionate about technology, data, innovation, and developing solutions to real-world problems.",
    location: "Kaduna / Nasarawa, Nigeria",
    email: "yakub19695@gmail.com",
    phone: "+234 703 743 0304",
    statusBadge: "Open to Opportunities | NYSC 2026",
    socialLinks: {
      github: "https://github.com/AdamuData2026",
      githubProject: "https://github.com/AdamuData2026/DSFP-6.0",
      linkedin: "https://www.linkedin.com/in/adamu-yakubu-89899529a",
      liveApp: "https://adamudata2026.github.io/DSFP-6.0/"
    },
    cvPath: "assets/docs/Adamu_Yakubu_CV.pdf",
    imagePath: "assets/images/profile.jpg"
  },
  about: {
    personalStatement: "I am a tenacious individual with strong research, analytical, and technical problem-solving capabilities. With a solid foundation in Electrical and Electronics Engineering, I have expanded my focus into Data Science, Data Analytics, and AI. My goal is to apply data-driven methodologies and modern engineering practices to build impactful, scalable solutions for society.",
    backgroundSummary: "Born in Nasarawa State and residing in Kaduna, Nigeria, I have developed a multidisciplinary background bridging hands-on hardware systems and modern data computation. I completed both my National Diploma (2021) and Higher National Diploma (2024) in Electrical and Electronics Engineering at Kaduna Polytechnic.",
    passions: [
      {
        title: "Electrical & Solar Energy Systems",
        desc: "Over 4 years of practical experience in residential wiring, solar inverter installation, PV array sizing, and maintenance.",
        icon: "zap"
      },
      {
        title: "Data Analytics & Engineering",
        desc: "Transforming raw data into actionable insights using structured workflows, quality auditing, Excel modeling, and data pipelines.",
        icon: "bar-chart-3"
      },
      {
        title: "AI & Innovation for Real-World Problems",
        desc: "Exploring applied machine learning, data collection methodologies with UNICEF, and modern digital toolchains.",
        icon: "cpu"
      },
      {
        title: "Continuous Learning & Research",
        desc: "Committed to ongoing upskilling through specialized fellowships (DSFP 6.0), soft-skills programs, and engineering certifications.",
        icon: "book-open"
      }
    ],
    education: [
      {
        degree: "National Youth Service Corps (NYSC)",
        institution: "Kano State / Nigeria",
        year: "2025 - 2026",
        details: "Serving with the Ministry of Works and Infrastructures Kano State."
      },
      {
        degree: "Higher National Diploma (HND) in Electrical & Electronics Engineering",
        institution: "Kaduna Polytechnic, Kaduna State",
        year: "2024",
        details: "Graduated with comprehensive training in power systems, electrical instrumentation, and electronics."
      },
      {
        degree: "National Diploma (ND) in Electrical & Electronics Engineering",
        institution: "Kaduna Polytechnic, Kaduna State",
        year: "2021",
        details: "Foundational engineering coursework, circuit analysis, and technical laboratory practicum."
      },
      {
        degree: "West African Examination Council (WAEC)",
        institution: "Iqrah Academic International, Rigasa, Kaduna",
        year: "2015",
        details: "Senior Secondary School Certificate with emphasis on Sciences."
      },
      {
        degree: "Primary School Leaving Certificate",
        institution: "Police Children School, Constitution Road, Kaduna",
        year: "2008",
        details: "Early academic foundation."
      }
    ]
  },
  careerAspirations: {
    statement: "My ambition is to grow into a competent, highly dependable data professional. I am dedicated to using data science, analytics, and software engineering to support informed decision-making, optimize vital energy infrastructure, improve healthcare service delivery, and solve practical challenges across Africa and globally.",
    pillars: [
      {
        title: "Data Science",
        badge: "Predictive Analytics",
        icon: "database",
        description: "Harnessing statistical inference, exploratory data analysis, and predictive modeling in Python to uncover patterns and guide policy.",
        skills: ["Python", "Exploratory Data Analysis", "Hypothesis Testing", "Data Preprocessing", "Statistical Modeling"]
      },
      {
        title: "Data Analytics",
        badge: "Business Intelligence",
        icon: "trending-up",
        description: "Building clear dashboards, executive metrics, and reports that turn complex operational datasets into clear decisions.",
        skills: ["Advanced Excel", "Data Cleaning", "Data Visualization", "SQL Fundamentals", "KPI Dashboards"]
      },
      {
        title: "Data Engineering",
        badge: "Pipelines & Reliability",
        icon: "layers",
        description: "Architecting reliable data ingestion pipelines, schema designs, and data quality frameworks that scale smoothly.",
        skills: ["ETL Pipelines", "Data Ingestion", "Data Governance (NDPR)", "Quality Auditing", "Database Architecture"]
      },
      {
        title: "Artificial Intelligence & ML",
        badge: "Applied Intelligence",
        icon: "cpu",
        description: "Deploying machine learning models, retrieval-augmented workflows, and automated reasoning to solve real computational hurdles.",
        skills: ["Scikit-learn", "Machine Learning Workflows", "RAG Concepts", "Model Evaluation", "Task Automation"]
      },
      {
        title: "Health Data Analytics",
        badge: "Public Health Impact",
        icon: "activity",
        description: "Applying data-gathering discipline and analytical models to improve healthcare resource distribution and epidemiological surveillance.",
        skills: ["UNICEF Survey Frameworks", "Health Indicators", "Field Sampling", "Data Integrity", "Outcome Metrics"]
      },
      {
        title: "Technology & Renewable Innovation",
        badge: "Smart Power Systems",
        icon: "sun",
        description: "Combining electrical engineering with telemetry data to develop smart solar systems, load forecasting, and microgrid analytics.",
        skills: ["Solar Photovoltaics (PV)", "Battery Telemetry", "Power House Maintenance", "Energy Efficiency", "IoT Concepts"]
      }
    ]
  },
  experiences: [
    {
      id: "exp-1",
      title: "Trainee - Primary Data Collection",
      organization: "UNICEF",
      period: "2026",
      category: "data",
      badge: "Data Collection & Field Research",
      description: "Underwent rigorous structured training in primary field data collection methodologies. Engaged in data verification, questionnaire integrity, sampling standards, and secure field reporting according to international standards.",
      highlights: [
        "Mastered mobile data collection protocols and demographic sampling frameworks",
        "Ensured zero-bias data capture and high completion integrity under UNICEF standards",
        "Participated in data quality assurance and daily field validation cycles"
      ]
    },
    {
      id: "exp-2",
      title: "Intern (National Youth Service Corps)",
      organization: "Ministry of Works and Infrastructures Kano State",
      period: "2025 - 2026",
      category: "electrical",
      badge: "Public Infrastructure & Power",
      description: "Handled key technical electrical maintenance and power installation duties across government offices and facilities in Kano State.",
      highlights: [
        "Conducted troubleshooting, diagnostic inspections, and routine electrical maintenance inside the Ministry powerhouse",
        "Carried out installation of Plasma TV systems and specialized electrical appliances inside the Senior Special Assistant (SSA) Office to the Kano State Government",
        "Performed diagnostics and repairs on electrical appliances, circuit panels, power points, standing fans, and industrial heating elements"
      ]
    },
    {
      id: "exp-3",
      title: "Electrical Wiring & Solar Installation Specialist",
      organization: "Independent & Technical Practice",
      period: "2021 - Present",
      category: "electrical",
      badge: "Field Practice & Clean Energy",
      description: "Providing professional electrical wiring, inverter system setups, and solar PV array installations for residential and commercial clients.",
      highlights: [
        "Designed and executed full conduit and surface wiring layouts ensuring safety regulations",
        "Sized, mounted, and wired solar panels, charge controllers, hybrid inverters, and battery storage banks",
        "Troubleshot intermittent circuit failures, grounding hazards, and electrical overloads"
      ]
    },
    {
      id: "exp-4",
      title: "Engineering Intern",
      organization: "Blue Camel Energy, Kaduna",
      period: "2021 - 2022",
      category: "electrical",
      badge: "Solar & Clean Tech",
      description: "Gained intensive hands-on experience in renewable energy engineering, solar hardware installation, and preventative maintenance with a leading renewable energy firm.",
      highlights: [
        "Participated in installation and testing of residential and industrial solar energy installations",
        "Monitored solar panel orientation, irradiance factors, and battery state-of-charge performance",
        "Conducted field maintenance audits and system performance documentation"
      ]
    },
    {
      id: "exp-5",
      title: "Professional Soft-Skills Trainee",
      organization: "Jobberman Soft-Skills Training",
      period: "2021",
      category: "professional",
      badge: "Professional Development",
      description: "Completed intensive professional workplace readiness training focusing on modern workplace productivity, teamwork, and cross-functional communication.",
      highlights: [
        "Honed effective communication, stakeholder interaction, and professional report drafting",
        "Practiced collaborative conflict resolution, critical thinking, and agile time management"
      ]
    },
    {
      id: "exp-6",
      title: "SIWES Engineering Trainee",
      organization: "Federal Radio Corporation of Nigeria (FRCN Kaduna)",
      period: "2020",
      category: "electrical",
      badge: "Broadcast & Transmission",
      description: "Completed practical Students Industrial Work Experience Scheme (SIWES) within the engineering maintenance department of Nigeria's premier public broadcast corporation.",
      highlights: [
        "Assisted senior engineers with routine transmitter checks and electrical power backup maintenance",
        "Supported broadcast studio audio line wiring, microphone lines, and emergency generator changeover systems"
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      name: "DSFP 6.0: SkyHire Portal",
      title: "Job Tracking & Application Portal",
      description: "A modern, responsive Job Tracking web application with dual-role capability for Job Seekers (searching, category-filtering across Data Science, Data Engineering, and Software Engineering, and tracking applications) and Administrators (posting roles, managing applicant pipeline stages from Submitted to Interview and Offer). Built with zero dependencies, local persistence, and custom light-blue UI.",
      tags: ["Data Science Fellowship", "HTML5", "Tailwind CSS", "JavaScript (ES6)", "LocalStorage", "Lucide Icons"],
      githubUrl: "https://github.com/AdamuData2026/DSFP-6.0",
      liveUrl: "https://adamudata2026.github.io/DSFP-6.0/",
      featured: true,
      category: "Web & Data Application",
      date: "November 2026"
    },
    {
      id: "proj-2",
      name: "Solar PV Telemetry & Energy Dashboard",
      title: "Renewable Energy Analytics (In Development)",
      description: "An upcoming analytical system designed to capture telemetry data from solar inverters and battery storage units, providing real-time load analytics, battery health forecasting, and clean energy optimization metrics.",
      tags: ["Solar Analytics", "IoT Telemetry", "Data Analytics", "Python", "Dashboard Design"],
      githubUrl: "https://github.com/AdamuData2026",
      liveUrl: "#",
      featured: false,
      category: "Clean Tech & Data Analytics",
      date: "Future Project"
    }
  ],
  references: [
    {
      name: "Dr. Bukar Baba Alhaji (Ph.D)",
      title: "Statistician General",
      organization: "Kaduna State Bureau of Statistics, Kaduna State",
      phone: "+234 (0) 816 991 5416"
    },
    {
      name: "Hudu Moyi",
      title: "Store Keeper",
      organization: "Kaduna Polytechnic, Kaduna State",
      phone: "+234 (0) 806 224 2027"
    }
  ]
};

// Application State Controller
const AppState = {
  data: null,
  activeFilter: "all",

  init() {
    this.loadData();
    this.bindEvents();
    this.renderAll();
    this.initLucide();
    this.setupScrollSpy();
  },

  loadData() {
    const saved = localStorage.getItem("adamu_yakubu_portfolio_data");
    if (saved) {
      try {
        this.data = JSON.parse(saved);
        // Merge in any missing defaults if version updated
        this.data.profile = { ...DEFAULT_PORTFOLIO_DATA.profile, ...this.data.profile };
        this.data.about = { ...DEFAULT_PORTFOLIO_DATA.about, ...this.data.about };
        this.data.careerAspirations = { ...DEFAULT_PORTFOLIO_DATA.careerAspirations, ...this.data.careerAspirations };
        if (!this.data.experiences) this.data.experiences = DEFAULT_PORTFOLIO_DATA.experiences;
        if (!this.data.projects) this.data.projects = DEFAULT_PORTFOLIO_DATA.projects;
        if (!this.data.references) this.data.references = DEFAULT_PORTFOLIO_DATA.references;
      } catch (e) {
        console.error("Failed to parse stored portfolio data:", e);
        this.data = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
      }
    } else {
      this.data = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    }

    // Check custom uploaded profile image in localStorage
    const customImg = localStorage.getItem("adamu_custom_avatar");
    if (customImg) {
      this.data.profile.imagePath = customImg;
    }
  },

  saveData() {
    localStorage.setItem("adamu_yakubu_portfolio_data", JSON.stringify(this.data));
    this.showToast("Portfolio changes saved successfully!", "success");
    this.renderAll();
  },

  resetData() {
    if (confirm("Reset all custom portfolio data back to authentic defaults?")) {
      localStorage.removeItem("adamu_yakubu_portfolio_data");
      localStorage.removeItem("adamu_custom_avatar");
      this.data = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
      this.showToast("Portfolio reset to authentic defaults.", "info");
      this.renderAll();
    }
  },

  renderAll() {
    this.renderHero();
    this.renderAbout();
    this.renderAspirations();
    this.renderExperiences();
    this.renderProjects();
    this.renderCVSection();
    this.renderContact();
    this.renderProfileManager();
    this.initLucide();
  },

  initLucide() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  // 1. Hero Rendering
  renderHero() {
    const p = this.data.profile;
    const heroName = document.getElementById("hero-name");
    const heroTitle = document.getElementById("hero-title");
    const heroIntro = document.getElementById("hero-intro");
    const heroAvatar = document.getElementById("hero-avatar");
    const heroStatusBadge = document.getElementById("hero-status-badge");
    const heroGithubLink = document.getElementById("hero-github-link");
    const heroLinkedinLink = document.getElementById("hero-linkedin-link");
    const heroLiveLink = document.getElementById("hero-live-link");

    if (heroName) heroName.textContent = p.name;
    if (heroTitle) heroTitle.textContent = p.title;
    if (heroIntro) heroIntro.textContent = p.shortIntro;
    if (heroAvatar) {
      heroAvatar.src = p.imagePath;
      heroAvatar.alt = p.name + " - Professional Portrait";
    }
    if (heroStatusBadge) heroStatusBadge.textContent = p.statusBadge;
    if (heroGithubLink) heroGithubLink.href = p.socialLinks.githubProject;
    if (heroLinkedinLink) heroLinkedinLink.href = p.socialLinks.linkedin;
    if (heroLiveLink) heroLiveLink.href = p.socialLinks.liveApp;
  },

  // 2. About Me Rendering
  renderAbout() {
    const a = this.data.about;
    const p = this.data.profile;
    const aboutStatement = document.getElementById("about-statement");
    const aboutBackground = document.getElementById("about-background");
    const aboutAvatar = document.getElementById("about-avatar");

    if (aboutStatement) aboutStatement.textContent = a.personalStatement;
    if (aboutBackground) aboutBackground.textContent = a.backgroundSummary;
    if (aboutAvatar) {
      aboutAvatar.src = p.imagePath;
      aboutAvatar.alt = p.name;
    }

    // Passions / Pillars
    const passionsContainer = document.getElementById("about-passions-grid");
    if (passionsContainer && a.passions) {
      passionsContainer.innerHTML = a.passions.map(item => `
        <div class="glass-card p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 mb-4">
              <i data-lucide="${item.icon || 'star'}" class="w-6 h-6"></i>
            </div>
            <h4 class="text-lg font-bold text-white mb-2">${item.title}</h4>
            <p class="text-sm text-slate-300 leading-relaxed">${item.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // Education Timeline
    const eduContainer = document.getElementById("about-education-list");
    if (eduContainer && a.education) {
      eduContainer.innerHTML = a.education.map((edu, idx) => `
        <div class="relative pl-7 pb-6 ${idx === a.education.length - 1 ? '' : 'border-l-2 border-slate-700/60'}">
          <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-sky-500 border-2 border-slate-900"></div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h5 class="text-base font-semibold text-white">${edu.degree}</h5>
            <span class="text-xs font-mono font-medium text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">${edu.year}</span>
          </div>
          <p class="text-sm text-blue-300 font-medium">${edu.institution}</p>
          <p class="text-xs text-slate-400 mt-1">${edu.details}</p>
        </div>
      `).join('');
    }
  },

  // 3. Aspirations Rendering
  renderAspirations() {
    const asp = this.data.careerAspirations;
    const stmt = document.getElementById("aspirations-statement");
    if (stmt) stmt.textContent = asp.statement;

    const grid = document.getElementById("aspirations-grid");
    if (grid && asp.pillars) {
      grid.innerHTML = asp.pillars.map(pillar => `
        <div class="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-sky-400/40 transition-all duration-300">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-sky-400 group-hover:bg-blue-600/20 group-hover:text-white transition-all">
                <i data-lucide="${pillar.icon}" class="w-6 h-6"></i>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-sky-300 border border-slate-700">
                ${pillar.badge}
              </span>
            </div>
            <h4 class="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">${pillar.title}</h4>
            <p class="text-sm text-slate-300 leading-relaxed mb-4">${pillar.description}</p>
          </div>
          <div>
            <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Key Competencies</div>
            <div class="flex flex-wrap gap-1.5">
              ${pillar.skills.map(s => `
                <span class="text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/60 font-medium">
                  ${s}
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }
  },

  // 4. Experiences Rendering
  renderExperiences() {
    const container = document.getElementById("experiences-timeline");
    if (!container) return;

    let items = this.data.experiences;
    if (this.activeFilter !== "all") {
      items = items.filter(exp => exp.category === this.activeFilter);
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 text-slate-400">
          <p class="text-lg">No experience entries found under this filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map((exp, idx) => {
      const isEven = idx % 2 === 0;
      return `
        <div class="relative pl-8 md:pl-0 mb-10 last:mb-0 group">
          <!-- Desktop Center Timeline Node -->
          <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-slate-900 border-2 border-sky-400 items-center justify-center z-10 shadow-lg shadow-sky-500/20 group-hover:scale-125 transition-transform">
            <div class="w-2.5 h-2.5 rounded-full bg-sky-400"></div>
          </div>

          <!-- Mobile Timeline Node -->
          <div class="md:hidden absolute left-0 top-3 w-5 h-5 rounded-full bg-slate-900 border-2 border-sky-400 items-center justify-center">
            <div class="w-2 h-2 rounded-full bg-sky-400 mx-auto mt-0.5"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <!-- Left Column: If Even, show card; if Odd, show date/org -->
            <div class="${isEven ? 'md:text-right' : 'md:order-2'}">
              <div class="glass-card p-6 rounded-2xl relative transition-all duration-300">
                <div class="flex flex-wrap items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}">
                  <span class="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    ${exp.period}
                  </span>
                  <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    ${exp.badge || exp.category}
                  </span>
                </div>
                <h4 class="text-xl font-bold text-white mb-1">${exp.title}</h4>
                <p class="text-sm font-semibold text-sky-400 mb-3">${exp.organization}</p>
                <p class="text-sm text-slate-300 leading-relaxed mb-4">${exp.description}</p>
                
                ${exp.highlights && exp.highlights.length > 0 ? `
                  <ul class="text-xs text-slate-400 space-y-1.5 ${isEven ? 'md:text-left' : ''}">
                    ${exp.highlights.map(h => `
                      <li class="flex items-start gap-2">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5"></i>
                        <span>${h}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}

                <div class="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 justify-end">
                  <button onclick="AppState.deleteExperience('${exp.id}')" class="text-xs text-rose-400 hover:text-rose-300 px-2 py-1 rounded hover:bg-rose-500/10 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <!-- Opposite Column (empty spacing for clean staggered timeline) -->
            <div class="hidden md:block ${isEven ? 'md:order-2' : ''}"></div>
          </div>
        </div>
      `;
    }).join('');
  },

  // 5. Projects Rendering
  renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = this.data.projects.map(proj => `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group">
        <div>
          <!-- Project Header Banner -->
          <div class="h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950/60 p-6 flex flex-col justify-between border-b border-slate-800/80 relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-sky-500/10 blur-2xl group-hover:bg-sky-500/20 transition-all"></div>
            <div class="flex items-center justify-between relative z-10">
              <span class="text-xs font-mono font-medium px-2.5 py-1 rounded-full ${proj.featured ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800 text-sky-300 border border-slate-700'}">
                ${proj.featured ? '★ Featured Project' : (proj.category || 'Portfolio Project')}
              </span>
              <span class="text-xs text-slate-400 font-mono">${proj.date || ''}</span>
            </div>
            <div class="relative z-10">
              <h3 class="text-2xl font-extrabold text-white group-hover:text-sky-300 transition-colors">${proj.name}</h3>
              <p class="text-xs text-blue-300 font-medium mt-0.5">${proj.title}</p>
            </div>
          </div>

          <!-- Project Body Content -->
          <div class="p-6">
            <p class="text-sm text-slate-300 leading-relaxed mb-6">${proj.description}</p>
            
            <div class="mb-4">
              <span class="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-2">Technologies Used</span>
              <div class="flex flex-wrap gap-1.5">
                ${proj.tags.map(tag => `
                  <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-sky-200 border border-slate-700/80 font-medium">
                    ${tag}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Project Actions -->
        <div class="p-6 pt-0 flex flex-wrap gap-3">
          ${proj.liveUrl && proj.liveUrl !== '#' ? `
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-sky-500/20">
              <span>View Live Application</span>
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          ` : `
            <button disabled class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-400 text-sm cursor-not-allowed">
              <span>In Development</span>
              <i data-lucide="clock" class="w-4 h-4"></i>
            </button>
          `}

          ${proj.githubUrl ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all">
              <i data-lucide="github" class="w-4 h-4"></i>
              <span>GitHub</span>
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');
  },

  // 6. CV & Credentials Section Rendering
  renderCVSection() {
    const cvDownloadBtn = document.getElementById("cv-download-btn");
    const cvDownloadHero = document.getElementById("hero-cv-download");
    const cvPath = this.data.profile.cvPath || "assets/docs/Adamu_Yakubu_CV.pdf";

    if (cvDownloadBtn) {
      cvDownloadBtn.href = cvPath;
      cvDownloadBtn.setAttribute("download", "Adamu_Yakubu_CV.pdf");
    }
    if (cvDownloadHero) {
      cvDownloadHero.href = cvPath;
      cvDownloadHero.setAttribute("download", "Adamu_Yakubu_CV.pdf");
    }

    // References Rendering
    const refContainer = document.getElementById("cv-references-grid");
    if (refContainer && this.data.references) {
      refContainer.innerHTML = this.data.references.map(ref => `
        <div class="glass-card p-5 rounded-2xl border border-slate-700/60">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
              <i data-lucide="user-check" class="w-5 h-5"></i>
            </div>
            <div>
              <h5 class="text-base font-bold text-white">${ref.name}</h5>
              <p class="text-xs text-sky-400 font-medium">${ref.title}</p>
              <p class="text-xs text-slate-400 mt-0.5">${ref.organization}</p>
              <a href="tel:${ref.phone.replace(/[^0-9+]/g, '')}" class="inline-flex items-center gap-1.5 text-xs text-blue-300 font-mono mt-2 hover:underline">
                <i data-lucide="phone" class="w-3.5 h-3.5"></i>
                <span>${ref.phone}</span>
              </a>
            </div>
          </div>
        </div>
      `).join('');
    }
  },

  // 7. Contact Details Rendering
  renderContact() {
    const p = this.data.profile;
    const cEmail = document.getElementById("contact-email");
    const cPhone = document.getElementById("contact-phone");
    const cLocation = document.getElementById("contact-location");

    if (cEmail) {
      cEmail.textContent = p.email;
      cEmail.href = `mailto:${p.email}`;
    }
    if (cPhone) {
      cPhone.textContent = p.phone;
      cPhone.href = `tel:${p.phone.replace(/[^0-9+]/g, '')}`;
    }
    if (cLocation) cLocation.textContent = p.location;
  },

  // 8. Profile Photo Manager
  renderProfileManager() {
    const preview = document.getElementById("manager-profile-preview");
    if (preview) {
      preview.src = this.data.profile.imagePath;
    }
  },

  // Event Listeners Binding
  bindEvents() {
    // Mobile navigation toggle
    const mobileToggle = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu-drawer");
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
      // Close on clicking link
      mobileMenu.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      });
    }

    // Filter Buttons in Experience
    const filterBtns = document.querySelectorAll(".exp-filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        filterBtns.forEach(b => {
          b.classList.remove("bg-sky-500", "text-slate-950", "font-bold");
          b.classList.add("bg-slate-800", "text-slate-300");
        });
        const current = e.currentTarget;
        current.classList.remove("bg-slate-800", "text-slate-300");
        current.classList.add("bg-sky-500", "text-slate-950", "font-bold");
        this.activeFilter = current.getAttribute("data-filter") || "all";
        this.renderExperiences();
        this.initLucide();
      });
    });

    // Profile photo upload input
    const photoInput = document.getElementById("profile-upload-input");
    if (photoInput) {
      photoInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
          this.showToast("Please select a valid image file (JPG, PNG, WebP).", "error");
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target.result;
          this.data.profile.imagePath = base64;
          localStorage.setItem("adamu_custom_avatar", base64);
          this.saveData();
          this.showToast("Profile photograph updated successfully!", "success");
        };
        reader.readAsDataURL(file);
      });
    }

    // CV Upload input
    const cvInput = document.getElementById("cv-upload-input");
    if (cvInput) {
      cvInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.type !== "application/pdf") {
          this.showToast("Please select a valid PDF document.", "error");
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const pdfDataUrl = event.target.result;
          this.data.profile.cvPath = pdfDataUrl;
          this.saveData();
          this.showToast("CV PDF replaced successfully! Ready for preview and download.", "success");
        };
        reader.readAsDataURL(file);
      });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => this.handleContactSubmit(e));
    }
  },

  // Contact Form Logic
  handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const subject = form.elements["subject"].value.trim();
    const message = form.elements["message"].value.trim();
    const submitBtn = document.getElementById("contact-submit-btn");

    if (!name || !email || !subject || !message) {
      this.showToast("Please fill out all required fields.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showToast("Please provide a valid email address.", "error");
      return;
    }

    // Set Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-slate-900 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Sending Message...</span>
      `;
    }

    // Working Submission Mechanism:
    // Dispatches via mailto with prefilled details, and shows verified confirmation
    setTimeout(() => {
      const mailtoUrl = `mailto:${this.data.profile.email}?subject=${encodeURIComponent(subject + " - from " + name)}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message)}`;
      
      // Attempt window location dispatch
      window.location.href = mailtoUrl;

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Message Prepared!</span>
          <i data-lucide="check" class="w-4 h-4"></i>
        `;
      }

      this.showToast("Mail client opened with your message to " + this.data.profile.email, "success");
      form.reset();
      this.initLucide();
    }, 800);
  },

  // Toast Notification System
  showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    const colors = {
      success: "border-emerald-500 bg-slate-900/95 text-emerald-300",
      error: "border-rose-500 bg-slate-900/95 text-rose-300",
      info: "border-sky-500 bg-slate-900/95 text-sky-300"
    };

    const icons = {
      success: "check-circle",
      error: "alert-circle",
      info: "info"
    };

    toast.className = `toast-msg flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-md text-sm ${colors[type] || colors.info}`;
    toast.innerHTML = `
      <i data-lucide="${icons[type] || 'info'}" class="w-5 h-5 flex-shrink-0"></i>
      <span class="font-medium text-slate-100">${message}</span>
    `;

    container.appendChild(toast);
    this.initLucide();

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  },

  // ScrollSpy for Nav Links
  setupScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    });
  },

  // Modal Open/Close helpers
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
      this.initLucide();
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "auto";
    }
  },

  // CV Preview Modal Handler
  openCVPreview() {
    const cvViewer = document.getElementById("cv-iframe-viewer");
    const cvPath = this.data.profile.cvPath || "assets/docs/Adamu_Yakubu_CV.pdf";
    if (cvViewer) {
      cvViewer.src = cvPath;
    }
    this.openModal("cv-preview-modal");
  },

  // Edit Bio Modal
  openEditBioModal() {
    document.getElementById("edit-bio-statement").value = this.data.about.personalStatement;
    document.getElementById("edit-bio-summary").value = this.data.about.backgroundSummary;
    this.openModal("edit-bio-modal");
  },

  saveEditBio() {
    const statement = document.getElementById("edit-bio-statement").value.trim();
    const summary = document.getElementById("edit-bio-summary").value.trim();

    if (statement) this.data.about.personalStatement = statement;
    if (summary) this.data.about.backgroundSummary = summary;

    this.saveData();
    this.closeModal("edit-bio-modal");
  },

  // Add Experience Handler
  openAddExperienceModal() {
    document.getElementById("add-exp-form").reset();
    this.openModal("add-experience-modal");
  },

  saveNewExperience(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.elements["title"].value.trim();
    const organization = form.elements["organization"].value.trim();
    const period = form.elements["period"].value.trim();
    const category = form.elements["category"].value;
    const badge = form.elements["badge"].value.trim() || category;
    const description = form.elements["description"].value.trim();
    const highlightsRaw = form.elements["highlights"].value.trim();

    if (!title || !organization || !period || !description) {
      this.showToast("Please fill in the required fields.", "error");
      return;
    }

    const highlights = highlightsRaw ? highlightsRaw.split("\n").map(h => h.trim()).filter(Boolean) : [];

    const newExp = {
      id: "exp-" + Date.now(),
      title,
      organization,
      period,
      category,
      badge,
      description,
      highlights
    };

    this.data.experiences.unshift(newExp);
    this.saveData();
    this.closeModal("add-experience-modal");
    this.showToast("New experience milestone added!", "success");
  },

  deleteExperience(id) {
    if (confirm("Are you sure you want to delete this experience entry?")) {
      this.data.experiences = this.data.experiences.filter(e => e.id !== id);
      this.saveData();
      this.showToast("Experience entry removed.", "info");
    }
  },

  // Add Project Handler
  openAddProjectModal() {
    document.getElementById("add-project-form").reset();
    this.openModal("add-project-modal");
  },

  saveNewProject(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements["name"].value.trim();
    const title = form.elements["title"].value.trim();
    const description = form.elements["description"].value.trim();
    const tagsRaw = form.elements["tags"].value.trim();
    const githubUrl = form.elements["githubUrl"].value.trim();
    const liveUrl = form.elements["liveUrl"].value.trim() || "#";

    if (!name || !description) {
      this.showToast("Please provide project name and description.", "error");
      return;
    }

    const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()).filter(Boolean) : ["Data & Web"];

    const newProj = {
      id: "proj-" + Date.now(),
      name,
      title,
      description,
      tags,
      githubUrl,
      liveUrl,
      featured: false,
      date: "Added Recently"
    };

    this.data.projects.push(newProj);
    this.saveData();
    this.closeModal("add-project-modal");
    this.showToast("New project added to portfolio!", "success");
  },

  // Export Data Backup
  exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `Adamu_Yakubu_Portfolio_Backup_${Date.now()}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    this.showToast("Portfolio backup downloaded as JSON.", "success");
  }
};

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  AppState.init();
});
