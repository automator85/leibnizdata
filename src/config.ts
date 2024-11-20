export const SITE = {
  name: 'Leibniz Data',
  site: 'https://automator85.github.io',
  base: process.env.NODE_ENV === 'production' ? '/leibnizdata' : '',
  trailingSlash: true,
  googleSiteVerificationId: '',
};

export const METADATA = {
  title: {
    default: SITE.name,
    template: '%s — ' + SITE.name,
  },
  description: 'Innovative Softwarelösungen & Datenanalyse aus Berlin',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: SITE.name,
    images: [],
    type: 'website',
  },
  twitter: {
    handle: '@leibnizdata',
    site: '@leibnizdata',
    cardType: 'summary_large_image',
  },
};

export const APP_BLOG = {
  isEnabled: true,
  isRelatedPostsEnabled: true,
  postsPerPage: 6,
  list: {
    isEnabled: true,
    pathname: 'blog',
    robots: {
      index: true,
      follow: true,
    },
  },
  post: {
    isEnabled: true,
    pathname: 'blog',
    robots: {
      index: true,
      follow: true,
    },
  },
  category: {
    isEnabled: true,
    pathname: 'category',
    robots: {
      index: true,
      follow: true,
    },
  },
  tag: {
    isEnabled: true,
    pathname: 'tag',
    robots: {
      index: true,
      follow: true,
    },
  },
};

export const I18N = {
  language: 'de-DE',
  textDirection: 'ltr',
};
