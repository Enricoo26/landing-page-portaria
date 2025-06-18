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
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-stone-700" />
              <span className="text-2xl font-bold text-stone-900">Concierge Pro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">Services</a>
              <a href="#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">How It Works</a>
              <a href="#contact" className="text-stone-600 hover:text-stone-900 transition-colors duration-200">Contact</a>
            </nav>
            <button className="bg-stone-900 text-white px-6 py-2 rounded-lg hover:bg-stone-800 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
                Your Personal
                <span className="text-stone-700 block">Remote Concierge</span>
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Delegate your daily tasks to our trusted professionals. From scheduling appointments to managing errands, 
                we handle life's details so you can focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-stone-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-stone-800 transition-colors duration-200 flex items-center justify-center group">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-lg font-semibold hover:border-stone-400 hover:bg-stone-100 transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-stone-700 mr-3" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Available 24/7</h3>
                    <p className="text-stone-600">Your concierge is always ready</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-stone-700">Restaurant reservations confirmed</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-stone-700">Travel arrangements completed</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-stone-700">Personal shopping delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Comprehensive Concierge Services
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From everyday errands to special occasions, our experienced team handles it all with discretion and professionalism.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Schedule Management",
                description: "Appointment booking, calendar coordination, and event planning with seamless integration."
              },
              {
                icon: <Car className="h-8 w-8" />,
                title: "Travel Arrangements",
                description: "Flight bookings, hotel reservations, transportation, and complete itinerary management."
              },
              {
                icon: <Utensils className="h-8 w-8" />,
                title: "Dining & Entertainment",
                description: "Restaurant reservations, event tickets, and exclusive access to premium venues."
              },
              {
                icon: <Gift className="h-8 w-8" />,
                title: "Personal Shopping",
                description: "Gift selection, wardrobe consulting, and delivery coordination for all occasions."
              },
              {
                icon: <Home className="h-8 w-8" />,
                title: "Home Services",
                description: "Maintenance coordination, cleaning services, and property management support."
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Business Support",
                description: "Research, administrative tasks, and professional service coordination."
              }
            ].map((service, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-stone-200">
                <div className="text-stone-700 mb-4">{service.icon}</div>
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
              How It Works
            </h2>
            <p className="text-xl text-stone-600">
              Simple, secure, and personalized concierge service in three easy steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Tell Us What You Need",
                description: "Submit your request through our secure platform or dedicated phone line. Our team reviews and confirms all details."
              },
              {
                step: "02",
                title: "We Handle Everything",
                description: "Your dedicated concierge takes care of all arrangements, keeping you updated throughout the process."
              },
              {
                step: "03",
                title: "Enjoy Your Time",
                description: "Receive confirmation and enjoy your perfectly arranged experience while we handle any follow-up needed."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-stone-900 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
                Why Choose Our Concierge Service?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Save 10+ Hours Weekly",
                    description: "Reclaim your valuable time for family, career, and personal interests."
                  },
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Trusted & Secure",
                    description: "Fully vetted professionals with comprehensive insurance and confidentiality agreements."
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: "Personalized Service",
                    description: "Dedicated concierge who learns your preferences and anticipates your needs."
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
                  <span className="ml-2 text-stone-600 font-medium">4.9/5 from 500+ clients</span>
                </div>
                
                <blockquote className="text-stone-700 text-lg leading-relaxed mb-6">
                  "Having a remote concierge has completely transformed how I manage my time. The team is incredibly professional and always goes above and beyond."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-stone-600" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-stone-900">Sarah M.</div>
                    <div className="text-stone-600">Executive Director</div>
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
              Ready to Reclaim Your Time?
            </h2>
            <p className="text-xl text-stone-300">
              Start your journey to a more organized, stress-free lifestyle today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-stone-300" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-stone-300">+1 (555) 123-4567</p>
              <p className="text-stone-400 text-sm">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-stone-300" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-stone-300">hello@conciergepro.com</p>
              <p className="text-stone-400 text-sm">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-stone-300" />
              <h3 className="font-semibold mb-2">Service Areas</h3>
              <p className="text-stone-300">Nationwide Coverage</p>
              <p className="text-stone-400 text-sm">US & Canada</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-white text-stone-900 px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-200 inline-flex items-center group">
              Start Your Free Trial Today
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
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold">Concierge Pro</span>
            </div>
            <div className="text-sm">
              © 2025 Concierge Pro. All rights reserved. | Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;