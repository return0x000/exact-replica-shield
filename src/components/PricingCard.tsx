import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  className?: string;
}

export const PricingCard = ({
  title,
  price,
  duration,
  className,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative p-10 rounded-3xl border-2 border-panel-border bg-gradient-to-br from-panel-bg via-panel-bg to-accent/5 backdrop-blur-xl transition-all hover:border-accent hover:shadow-2xl hover:shadow-accent/40 hover:scale-110 group overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors"></div>
      <div className="relative text-center space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30">
          <p className="text-sm text-accent font-bold uppercase tracking-wider">{title}</p>
        </div>
        <div className="mb-6">
          <span className="text-6xl font-bold gradient-text glow-text">{price}</span>
        </div>
        <div className="pt-4 border-t border-border/50">
          <p className="text-muted-foreground font-medium">{duration}</p>
        </div>
      </div>
    </div>
  );
};
