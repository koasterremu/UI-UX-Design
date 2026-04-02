import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Pizza, 
  Beef as BurgerIcon, 
  Fish, 
  CupSoda, 
  IceCream, 
  Search, 
  ShoppingBag, 
  Star, 
  Clock, 
  Home, 
  ReceiptText, 
  User, 
  ArrowLeft, 
  Heart, 
  Check, 
  Minus, 
  Plus,
  Mail,
  Lock,
  ArrowRight,
  Leaf
} from 'lucide-react';
import { cn } from './lib/utils';
import { CATEGORIES, RESTAURANTS, BURGER_DETAIL } from './constants';
import { AppScreen } from './types';

// --- Components ---

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-container text-white shadow-[0px_20px_40px_rgba(91,64,57,0.25)] hover:opacity-90',
      secondary: 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/80',
      outline: 'border-2 border-outline-variant bg-transparent text-on-surface hover:bg-surface-container-low',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-xl px-8 py-4 font-headline font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-surface-container-low border-none rounded-2xl py-4 px-4 font-body text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none',
            icon && 'pl-12',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

// --- Screens ---

const LandingScreen = ({ onNext }: { onNext: () => void }) => (
  <main className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden bg-on-background">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0P6bFCJdwQWsAkmf1nji5v_VTYCiT03hM-85tSn6-8TC9yKmfSluk06vZmvMpyzmUDku9s33Tj3LiF17rvt4y9K7PbyST91PO_iI0BhlUgkD8SjwoOReLZdx36xe1UzPHGzHvGQpwlVJKhflGfDLw4vOqaQHlNNdY2DSoiAVnLsP-PpWMKzewY-Tqksy0_5L-OV4dBheEmAUtwFQAmsVo3VCPo17enFwbMR54OLIL6CdXhXDKD0nDYtRFaFP_wGl8BU8HJmUhHrAF" 
        alt="Artisan Pizza"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 hero-gradient" />
    </div>

    <div className="absolute top-0 left-0 w-full p-8 z-20 flex justify-center items-center">
      <span className="font-headline font-extrabold text-2xl tracking-tighter italic text-primary-container brand-logo-glow">
        The Culinary Editorial
      </span>
    </div>

    <div className="relative z-10 w-full max-w-md px-8 pb-16 text-center">
      <div className="mb-10 space-y-2">
        <h1 className="font-headline text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
          Crave it?<br />
          <span className="text-primary-container">We deliver it!</span>
        </h1>
        <p className="text-white/80 text-lg font-medium leading-relaxed max-w-[280px] mx-auto pt-4">
          The finest gourmet experiences, curated and delivered to your doorstep.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 w-full">
        <Button className="w-full py-5 text-lg" onClick={onNext}>
          Get Started
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-white/60 font-medium">Already a member?</span>
          <button className="text-white font-bold hover:text-primary-container transition-colors underline decoration-primary-container/40 underline-offset-4">
            Log In
          </button>
        </div>
      </div>

      <div className="mt-12 opacity-40">
        <p className="font-headline text-[10px] text-white uppercase tracking-[0.2em]">Premium Food Delivery v1.0</p>
      </div>
    </div>
  </main>
);

