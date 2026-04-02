import { Category, Restaurant, Dish } from './types';

export const CATEGORIES: Category[] = [
  { id: 'pizza', name: 'Pizza', icon: 'Pizza', color: 'text-primary' },
  { id: 'burger', name: 'Burger', icon: 'Burger', color: 'text-primary' },
  { id: 'sushi', name: 'Sushi', icon: 'Sushi', color: 'text-secondary' },
  { id: 'drinks', name: 'Drinks', icon: 'Drinks', color: 'text-tertiary' },
  { id: 'dessert', name: 'Dessert', icon: 'Dessert', color: 'text-stone-500' },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'Maison de la Truffe',
    cuisine: 'French • Fine Dining • Organic',
    rating: 4.8,
    deliveryTime: '15-25 min',
    priceLevel: '$$$',
    freeDelivery: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnJEKmy6pIFoWlKyDXCzg_LUIW0j5FPIAt4EVDZ4wvnV5FPYF_ZsSulse2aJOSyZdTDDel_jCir_fSkTTh8vl-rGPDNQwuUbye5XiqKxZpSKUO2L9frvv3Nlgos1ohrMjr3SRGo78jBoRpLCa_qBUYRzjvky_6kW3y1dCvmibN0eRrZDxrpQ0cCJhttqtuktOdBEnQYvTKCljOCp6sR0DnKjioYLhsSHNQS9DcRBtv0-LBSS8idHo8waLMes_bYHBoSJRJY1y78_9C',
  },
  {
    id: '2',
    name: 'Indigo Sushi',
    cuisine: 'Japanese • Fresh Seafood • Sushi',
    rating: 4.5,
    deliveryTime: '25-35 min',
    priceLevel: '$$',
    freeDelivery: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1B87elkMtRxxVqUo_ObhzVRlL6teY0FOuthnFdDJyNfK7X4eEBknjJg6n_RNfOFlOoB47I-RFzF7Lmduk62tCUcXZWh5yYsEG6A7HdebdtRMAfGVO66jJDyAXupPEwX5zGJkARvuZtGKExdA_HRkjOiY54QMqggD5RfeFwRtSq5PcbuWqZZJnGrxBg0DvwgQ9o9aEpQ4EZW-9dVSePCm2Z1hUgCSZPvnptLHTaOrUIcvBOdYnH5g79tJJW11tQ-tM7AcnU8C5X2qa',
  },
];

export const BURGER_DETAIL: Dish = {
  id: 'burger-1',
  name: 'Classic Beef Burger',
  description: 'A masterclass in simplicity. Our signature 100% Angus beef patty, flame-grilled to medium perfection, layered with aged Irish cheddar, vine-ripened tomatoes, and our secret editorial sauce on a toasted artisanal brioche bun.',
  price: 12.99,
  rating: 4.8,
  reviews: 120,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNQhMt73Gk0g2zuGprinelM_BFnUKPtOS2lRBybPxw-zdtgBQWXMrDJ6f_ND_Fm6WBODnxNVFDCylaxly9fK73VJjnBBOTy-yZrJ1di7sbP2wRtRiJ6VY7Yy8SlOhTehheFNEn82cELzyx0e0sEo8gelFeQ979TOp0cQ7Y_Nd101FbtH2dJItVmJxV4YN5fjIRG0Mq6Peu80BiM1Z90kS2ccwSJ9W_55zxznWnWGo3AspHhYkaBn4TUwHIXqtTq7ytQXbE9YjSRza-',
  isPremium: true,
};
