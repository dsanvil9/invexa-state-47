import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const ContactSection = () => {
  return (
    <section id="contactar" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6 text-white">
            ¡Hablemos de tu proyecto!
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Cuéntanos sobre tu agencia y te ayudaremos a identificar las mejores oportunidades de automatización
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-glow border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-manrope text-center">
                Solicitar consultoría gratuita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input id="nombre" placeholder="Tu nombre completo" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+34 600 000 000" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="agencia">Agencia</Label>
                  <Input id="agencia" placeholder="Nombre de tu agencia" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="leads">Nº leads/mes</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-100">0-100 leads/mes</SelectItem>
                      <SelectItem value="100-500">100-500 leads/mes</SelectItem>
                      <SelectItem value="500-1000">500-1000 leads/mes</SelectItem>
                      <SelectItem value="1000+">Más de 1000 leads/mes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="crm">CRM actual</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="¿Qué CRM usas?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hubspot">HubSpot</SelectItem>
                      <SelectItem value="salesforce">Salesforce</SelectItem>
                      <SelectItem value="pipedrive">Pipedrive</SelectItem>
                      <SelectItem value="zoho">Zoho</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                      <SelectItem value="ninguno">No tengo CRM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="canal">Canal preferido</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="¿Cómo prefieres que te contactemos?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="telefono">Teléfono</SelectItem>
                      <SelectItem value="videoconferencia">Videoconferencia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea 
                    id="mensaje" 
                    placeholder="Cuéntanos qué procesos te gustaría automatizar..." 
                    rows={4}
                  />
                </div>
                
                <div className="md:col-span-2 flex items-start space-x-2">
                  <Checkbox id="rgpd" />
                  <Label htmlFor="rgpd" className="text-sm leading-relaxed">
                    Acepto el tratamiento de mis datos para recibir información comercial según la política de privacidad.
                  </Label>
                </div>
                
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="flex-1"
                    onClick={() => window.open('https://calendly.com/dsanvil9/consultor-ia', '_blank')}
                  >
                    Agendar consultoría
                  </Button>
                  <Button 
                    variant="outline-hero" 
                    size="lg" 
                    className="flex-1 text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-white"
                    onClick={() => window.open('https://wa.me/34634631263', '_blank')}
                  >
                    Contactar por WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;