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
    "ASP.NET Core",
    "C#",
    "Entity Framework Core",
    "RESTful APIs",
  ];
  databases = [
    "SQL Server(constraints, indexes, stored procedures)",
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
}
