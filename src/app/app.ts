import { AfterViewInit, Component, signal, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { Sidebar } from './sidebar/sidebar';
import { Job } from './models/job.model';
import { FeaturedProject, ImageCaption } from './models/featuredProject.model';
import { Service } from './models/service.model';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    Sidebar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('TimothyJan.github.io');

  @ViewChild('modalContainer') modalContainerRef!: ElementRef;
  @ViewChild('overlay') overlayRef!: ElementRef;
  @ViewChild('select') selectRef!: ElementRef;

  // Services
  serviceItems: Service[] = [
    {
      title: "Frontend Development",
      description: "Building responsive, intuitive interfaces that users actually enjoy. I specialize in Angular to create professional-grade, mobile-friendly web apps that don't sacrifice performance for polish. (I prefer desktop, but my wife prefers mobile—so I make sure both of us are happy.)",
      icon: "desktop_windows"
    },
    {
      title: "Backend Development",
      description: "Designing scalable RESTful APIs with ASP.NET Core. I focus on clean architecture and performance so the frontend has a solid, reliable foundation to talk to.",
      icon: "dns"
    },
    {
      title: "Database Management",
      description: "Configuring and maintaining secure SQL Server databases. I ensure data is stored efficiently, retrieved quickly, and—most importantly—kept safe.",
      icon: "device_hub"
    },
    {
      title: "Integration & DevOps",
      description: "Bridging the gap between frontend, backend, and the real world. I handle API integrations and deployment pipelines so the code actually makes it to production smoothly.",
      icon: "sync"
    },
    {
      title: "Project Collaboration",
      description: "Translating user needs into working software. I partner with project managers and fellow developers to turn requirements into features—without losing the technical details (or the big picture) along the way.",
      icon: "groups"
    },
    {
      title: "AI-Augmented Development",
      description: "Leveraging generative AI and LLMs to accelerate prototyping, automate boilerplate code, and debug complex issues. I treat AI as a collaborative pair programmer—it helps me move faster, but I own the architecture, security, and final quality of every line of code.",
      icon: "auto_awesome"
    },
  ]

  // Experience timeline
  experiences: Job[] = [
    {
      companyUrl: "https://jantek.com/",
      companyName: "Jantek Electronics",
      period: "January 2023 - Present",
      title: "Software Engineer",
      isCurrent: true,
      achievements: [
        "Built full-stack payroll system with ASP.NET Core, Angular 16+, SQL Server (50% user engagement increase).",
        "Developed RESTful APIs with Angular Material UI and role-based access controls.",
        "Boosted dev productivity 100%+ using GenAI (ChatGPT, DeepSeek) for rapid prototyping.",
        "Created Python MQTT app for real-time data processing; optimized WordPress (30% performance gain).",
      ]
    },
    {
      companyUrl: "https://www.appliedmedical.com/",
      companyName: "Applied Medical",
      period: "March 2019 - November 2020",
      title: "Process Engineer",
      achievements: [
        "Led cross-functional team (R&D, Regulatory, Quality) to qualify laparoscopic device harness.",
        "Reduced harness costs by 90% while improving RF energy efficiency and device reliability.",
        "Enhanced operational performance through strategic supplier collaboration."
      ]
    },
    {
      companyUrl: "https://www.abbott.com/",
      companyName: "Abbott",
      period: "June 2018 - January 2019",
      title: "Failure Analysis Engineer II",
      achievements: [
        "Conducted root cause analysis on medical devices; delivered technical reports driving reliability improvements.",
        "Diagnosed firmware/software issues and analyzed performance data for product enhancements.",
        "Supported engineering teams with troubleshooting, documentation, and quality initiatives."
      ]
    },
    {
      companyUrl: "https://www.abbott.com/",
      companyName: "Abbott",
      period: "June 2018 - January 2019",
      title: "Electrical Engineer I",
      achievements: [
        "Supported electrical engineering projects and contributed to design reviews.",
        "Assisted in testing and validation of medical device components.",
        "Collaborated with cross-functional teams to ensure compliance with regulatory standards."
      ]
    },
    {
      companyUrl: "https://www.hycorbiomedical.com/",
      companyName: "Hycor Biomedical",
      period: "July 2017 - June 2018",
      title: "Software Test Engineer",
      achievements: [
        "Executed test protocols and tracked bugs using TESTTRACK to ensure reliability in allergy/autoimmune diagnostic software.",
        "Configured PCs with required software and hardware for seamless system operation.",
      ]
    }
  ];

  // Skills data - categorized
  frontends = [
    "Angular 16+",
    "TypeScript",
    "RxJS",
    "Angular Material",
    "Reactive Forms",
  ];

  backends = [
    "ASP.NET Core",
    "C#",
    "Entity Framework Core",
    "RESTful APIs",
  ];

  databases = [
    "SQL Server",
    "T-SQL",
    "Azure SQL",
    "AWS RDS",
    "MongoDB"
  ];

  architectures = [
    "Clean Architecture",
    "Repository Pattern",
    "Dependency Injection",
  ];

  validations = [
    "Git",
    "Python",
    "WordPress",
    "Fluent Validation",
    "Data Annotations"
  ];

// For easier iteration in template
skillCategories = [
  { name: 'Frontend', icon: 'desktop_windows', items: this.frontends },
  { name: 'Backend', icon: 'dns', items: this.backends },
  { name: 'Databases', icon: 'device_hub', items: this.databases },
  { name: 'Architecture', icon: 'architecture', items: this.architectures },
  { name: 'Tools & Validation', icon: 'build', items: this.validations },
];

  // Add this property to track expanded state for each education item
  expandedCourses: boolean[] = [];

    // Education timeline
  education = [
    {
      title: 'University of California Irvine',
      period: 'September 2013 - June 2017',
      description: "I earned my Bachelor's in Electrical Engineering from UC Irvine, where I developed a strong foundation in circuit design, semiconductor physics, and control systems through extensive lab work with VHDL, PSPICE, and MATLAB. My coursework spanned the full stack of hardware engineering—from digital logic and microprocessors to analog IC design and MEMS devices—culminating in senior design projects that integrated both theoretical knowledge and hands-on implementation. This deep understanding of hardware-software interaction gives me a unique perspective as a Full Stack Engineer, bridging the gap between embedded systems and modern web applications.",
      courses: [
        // Freshman Year 2013
        'CSE41 - Python (Functions, Data Structures, Dictionaries, Named Tuples)',
        'CSE42 - Python (Paths, Recursion, Networks, Sockets, Protocols, Classes, URLs, Web APIs, Tkinter)',
        'EECS31 - Intro Digital Logic Systems (Finite-state-machines, instruction-set processors, logic components)',

        // Sophomore Year 2014
        'EECS31L - Intro Digital Logic Lab (VHDL, Xilinx, ALU, Register, Counter, Single-cycle processor)',
        'EECS12 - Programming (Python)',
        'EECS70A/70LA - Network Analysis (Power supplies, function generators, oscilloscopes, RC/RL circuits)',
        'EECS1 - Intro to EE & CPE',
        'EECS50 - Discrete Time Signals/Systems (DTLTI systems, z-transforms, Fast Fourier transforms)',
        'EECS55 - Engineer Probability (Probability theory, random variables, Markov sequences)',
        'EECS70B/70LB - Network Analysis II + Lab (Sinusoidal Steady-state, Op Amps, Laplace transform)',
        'PSPICE - OrCAD 10.0 (Amplifiers, diode circuits, filter circuits, AM Transmission)',

        // Junior Year 2015
        'EECS170A - Electronics I+Lab (Semiconductors, diodes, transistors, MOSFETS, BJT, CMOS)',
        'EECS179 - Micro-Electro-Mechanical Systems (Micro manufacturing, Sensors, IoT, Accelerometers, Microfluidics)',
        'EECS145 - Electrical Engineering Analysis',
        'EECS150 - Continuous Time Signal and Systems (LTI systems, Laplace Transforms, Fourier Series)',
        'EECS170B - Electronics II+Lab (MOSFET amplifiers, CMOS Inverters, Digital CMOS Logic)',
        'EECS174 - Fundamental of Semiconductor Device (Mathematica, Semiconductor physics, LEDs, Solar Cells)',
        'EECS180A - Engineering Electromagnetics I',
        'EECS170C - Electronics III+Lab (BJT/MOSFET multistage amplifiers, differential amplifiers, feedback amplifiers)',
        'EECS176 - Fundamentals of Solid State Electronics and Materials',
        'EECS188 - Optical Electronics (Maxwell\'s equations, optical waveguides, fiber optics, laser diodes, photodetectors)',
        'EECS20/20L - C Programming+Lab (Data representation, logic design, computer organization, assembly, pointers)',

        // Senior Year 2016
        'EECS160A - Intro Control Systems (MATLAB, DC motor modeling, feedback systems, root-locus design)',
        'EECS170D - Internal Electronics Circuit Design (NCSU CDK 1.6.0, MobaXterm)',
        'EECS159A/B - Senior Design',
        'EECS170E – Analog/Com IC Design (RF design, RLC networks, oscillators, phase noise theory)',
        'BME140 – Biomedical Electronics (Bioinstrumentation, biomedical signals, Labview, ECG instrument design)',
        'MAE52 – Computer Aided Design (Solidworks)',
        'ENGR190W – Communication in Professional World (Ethics, presentations, research papers)',

        // Math Classes
        'Math2D – Multivariable Calculus',
        'Math3A – Intro Linear Algebra',
        'Math3D – Elemental Differential Equations',
        'Math2E – Multivariable Calculus',
        'ENGRMAE30 – Statics',

        // Physics Classes
        'Physics7D/7LD – Classical Physics + Lab',
        'Physics7E – Classical Physics',
        'Physics51A – Modern Physics',

        // Chemistry Classes
        'Chem1A – General Chemistry'
      ],
    },
    {
      title: 'California State University Fullerton',
      period: 'August 2020 - December 2022',
      description: 'My graduate experience in Computer Science at CSU Fullerton built a strong foundation in core principles like data structures and operating systems before progressing to advanced studies in artificial intelligence and machine learning. The curriculum balanced theoretical knowledge with practical application, culminating in a focused final year of specialized seminars, emerging technologies like blockchain, and a culminating project. This journey reflects a comprehensive and increasingly specialized exploration of the field, from fundamental concepts to cutting-edge advancements.',
      courses: [
        'CPSC 131 - Data Structures',
        'CPSC 323 - Compilers and Languages',
        'MATH 270A - Mathematical Structures I',
        'MATH 338 - Stat Appl to Natural Sci',
        'CPSC 240 - Comp Org & Assembly Lang',
        'CPSC 335 - Algorithm Engineering',
        'CPSC 351 - Operating System Concepts',
        'CPSC 362 - Software Engineering',
        'CPSC 411 - Mobile Dev Programming',
        'CPSC 481 - Artificial Intelligence',
        'CPSC 483 - Introduction to Machine L',
        'CPSC 535 - Advanced Algorithms',
        'CPSC 531 - Adv Database Management',
        'CPSC 585 - Artificial Neural Network',
        'CPSC 589 - Seminar Computer Science',
        'CPSC 548 - Prof Issues/Software Eng',
        'CPSC 559 - Adv. Blockchain Technologies',
        'CPSC 597 - Project'
      ]
    }
  ];

  // Featured Projects
  featuredProjects: FeaturedProject[] = [
    new FeaturedProject(
      "https://github.com/TimothyJan/HoneyDoThis",
      "Honey Do This",
      "A relationship preserving Full Stack Web Application for domestic tasks/duties using ASP.NET Core, Angular 16+ and SQL Server.",
      [
        new ImageCaption("/images/HoneyDoThis/desktop/1.jpg", "Create, complete, and delete tasks and subtasks. With the 'View All' filter, drag any task to reorder."),
        new ImageCaption("/images/HoneyDoThis/desktop/2.jpg", "With the 'Active' filter, view all active tasks."),
        new ImageCaption("/images/HoneyDoThis/desktop/3.jpg", "With the 'Completed' filter, view and clear all completed tasks."),
      ],
      'DESKTOP',
      "https://timothyjan.github.io/HoneyDoThis-frontend/"
    ),
    new FeaturedProject(
      "https://github.com/TimothyJan/HoneyDoThis",
      "Honey Do This",
      "A relationship preserving Full Stack Web Application for domestic tasks/duties using ASP.NET Core, Angular 16+ and SQL Server.",
      [
        new ImageCaption("/images/HoneyDoThis/mobile/1.jpg", "Create, complete, and delete tasks and subtasks. With the 'View All' filter, drag any task to reorder."),
        new ImageCaption("/images/HoneyDoThis/mobile/2.jpg", "With the 'Active' filter, view all active tasks."),
        new ImageCaption("/images/HoneyDoThis/mobile/3.jpg", "With the 'Completed' filter, view and clear all completed tasks."),
      ],
      'MOBILE',
      "https://timothyjan.github.io/HoneyDoThis-frontend/"
    ),
    new FeaturedProject(
      "https://github.com/TimothyJan/TimMari2026",
      "TimMari2026 Travel Blog",
      "Blog for my wife Mari and me. Responsive Angular travel blog displaying countries/hikes/restaurants from local JSON with random picker, image modals/carousels, custom mobile-first CSS animations, and automated GitHub Pages deployment.",
      [
        new ImageCaption("/images/TimMari2026/desktop/1.jpg", "Home"),
        new ImageCaption("/images/TimMari2026/desktop/2.jpg", "Recent Highlights"),
        new ImageCaption("/images/TimMari2026/desktop/3.jpg", "Timeline"),
        new ImageCaption("/images/TimMari2026/desktop/4.jpg", "Top Restaurants"),
        new ImageCaption("/images/TimMari2026/desktop/5.jpg", "Restaurant Randomizer"),
        new ImageCaption("/images/TimMari2026/desktop/6.jpg", "Top Hike"),
        new ImageCaption("/images/TimMari2026/desktop/7.jpg", "Hiking Stats"),
        new ImageCaption("/images/TimMari2026/desktop/8.jpg", "Hike Randomizer"),
      ],
      'DESKTOP',
      "https://timothyjan.github.io/TimMari2026/"
    ),
    new FeaturedProject(
      "https://github.com/TimothyJan/TimMari2026",
      "TimMari2026 Travel Blog",
      "Blog for my wife Mari and me. Responsive Angular travel blog displaying countries/hikes/restaurants from local JSON with random picker, image modals/carousels, custom mobile-first CSS animations, and automated GitHub Pages deployment.",
      [
        new ImageCaption("/images/TimMari2026/mobile/1.jpg", "Home"),
        new ImageCaption("/images/TimMari2026/mobile/2.jpg", "Recent Highlights"),
        new ImageCaption("/images/TimMari2026/mobile/3.jpg", "Timeline"),
        new ImageCaption("/images/TimMari2026/mobile/4.jpg", "Top Restaurants"),
        new ImageCaption("/images/TimMari2026/mobile/5.jpg", "Restaurant Randomizer"),
        new ImageCaption("/images/TimMari2026/mobile/6.jpg", "Top Hike"),
        new ImageCaption("/images/TimMari2026/mobile/7.jpg", "Hiking Stats"),
        new ImageCaption("/images/TimMari2026/mobile/8.jpg", "Hike Randomizer"),
      ],
      'MOBILE',
      "https://timothyjan.github.io/TimMari2026/"
    ),
    new FeaturedProject(
      "https://github.com/TimothyJan/TaskTracker",
      "JanTaskTracker",
      "Full-stack project task and employee management app with CRUD functionality for projects, tasks, employees, departments, and roles using ASP.NET Core, Angular Material, and SQL Server.",
      [
        new ImageCaption("/images/JanTaskTracker/1.png", "Home"),
        new ImageCaption("/images/JanTaskTracker/2.png", "CRUD Project and Project Tasks"),
        new ImageCaption("/images/JanTaskTracker/3.png", "CRUD Employees"),
        new ImageCaption("/images/JanTaskTracker/4.png", "CRUD Roles"),
        new ImageCaption("/images/JanTaskTracker/5.png", "CRUD Departments"),
      ],
      'DESKTOP',
      "https://timothyjan.github.io/JanTaskTracker-AngularMaterial-Frontend"
    ),
    new FeaturedProject(
      "https://github.com/TimothyJan/JanTaskTracker-Frontend-Ionic",
      "JanTaskTracker Ionic",
      "Full-stack project task and employee management app with CRUD functionality for projects, tasks, employees, departments, and roles using ASP.NET Core, Ionic-Angular, and SQL Server.",
      [
        new ImageCaption("/images/JanTaskTrackerIonic/0.png", "SideMenu"),
        new ImageCaption("/images/JanTaskTrackerIonic/1.png", "Projects"),
        new ImageCaption("/images/JanTaskTrackerIonic/2.png", "Employees"),
        new ImageCaption("/images/JanTaskTrackerIonic/3.png", "Roles"),
        new ImageCaption("/images/JanTaskTrackerIonic/4.png", "Departments"),
      ],
      'MOBILE',
      "https://timothyjan.github.io/JanTaskTracker-Frontend-Ionic/"
    ),
    new FeaturedProject(
      "https://github.com/TimothyJan/ScreenCrit-MEAN",
      "ScreenCrit MEAN",
      "Full-stack Movie/TVShow reviews management app using the MEAN stack (MongoDB, Express, Angular, Node), Angular Material, and TMDB API. Built a REST API with Express, Node, and MongoDB along with a compatible frontend using Angular and TMDB API.",
      [
        new ImageCaption("/images/ScreenCrit-MEAN/1.png", "Home"),
        new ImageCaption("/images/ScreenCrit-MEAN/2.png", "Search function"),
        new ImageCaption("/images/ScreenCrit-MEAN/3.png", "Create and Update Movies/TV Shows Reviews"),
        new ImageCaption("/images/ScreenCrit-MEAN/4.png", "Read and Delete Roles"),
      ],
      'DESKTOP'
    ),
  ];

  // Get unique categories for filter
  get filterCategories(): string[] {
    return ['All', ...new Set(this.featuredProjects.map(p => p.category))];
  }

  // Filter categories
  activeFilter = 'All';
  selectedFilter = 'All';
  filterSelectActive = false;

  // Selected project for modal
  selectedProject: FeaturedProject | null = null;
  projectModalActive = false;

  // Modal state
  modalActive = false;
  selectedTestimonial: any = null;

  // Active page
  activePage = 'about';

  // Modal Carousel index
  currentImageIndex = 0;

  private isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // Initialize any data if needed
    this.expandedCourses = new Array(this.education.length).fill(false);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initializeEventListeners();
    }
  }

  private initializeEventListeners() {
    // Event listeners are handled through Angular event binding in the template
  }

  toggleCourses(index: number) {
    this.expandedCourses[index] = !this.expandedCourses[index];
  }

  // Filter select toggle
  toggleFilterSelect() {
    this.filterSelectActive = !this.filterSelectActive;
  }

  selectFilter(category: string) {
    this.selectedFilter = category;
    this.activeFilter = category;
    this.filterSelectActive = false;
  }

  setActiveFilter(category: string) {
    this.activeFilter = category;
    this.selectedFilter = category;
  }

  // Check if project matches active filter
  matchesFilter(projectCategory: string): boolean {
    return this.activeFilter === 'All' ||
           projectCategory.toLowerCase() === this.activeFilter.toLowerCase();
  }

  // Navigation
  setActivePage(page: string) {
    this.activePage = page;
    window.scrollTo(0, 0);
  }

  // Filter projects by category
  filteredProjects(category: string): FeaturedProject[] {
    if (category === 'All') {
      return this.featuredProjects;
    }
    return this.featuredProjects.filter(p => p.category === category);
  }

  // Update openProjectModal to reset index
  openProjectModal(project: FeaturedProject) {
    this.selectedProject = project;
    this.currentImageIndex = 0; // Reset to first image
    this.projectModalActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.projectModalActive = false;
    this.selectedProject = null;
    this.currentImageIndex = 0; // Reset index
    document.body.style.overflow = '';
  }

}
