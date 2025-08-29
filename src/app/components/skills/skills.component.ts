import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  frontends = [
    "Angular 16+",
    "TypeScript",
    "RxJS",
    "Angular Material",
    "Reactive Forms",
  ];
  backends = [
    "ASP.Net Core 6+",
    "Entity Framework Core",
    "SQL Server",
    "RESTful APIs",
  ];
  databases = [
    "SQL Server",
    "Azure SQL",
    "AWS RDS",
    "MongoDB"
  ];
  architectures = [
    "Repository Pattern",
    "Dependency Injection",
    "Clean Architecture",
  ];
  validations = [
    "Data annotations",
    "Fluent Validation",
    "Custom business rules",
  ];
}
