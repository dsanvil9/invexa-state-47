const BenefitsSection = () => {
  const benefits = [
    {
      number: "1",
      title: "Ahorrar tiempo",
      description: "Automatiza tareas repetitivas para que tu equipo se centre en lo que realmente importa."
    },
    {
      number: "2", 
      title: "Reducción de errores",
      description: "Los procesos automatizados minimizan errores humanos y elevan la calidad de entrega."
    },
    {
      number: "3",
      title: "Mayor escalabilidad", 
      description: "Escala con agilidad al liberar recursos y estandarizar operaciones con IA."
    },
    {
      number: "4",
      title: "Integración completa",
      description: "Conecta herramientas y sistemas para una automatización de punta a punta."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6 leading-tight">
            Beneficios <span className="block">de las automatizaciones con inteligencia artificial</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-36 h-1 bg-gradient-primary rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-glass rounded-xl p-7 shadow-sm border border-gray-100 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow flex-shrink-0">
                  <span className="font-bold text-white text-lg">{benefit.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-manrope font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;