const LoginScreen = ({ onLogin, onBack }: { onLogin: () => void, onBack: () => void }) => (
  <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden bg-surface">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed opacity-20 rounded-full blur-3xl" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-fixed opacity-10 rounded-full blur-3xl" />
    
    <div className="w-full max-w-md z-10">
      <header className="text-center mb-12">
        <h1 className="font-headline font-extrabold text-primary-container italic text-3xl tracking-tight mb-2">
          The Culinary Editorial
        </h1>
        <p className="text-on-surface-variant font-medium tracking-wide">Enter the epicurean world</p>
      </header>

      <section className="bg-surface-container-lowest editorial-shadow rounded-lg p-8 md:p-10">
        <div className="mb-8">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">Welcome Back</h2>
          <p className="text-on-surface-variant">Sign in to continue your culinary journey.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-2">
            <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
            <Input icon={<Mail size={18} />} placeholder="gourmet@example.com" type="email" required />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Password</label>
              <button type="button" className="font-label text-xs font-semibold text-primary-container hover:text-primary transition-colors">Forgot Password?</button>
            </div>
            <Input icon={<Lock size={18} />} placeholder="••••••••" type="password" required />
          </div>

          <Button type="submit" className="w-full flex items-center justify-center gap-2">
            Login
            <ArrowRight size={20} />
          </Button>
        </form>

        <div className="relative my-10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-[1px] bg-surface-container-highest" />
          </div>
          <span className="relative px-4 bg-surface-container-lowest text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">Or continue with</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD8mH4ZNGGrdZzRUBOKWm2sIAQcOUBCG9XSJJhiwiGcCRPHaq1-Jq8ZWD8QujGIj9UHBjR0GpDOcmmf-7PfHgEErNyttbU8v5w6WdEcSfqSYblnifEWy7En2rzlOgSIaTxEXzOvDO2ZBPmNKbZn6YwaBxkQ9rtrQ_ICkd7voYIgE1a6DBki6tHqhSXxBv0mGlil5-w_nyqqlIIiwX1vN7K45mjdvFJXV9w-2vTJfmFbX9AiD0HZObPiTMJChB_eHBtE0uk8sZbgsOp" alt="Google" className="w-5 h-5" referrerPolicy="no-referrer" />
            <span className="font-label text-sm font-semibold text-on-surface-variant group-hover:text-on-surface">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors group">
            <svg className="w-5 h-5 text-[#1877F2] fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
            <span className="font-label text-sm font-semibold text-on-surface-variant group-hover:text-on-surface">Facebook</span>
          </button>
        </div>
      </section>

      <footer className="mt-8 text-center">
        <p className="text-on-surface-variant font-medium">
          New to the Editorial? 
          <button className="text-primary-container font-bold ml-1 hover:underline underline-offset-4 decoration-2">Sign Up</button>
        </p>
      </footer>
    </div>
  </main>
);

