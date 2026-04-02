export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceLevel: string;
  freeDelivery: boolean;
  image: string;
};

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isPremium: boolean;
};

export type AppScreen = 'landing' | 'login' | 'home' | 'detail';
