import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-[85vh] bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 py-16 relative z-10">
        <div className="grid grid-cols-12 gap-4 sm:gap-8 items-center">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            
            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-primary-white mb-4 sm:mb-6 leading-[1.1] px-2 sm:px-0">
              Automatizaciones{" "}
              <span className="text-gradient">
                con inteligencia artificial
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-secondary-white mb-6 sm:mb-8 leading-relaxed max-w-2xl px-2 sm:px-0">
              Transformamos procesos manuales en flujos automatizados inteligentes que ahorran tiempo, 
              reducen errores y aumentan la productividad de tu empresa.
            </p>
            
            {/* CTA */}
            <div className="mb-6 sm:mb-8 px-2 sm:px-0">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold rounded-2xl text-white w-full sm:w-auto"
                onClick={() => window.open('https://calendly.com/dsanvil9/consultor-ia', '_blank')}
              >
                Solicitar Consultoría →
              </Button>
            </div>
            
            {/* Social proof chips */}
            <div className="flex flex-wrap gap-2 sm:gap-3 px-2 sm:px-0 justify-center sm:justify-start">
              <Badge className="bg-chip border-surface text-primary-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                65+ Procesos
              </Badge>
              <Badge className="bg-chip border-surface text-primary-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                98% Satisfacción
              </Badge>
              <Badge className="bg-chip border-surface text-primary-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                24/7 Soporte IA
              </Badge>
            </div>
          </div>
          
          {/* Right Column - Mosaic 2x2 */}
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-surface border-surface backdrop-filter backdrop-blur-[10px] rounded-2xl p-6 shadow-card">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-manrope font-semibold text-primary-white mb-2">Ahorro de Tiempo</h3>
                <p className="text-secondary-white text-sm">Hasta 80% de reducción en tareas manuales repetitivas.</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-surface border-surface backdrop-filter backdrop-blur-[10px] rounded-2xl p-6 shadow-card">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-manrope font-semibold text-primary-white mb-2">Reducción de Costes</h3>
                <p className="text-secondary-white text-sm">ROI promedio del 300% en los primeros 6 meses.</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-surface border-surface backdrop-filter backdrop-blur-[10px] rounded-2xl p-6 shadow-card">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-manrope font-semibold text-primary-white mb-2">Mayor Productividad</h3>
                <p className="text-secondary-white text-sm">Equipos más enfocados en tareas estratégicas de alto valor.</p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-surface border-surface backdrop-filter backdrop-blur-[10px] rounded-2xl p-6 shadow-card">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-manrope font-semibold text-primary-white mb-2">Menor Margen de Error</h3>
                <p className="text-secondary-white text-sm">Hasta 95% menos errores en procesos automatizados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;