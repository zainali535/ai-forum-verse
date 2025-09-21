import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Trophy, 
  MessageSquare, 
  Users, 
  Sparkles,
  TrendingUp,
  Shield
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent summaries and content suggestions powered by advanced AI",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Zap,
      title: "Real-time Discussions",
      description: "Join live conversations with instant notifications and updates",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Trophy,
      title: "Gamified Experience",
      description: "Earn points, badges, and climb the leaderboard as you contribute",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: MessageSquare,
      title: "Smart Moderation",
      description: "AI-assisted content moderation keeps discussions productive and safe",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with AI researchers, developers, and enthusiasts worldwide",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: TrendingUp,
      title: "Trending Topics",
      description: "Discover what's hot in AI with our intelligent trend detection",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Sparkles className="w-4 h-4 mr-2" />
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our <span className="bg-gradient-primary bg-clip-text text-transparent">AI Forum</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the next generation of online discussion with AI-enhanced features designed for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card border-border/30 hover:border-primary/30 transition-all group hover:-translate-y-2 duration-300"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl border border-border/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Enterprise-Grade Security</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Your data is protected with end-to-end encryption, advanced authentication, 
              and compliance with international privacy standards.
            </p>
            <Button 
              className="btn-3d bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground border-0"
            >
              Learn More About Security
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;