export type Article = {
    id?: number; // IndexedDB auto-incremented ID
    source: {
      id: string | null;
      name: string | null;
    };
    title: string;
    description: string;
    content: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    author: string | null;
  }
  