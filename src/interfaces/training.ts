export interface TrainingInterface {
  title: string;
  img: string;
  text: string;
  slug?: string;
  seo: {
    description: string;
    keywords: Array<string>;
  };
}
