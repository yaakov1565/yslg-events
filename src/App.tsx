import { useState, useEffect } from 'react';
import { Users, Building2, Calendar, CheckCircle, Star, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const direction = entry.target.getAttribute('data-direction');
          if (direction === 'down') {
            entry.target.classList.add('animate-fade-in-down');
          } else {
            entry.target.classList.add('animate-fade-in-up');
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build the email body with form data
    const emailBody = `
Event Inquiry from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Event Details:
- Event Type: ${formData.eventType}
- Preferred Date: ${formData.eventDate || 'Not specified'}
- Guest Count: ${formData.guestCount || 'Not specified'}
- Budget: ${formData.budget || 'Not specified'}

Message:
${formData.message}
    `.trim();

    // Create mailto link with pre-filled data
    const mailtoLink = `mailto:hello@yslgevents.com?subject=Event Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const portfolio = [
    {
      title: 'Manhattan Gala',
      category: 'Corporate',
      image: '/portfolio/semolina-and-apple-in-glass-SBI-300784526.jpg',
      guests: '500+'
    },
    {
      title: 'Brooklyn Wedding',
      category: 'Private',
      image: '/portfolio/wedding-table-SBI-300617815.jpg',
      guests: '200+'
    },
    {
      title: 'Central Park Festival',
      category: 'Public',
      image: '/portfolio/photos-by-lanty-O38Id_cyV4M-unsplash.jpg',
      guests: '1000+'
    },
    {
      title: 'Times Square Launch',
      category: 'Corporate',
      image: '/portfolio/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg',
      guests: '300+'
    },
    {
      title: 'Rooftop Celebration',
      category: 'Private',
      image: '/portfolio/rumman-amin-k-gWRgrU2N8-unsplash.jpg',
      guests: '150+'
    },
    {
      title: 'Community Gathering',
      category: 'Public',
      image: '/portfolio/bruno-cervera-ZpNBwBR38fA-unsplash.jpg',
      guests: '800+'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechVision Inc.',
      content: 'YSLG Events transformed our annual gala into an unforgettable experience. Every detail was perfect, from venue selection to the final toast.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Private Client',
      content: 'Our wedding was a dream come true. The team handled everything with grace and professionalism. We could not have asked for a better day.',
      rating: 5
    },
    {
      name: 'Jennifer Rodriguez',
      role: 'Events Director, NYC Parks',
      content: 'Working with YSLG on our public festival was seamless. They managed logistics for over 1000 guests effortlessly. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-5' : 'bg-white/10 backdrop-blur-sm py-7 border-b border-white/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/yslg-logo.svg" alt="YSLG Events" className={`transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'} w-auto drop-shadow-lg`} />
            </div>

            <div className="hidden md:flex space-x-10">
              {['Home', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-lg font-semibold transition-all hover:text-emerald-500 hover:scale-110 ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-950">
        <div className="relative z-10 text-center text-white px-6 sm:px-8 max-w-7xl mx-auto my-8">
          <div className="mb-16 flex flex-col items-center">
            <div className="relative mb-12 w-full max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px]" style={{
              animation: 'logoEntrance 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}>
              <div className="absolute inset-0 animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.5)'
                }}
              />
              <img
                src="/yslg-logo.svg"
                alt="YSLG Events"
                className="relative w-full h-auto"
                style={{
                  animation: 'logoGlow 4s ease-in-out infinite',
                  animationDelay: '2s'
                }}
              />
            </div>
            <div
              className="opacity-0 mb-8"
              style={{
                animationDelay: '2.5s',
                animation: 'fadeInUp 1.2s ease-out 2.5s forwards'
              }}
            >
              <p
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  color: '#16a085',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(22, 160, 133, 0.4)',
                  letterSpacing: '0.05em'
                }}
              >
                Creating Unforgettable Moments
              </p>
              <p
                className="text-xl md:text-2xl font-light italic"
                style={{
                  fontFamily: 'Georgia, serif',
                  color: '#ffffff',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                  animation: 'letterSpacing 3s ease-in-out 3.7s infinite'
                }}
              >
                "Every moment is a once in a lifetime"
              </p>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 rounded-lg text-xl font-semibold transition-all transform hover:scale-110 shadow-2xl opacity-0 hover:shadow-emerald-500/50"
            style={{
              animationDelay: '3.2s',
              animation: 'fadeInUp 1s ease-out 3.2s forwards',
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
          >
            Start Planning Your Event
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Corporate Events', description: 'Product launches, conferences, and team building experiences that elevate your brand', direction: 'up' },
              { icon: Users, title: 'Private Celebrations', description: 'Weddings, anniversaries, and milestone moments designed to perfection', direction: 'down' },
              { icon: Calendar, title: 'Public Gatherings', description: 'Festivals, fundraisers, and community events that bring people together', direction: 'up' }
            ].map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                data-direction={service.direction}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose YSLG Events</h2>
            <p className="text-xl text-gray-600">Your complete event partner from A to Z</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Full-Service Planning', description: 'End-to-end event management so you can focus on what matters', direction: 'down' },
              { title: 'NYC Expertise', description: 'Deep knowledge of venues, vendors, and regulations across all five boroughs', direction: 'up' },
              { title: 'Creative Design', description: 'Unique concepts tailored to your vision and brand identity', direction: 'down' },
              { title: 'Flawless Execution', description: 'Meticulous attention to detail ensures everything runs smoothly', direction: 'up' }
            ].map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 text-center"
                data-direction={feature.direction}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">A glimpse into the extraordinary events we've created</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-emerald-400 text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.guests} Guests</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by New York's finest</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Magic Together</h2>
            <p className="text-xl text-gray-600">Tell us about your event and we'll bring it to life</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="private">Private Celebration</option>
                      <option value="public">Public Gathering</option>
                      <option value="wedding">Wedding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-semibold text-gray-700 mb-2">
                      Estimated Guest Count
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="e.g., 100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your ideas, requirements, and any specific details..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="animate-on-scroll opacity-0 space-y-8" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-gray-600">hello@yslgevents.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Why Start With YSLG?</h4>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'Custom event proposal within 48 hours',
                    'Transparent pricing, no hidden fees',
                    'Dedicated event coordinator'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/yslg-logo.svg" alt="YSLG Events" className="h-10 w-auto brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm">
                Creating unforgettable experiences across New York City since 2021.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Corporate Events</li>
                <li>Private Celebrations</li>
                <li>Public Gatherings</li>
                <li>Wedding Planning</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Connect</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Pinterest</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 YSLG Events. All rights reserved. | Based in New York City</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
