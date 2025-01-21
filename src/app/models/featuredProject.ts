export class ImageCaption {
  imageUrl: string;
  caption: string;
  constructor(imageUrl: string, caption: string) {
    this.imageUrl = imageUrl;
    this.caption = caption;
  }
}

export class FeaturedProject {
  url: string;
  name: string;
  description: string;
  imageCaptions: ImageCaption[];
  demoUrl?: string;
  constructor(url:string, name: string, description:string, imageCaptions: ImageCaption[], demoUrl?: string) {
    this.url = url;
    this.name = name;
    this.description = description;
    this.imageCaptions = imageCaptions;
    this.demoUrl = demoUrl;
  }
}
