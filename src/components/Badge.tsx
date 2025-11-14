import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export const Badge = ({ icon: Icon, text, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border backdrop-blur-sm",
        className
      )}
    >
      <Icon className="w-4 h-4 text-accent" />
      <span className="text-sm font-medium text-foreground">{text}</span>
    </div>
  );
};
