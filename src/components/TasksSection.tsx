import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Link } from "lucide-react";

const TasksSection = () => {
  const processes = [
    "Envío de emails/WhatsApps personalizados por tipo de inmueble",
    "Gestión documental inteligente (reservas/arras)",
    "Extracción de datos en tiempo real (DNI, IBAN, facturas)"
  ];

  const tasks = [
    "Publicación de inmuebles en redes y portales",
    "Respuesta a leads y concertación de visitas",
    "Actualización de estado (visitado, oferta, reservado)"
  ];

  const workflows = [
    "Automatización con HubSpot/Salesforce/Pipedrive/Zoho",
    "Conexiones con Google Sheets, Notion, Airtable, Slack, Make/n8n"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Tipos de tareas que se pueden automatizar
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-manrope font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Procesos IA
              </h3>
              <div className="space-y-3">
                {processes.map((process, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{process}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                Tareas IA
              </h3>
              <div className="space-y-3">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-manrope font-semibold mb-4 flex items-center gap-2">
                <Link className="w-6 h-6 text-primary-blue" />
                Flujos de trabajo
              </h3>
              <div className="space-y-3">
                {workflows.map((workflow, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Link className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{workflow}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <Card className="shadow-soft border-0 bg-gradient-subtle p-8">
              <CardContent className="p-0">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/21f46e9a-2292-4ffa-a6e8-03e37e03a78d.png" 
                    alt="Robot de automatización con IA procesando datos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasksSection;