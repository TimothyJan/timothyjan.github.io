import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { IntroComponent } from "../intro/intro.component";
import { SkillsComponent } from "../skills/skills.component";
import { ExperienceComponent } from "../experience/experience.component";
import { FeaturedProjectsComponent } from "../featured-projects/featured-projects.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    FeaturedProjectsComponent,
    ProjectsComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
  sideBarOpen: Boolean = true;
  currentYear = new Date().getFullYear();

  constructor() {}

  openSidebar(): void {
    this.sideBarOpen = true;
  }

  closeSidebar(): void {
    this.sideBarOpen = false;
  }

  /** HostListener to update the flag on window resize */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.closeSidebar();
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 768) {
        return true;
    } else {
        return false;
    }
  }
}
