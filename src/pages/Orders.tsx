import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Orders = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <h1 className="text-3xl font-bold mb-8">My Orders 📦</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <span className="text-7xl mb-4">📋</span>
          <h2 className="text-xl font-bold mb-2">No orders yet!</h2>
          <p className="text-muted-foreground mb-6 text-center max-w-md">
            You haven't ordered any love yet. Don't keep your girlfriend unemployed — go place an order!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-love text-primary-foreground font-bold love-shadow"
          >
            <ShoppingBag className="w-5 h-5" />
            Start Shopping
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
