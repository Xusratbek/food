export const menuCategories = [
  { id: 1, name: 'Завтраки' },
  { id: 2, name: 'Raw' },
  { id: 3, name: 'Холодные закуски' },
  { id: 4, name: 'Брускетты' },
  { id: 5, name: 'К вину' },
  { id: 6, name: 'Салаты' },
  { id: 7, name: 'Супы' },
  { id: 8, name: 'Паста и ризотто' },
  { id: 9, name: 'Мясо' },
  { id: 10, name: 'Рыба' },
  { id: 11, name: 'Grill' },
  { id: 12, name: 'Мангал' },
  { id: 13, name: 'Гарниры' },
  
];




const menuImages = [
  './images/data-image/trex.png',
  './images/data-image/yaits.png',
  './images/data-image/sirniki.png',
  './images/data-image/Pancakes.png',
  './images/data-image/Porridge.png',
  './images/data-image/Scramble.png',
  './images/data-image/Benedict.png',
  './images/data-image/bacon.png',
  './images/data-image/Salad.png',
];

function getMenuImage(id) {
  return menuImages[(id - 1) % menuImages.length];
}

function createMenuItem(id, category, title, price, priceFrom = false, weight = '300 грамм', image) {
  const itemImage = image || getMenuImage(id);

  return {
    id,
    category,
    title,
    price,
    priceFrom,
    weight,
    image: itemImage,
    thumbnails: [itemImage, itemImage, itemImage],
    addons: [
      { id: 1, titleKey: 'addon.extra', price: 150 },
      { id: 2, titleKey: 'addon.sauce', price: 80 },
    ],
  };
}

export const menuItems = [
  {
    id: 1,
    category: 'Завтраки ',
    title: 'Яичница-глазунья из трех яиц',
    price: 250,
    priceFrom: false,
    weight: '400 грамм',
    image: "./images/data-image/trex.png",
    thumbnails: [
      './images/data-image/trex.png',
      './images/data-image/trex.png',
      './images/data-image/trex.png',
    ],
    addons: [
      { id: 1, titleKey: 'Тигровые креветки 60 г', price: 450 },
      { id: 2, titleKey: 'Томаты / паприка', price: 80 },
      { id: 3, titleKey: 'Бекон', price: 120 },
      { id: 4, titleKey: 'Сыр чеддер 30 г', price: 80 },
    ],
  },
  {
    id: 2,
    category: 'Raw',
    title: 'Омлет из трех яиц',
    price: 250,
    priceFrom: false,
    weight: '350 грамм',
    image: './images/data-image/yaits.png',
    thumbnails: [
      './images/data-image/images.jpg',
      './images/data-image/yaits.png',
      './images/data-image/yaits.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.shrimp', price: 450 },
      { id: 2, titleKey: 'addon.tomatoes', price: 80 },
      { id: 3, titleKey: 'addon.bacon', price: 120 },
      { id: 4, titleKey: 'addon.cheddar', price: 80 },
    ],
  },
  {
    id: 3,
    category: 'Холодные закуски',
    title: 'Домашние сырники',
    price: 490,
    priceFrom: false,
    weight: '300 грамм',
    image: './images/data-image/sirniki.png',
    thumbnails: [
      './images/data-image/sirniki.png',
      './images/data-image/sirniki.png',
      './images/data-image/sirniki.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.sourcream', price: 60 },
      { id: 2, titleKey: 'addon.jam', price: 80 },
      { id: 3, titleKey: 'addon.honey', price: 70 },
    ],
  },
  {
    id: 4,
    category: 'Брускетты ',
    title: 'Блины',
    price: 190,
    priceFrom: true,
    weight: '250 грамм',
    image: './images/data-image/Pancakes.png',
    thumbnails: [
      './images/data-image/Pancakes.png',
      './images/data-image/Pancakes.png',
      './images/data-image/Pancakes.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.sourcream', price: 60 },
      { id: 2, titleKey: 'addon.caviar', price: 350 },
      { id: 3, titleKey: 'addon.salmon', price: 280 },
    ],
  },
  {
    id: 5,
    category: 'К вину ',
    title: 'Каша с ягодами и кедровыми орехами',
    price: 450,
    priceFrom: false,
    weight: '350 грамм',
    image: './images/data-image/Porridge.png',
    thumbnails: [
      './images/data-image/Porridge.png',
      './images/data-image/Porridge.png',
      './images/data-image/Porridge.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.honey', price: 70 },
      { id: 2, titleKey: 'addon.cream', price: 50 },
    ],
  },
  {
    id: 6,
    category: 'Салаты',
    title: 'Скрэмбл',
    price: 290,
    priceFrom: false,
    weight: '300 грамм',
    image: './images/data-image/Scramble.png',
    thumbnails: [
      './images/data-image/Scramble.png',
      './images/data-image/Scramble.png',
      './images/data-image/Scramble.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.bacon', price: 120 },
      { id: 2, titleKey: 'addon.cheddar', price: 80 },
    ],
  },
  {
    id: 7,
    category: 'Супы',
    title: 'Яйцо Бенедикт с лососем',
    price: 850,
    priceFrom: false,
    weight: '400 грамм',
    image: './images/data-image/Benedict.png',
    thumbnails: [
      './images/data-image/Benedict.png',
      './images/data-image/Benedict.png',
      './images/data-image/Benedict.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.avocado', price: 150 },
      { id: 2, titleKey: 'addon.shrimp', price: 450 },
    ],
  },
  {
    id: 8,
    category: 'Паста и ризотто ',
    title: 'Яйцо Бенедикт с беконом',
    price: 650,
    priceFrom: false,
    weight: '400 грамм',
    image: './images/data-image/bacon.png',
    thumbnails: [
      './images/data-image/bacon.png',
      './images/data-image/bacon.png',
      './images/data-image/bacon.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.avocado', price: 150 },
      { id: 2, titleKey: 'addon.cheddar', price: 80 },
    ],
  },
  {
    id: 9,
    category: 'Мясо',
    title: 'Гречневая каша с авокадо, яйцом пашот и пармезаном',
    price: 490,
    priceFrom: false,
    weight: '380 грамм',
    image: './images/data-image/trex.png',
    thumbnails: [
      './images/data-image/trex.png',
      './images/data-image/trex.png',
      './images/data-image/trex.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.salmon', price: 280 },
      { id: 2, titleKey: 'addon.parmesan', price: 90 },
    ],
  },
  {
    id: 10,
    category: 'Рыба ',
    title: 'Кобб – салат с лососем',
    price: 890,
    priceFrom: false,
    weight: '350 грамм',
    image: './images/data-image/Salad.png',
    thumbnails: [
      './images/data-image/Salad.png',
      './images/data-image/Salad.png',
      './images/data-image/Salad.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.avocado', price: 150 },
      { id: 2, titleKey: 'addon.poachedEgg', price: 80 },
    ],
  },
  {
    id: 11,
    category: 'Grill ',
    title: 'Кобб – салат с креветками',
    price: 960,
    priceFrom: false,
    weight: '350 грамм',
    image: './images/data-image/Salad.png',
    thumbnails: [
      './images/data-image/Salad.png',
      './images/data-image/Salad.png',
      './images/data-image/Salad.png',
    ],
    addons: [
      { id: 1, titleKey: 'addon.shrimp', price: 450 },
      { id: 2, titleKey: 'addon.avocado', price: 150 },
    ],
  },
  
];
