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
        "Diagnosed and resolved firmware/software issues in medical devices and supported product improvements through data analysis.",
      ]
    );
    let job3 = new Job(
      "https://www.abbott.com/",
      "Abbott",
      "June 2018 - January 2019",
      "Failure Analysis Engineer II",
      [
        "Analyzed returned medical devices to identify root causes of failures and prepared reports that supported product reliability improvements.",
      ]
    );
    let job4 = new Job(
      "https://www.appliedmedical.com/",
      "Applied Medical",
      "March 2019 - November 2020",
      "Process Engineer",
      [
        "Spearheaded collaboration across R&D, Regulatory, and Quality teams to qualify a new laparoscopic device harness.",
        "Reduced costs by 90% and improved RF energy efficiency, enhancing operational performance and reliability.",
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
        "Engineered responsive workforce management solutions using ASP.Net Core, Angular, and SQL Server, improving cross-platform user engagement.",
        "Developed a Python MQTT app for real-time data processing, integrated with time attendance software.",
        "Boosted productivity by leveraging generative AI (ChatGPT & DeepSeek) for rapid prototyping, code optimization, and automated documentation.",
        "Optimized WordPress performance by 30% through custom theme/plugin enhancements, boosting search engine optimization (SEO) and user experience (UX)."
      ]
    );
    this.jobs.push(job5, masters, job4, job3, job2, job1, bachelors);
  }

}
