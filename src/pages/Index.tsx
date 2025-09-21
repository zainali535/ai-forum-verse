import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeedPreview from "@/components/FeedPreview";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        <FeedPreview />
        <Features />
        
        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="glass-card p-12 rounded-3xl border border-border/30 bg-gradient-glass">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join the <span className="bg-gradient-primary bg-clip-text text-transparent">AI Revolution</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Connect Supabase to unlock the full forum experience with authentication, 
                real-time discussions, and AI-powered features.
              </p>
              <div className="text-sm text-muted-foreground/80 mb-6 p-4 bg-muted/20 rounded-lg border border-border/30">
                💡 <strong>Next Step:</strong> Click the green Supabase button to enable backend features like user authentication, post creation, and AI enhancements.
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">AI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Forum
            </span>
          </div>
          <p className="text-muted-foreground">
            The future of AI discussion is here.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
