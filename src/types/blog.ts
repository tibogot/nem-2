export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  excerpt: string;
  body: any[];
  readingTime?: string;
  categories?: string[];
}
