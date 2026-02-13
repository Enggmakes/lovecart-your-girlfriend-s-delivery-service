import { useLocation, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Home, Package } from "lucide-react";
import Footer from "@/components/Footer";

const OrderConfirmation = () => {
  const location = useLocation();
  const state = location.state as {
    name: string;
    delivery: string;
    payment: string;
    total: number;
  } | null;

  if (!state) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="max-w-md w-full text-center"
        >
          {/* Animated hearts */}
          <div className="relative mb-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-20, -80],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 10)],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="absolute left-1/2 top-1/2"
              >
                <Heart className="w-6 h-6 text-primary fill-primary" />
              </motion.div>
            ))}

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-8xl"
            >
              💖
            </motion.div>
          </div>

          <h1 className="text-3xl font-bold mb-2">
            Order Confirmed!
          </h1>
          <p className="text-xl font-display gradient-love-text mb-4">
            Your Girlfriend Will Deliver Soon 💋
          </p>
          <p className="text-muted-foreground mb-6">
            Hey {state.name}, your love order of{" "}
            <span className="font-bold text-primary">💕 {state.total}</span>{" "}
            has been placed successfully. Sit tight and look cute!
          </p>

          <div className="bg-card rounded-2xl border border-border p-5 mb-8 text-left">
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono font-bold text-card-foreground">LOVE-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="text-green-600 font-bold">Processing with Love 💕</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment</span>
                <span className="font-medium text-card-foreground capitalize">{state.payment.replace("-", " ")}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-love text-primary-foreground font-bold love-shadow"
            >
              <Home className="w-4 h-4" />
              Shop More Love
            </Link>
            <Link
              to="/orders"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-bold"
            >
              <Package className="w-4 h-4" />
              My Orders
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
