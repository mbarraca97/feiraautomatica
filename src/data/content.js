import feiraData from './feiraautomatica.json';

export const FAQ_ITEMS = feiraData.homepage.faq.items;

export const TESTIMONIALS = feiraData.homepage.services.map((service) => ({
  name: service.title,
  title: 'Feira Automática',
  quote: service.description,
}));

export const BLOG_POSTS = feiraData.homepage.gallery.categories.map((item) => ({
  category: item.category,
  date: '',
  title: item.title,
  image: item.image,
}));

export const FEATURE_PILLS = feiraData.hero.featureTopics;

export const NAV_LINKS = feiraData.navigation.main;

export const navigation = feiraData.navigation;
