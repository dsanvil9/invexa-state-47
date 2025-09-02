import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, FileText, TrendingUp, Check } from "lucide-react";

const AutomationSection = () => {
  const automations = [
    {
      icon: Brain,
      title: "Gestión de CRM",
      subtitle: "Automatización completa del ciclo de ventas, desde leads hasta cierre",
      features: [
        "Captura automática de leads",
        "Segmentación inteligente",
        "Follow-up personalizado",
        "Informes en tiempo real"
      ]
    },
    {
      icon: Users,
      title: "Atención al Cliente",
      subtitle: "Soporte 24/7 con respuesta inteligente y escalado automático",
      features: [
        "Respuestas instantáneas",
        "Clasificación automática",
        "Escalado inteligente",
        "Base de conocimiento dinámica"
      ]
    },
    {
      icon: FileText,
      title: "Procesamiento de Documentos",
      subtitle: "Extracción y procesamiento inteligente de información de documentos",
      features: [
        "OCR avanzado",
        "Extracción de datos",
        "Validación automática",
        "Integración con sistemas"
      ]
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      subtitle: "Campañas automatizadas con personalización basada en comportamiento",
      features: [
        "Segmentación dinámica",
        "Email marketing automatizado",
        "Análisis de rendimiento",
        "Optimización A/B"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            ¿Qué <span className="text-accent">podemos</span> automatizar con <span className="text-gradient">IA?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde ventas hasta soporte, automatizamos los procesos críticos de tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7">
          {automations.map((automation, index) => (
            <Card key={index} className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 rounded-xl p-7">
              <CardHeader className="p-0 mb-6">
                <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow w-fit mb-4">
                  <automation.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-manrope font-semibold mb-2">
                  {automation.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {automation.subtitle}
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3">
                  {automation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;