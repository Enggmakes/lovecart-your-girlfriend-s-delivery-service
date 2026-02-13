import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl border border-border overflow-hidden love-shadow hover:love-shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Emoji display area */}
      <div className="relative gradient-love-soft p-8 flex items-center justify-center">
        <span className="text-7xl">{product.emoji}</span>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold gradient-love text-primary-foreground">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? "text-primary fill-primary" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-love-gold text-foreground text-xs font-bold">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-card-foreground mb-1">{product.name}</h3>

        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 text-love-gold fill-love-gold" />
          <span className="text-sm font-medium text-card-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 flex-1">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">💕 {product.price}</span>
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product)}
            className="p-3 rounded-full gradient-love text-primary-foreground love-shadow hover:love-shadow-lg transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
