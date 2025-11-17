import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card p-8 hover-lift hover:border-accent/50 transition-all">
      <div className="relative z-10">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
};
