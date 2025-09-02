import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Settings, Link, BarChart, Shield, GraduationCap } from "lucide-react";

const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: FileText,
      title: "Documento de diseño",
      description: "Objetivos, alcance, arquitectura y riesgos identificados"
    },
    {
      icon: Settings,
      title: "Automatizaciones listas",
      description: "Flujos, prompts, políticas y orquestación configurada"
    },
    {
      icon: Link,
      title: "Integraciones",
      description: "CRM/ERP/CMS, email, WhatsApp o APIs propias conectadas"
    },
    {
      icon: BarChart,
      title: "Panel de métricas",
      description: "Autonomía, tiempos, conversión y ROI en tiempo real"
    },
    {
      icon: Shield,
      title: "Seguridad & compliance",
      description: "Roles, retención y buenas prácticas implementadas"
    },
    {
      icon: GraduationCap,
      title: "Formación",
      description: "Habilitación + guía operativa para tu equipo"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Qué te entregamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una solución completa, no solo software
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((deliverable, index) => (
            <Card key={index} className="shadow-card border-0 bg-white hover:shadow-soft transition-all duration-300 group">
              <CardHeader>
                <div className="p-3 bg-gradient-primary/10 rounded-2xl w-fit group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                  <deliverable.icon className="w-8 h-8 text-primary-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-manrope">
                  {deliverable.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {deliverable.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;