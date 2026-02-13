import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-love-soft border-t border-border py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <span className="text-xl font-display gradient-love-text">LoveCart</span>
        </div>
        <p className="text-muted-foreground text-sm mb-2">
          Where love is just a click away. No refunds, no returns — only love. 💕
        </p>
        <p className="text-xs text-muted-foreground">
          © 2026 LoveCart. All love reserved. Not responsible for any broken hearts or excessive cuteness.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
