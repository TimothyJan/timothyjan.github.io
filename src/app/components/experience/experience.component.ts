import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{

  jobs = new Array<Job>;

  ngOnInit(): void {
    /**
     * url: string;
     * company: string;
     * time: string;
     * position: string;
     * description: [string];
     */

    let bachelors = new Job(
      "https://uci.edu/",
      "University of California Irvine",
      "September 2013 - June 2017",
      "B.S IN ELECTRICAL ENGINEERING",
      [
        "Following my father's and his father's footsteps..."
      ]
    );
    let job1 = new Job(
      "https://www.hycorbiomedical.com/",
      "Hycor Biomedical",
      "July 2017 - June 2018",
      "Software Test Engineer",
      [
        "Executed test protocols and tracked bugs using TESTTRACK to ensure reliability in allergy/autoimmune diagnostic software.",
        "Configured PCs with required software and hardware for seamless system operation.",
      ]
    );
    let job2 = new Job(
      "https://www.abbott.com/",
      "Abbott",
      "June 2018 - January 2019",
      "Electrical Engineer I",
      [
        "Conducted root cause analysis on medical devices; delivered technical reports driving reliability improvements.",
        "Diagnosed firmware/software issues and analyzed performance data for product enhancements.",
        "Supported engineering teams with troubleshooting, documentation, and quality initiatives."
      ]
    );
    let job3 = new Job(
      "https://www.abbott.com/",
      "Abbott",
      "June 2018 - January 2019",
      "Failure Analysis Engineer II",
      [
        "Conducted root cause analysis on medical devices; delivered technical reports driving reliability improvements.",
        "Diagnosed firmware/software issues and analyzed performance data for product enhancements.",
        "Supported engineering teams with troubleshooting, documentation, and quality initiatives."
      ]
    );
    let job4 = new Job(
      "https://www.appliedmedical.com/",
      "Applied Medical",
      "March 2019 - November 2020",
      "Process Engineer",
      [
        "Led cross-functional team (R&D, Regulatory, Quality) to qualify laparoscopic device harness.",
        "Reduced harness costs by 90% while improving RF energy efficiency and device reliability.",
        "Enhanced operational performance through strategic supplier collaboration."
      ]
    );
    let masters = new Job(
      "http://www.fullerton.edu/",
      "California State University Fullerton",
      "August 2020 - December 2022",
      "M.S IN COMPUTER SCIENCE",
      [
        "Career Switch!"
      ]
    );
    let job5 = new Job(
      "https://jantek.com/",
      "Jantek Electronics",
      "January 2023 - Present",
      "Software Engineer",
      [
        "Built full-stack payroll system with ASP.NET Core, Angular 16+, SQL Server (50% user engagement increase).",
        "Developed RESTful APIs with Angular Material UI and role-based access controls.",
        "Boosted dev productivity 100%+ using GenAI (ChatGPT, DeepSeek) for rapid prototyping.",
        "Created Python MQTT app for real-time data processing; optimized WordPress (30% performance gain).",
      ]
    );
    this.jobs.push(job5, masters, job4, job3, job2, job1, bachelors);
  }

}
