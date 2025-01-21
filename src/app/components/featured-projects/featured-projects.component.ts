import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent {

}
