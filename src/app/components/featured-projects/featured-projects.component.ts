import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    CarouselComponent,
    NgbNavModule
],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent {
  active = 1;
}
