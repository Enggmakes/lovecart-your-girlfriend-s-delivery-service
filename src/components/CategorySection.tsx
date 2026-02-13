import { categories } from "@/data/products";
import { motion } from "framer-motion";

type Props = {
  activeCategory: string | null;
  onCategoryClick: (id: string | null) => void;
};

const CategorySection = ({ activeCategory, onCategoryClick }: Props) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Shop by <span className="gradient-love-text">Category</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryClick(null)}
            className={`px-5 py-3 rounded-full font-semibold transition-all ${
              activeCategory === null
                ? "gradient-love text-primary-foreground love-shadow"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            All ❤️
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryClick(cat.id)}
              className={`px-5 py-3 rounded-full font-semibold transition-all ${
                activeCategory === cat.id
                  ? "gradient-love text-primary-foreground love-shadow"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.emoji} {cat.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
