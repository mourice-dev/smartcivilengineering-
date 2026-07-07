import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{9,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Invalid phone number format';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message content cannot be empty';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus({ submitting: true, success: false, error: null });

    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="pt-20 bg-warm-bg text-slate-700">
      
      {/* Header (Keeps corporate blue theme) */}
      <section className="bg-navy text-white py-20 md:py-28 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200&auto=format&fit=crop')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 font-sans">
          <span className="text-accent text-[10px] font-black tracking-widest uppercase bg-accent/15 px-4 py-2 rounded-xl border border-accent/25">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight uppercase leading-tight text-white">
            Let's Discuss Your Project
          </h1>
          <p className="text-slate-350 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Fill out the form below or use our contact information to connect with our engineering offices.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 font-sans bg-warm-bg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Cards Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-serif font-black text-navy uppercase tracking-tight">
              Contact Details
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              If you have standard project requests, bidding invitations, or structural audit briefs, reach out directly.
            </p>

            <div className="space-y-4">
              
              {/* Phone card */}
              <div className="bg-white border border-slate-200/50 p-6 rounded-3xl flex items-start space-x-4 shadow-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 text-[9px] font-bold tracking-widest uppercase block">Direct Phone</span>
                  <span className="text-navy font-black text-sm sm:text-base">+250 788 326 103</span>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-white border border-slate-200/50 p-6 rounded-3xl flex items-start space-x-4 shadow-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 text-[9px] font-bold tracking-widest uppercase block">Email Address</span>
                  <span className="text-navy font-black text-sm break-all">smartcivilengineeringworks@gmail.com</span>
                </div>
              </div>

              {/* Address card */}
              <div className="bg-white border border-slate-200/50 p-6 rounded-3xl flex items-start space-x-4 shadow-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 text-[9px] font-bold tracking-widest uppercase block">Headquarters</span>
                  <p className="text-navy text-xs sm:text-sm font-bold leading-relaxed">
                    Kabeza Village, Kigarama Cell, Kigarama Sector, Kicukiro District, Kigali City, Rwanda
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-white border border-slate-200/50 p-6 rounded-3xl flex items-start space-x-4 shadow-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="text-slate-500 text-[9px] font-bold tracking-widest uppercase block">Office Hours</span>
                  <div className="flex flex-col text-navy font-black space-y-1 mt-1.5">
                    <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                    <span>Saturday: 9:00 AM - 1:00 PM</span>
                    <span className="text-slate-450 font-semibold">Sunday: Closed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/50 p-8 md:p-10 rounded-3xl shadow-xl relative text-slate-750">
            <h3 className="text-navy font-serif font-black text-xl uppercase tracking-wide border-b border-slate-100 pb-4 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Form Status Messages */}
              {formStatus.success && (
                <div className="bg-emerald-50 border border-emerald-250 p-4 rounded-xl flex items-center space-x-3 text-emerald-700 text-xs sm:text-sm font-semibold">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Your message was sent successfully! We will get back to you shortly.</span>
                </div>
              )}

              {/* Grid Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-semibold">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-slate-500 font-bold text-[10px] tracking-wider uppercase">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none transition-all ${
                      errors.name ? 'border-accent bg-accent/5' : 'border-slate-200 focus:border-accent focus:bg-white'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-accent text-[10px] font-semibold flex items-center space-x-1"><AlertCircle className="h-3 w-3 inline shrink-0" /> <span>{errors.name}</span></span>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-slate-500 font-bold text-[10px] tracking-wider uppercase">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none transition-all ${
                      errors.email ? 'border-accent bg-accent/5' : 'border-slate-200 focus:border-accent focus:bg-white'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-accent text-[10px] font-semibold flex items-center space-x-1"><AlertCircle className="h-3 w-3 inline shrink-0" /> <span>{errors.email}</span></span>}
                </div>
              </div>

              {/* Grid Phone + Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-semibold">
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-slate-500 font-bold text-[10px] tracking-wider uppercase">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none transition-all ${
                      errors.phone ? 'border-accent bg-accent/5' : 'border-slate-200 focus:border-accent focus:bg-white'
                    }`}
                    placeholder="+250 788 326 103"
                  />
                  {errors.phone && <span className="text-accent text-[10px] font-semibold flex items-center space-x-1"><AlertCircle className="h-3 w-3 inline shrink-0" /> <span>{errors.phone}</span></span>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-slate-500 font-bold text-[10px] tracking-wider uppercase">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:border-accent focus:bg-white transition-all font-semibold"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Infrastructure Project">Infrastructure Project</option>
                    <option value="Interior & Finishing">Interior & Finishing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1 font-semibold">
                <label htmlFor="message" className="text-slate-500 font-bold text-[10px] tracking-wider uppercase">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none transition-all ${
                    errors.message ? 'border-accent bg-accent/5' : 'border-slate-200 focus:border-accent focus:bg-white'
                  }`}
                  placeholder="Describe your project, architectural needs or bidding proposal details..."
                />
                {errors.message && <span className="text-accent text-[10px] font-semibold flex items-center space-x-1"><AlertCircle className="h-3 w-3 inline shrink-0" /> <span>{errors.message}</span></span>}
              </div>

              {/* Submit button */}
              <div className="pt-2 font-semibold">
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="flex items-center justify-center space-x-2 w-full py-4 bg-accent hover:bg-navy text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {formStatus.submitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* Map Embed Section */}
      <section className="bg-white border-t border-slate-200/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl font-serif font-black text-navy uppercase tracking-wide">
              Smart Civil Works Location
            </h3>
            <p className="text-slate-600 font-sans text-xs sm:text-sm font-medium">
              Our headquarters are located in Kicukiro District, Kabeza Village, Kigarama Cell.
            </p>
          </div>

          <div className="w-full h-96 bg-slate-50 border border-slate-200/50 rounded-3xl overflow-hidden shadow-xl relative">
            <iframe 
              title="Smart Civil Engineering Works Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.493976378438!2d30.106579899999998!3d-2.0003058999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca71415df8a51%3A0xe5a3c948becc893d!2sKicukiro%2C%20Kigali!5e0!3m2!1sen!2srw!4v1719999999999!5m2!1sen!2srw" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
