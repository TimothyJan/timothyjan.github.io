export class Job {
  url: string;
  company: string;
  time: string;
  position: string;
  description: string[];

  constructor(url: string, company: string, time:string, position:string, description:string[]){
    this.url = url;
    this.company = company;
    this.time = time;
    this.position = position;
    this.description = description;
  }
}
