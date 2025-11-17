import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudyCardProps {
  title: string;
  category: string;
  result: string;
  description: string;
}

export const CaseStudyCard = ({ title, category, result, description }: CaseStudyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 bg-card transition-all hover-lift hover:border-accent/50">
      <div className="aspect-video w-full bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(178,86,64,0.1)_50%,transparent_75%)] bg-[length:20px_20px] opacity-50" />
      </div>
      <div className="p-6">
        <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">
          {category}
        </Badge>
        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-accent">
          <span className="text-2xl">{result}</span>
          <span className="text-muted-foreground">improvement</span>
        </div>
      </div>
    </Card>
  );
};
