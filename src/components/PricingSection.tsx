import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "desde 1.490 € + 290 €/mes",
      features: [
        "1 flujo + 1 canal (webchat o WhatsApp)",
        "Base de conocimiento + RAG",
        "1 integración básica (Sheets/CRM)",
        "Panel básico de métricas",
        "Formación inicial"
      ],
      cta: "Quiero este Plan",
      popular: false
    },
    {
      name: "Pro",
      price: "desde 3.400 € + 590 €/mes",
      features: [
        "2–3 flujos y canales",
        "Multi-agente y orquestación",
        "2–3 integraciones (CRM/ERP/eCommerce)",
        "Panel avanzado + SLAs",
        "Mejora continua (1 mes)"
      ],
      cta: "Quiero este Plan",
      popular: true
    },
    {
      name: "Enterprise",
      price: "a medida",
      features: [
        "Omnicanal + IVR/chat híbrido",
        "Integraciones complejas (SAP, Data Lake)",
        "Gobernanza, SSO y auditoría",
        "Soporte dedicado y roadmap",
        "Evaluación humana de calidad"
      ],
      cta: "Quiero este Plan",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Planes orientativos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adaptamos cada solución a las necesidades específicas de tu agencia
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`shadow-card border-0 relative overflow-hidden hover:shadow-soft transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary-blue shadow-glow' : 'bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-semibold">
                  Más popular
                </div>
              )}
              
              <CardHeader className={plan.popular ? 'pt-12' : ''}>
                <CardTitle className="text-2xl font-manrope text-center">
                  {plan.name}
                </CardTitle>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-blue mb-2">
                    {plan.price}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.popular ? "cta" : "hero"} 
                  className="w-full"
                  size="lg"
                  onClick={() => window.open('https://calendly.com/dsanvil9/consultor-ia', '_blank')}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            *Precios sin IVA. Integraciones sujetas a disponibilidad técnica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;