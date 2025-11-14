import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface PanelCardProps {
  title: string;
  subtitle?: string;
  price: string;
  features: string[];
  isReseller?: boolean;
  className?: string;
}

export const PanelCard = ({
  title,
  subtitle,
  price,
  features,
  isReseller,
  className,
}: PanelCardProps) => {
  return (
    <div
      className={cn(
        "relative p-8 rounded-2xl border-2 border-panel-border bg-gradient-to-br from-panel-bg to-panel-bg/50 backdrop-blur-xl transition-all hover:border-accent hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
          <Shield className="w-8 h-8 text-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-bold gradient-text">{title}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {isReseller && (
        <div className="mb-6 px-4 py-2 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/40 rounded-lg inline-block">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">
            ⭐ Reseller Packages
          </span>
        </div>
      )}

      <div className="relative space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 group/item">
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform"></div>
            <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