const HomeScreen = ({ onSelectProduct }: { onSelectProduct: () => void }) => {
  const [activeCategory, setActiveCategory] = useState('burger');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pizza': return <Pizza size={28} />;
      case 'Burger': return <BurgerIcon size={28} />;
      case 'Sushi': return <Fish size={28} />;
      case 'Drinks': return <CupSoda size={28} />;
      case 'Dessert': return <IceCream size={28} />;
      default: return <Pizza size={28} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface pb-32">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0px_20px_40px_rgba(91,64,57,0.08)]">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXTs7ki0wo3c3L8m0yNL--TSGy0wxJYKh5DLSIU7UNJGFPRjk42Qy0P9Zdl36S5TB7-YJKuns1XhduTwN9yDhgUf67GMO9B746N-Ya_fgWecaxpyQS4MqxrWpzDt1V0tOhGILmXunrcf4D6k6WUukCYBdq5ONobA0HtKUFGAGvtrnCWIa8l3hUTp9-w7Oz4-G5cM-JTCti3FmXMB_7SUHgGXGw4WUUHknV7HhU8nNkfzsupOr8gfdCp-gG7L1lIOqURO7v8x4am92a" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="font-headline font-extrabold text-primary-container italic text-lg tracking-tight">The Culinary Editorial</h1>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-50 transition-colors text-stone-500 active:scale-95 duration-150">
            <ShoppingBag size={20} />
          </button>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-screen-xl mx-auto">
        <section className="mb-10">
          <Input icon={<Search size={20} />} placeholder="What are you craving?" />
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Curated Collections</h2>
            <button className="font-label text-sm font-semibold text-primary">Explore All</button>
          </div>
          <div className="flex overflow-x-auto gap-6 hide-scrollbar -mx-6 px-6">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex-shrink-0 flex flex-col items-center gap-3 group"
              >
                <div className={cn(
                  "w-20 h-20 rounded-full shadow-[0px_10px_20px_rgba(0,0,0,0.04)] flex items-center justify-center transition-all duration-300 active:scale-90",
                  activeCategory === cat.id 
                    ? "bg-primary text-white shadow-[0px_15px_30px_rgba(176,47,0,0.2)]" 
                    : "bg-surface-container-lowest text-stone-500"
                )}>
                  {getIcon(cat.name)}
                </div>
                <span className={cn(
                  "font-label text-[12px] font-bold uppercase tracking-wider",
                  activeCategory === cat.id ? "text-primary" : "text-on-surface-variant"
                )}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-14 relative overflow-hidden rounded-3xl bg-secondary h-48 flex items-center">
          <div className="relative z-10 pl-8 w-1/2">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-[10px] font-bold uppercase tracking-widest mb-2">Editorial Choice</span>
            <h3 className="font-headline text-2xl font-extrabold text-white leading-tight mb-2">Summer Greens & Grains</h3>
            <p className="text-white/80 text-sm font-body">Healthy lunch, delivered in 20 min.</p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rotate-12">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxaxsEzepJH0TOvvMo34gqTnxLkasyXPfMTE3VVWRuCeco6MiIcyuKoBpvsnQY0RUZ9l2UcA4JICdgDlT46oIoUwUSgi_l0efpm2_eP6SMNG3cO810JHDDu_FaLDS2B5mCpqKCMXq-wU3v7tIa2i4TAyFAo42Bi-WCLVjx45mdfZ0u2esmR7Kk3_uAiD-Adz5L9fyBUzIG8l-N0PEWlpuYK6DMtm4kfso09gj2JxzG-Xkxe76L2zpjXneZrmMGPQf7o4JIFllthXFt" 
              alt="Healthy Salad" 
              className="w-full h-full object-cover rounded-3xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        <section>
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Popular Restaurants</h2>
            <button className="font-label text-sm font-semibold text-stone-400">View Map</button>
          </div>
          <div className="space-y-10">
            {RESTAURANTS.map((res) => (
              <div key={res.id} className="group cursor-pointer" onClick={onSelectProduct}>
                <div className="relative h-64 mb-5 overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 group-hover:scale-[1.02]">
                  <img src={res.image} alt={res.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Star size={14} className="text-orange-500 fill-orange-500" />
                    <span className="font-label text-xs font-bold text-on-surface">{res.rating}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-on-background/80 backdrop-blur-md text-white px-4 py-2 rounded-xl flex items-center gap-2">
                    <Clock size={14} />
                    <span className="font-label text-xs font-bold uppercase tracking-wider">{res.deliveryTime}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface mb-1">{res.name}</h3>
                    <p className="font-body text-sm text-on-surface-variant italic">{res.cuisine}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-primary font-bold text-lg">{res.priceLevel}</span>
                    {res.freeDelivery && <span className="text-secondary font-label text-[10px] font-bold uppercase">Free Delivery</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-2xl z-50 rounded-t-[32px] shadow-[0px_-10px_30px_rgba(0,0,0,0.04)] px-4 pt-3 pb-8 flex justify-around items-center">
        <button className="flex flex-col items-center justify-center bg-orange-100 text-orange-700 rounded-full px-5 py-1 transition-all active:scale-90">
          <Home size={24} className="fill-orange-700" />
          <span className="font-headline text-[10px] font-semibold tracking-wide uppercase mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-stone-400 hover:text-orange-500 transition-all active:scale-90">
          <Search size={24} />
          <span className="font-headline text-[10px] font-semibold tracking-wide uppercase mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center justify-center text-stone-400 hover:text-orange-500 transition-all active:scale-90">
          <ReceiptText size={24} />
          <span className="font-headline text-[10px] font-semibold tracking-wide uppercase mt-1">Orders</span>
        </button>
        <button className="flex flex-col items-center justify-center text-stone-400 hover:text-orange-500 transition-all active:scale-90">
          <User size={24} />
          <span className="font-headline text-[10px] font-semibold tracking-wide uppercase mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
};

const DetailScreen = ({ onBack }: { onBack: () => void }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('regular');
  const [addons, setAddons] = useState<string[]>(['cheese']);

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-surface pb-32">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0px_20px_40px_rgba(91,64,57,0.08)]">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH0Fzt8wvTGtrxWa9vFYa2ut0YPmuer0iUBBCnSaMYhOUera8S4PuWgXgbqKu8ks_wImeP8MRE07L8CbQnmIYkyjgdEB9rogWTi5oNDBYQBVXXE6AyDrJHtXyIGj-YaJ0EDkiMmzq-FtYWiCXWvkhxv2f5Zla9JF56SCJ05ZNuKO45gBrfKtvPRiXiHH_BCPKpFHyg_E5P7ld7_OlBvfMxOA51JrmLtq_aAZtQ47q49DORxHssu8iJUvCNEwX-9Zs4EKRHoaL__Zhz" alt="user" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-headline font-extrabold text-primary-container italic">The Culinary Editorial</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-50 transition-colors">
            <ShoppingBag size={20} className="text-primary-container" />
          </button>
        </div>
      </header>

      <main className="pb-32 pt-16">
        <section className="relative w-full h-[397px] overflow-hidden">
          <img src={BURGER_DETAIL.image} alt={BURGER_DETAIL.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          <button onClick={onBack} className="absolute top-6 left-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg active:scale-95 duration-150">
            <ArrowLeft size={24} />
          </button>
          <button className="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg active:scale-95 duration-150">
            <Heart size={24} className="text-primary fill-primary" />
          </button>
        </section>

        <div className="px-6 -mt-12 relative z-10">
          <div className="bg-surface-container-lowest rounded-t-xl p-8 shadow-[0px_-20px_40px_rgba(91,64,57,0.04)]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="font-headline text-[1.75rem] font-bold text-on-surface leading-tight mb-2">{BURGER_DETAIL.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-surface-container-low rounded-full">
                    <Star size={16} className="text-primary fill-primary" />
                    <span className="font-label text-sm font-semibold">{BURGER_DETAIL.rating} ({BURGER_DETAIL.reviews}+)</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-secondary-container rounded-full">
                    <Leaf size={16} className="text-on-secondary-container fill-on-secondary-container" />
                    <span className="font-label text-sm font-semibold text-on-secondary-container uppercase">Premium Cut</span>
                  </div>
                </div>
              </div>
              <span className="font-headline text-2xl font-extrabold text-primary">${BURGER_DETAIL.price}</span>
            </div>

            <p className="font-body text-on-surface-variant leading-relaxed mb-10 text-lg">
              {BURGER_DETAIL.description}
            </p>

            <div className="space-y-12">
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline text-xl font-bold tracking-tight">Choice of Size</h3>
                  <span className="px-3 py-1 bg-surface-container-high rounded-full font-label text-[10px] font-bold uppercase tracking-widest">Required</span>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedSize('regular')}
                    className={cn(
                      "flex-1 py-4 px-6 rounded-xl border-2 flex flex-col items-center gap-2 transition-all",
                      selectedSize === 'regular' ? "border-primary-container bg-primary-container/5 text-on-primary-container" : "border-transparent bg-surface-container-low text-on-surface-variant"
                    )}
                  >
                    <span className="font-label font-bold">Regular</span>
                    <span className="text-xs opacity-70">Standard</span>
                  </button>
                  <button 
                    onClick={() => setSelectedSize('large')}
                    className={cn(
                      "flex-1 py-4 px-6 rounded-xl border-2 flex flex-col items-center gap-2 transition-all",
                      selectedSize === 'large' ? "border-primary-container bg-primary-container/5 text-on-primary-container" : "border-transparent bg-surface-container-low text-on-surface-variant"
                    )}
                  >
                    <span className="font-label font-bold">Large</span>
                    <span className="text-xs opacity-70">+$2.50</span>
                  </button>
                </div>
              </section>

              <section>
                <h3 className="font-headline text-xl font-bold tracking-tight mb-6">Personalize Your Order</h3>
                <div className="space-y-3">
                  {[
                    { id: 'cheese', name: 'Extra Cheese', desc: 'Melted aged cheddar', price: '+$1.50' },
                    { id: 'onions', name: 'No Onions', desc: 'Remove red onions', price: 'Free' },
                    { id: 'bacon', name: 'Add Smoked Bacon', desc: 'Maple cured crispy strips', price: '+$2.00' },
                  ].map((option) => (
                    <label 
                      key={option.id}
                      className="flex items-center justify-between p-5 bg-surface rounded-2xl hover:bg-surface-container-low transition-all cursor-pointer"
                      onClick={() => toggleAddon(option.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-6 h-6 rounded-md flex items-center justify-center transition-all",
                          addons.includes(option.id) ? "bg-primary" : "border-2 border-outline-variant bg-white"
                        )}>
                          {addons.includes(option.id) && <Check size={14} className="text-white" />}
                        </div>
                        <div>
                          <p className="font-label font-bold">{option.name}</p>
                          <p className="text-xs text-on-surface-variant">{option.desc}</p>
                        </div>
                      </div>
                      <span className={cn("font-label font-bold", option.price === 'Free' ? "text-on-surface-variant" : "text-primary")}>
                        {option.price}
                      </span>
                    </label>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="bg-white/80 backdrop-blur-2xl px-6 pt-4 pb-12 shadow-[0px_-20px_40px_rgba(0,0,0,0.05)]">
          <div className="max-w-screen-xl mx-auto flex items-center gap-6">
            <div className="flex items-center bg-surface-container-high rounded-full p-1 h-14">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm active:scale-90 duration-150"
              >
                <Minus size={20} className="text-primary font-bold" />
              </button>
              <span className="px-6 font-headline font-bold text-xl">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm active:scale-90 duration-150"
              >
                <Plus size={20} className="text-primary font-bold" />
              </button>
            </div>
            <Button className="flex-1 h-14 text-lg flex items-center justify-center gap-3">
              <span>Add to Cart</span>
              <span className="opacity-60">•</span>
              <span>${(BURGER_DETAIL.price * quantity).toFixed(2)}</span>
            </Button>
          </div>
        </div>

        <nav className="bg-white/80 backdrop-blur-2xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-8 z-50 rounded-t-[32px] shadow-[0px_-10px_30px_rgba(0,0,0,0.04)]">
          <button className="flex flex-col items-center justify-center text-stone-400 hover:text-orange-500 transition-all">
            <Home size={24} />
            <span className="font-headline text-[10px] font-semibold tracking-wide uppercase mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center text-stone-400 hover:text-orange-500 transition-all">
            <Search size={24} />
            <span className="font-headline text-[10px] font-semibold tracking-wide uppercase mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center justify-center bg-orange-100 text-orange-700 rounded-full px-5 py-1 transition-all">
            <ReceiptText size={24} className="fill-orange-700" />
            <span className="font-headline text-[10px] font-semibold tracking-wide uppercase mt-1">Orders</span>
          </button>
          <button className="flex flex-col items-center justify-center text-stone-400 hover:text-orange-500 transition-all">
            <User size={24} />
            <span className="font-headline text-[10px] font-semibold tracking-wide uppercase mt-1">Profile</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('landing');

  const renderScreen = () => {
    switch (screen) {
      case 'landing':
        return <LandingScreen onNext={() => setScreen('login')} />;
      case 'login':
        return <LoginScreen onLogin={() => setScreen('home')} onBack={() => setScreen('landing')} />;
      case 'home':
        return <HomeScreen onSelectProduct={() => setScreen('detail')} />;
      case 'detail':
        return <DetailScreen onBack={() => setScreen('home')} />;
      default:
        return <LandingScreen onNext={() => setScreen('login')} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screen}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="min-h-screen"
      >
        {renderScreen()}
      </motion.div>
    </AnimatePresence>
  );
}
