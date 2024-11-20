import rss from '@astrojs/rss';
import { fetchPosts } from '~/utils/blog';
import { SITE, METADATA } from '~/config';

export const GET = async () => {
  const posts = await fetchPosts();

  return rss({
    title: `${SITE.name}'s Blog`,
    description: METADATA.description,
    site: SITE.site,
    items: posts.map((post) => ({
      link: post.permalink,
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),
  });
};
