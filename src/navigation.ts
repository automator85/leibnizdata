import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Lösungen',
      links: [
        {
          text: 'Datenanalyse',
          href: getPermalink('/loesungen/datenanalyse'),
        },
        {
          text: 'Softwareentwicklung',
          href: getPermalink('/loesungen/software'),
        },
        {
          text: 'Web & Mobile',
          href: getPermalink('/loesungen/web-mobile'),
        },
        {
          text: 'KI & Machine Learning',
          href: getPermalink('/loesungen/ki-ml'),
        },
      ],
    },
    {
      text: 'Branchen',
      links: [
        {
          text: 'Startups',
          href: getPermalink('/branchen/startups'),
        },
        {
          text: 'Mittelstand',
          href: getPermalink('/branchen/mittelstand'),
        },
        {
          text: 'Enterprise',
          href: getPermalink('/branchen/enterprise'),
        },
        {
          text: 'E-Commerce',
          href: getPermalink('/branchen/e-commerce'),
        },
      ],
    },
    {
      text: 'Unternehmen',
      links: [
        {
          text: 'Über uns',
          href: getPermalink('/ueber-uns'),
        },
        {
          text: 'Team',
          href: getPermalink('/team'),
        },
        {
          text: 'Karriere',
          href: getPermalink('/karriere'),
        },
        {
          text: 'Referenzen',
          href: getPermalink('/referenzen'),
        },
      ],
    },
    {
      text: 'Ressourcen',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Fallstudien',
          href: getPermalink('/fallstudien'),
        },
        {
          text: 'Whitepaper',
          href: getPermalink('/whitepaper'),
        },
        {
          text: 'FAQ',
          href: getPermalink('/faq'),
        },
      ],
    },
  ],
  actions: [
    { 
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Lösungen',
      links: [
        { text: 'Datenanalyse', href: getPermalink('/loesungen/datenanalyse') },
        { text: 'Softwareentwicklung', href: getPermalink('/loesungen/software') },
        { text: 'Web & Mobile', href: getPermalink('/loesungen/web-mobile') },
        { text: 'KI & Machine Learning', href: getPermalink('/loesungen/ki-ml') },
      ],
    },
    {
      title: 'Unternehmen',
      links: [
        { text: 'Über uns', href: getPermalink('/ueber-uns') },
        { text: 'Team', href: getPermalink('/team') },
        { text: 'Karriere', href: getPermalink('/karriere') },
        { text: 'Referenzen', href: getPermalink('/referenzen') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Kontakt', href: getPermalink('/kontakt') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Dokumentation', href: getPermalink('/dokumentation') },
        { text: 'Status', href: getPermalink('/status') },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { text: 'Impressum', href: getPermalink('/impressum') },
        { text: 'Datenschutz', href: getPermalink('/datenschutz') },
        { text: 'AGB', href: getPermalink('/agb') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/impressum') },
    { text: 'Datenschutz', href: getPermalink('/datenschutz') },
    { text: 'AGB', href: getPermalink('/agb') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Leibniz Data · Alle Rechte vorbehalten.
  `,
};
