import feiraData from './feiraautomatica.json';

export const PARTNER_BRANDS = feiraData.homepage.servicesIntro.marqueeBrands;

export const FEATURED_TESTIMONIAL = {
  label: feiraData.homepage.featured.label,
  quote: feiraData.homepage.featured.quote,
  author: feiraData.homepage.featured.author,
  company: feiraData.homepage.featured.role,
  image: feiraData.homepage.featured.image,
  avatar: feiraData.homepage.featured.image,
};

export const PROOF_INTRO = feiraData.homepage.servicesIntro;
