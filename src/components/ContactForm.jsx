import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, XCircle, Loader } from 'lucide-react';

// ─── Web3Forms Config ─────────────────────────────────────────
const WEB3FORMS_KEY = 'f0f3f064-7a16-4671-926f-d940c87e2bb4';
// ─────────────────────────────────────────────────────────────

// ─── Field Limits ─────────────────────────────────────────────
const NAME_MAX_CHARS    = 50;   // max 50 characters for name
const EMAIL_MAX_CHARS   = 50;   // max 50 characters for email
const SUBJECT_MAX_CHARS = 50;   // max 50 characters for subject
const MESSAGE_MAX_CHARS = 90;   // max 90 characters for message
// ─────────────────────────────────────────────────────────────

// Count words in a string
const countWords = (str) => str.trim() === '' ? 0 : str.trim().split(/\s+/).length;

// Enforce word limit — block extra words being typed
const limitWords = (str, max) => {
  const words = str.split(/\s+/);
  if (words.length > max) return words.slice(0, max).join(' ');
  return str;
};

// Color for counter: green → yellow → red as limit approaches
const counterColor = (current, max) => {
  const ratio = current / max;
  if (ratio < 0.7)  return 'text-zinc-500';
  if (ratio < 0.9)  return 'text-yellow-500';
  return 'text-red-400';
};

// ─── Reusable Input Field ─────────────────────────────────────
const InputField = ({ label, type = 'text', as = 'input', rows, name, value, onChange, maxChars, maxWords }) => {
  const [isFocused, setIsFocused] = useState(false);
  const Component = as;
  const hasValue = value && value.length > 0;

  const charCount  = value.length;
  const wordCount  = countWords(value);
  const showCharCounter = maxChars != null;
  const showWordCounter = maxWords != null;

  return (
    <div className="relative w-full mb-6">
      <Component
        type={type}
        name={name}
        value={value}
        rows={rows}
        maxLength={maxChars || undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        required
        className="w-full bg-zinc-950/45 border border-white/5 focus:border-cyber-blue/40 rounded-xl px-5 py-4 text-white font-light focus:outline-none transition-all duration-200 peer resize-none"
      />

      {/* Floating Label */}
      <label
        className={`absolute left-5 transition-all duration-200 pointer-events-none text-sm font-medium ${
          isFocused || hasValue
            ? '-top-2.5 text-cyber-blue bg-[#030303] px-1.5 text-[11px]'
            : 'top-4 text-zinc-500'
        }`}
      >
        {label}
      </label>

      {/* Simple line on focus */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-cyber-blue transition-all duration-500 ${
          isFocused ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />

      {/* Counter badge — top right corner */}
      {(showCharCounter || showWordCounter) && (isFocused || hasValue) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`absolute top-2 right-3 text-[10px] font-mono font-semibold transition-colors duration-200 ${
            showWordCounter
              ? counterColor(wordCount, maxWords)
              : counterColor(charCount, maxChars)
          }`}
        >
          {showWordCounter
            ? `${wordCount} / ${maxWords} words`
            : `${charCount} / ${maxChars}`}
        </motion.div>
      )}
    </div>
  );
};

// ─── Main Form ────────────────────────────────────────────────
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Enforce char limit on message field
    if (name === 'message' && value.length > MESSAGE_MAX_CHARS) return;

    // Enforce char limit on name
    if (name === 'name' && value.length > NAME_MAX_CHARS) return;

    // Enforce char limit on email
    if (name === 'email' && value.length > EMAIL_MAX_CHARS) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.message.length > MESSAGE_MAX_CHARS) return;

    setStatus('loading');

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        to_email: 'galcharjaswant01@gmail.com',
        name: formData.name,
        email: formData.email,
        subject: `Portfolio Contact: ${formData.subject}`,
        message: formData.message,
        botcheck: '',
      };

      console.log('Sending to Web3Forms:', payload);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('Web3Forms response:', result);

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Web3Forms error:', result.message);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };




  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full glass-panel p-6 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyber-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <h3 className="text-2xl font-bold text-white mb-1">Send a Message</h3>
      <p className="text-zinc-400 text-sm font-light mb-8">
        Feel free to drop a message and I'll get back to you shortly.
      </p>

      {/* Name + Email row */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-6">
        <InputField
          label={`Your Name (max ${NAME_MAX_CHARS} chars)`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          maxChars={NAME_MAX_CHARS}
        />
        <InputField
          label={`Email Address (max ${EMAIL_MAX_CHARS} chars)`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          maxChars={EMAIL_MAX_CHARS}
        />
      </div>

      <InputField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        maxChars={SUBJECT_MAX_CHARS}
      />

      {/* Message with word limit indicator */}
      <div className="relative mb-6">
        <InputField
          label={`Message (max ${MESSAGE_MAX_CHARS} characters)`}
          as="textarea"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          maxChars={MESSAGE_MAX_CHARS}
        />
        {/* Word limit reached warning */}
        <AnimatePresence>
          {formData.message.length >= MESSAGE_MAX_CHARS && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-[10px] text-red-400 font-mono -mt-4 mb-2 ml-1"
            >
              ⚠ Character limit reached ({MESSAGE_MAX_CHARS} max)
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="relative overflow-hidden group flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl text-sm backdrop-blur-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] hover:-translate-y-[2px]"
      >
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              Send Message
              <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.span>
          )}
          {status === 'loading' && (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Loader size={14} className="animate-spin" /> Sending...
            </motion.span>
          )}
          {status === 'success' && (
            <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-400">
              <CheckCircle size={14} /> Message Sent! ✓
            </motion.span>
          )}
          {status === 'error' && (
            <motion.span key="error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-red-400">
              <XCircle size={14} /> Failed — Try Again
            </motion.span>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
      </button>

      {/* Feedback messages */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-5 flex items-start gap-3 p-4 rounded-xl"
            style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}
          >
            <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-green-400 text-xs font-semibold">Message delivered successfully!</p>
              <p className="text-white/40 text-xs mt-0.5">Jaswant will reply to your email soon.</p>
            </div>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-5 flex items-start gap-3 p-4 rounded-xl"
            style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <XCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-red-400 text-xs font-semibold">Something went wrong.</p>
              <p className="text-white/40 text-xs mt-0.5">Email directly: galcharjaswant01@gmail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

export default ContactForm;
