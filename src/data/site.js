import feiraData from './feiraautomatica.json';

export default feiraData;

export const meta = feiraData.meta;
export const navigation = feiraData.navigation;
export const hero = feiraData.hero;
export const homepage = feiraData.homepage;
export const company = feiraData.company;
export const brands = feiraData.brands;
export const contact = feiraData.contact;
export const footer = feiraData.footer;
export const assets = feiraData.assets;

export const NAV_LINKS = navigation.main;
export const FEATURE_PILLS = hero.featureTopics;
export const FAQ_ITEMS = homepage.faq.items;
export const TESTIMONIALS = homepage.services.map((service) => ({
  name: service.title,
  title: 'Feira Automática',
  quote: service.description,
}));
export const BLOG_POSTS = homepage.gallery.categories.map((item) => ({
  category: item.category,
  date: '',
  title: item.title,
  image: item.image,
}));
export const PARTNER_BRANDS = homepage.servicesIntro.marqueeBrands;
export const FEATURED_TESTIMONIAL = {
  label: homepage.featured.label,
  quote: homepage.featured.quote,
  author: homepage.featured.author,
  company: homepage.featured.role,
  image: homepage.featured.image,
  avatar: homepage.featured.image,
};
export const BENTO_CARDS = homepage.technology.bentoCards;
export const SHOWCASE_COPY = {
  title: homepage.showcase.title,
  subtitle: homepage.showcase.subtitlePt,
};
export const SHOWCASE_IMAGES_LEFT = homepage.showcase.imagesLeft;
export const SHOWCASE_IMAGES_RIGHT = homepage.showcase.imagesRight;
export const SHOWCASE_VIDEO = homepage.showcase.video;
export const SHOWCASE_VIDEO_POSTER = homepage.showcase.videoPoster;
