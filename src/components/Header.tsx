import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-10 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-manrope font-bold text-xl text-foreground">INVEXA</span>
        </div>
        
        <nav className="flex items-center space-x-8">
          <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Inicio
          </a>
          <a 
            href="https://wa.me/34634631263" 
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Contactar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;