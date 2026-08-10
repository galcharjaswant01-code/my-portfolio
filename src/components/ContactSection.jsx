import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { Mail, MapPin, Clock } from 'lucide-react';

const InfoRow = ({ icon: Icon, label, value, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start gap-4 group"
  >
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
      style={{
        background: `${color}11`,
        border: `1px solid ${color}33`,
        boxShadow: `0 0 16px ${color}11`,
      }}
    >
      <Icon size={16} style={{ color }} />
    </div>
    <div>
      <p className="text-white/30 text-[10px] tracking-widest uppercase font-semibold mb-0.5">{label}</p>
      <p className="text-white text-sm font-light break-all sm:break-normal">{value}</p>
    </div>
  </motion.div>
);

const ContactSection = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center py-20 md:py-32 px-4 sm:px-8 overflow-hidden pointer-events-auto">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyber-blue/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyber-purple/5 blur-[150px] pointer-events-none z-0" />

      {/* Subtle scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,240,255,1) 3px, rgba(0,240,255,1) 4px)',
        }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16 text-center relative z-10 w-full"
      >
        <div className="inline-flex items-center justify-center px-5 py-2 mb-6 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
          System Terminal
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black leading-tight text-white mb-4 md:mb-6">
          Establish{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #00f0ff, #b026ff, #ff007f, #00f0ff)',
              backgroundSize: '200% auto',
              animation: 'holoshimmer 4s linear infinite',
            }}
          >
            Connection
          </span>
        </h2>
        <p className="text-base md:text-lg text-white/50 font-light max-w-xl mx-auto px-4">
          Ready to collaborate? Initiate a secure transmission below.
        </p>
      </motion.div>

      {/* Two-Column Layout (stacked on mobile) */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

        {/* Left – Contact Form */}
        <div className="flex flex-col w-full">
          <ContactForm />
          <div className="flex justify-start w-full mt-2 pl-1">
            <SocialLinks />
          </div>
        </div>

        {/* Right – Holographic Info Panel (hidden on mobile, shown from lg) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex flex-col gap-8"
        >
          {/* Holographic heading */}
          <div>
            <motion.h3
              className="text-3xl font-display font-black mb-3"
              style={{
                background: 'linear-gradient(90deg, #00f0ff, #b026ff, #ff007f, #00f0ff)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'holoshimmer 5s linear infinite',
                filter: 'drop-shadow(0 0 16px rgba(0,240,255,0.5))',
              }}
            >
              Let's Build Something
            </motion.h3>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-sm">
              Whether it's a startup idea, a creative project, or just a chat about web tech —
              I'm always open to meaningful connections.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(0,240,255,0.4), transparent)' }} />
            <span className="text-[9px] font-mono tracking-widest text-cyber-blue/50 uppercase">Contact Info</span>
          </div>

          {/* Info rows */}
          <div className="flex flex-col gap-6">
            <InfoRow icon={Mail} label="Email" value="galcharjaswant01@gmail.com" color="#00f0ff" delay={0.5} />
            <InfoRow icon={MapPin} label="Location" value="India · Gujarat" color="#b026ff" delay={0.65} />
            <InfoRow icon={Clock} label="Response Time" value="Usually within 24 hours" color="#ff007f" delay={0.8} />
          </div>

          {/* Availability card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: 'rgba(0,240,255,0.03)',
              border: '1px solid rgba(0,240,255,0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, #00f0ff, transparent)' }}
            />
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-green-400"
                style={{ boxShadow: '0 0 10px rgba(74,222,128,0.8)' }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs font-mono text-white/60 tracking-widest uppercase">Status</span>
            </div>
            <p className="text-xl font-display font-bold" style={{ color: '#00f0ff', textShadow: '0 0 20px rgba(0,240,255,0.5)' }}>
              Open to Opportunities
            </p>
            <p className="text-white/40 text-xs font-light mt-1">Freelance · Internship · Full-time</p>
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #b026ff)' }}
              animate={{ width: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {['Open to Work', 'Remote Friendly', 'Fast Response', 'Creative Mindset'].map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider"
                style={{
                  border: '1px solid rgba(0,240,255,0.2)',
                  background: 'rgba(0,240,255,0.05)',
                  color: 'rgba(0,240,255,0.8)',
                }}
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile-only: show info card below form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="lg:hidden mt-10 w-full max-w-xl mx-auto relative z-10 rounded-2xl p-6"
        style={{
          background: 'rgba(0,240,255,0.03)',
          border: '1px solid rgba(0,240,255,0.15)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex flex-col gap-5">
          <InfoRow icon={Mail} label="Email" value="galcharjaswant01@gmail.com" color="#00f0ff" delay={0} />
          <InfoRow icon={MapPin} label="Location" value="India · Gujarat" color="#b026ff" delay={0.1} />
          <InfoRow icon={Clock} label="Response Time" value="Usually within 24 hours" color="#ff007f" delay={0.2} />
        </div>
        <div className="flex items-center gap-3 mt-5">
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400"
            style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs font-mono text-white/60 tracking-widest uppercase">Open to Opportunities</span>
        </div>
      </motion.div>

      <style>{`
        @keyframes holoshimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
