"use client";

import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/1234567890?text=Hi%20ChronoLux,%20I%27m%20interested%20in%20a%20timepiece.",
      "_blank"
    );
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Left Info Column */}
          <div>
            <h1 className="text-5xl font-bold luxury-font mb-8">Personalized Service</h1>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Whether you are looking for technical advice, warranty information, or a private viewing of our collection, our experts are at your disposal.
            </p>
            
            <div className="space-y-8">
              {/* Atelier */}
              <div className="flex items-start space-x-6">
                <div className="bg-slate-100 p-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Our Atelier</h4>
                  <p className="text-slate-500 text-sm">123 Horology Way, Geneva, Switzerland</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-6">
                <div className="bg-slate-100 p-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-slate-500 text-sm">concierge@chronolux.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-6">
                <button 
                  onClick={handleWhatsApp}
                  className="flex items-center space-x-3 bg-green-500 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-green-600 transition-all w-full md:w-auto shadow-lg shadow-green-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat with an Expert</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="bg-slate-50 p-10 md:p-12">
            <h2 className="text-2xl font-bold luxury-font mb-6">Send an Inquiry</h2>
            
            {isSubmitted && (
              <div className="bg-green-100 text-green-700 p-4 mb-6 text-sm font-medium">
                Thank you. Your inquiry has been received. A concierge will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Your Name
                </label>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-slate-200 px-4 py-3 text-sm focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Email Address
                </label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-slate-200 px-4 py-3 text-sm focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border border-slate-200 px-4 py-3 text-sm focus:ring-1 focus:ring-amber-500 outline-none transition-all resize-none"
                  placeholder="Tell us about the timepiece you're interested in..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
