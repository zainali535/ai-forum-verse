import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/ai-forum-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-secondary/20 rounded-full blur-xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <Badge 
          variant="outline" 
          className="mb-6 glass-card border-primary/30 text-primary"
        >
          🤖 AI-Powered Community
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Future of
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            AI Discussion
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join the most advanced forum where AI enthusiasts share knowledge, 
          collaborate on projects, and shape the future together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="btn-3d bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground border-0 px-8 py-3 text-lg"
          >
            Join the Discussion
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="glass-card border-border/50 hover:bg-muted/20 px-8 py-3 text-lg"
          >
            Explore Posts
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="glass-card p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="font-semibold mb-2">AI-Enhanced</h3>
            <p className="text-sm text-muted-foreground">Smart summaries and draft generation</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-border/30 hover:border-secondary/30 transition-all">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Instant discussions and real-time updates</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-border/30 hover:border-accent/30 transition-all">
            <div className="text-2xl mb-2">🏆</div>
            <h3 className="font-semibold mb-2">Gamified</h3>
            <p className="text-sm text-muted-foreground">Earn points and climb the leaderboard</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;