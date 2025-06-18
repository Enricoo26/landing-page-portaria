import React from 'react';
import { 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  Briefcase,
  Home,
  Car,
  Utensils,
  Gift,
  ArrowRight
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              {/* <Shield className="h-8 w-8 text-stone-700" /> */}
              <a href="#home">
                <img src="/images/logo.png" alt="Logo Concierge Pro" className="h-25 w-25 object-contain" />
              </a>
              {/* <span className="text-2xl font-bold text-stone-900">Atende Portaria</span> */}
            </div>
            <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
              <a href="#services" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">Serviços</a>
              <a href="#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">Como Funciona</a>
              <a href="#regions" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">Regiões</a>
              <a href="#contact" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">Contato</a>
            </nav>
            <div className="w-24" /> {/* ou um botão */}
          </div>
        </div>
      </header>
<section id ="home"className="w-full flex items-center min-h-[70vh] bg-white relative overflow-hidden">
  {/* Texto à esquerda */}
  <div className="z-10 w-full md:w-1/2 px-6 lg:px-16 py-16">
    <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
      Um novo jeito
      <span className="text-stone-700 block">de fazer portaria</span>
    </h1>
    <p className="text-xl text-stone-600 mb-6 leading-relaxed">
      Esqueça os altos custos da portaria tradicional. Com a portaria remota, seu condomínio economiza até 60% ao mesmo tempo em que aumenta a segurança com tecnologias como reconhecimento facial, acesso por QR Code e monitoramento inteligente 24h.
    </p>
    <p className="text-xl text-stone-600 mb-8 leading-relaxed">
      Nossos sistemas identificam visitantes em tempo real, gravam todas as entradas e saídas em nuvem e ainda oferecem suporte técnico 24 horas por dia. Tudo isso sem obras complexas e com implantação rápida.
    </p>

    <button className="bg-stone-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-stone-800 transition-colors duration-200 flex items-center">
      Solicite um Orçamento
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  </div>

  {/* Imagem à direita com gradiente customizado */}
  <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
    <div className="w-full h-full relative">
      <img
        src="/images/back.png"
        alt="Portaria remota"
        className="object-cover w-full h-full"
      />
      {/* Gradiente começa mais à direita */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, white 0%, white 0%, transparent 10%)"
        }}
      />
    </div>
  </div>
