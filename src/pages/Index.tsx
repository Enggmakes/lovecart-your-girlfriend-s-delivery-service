import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import CategorySection from "@/components/CategorySection";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { motion } from "framer-motion";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />

      <CategorySection
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />

      {/* Products */}
      <section id="products" className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Today's <span className="gradient-love-text">Love Deals</span> 🔥
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            More love, same effort. Discounts that make your heart (and wallet) happy.
          </p>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 gradient-love-soft">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { emoji: "💖", title: "100% Genuine Love", sub: "No fake feelings" },
              { emoji: "⚡", title: "Instant Delivery", sub: "She's always on time*" },
              { emoji: "🔒", title: "Secure Emotions", sub: "Your heart is safe" },
              { emoji: "🔄", title: "No Returns", sub: "Love is non-refundable" },
            ].map((item) => (
              <div key={item.title}>
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="font-bold text-card-foreground mt-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
