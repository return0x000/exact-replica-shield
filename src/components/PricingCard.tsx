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
        "p-8 rounded-2xl border-2 border-border bg-panel-bg/50 backdrop-blur-sm transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:scale-105",
        className
      )}
    >
      <div className="text-center">
        <p className="text-sm text-accent font-medium mb-4">{title}</p>
        <div className="mb-4">
          <span className="text-5xl font-bold text-foreground">{price}</span>
        </div>
        <p className="text-muted-foreground">{duration}</p>
      </div>
    </div>
  );
};
