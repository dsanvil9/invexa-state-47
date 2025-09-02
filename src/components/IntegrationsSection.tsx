import { Badge } from "@/components/ui/badge";

const IntegrationsSection = () => {
  const integrations = [
    "HubSpot", "Salesforce", "Pipedrive", "Zoho", "Odoo", "SAP", 
    "Shopify", "WooCommerce", "Prestashop", "WhatsApp API", 
    "Gmail", "Slack", "Airtable", "Notion", "Google Sheets", 
    "Zapier", "Make", "API propia"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            Integraciones & conectores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos con las herramientas que ya utilizas
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {integrations.map((integration, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-white shadow-card border-0 px-4 py-2 text-sm hover:shadow-soft transition-all duration-300 hover:scale-105"
            >
              {integration}
            </Badge>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            *Integraciones avanzadas sujetas a alcance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;