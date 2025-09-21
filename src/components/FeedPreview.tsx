import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUp, ArrowDown, MessageCircle, Sparkles } from "lucide-react";

const FeedPreview = () => {
  const mockPosts = [
    {
      id: 1,
      title: "How GPT-4 is revolutionizing code generation",
      author: "alex_dev",
      votes: 234,
      comments: 42,
      tags: ["GPT-4", "Coding", "AI"],
      timeAgo: "2h ago",
      isAI: true
    },
    {
      id: 2,
      title: "Best practices for fine-tuning language models",
      author: "ml_researcher",
      votes: 156,
      comments: 28,
      tags: ["Machine Learning", "Fine-tuning", "LLM"],
      timeAgo: "4h ago",
      isAI: false
    },
    {
      id: 3,
      title: "The ethics of AI in decision-making systems",
      author: "ethicist_jane",
      votes: 189,
      comments: 67,
      tags: ["Ethics", "AI Safety", "Decision Making"],
      timeAgo: "6h ago",
      isAI: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Discussions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover trending topics and join the conversation
          </p>
        </div>

        <div className="space-y-6">
          {mockPosts.map((post) => (
            <Card key={post.id} className="glass-card border-border/30 hover:border-primary/30 transition-all group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm">
                        {post.author.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
                    </div>
                  </div>
                  {post.isAI && (
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Enhanced
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-muted/50 hover:bg-primary/20 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        <ArrowUp className="w-4 h-4" />
                      </Button>
                      <span className="text-sm font-medium">{post.votes}</span>
                      <Button variant="ghost" size="sm" className="hover:text-destructive">
                        <ArrowDown className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="btn-3d bg-gradient-secondary hover:bg-gradient-secondary/90 text-secondary-foreground border-0"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeedPreview;