const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-manrope font-bold text-xl">INVEXA</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transformamos procesos manuales en flujos automatizados inteligentes 
              para agencias inmobiliarias.
            </p>
          </div>
          
          <div>
            <h4 className="font-manrope font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>📧 dsanvil9@gmail.com</p>
              <p>📱 +34 634 63 12 63</p>
              <p>🕒 Lun-Vie 9:00-18:00</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-manrope font-semibold mb-4">Fuentes</h4>
            <div className="space-y-1 text-xs text-white/60">
              <p>• Métricas internas de agencias similares</p>
              <p>• Promedio sector atención cliente automatizada</p>
              <p>• Estudios de conversión en sector inmobiliario</p>
              <p>• Datos de implementaciones OCR previas</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 INVEXA. Todos los derechos reservados. | 
            <span className="ml-1">Política de privacidad</span> | 
            <span className="ml-1">Términos de servicio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;