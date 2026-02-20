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
  category: string; // Add category for filtering DESKTOP or MOBILE

  constructor(
    url: string,
    name: string,
    description: string,
    imageCaptions: ImageCaption[],
    category: string = 'DESKTOP',
    demoUrl?: string
  ) {
    this.url = url;
    this.name = name;
    this.description = description;
    this.imageCaptions = imageCaptions;
    this.category = category;
    this.demoUrl = demoUrl;
  }
}
