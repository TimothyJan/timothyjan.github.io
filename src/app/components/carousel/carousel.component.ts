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
      case "TimMari2026":
        this.initializeTimMari2026()
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

  initializeJanTaskTrackerIonic(): void {
    this.project = new FeaturedProject(
      "https://github.com/TimothyJan/JanTaskTracker-Frontend-Ionic",
      "JanTaskTracker-Ionic",
      "Full-stack project task and employee management app with CRUD functionality for projects, tasks, employees, departments, and roles using ASP.NET Core, Ionic-Angular, and SQL Server.",
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

  initializeJanTaskTracker(): void {
    this.project = new FeaturedProject(
      "https://github.com/TimothyJan/TaskTracker",
      "JanTaskTracker",
      "Full-stack project task and employee management app with CRUD functionality for projects, tasks, employees, departments, and roles using ASP.NET Core, Angular Material, and SQL Server.",
      [
        new ImageCaption(
          "/images/JanTaskTracker/1.png",
          "Home"
        ),
        new ImageCaption(
          "/images/JanTaskTracker/2.png",
          "CRUD Project and Project Tasks"
        ),
        new ImageCaption(
          "/images/JanTaskTracker/3.png",
          "CRUD Employees"
        ),
        new ImageCaption(
          "/images/JanTaskTracker/4.png",
          "CRUD Roles"
        ),
        new ImageCaption(
          "/images/JanTaskTracker/5.png",
          "CRUD Departments"
        ),
      ],
      "https://timothyjan.github.io/JanTaskTracker-AngularMaterial-Frontend"
    );
  }

  initializeTimMari2026(): void {
    this.project = new FeaturedProject(
      "https://github.com/TimothyJan/TimMari2026",
      "TimMari2026 Travel Blog",
      "Blog for my wife Mari and me. Responsive Angular travel blog displaying countries/hikes/restaurants from local JSON with random picker, image modals/carousels, custom mobile-first CSS animations, and automated GitHub Pages deployment.",
      [
        new ImageCaption(
          "/images/TimMari2026/1.jpg",
          "Home"
        ),
        new ImageCaption(
          "/images/TimMari2026/2.jpg",
          "Recent Highlights"
        ),
        new ImageCaption(
          "/images/TimMari2026/3.jpg",
          "Timeline"
        ),
        new ImageCaption(
          "/images/TimMari2026/4.jpg",
          "Top Restaurants"
        ),
        new ImageCaption(
          "/images/TimMari2026/5.jpg",
          "Restaurant Randomizer"
        ),
        new ImageCaption(
          "/images/TimMari2026/6.jpg",
          "Top Hike"
        ),
        new ImageCaption(
          "/images/TimMari2026/7.jpg",
          "Hiking Stats"
        ),
        new ImageCaption(
          "/images/TimMari2026/8.jpg",
          "Hike Randomizer"
        ),
      ],
      "https://timothyjan.github.io/TimMari2026/"
    );
  }
}
