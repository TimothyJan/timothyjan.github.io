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

  // Skills data
  skills = [
    { name: 'Web design', percentage: 80 },
    { name: 'Graphic design', percentage: 70 },
    { name: 'Branding', percentage: 90 },
    { name: 'WordPress', percentage: 50 }
  ];

  // Education timeline
  education = [
    {
      title: 'University school of the arts',
      period: '2007 — 2008',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
    {
      title: 'New york academy of art',
      period: '2006 — 2007',
      description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..'
    },
    {
      title: 'High school of art and design',
      period: '2002 — 2004',
      description: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'
    }
  ];

  // Experience timeline
  experience = [
    {
      title: 'Creative director',
      period: '2015 — Present',
      description: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
    },
    {
      title: 'Art director',
      period: '2013 — 2015',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
    {
      title: 'Web designer',
      period: '2010 — 2013',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
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
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initializeEventListeners();
    }
  }

  private initializeEventListeners() {
    // Event listeners are handled through Angular event binding in the template
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
