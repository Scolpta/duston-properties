export interface Post {
  title: string;
  createdAt: string;
  slug: string;
  postTag: string;
  excerpt: string;
  coverImage: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  content: {
    markdown: string;
    html: string;
  };
}

export const getPostsQuery = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
      {
        posts {
    title,
    createdAt,
    slug,
    excerpt,
    postTag,
    coverImage {
      url, 
      altText,
      width,
      height
    },
    }
      }`,
  }),
};

export const getPostBySlugQuery = (slug: string) => ({
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
      {
        post(where: {slug: "${slug}"}) {
          title,
          createdAt,
          slug,
          excerpt,
          postTag,
          coverImage {
            url, 
            altText,
            width,
            height
          }
          content {
            markdown,
            html
          }
        }
      }`,
  }),
});
