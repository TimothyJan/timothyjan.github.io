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

  // Testimonials data
  testimonials = [
    {
      name: 'Daniel lewis',
      avatar: './assets/images/avatar-1.png',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Jessica miller',
      avatar: './assets/images/avatar-2.png',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Emily evans',
      avatar: './assets/images/avatar-3.png',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Henry william',
      avatar: './assets/images/avatar-4.png',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    }
  ];

  // Projects data
  projects = [
    { title: 'Finance', category: 'web development', image: 'project-1.jpg' },
    { title: 'Orizon', category: 'web development', image: 'project-2.png' },
    { title: 'Fundo', category: 'web design', image: 'project-3.jpg' },
    { title: 'Brawlhalla', category: 'applications', image: 'project-4.png' },
    { title: 'DSM.', category: 'web design', image: 'project-5.png' },
    { title: 'MetaSpark', category: 'web design', image: 'project-6.png' },
    { title: 'Summary', category: 'web development', image: 'project-7.png' },
    { title: 'Task Manager', category: 'applications', image: 'project-8.jpg' },
    { title: 'Arrival', category: 'web development', image: 'project-9.png' }
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

  // Filter categories
  filterCategories = ['All', 'Web design', 'Applications', 'Web development'];
  activeFilter = 'All';
  selectedFilter = 'All';
  filterSelectActive = false;

  // Modal state
  modalActive = false;
  selectedTestimonial: any = null;

  // Active page
  activePage = 'about';

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

  // Testimonial modal
  openTestimonialModal(testimonial: any) {
    this.selectedTestimonial = testimonial;
    this.modalActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeTestimonialModal() {
    this.modalActive = false;
    this.selectedTestimonial = null;
    document.body.style.overflow = '';
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

}
