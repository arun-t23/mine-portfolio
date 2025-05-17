import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData } from '@/lib/types';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  
  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Message Sent',
        description: 'Thank you for your message. I will get back to you soon!',
        variant: 'default',
      });
      reset();
      setSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: 'Failed to Send Message',
        description: String(error),
        variant: 'destructive',
      });
      setSubmitting(false);
    }
  });
  
  const onSubmit = (data: ContactFormData) => {
    setSubmitting(true);
    contactMutation.mutate(data);
  };
  
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-bold text-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-200 text-lg mb-6">
              Interested in working together or have a question? Feel free to reach out to me using the contact form or through my social media profiles.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-red-600 text-xl w-8"></i>
                <span className="text-gray-200">{CONTACT_INFO.email}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-red-600 text-xl w-8"></i>
                <span className="text-gray-200">{CONTACT_INFO.phone}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-red-600 text-xl w-8"></i>
                <span className="text-gray-200">{CONTACT_INFO.location}</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="text-netflix-light-gray hover:text-netflix-red text-2xl"
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-md"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-netflix-red" 
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-netflix-red" 
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-200 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-netflix-red" 
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-netflix-red" 
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={submitting}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
