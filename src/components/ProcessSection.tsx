const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Análisis de procesos",
      description: "Identificamos oportunidades de automatización en tu agencia"
    },
    {
      number: "02", 
      title: "Diseño y desarrollo",
      description: "Creamos flujos a medida para tus procesos específicos"
    },
    {
      number: "03",
      title: "Integración",
      description: "Conectamos con CRM/ERP/portales/documentación existente"
    },
    {
      number: "04",
      title: "Formación y adopción",
      description: "Capacitamos a tu equipo para el uso óptimo del sistema"
    },
    {
      number: "05",
      title: "Monitorización",
      description: "Soporte y optimización continua basada en métricas"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Nuestro proceso de implementación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Metodología probada en 5 pasos para garantizar el éxito
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-primary opacity-30"></div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-manrope font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;