import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Romantic love themed banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-love-gold fill-love-gold" />
            <span className="text-love-gold font-semibold text-sm uppercase tracking-wider">
              #1 Love Delivery Service
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Order Love.{" "}
            <span className="font-display block mt-2">
              Delivered by Your Girlfriend 💖
            </span>
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg">
            Browse premium romantic actions — kisses, hugs, cuddles & more. 
            Place an order, and she'll deliver. No refunds. No returns. Only love.
          </p>

          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-love text-primary-foreground font-bold text-lg love-shadow-lg hover:scale-105 transition-transform"
          >
            Shop Love Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
