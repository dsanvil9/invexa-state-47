import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Database, Zap, Brain, Shield, BarChart } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Bot,
      title: "Agentes ejecutores",
      description: "Planifican y actúan con reglas y permisos definidos"
    },
    {
      icon: Database,
      title: "RAG/Conocimiento",
      description: "Consultan tu base documental antes de responder"
    },
    {
      icon: Zap,
      title: "Acciones vía API",
      description: "Leads, tickets, envíos y updates en CRM/ERP"
    },
    {
      icon: Brain,
      title: "Memoria & contexto",
      description: "Datos por usuario/operación; historiales completos"
    },
    {
      icon: Shield,
      title: "Guardarraíles",
      description: "Seguridad, límites, trazabilidad y revisiones humanas"
    },
    {
      icon: BarChart,
      title: "Telemetría",
      description: "Métricas, SLAs y bucles de mejora continua"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Capacidades clave de nuestro sistema
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnología avanzada al servicio de tu negocio inmobiliario
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="shadow-card border-0 bg-white hover:shadow-soft transition-all duration-300 group">
              <CardHeader>
                <div className="p-3 bg-gradient-primary/10 rounded-2xl w-fit group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                  <capability.icon className="w-8 h-8 text-primary-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-manrope">
                  {capability.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;