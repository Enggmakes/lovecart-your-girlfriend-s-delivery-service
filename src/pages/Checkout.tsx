import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const deliveryTimes = [
  { id: "now", label: "Right Now ⚡", sub: "If she's in the mood" },
  { id: "tonight", label: "Tonight 🌙", sub: "After dinner vibes" },
  { id: "weekend", label: "This Weekend 🎉", sub: "Full day package" },
  { id: "valentine", label: "Valentine Special 💝", sub: "Feb 14 guaranteed*" },
];

const paymentMethods = [
  { id: "upi-love", label: "UPI of Love 💕", sub: "Instant emotional transfer" },
  { id: "emi", label: "Emotional EMI 💳", sub: "Pay in small feelings" },
  { id: "promise", label: "Promise Pay Later 🤞", sub: "Trust-based payment" },
  { id: "hug-pay", label: "Hug & Pay 🤗", sub: "One hug = full payment" },
];

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [delivery, setDelivery] = useState("now");
  const [payment, setPayment] = useState("upi-love");

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <p className="text-muted-foreground mb-4">Nothing to checkout! Your cart is empty.</p>
        <Link to="/" className="text-primary font-bold hover:underline">Go Shopping 💖</Link>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    if (!name.trim()) {
      toast.error("Please enter your name, lover! 💔");
      return;
    }
    clearCart();
    navigate("/order-confirmed", {
      state: { name, delivery, payment, items, total },
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 max-w-2xl">
        <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        <h1 className="text-3xl font-bold mb-8">Checkout 💌</h1>

        <div className="space-y-8">
          {/* Name */}
          <div>
            <label className="block font-bold mb-2 text-card-foreground">Your Name (for the love receipt) 💕</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your adorable name..."
              className="w-full px-4 py-3 rounded-xl border border-input bg-card text-card-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              maxLength={50}
            />
          </div>

          {/* Delivery Time */}
          <div>
            <label className="block font-bold mb-3 text-card-foreground">Delivery Time 🕐</label>
            <div className="grid grid-cols-2 gap-3">
              {deliveryTimes.map((dt) => (
                <motion.button
                  key={dt.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setDelivery(dt.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    delivery === dt.id
                      ? "border-primary bg-secondary love-shadow"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <span className="font-bold text-sm text-card-foreground">{dt.label}</span>
                  <p className="text-xs text-muted-foreground mt-1">{dt.sub}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div>
            <label className="block font-bold mb-3 text-card-foreground">Payment Method 💳</label>
            <div className="space-y-3">
              {paymentMethods.map((pm) => (
                <motion.button
                  key={pm.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPayment(pm.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left flex items-center justify-between transition-all ${
                    payment === pm.id
                      ? "border-primary bg-secondary love-shadow"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <div>
                    <span className="font-bold text-sm text-card-foreground">{pm.label}</span>
                    <p className="text-xs text-muted-foreground">{pm.sub}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      payment === pm.id ? "border-primary" : "border-muted-foreground"
                    }`}
                  >
                    {payment === pm.id && (
                      <div className="w-3 h-3 rounded-full gradient-love" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-bold mb-3 text-card-foreground">Order Summary</h3>
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm py-1">
                <span className="text-muted-foreground">
                  {item.product.emoji} {item.product.name} × {item.quantity}
                </span>
                <span className="text-card-foreground font-medium">💕 {item.product.price * item.quantity}</span>
              </div>
            ))}
            <hr className="border-border my-3" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="gradient-love-text">💕 {total}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePlaceOrder}
            className="w-full py-4 rounded-full gradient-love text-primary-foreground font-bold text-lg love-shadow-lg hover:love-shadow transition-all"
          >
            Place Order 💖
          </motion.button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
