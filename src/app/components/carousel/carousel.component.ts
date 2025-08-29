import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FeaturedProject, ImageCaption } from '../../models/featuredProject';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  @Input() projectName: string = "";
  project = new FeaturedProject("","","",[]);
  carouselId: string = 'carousel-' + Math.random().toString(36).substring(2, 9);

  ngOnInit(): void {
    this.selectProject();
  }

  selectProject(): void {
    switch(this.projectName) {
      case "ScreenCrit":
        this.initializeScreenCrit();
        break;
      case "JanTaskTracker":
        this.initializeJanTaskTracker();
        break;
      case "JanTaskTrackerIonic":
        this.initializeJanTaskTrackerIonic();
        break;
      default:
        this.initializeScreenCrit();
        break;
    }
  }

  initializeScreenCrit(): void {
    this.project = new FeaturedProject(
      "https://github.com/TimothyJan/ScreenCrit-MEAN",
      "ScreenCrit MEAN",
      "Full-stack Movie/TVShow reviews management app using the MEAN stack (MongoDB, Express, Angular, Node), Angular Material, and TMDB(The Movie DB) API. Built a REST API with Express, Node, and MongoDB along with a compatible frontend using Angular(Typescript), Angular Material and the TMDB(The Movie DB) API.",
      [
        new ImageCaption(
          "/images/ScreenCrit-MEAN/1.png",
          "Home"
        ),
        new ImageCaption(
          "/images/ScreenCrit-MEAN/2.png",
          "Search function"
        ),
        new ImageCaption(
          "/images/ScreenCrit-MEAN/3.png",
          "Create and Update Movies/TV Shows Reviews"
        ),
        new ImageCaption(
          "/images/ScreenCrit-MEAN/4.png",
          "Read and Delete Roles"
        ),
      ],
    );
  }

  initializeJanTaskTracker(): void {
    this.project = new FeaturedProject(
      "https://github.com/TimothyJan/JanTaskTracker",
      "JanTaskTracker",
      "Engineered full-stack project/task management system with CRUD operations and mobile cross-platform access via Ionic-Angular. Developed RESTful APIs with comprehensive error handling and responsive Angular UI with Material Design. Implemented SQL Server constraints ensuring data integrity and optimized database operations with Entity Framework Core.",
      [
        new ImageCaption(
          "/images/JanTaskTracker/1.png",
          "CRUD Project and Project Tasks"
        ),
        new ImageCaption(
          "/images/JanTaskTracker/2.png",
          "CRUD Employees"
        ),
        new ImageCaption(
          "/images/JanTaskTracker/3.png",
          "CRUD Departments"
        ),
        new ImageCaption(
          "/images/JanTaskTracker/4.png",
          "CRUD Roles"
        ),
      ],
      "https://timothyjan.github.io/JanTaskTracker-Frontend/"
    );
  }

  initializeJanTaskTrackerIonic(): void {
    this.project = new FeaturedProject(
      "https://github.com/TimothyJan/JanTaskTracker-Frontend-Ionic",
      "JanTaskTracker-Ionic",
      "Engineered full-stack project/task management system with CRUD operations and mobile cross-platform access via Ionic-Angular. Developed RESTful APIs with comprehensive error handling and responsive Angular UI with Material Design. Implemented SQL Server constraints ensuring data integrity and optimized database operations with Entity Framework Core.",
      [
        new ImageCaption(
          "/images/JanTaskTrackerIonic/0.png",
          "SideMenu"
        ),
        new ImageCaption(
          "/images/JanTaskTrackerIonic/1.png",
          "Projects"
        ),
        new ImageCaption(
          "/images/JanTaskTrackerIonic/2.png",
          "Employees"
        ),
        new ImageCaption(
          "/images/JanTaskTrackerIonic/3.png",
          "Roles"
        ),
        new ImageCaption(
          "/images/JanTaskTrackerIonic/4.png",
          "Departments"
        ),
      ],
      "https://timothyjan.github.io/JanTaskTracker-Frontend-Ionic/"
    );
  }
}
