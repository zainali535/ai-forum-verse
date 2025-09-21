import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">AI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Forum
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="hover:bg-muted/50">Feed</Button>
            <Button variant="ghost" className="hover:bg-muted/50">Create</Button>
            <Button variant="ghost" className="hover:bg-muted/50">Leaderboard</Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Badge variant="secondary" className="bg-gradient-secondary text-secondary-foreground">
                AI Assistant
              </Badge>
              <Button variant="ghost" size="sm">Profile</Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsAuthenticated(false)}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsAuthenticated(true)}
              >
                Login
              </Button>
              <Button 
                className="btn-3d bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground border-0"
                size="sm"
                onClick={() => setIsAuthenticated(true)}
              >
                Join Forum
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;