export class Project {
  url: string;
  name: string;
  description: string;
  techs: string[];
  demoUrl?: string;
  constructor(url:string, name: string, description:string, techs: string[], demoUrl?: string) {
    this.url = url;
    this.name = name;
    this.description = description;
    this.techs = techs;
    this.demoUrl = demoUrl;
  }
}
