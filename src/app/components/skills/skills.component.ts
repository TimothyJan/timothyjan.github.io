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
  languages = [
    "Python",
    "C#",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "C++",
    "Java"
  ];
  frameworks = [
    "Node",
    "Express",
    "Angular",
    "React",
    "ASP.Net Core",
    "Entity Framework Core",
    "Bootstrap",
    "Git & Github",
    "WordPress",
    "Jupyter Notebook",
    "Swagger",
    "Postman",
    "Flask",
    "Django",
  ];
  databases = [
    "SQL Server",
    "Azure SQL",
    "AWS RDS",
    "MongoDB"
  ];
}
