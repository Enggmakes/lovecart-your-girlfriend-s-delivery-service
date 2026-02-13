import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal, total, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-8xl mb-6"
          >
            💔
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty!</h2>
          <p className="text-muted-foreground mb-6 text-center">
            Looks like you haven't ordered any love yet. Your girlfriend is waiting...
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-love text-primary-foreground font-bold love-shadow"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Love Items
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold mb-8">
          Your Love Cart 🛒 <span className="text-muted-foreground text-lg font-normal">({totalItems} items)</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-card rounded-2xl border border-border p-4 flex gap-4 items-center"
                >
                  <div className="w-20 h-20 rounded-xl gradient-love-soft flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">{item.product.emoji}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-card-foreground">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{item.product.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-primary">💕 {item.product.price}</span>
                      <span className="text-xs text-muted-foreground line-through">{item.product.originalPrice}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="bg-card rounded-2xl border border-border p-6 h-fit sticky top-24">
            <h3 className="font-bold text-lg mb-4">Order Summary 💌</h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal (MRP)</span>
                <span className="line-through text-muted-foreground">💕 {subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Love Discount</span>
                <span className="text-green-600 font-medium">- 💕 {subtotal - total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Emotional Tax</span>
                <span className="text-muted-foreground">FREE 💝</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="gradient-love-text">💕 {total}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-love text-primary-foreground font-bold love-shadow hover:love-shadow-lg transition-all hover:scale-[1.02]"
            >
              Proceed to Checkout 💖
            </Link>

            <p className="text-xs text-muted-foreground text-center mt-3">
              *Delivery depends entirely on her mood
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
