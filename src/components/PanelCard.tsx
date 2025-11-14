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
        "relative p-6 rounded-lg border border-border bg-panel-bg/50 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <Shield className="w-8 h-8 text-accent" />
        <div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {isReseller && (
        <div className="mb-4 px-3 py-1 bg-accent/20 border border-accent/30 rounded inline-block">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Reseller Packages
          </span>
        </div>
      )}

      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