</section>







      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-stone-100 via-stone-50 to-red-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-stone-700">Monitoramento 24h e equipe pronta para atuar</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-stone-700">Controle de acesso via reconhecimento facial e biometria</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-stone-700">Aplicativo intuitivo para moradores e síndicos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-stone-700">Redução de custos com portaria física tradicional</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-12 lg:mb-0">
              <img src="/images/500.png" alt="" />
              {/* <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
                Um novo jeito
                <span className="text-stone-700 block">de fazer portaria</span>
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Segurança, tecnologia e agilidade para seu condomínio com portaria remota 24h, reconhecimento facial, 
                controle inteligente de acessos e redução de custos operacionais.
              </p> */}
              {/* 
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-stone-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-stone-800 transition-colors duration-200 flex items-center justify-center group">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-lg font-semibold hover:border-stone-400 hover:bg-stone-100 transition-all duration-200">
                  Fale Conosco
                </button>
              </div> 
              */}
            </div>
          </div>
        </div>
      </section>

    {/* Services Section */}
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            Nossas Soluções em Portaria
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Tecnologia avançada e atendimento 24h para garantir segurança, praticidade e economia para seu condomínio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="h-8 w-8 text-red-500" />,
              title: "Portaria Remota",
              description: "Monitoramento e controle de acesso 24h via central inteligente, sem necessidade de porteiros físicos."
            },
            {
              icon: <Users className="h-8 w-8 text-red-500" />,
              title: "Reconhecimento Facial",
              description: "Entrada rápida e segura com tecnologia biométrica integrada para moradores e visitantes autorizados."
            },
            {
              icon: <Shield className="h-8 w-8 text-red-500" />,
              title: "Portaria Monitorada",
              description: "Segurança reforçada com equipe de vigilância e controle remoto para eventos e situações especiais."
            },
            {
              icon: <Phone className="h-8 w-8 text-red-500" />,
              title: "Aplicativo Mobile",
              description: "Acesso e notificações na palma da mão para moradores, síndicos e administradores do condomínio."
            },
            {
              icon: <Gift className="h-8 w-8 text-red-500" />,
              title: "Armários Inteligentes",
              description: "Entrega segura de encomendas com armários automatizados para maior comodidade e controle."
            },
            {
              icon: <Home className="h-8 w-8 text-red-500" />,
              title: "Soluções Personalizadas",
              description: "Sistemas específicos para condomínios horizontais, comerciais e áreas comuns integradas."
            }
          ].map((service, index) => (
            <div key={index} className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-stone-200">
              <div className="text-red-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-stone-600">
              Implantação simples, controle inteligente e operação segura — tudo em poucos passos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Instalação e Integração",
                description: "Nossa equipe realiza a instalação dos equipamentos, câmeras e sistemas de controle de acesso com suporte técnico completo."
              },
              {
                step: "02",
                title: "Cadastro de Usuários",
                description: "Moradores e autorizados são cadastrados no sistema com reconhecimento facial, QR Code ou senha de acesso temporária."
              },
              {
                step: "03",
                title: "Operação 24h",
                description: "A central da Atende Portaria assume o controle remoto com monitoramento contínuo e suporte imediato em tempo real."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-900 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Hero Section */}
      <section id="regions" className="relative bg-gradient-to-br from-stone-100 via-stone-50 to-red-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <img src="/images/cortado.png" alt="" />
              {/* 
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-stone-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-stone-800 transition-colors duration-200 flex items-center justify-center group">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-lg font-semibold hover:border-stone-400 hover:bg-stone-100 transition-all duration-200">
                  Fale Conosco
                </button>
              </div> 
              */}
            </div>
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
                      Estamos localizados na Zona Leste de São Paulo  
                    </h2>
                  </div>
                  <div className="flex items-center">     
                    <h2 className="text-3xl lg:text-2xl font-bold text-stone-900 mb-4">
                      Atendemos regiões:
                    </h2>
                  </div>
                  <div className="flex items-center">     
                    <ul className="list-disc list-inside text-stone-900 space-y-1">
                      <li>Itaquera</li>
                      <li>Parque do Carmo</li>
                      <li>Ponte Rasa</li>
                      <li>Vila Carmosina</li>
                      <li>José Bonifácio</li>
                      <li>E regiões vizinhas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */} 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
                Por que escolher a Atende Portaria?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Mais segurança e controle",
                    description: "Tecnologia de ponta com reconhecimento facial, monitoramento remoto e protocolos de emergência."
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Atendimento 24 horas",
                    description: "Central própria com operadores disponíveis dia e noite, inclusive em feriados e finais de semana."
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: "Redução de custos operacionais",
                    description: "Economia de até 60% em comparação com portarias tradicionais, sem perder qualidade no atendimento."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-stone-700 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-2">{benefit.title}</h3>
                      <p className="text-stone-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-stone-600 font-medium">Satisfação 4.9/5 entre os condomínios atendidos</span>
                </div>
                
                <blockquote className="text-stone-700 text-lg leading-relaxed mb-6">
                  "Desde que migramos para a portaria remota da Atende, tivemos mais segurança, agilidade e uma economia real nas despesas mensais do condomínio."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-stone-600" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-stone-900">Carlos A.</div>
                    <div className="text-stone-600">Síndico Profissional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pronto para modernizar sua portaria?
            </h2>
            <p className="text-xl text-stone-300">
              Fale com nossa equipe e descubra como reduzir custos e aumentar a segurança do seu condomínio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-stone-300" />
              <h3 className="font-semibold mb-2">Ligue para nós</h3>
              <p className="text-stone-300">WhatsApp: (11) 94227-7979</p>
              <p className="text-stone-400 text-sm">Atendimento 24h</p>
            </div>

            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-stone-300" />
              <h3 className="font-semibold mb-2">Envie um e-mail</h3>
              <p className="text-stone-300">itaquera@atendeportaria.com.br</p>
              <p className="text-stone-400 text-sm">Retorno em até 1 dia útil</p>
            </div>

            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-stone-300" />
              <h3 className="font-semibold mb-2">Cobertura</h3>
              <p className="text-stone-300">Atendimento em todo o Brasil</p>
              <p className="text-stone-400 text-sm">Centrais operacionais e franquias em expansão</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-stone-900 px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-200 inline-flex items-center group">
              Solicite um Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-stone-950 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">Atende Portaria</span>
            </div>
            <div className="text-sm text-center md:text-right space-x-2">
              <span>© {new Date().getFullYear()} Atende Portaria. Todos os direitos reservados.</span>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="underline hover:text-white">Política de Privacidade</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="underline hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;