import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, FileCheck, AlertTriangle } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Permisos y roles",
      description: "Mínimo acceso necesario por entorno y funcionalidad"
    },
    {
      icon: Database,
      title: "Datos",
      description: "Retención configurable, cifrado en tránsito y reposo, anonimización y auditoría completa"
    },
    {
      icon: FileCheck,
      title: "Políticas",
      description: "RGPD/LOPDGDD, DPA, bases legales, consentimiento, doble opt-in en WhatsApp, derecho de oposición"
    },
    {
      icon: AlertTriangle,
      title: "Fallbacks",
      description: "Escalado a humano, mensajes seguros y control de salida automático"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Seguridad & cumplimiento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protección total de datos y cumplimiento normativo garantizado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="shadow-card border-0 bg-white hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 rounded-2xl">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-manrope">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;