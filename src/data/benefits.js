import feiraData from './feiraautomatica.json';

export const TECHNOLOGY = feiraData.homepage.technology;

const cards = feiraData.homepage.technology.bentoCards;
export const BENTO_CARDS = Object.fromEntries(cards.map((card) => [card.id, card]));
