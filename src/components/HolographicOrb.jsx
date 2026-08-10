import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Floating particle dot
const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{
      y: [0, -30, 0],
      x: [0, 10, -10, 0],
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
    }}
    transition={{
      duration: style.duration,
      delay: style.delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

const HolographicOrb = () => {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    width: `${4 + Math.random() * 6}px`,
    height: `${4 + Math.random() * 6}px`,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    background: i % 3 === 0
      ? 'rgba(0,240,255,0.8)'
      : i % 3 === 1
      ? 'rgba(176,38,255,0.8)'
      : 'rgba(255,0,127,0.8)',
    boxShadow: i % 3 === 0
      ? '0 0 12px rgba(0,240,255,1)'
      : i % 3 === 1
      ? '0 0 12px rgba(176,38,255,1)'
      : '0 0 12px rgba(255,0,127,1)',
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 4,
  }));

  return (
    <div className="relative w-full flex items-center justify-center select-none pointer-events-none" style={{ height: 420 }}>

      {/* Outer ambient halo ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 380,
          height: 380,
          background: 'conic-gradient(from 0deg, rgba(0,240,255,0.15), rgba(176,38,255,0.15), rgba(255,0,127,0.15), rgba(0,240,255,0.15))',
          filter: 'blur(40px)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Mid ring - rotating border */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: 320,
          height: 320,
          borderColor: 'rgba(0,240,255,0.2)',
          boxShadow: '0 0 40px rgba(0,240,255,0.1), inset 0 0 40px rgba(176,38,255,0.1)',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {/* Orbiting dot on ring */}
        <motion.div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
          style={{ background: 'rgba(0,240,255,1)', boxShadow: '0 0 20px rgba(0,240,255,1)' }}
        />
      </motion.div>

      {/* Inner ring */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: 220,
          height: 220,
          borderColor: 'rgba(176,38,255,0.3)',
          boxShadow: '0 0 30px rgba(176,38,255,0.15)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        {/* Orbiting dot on inner ring */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 rounded-full"
          style={{ background: 'rgba(176,38,255,1)', boxShadow: '0 0 16px rgba(176,38,255,1)' }}
        />
      </motion.div>

      {/* Core holographic sphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 160,
          height: 160,
          background: `
            radial-gradient(circle at 35% 35%, rgba(0,240,255,0.5) 0%, transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(176,38,255,0.4) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,10,30,0.9) 100%)
          `,
          boxShadow: '0 0 60px rgba(0,240,255,0.3), 0 0 100px rgba(176,38,255,0.2), inset 0 0 40px rgba(0,240,255,0.1)',
          border: '1px solid rgba(0,240,255,0.3)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 60px rgba(0,240,255,0.3), 0 0 100px rgba(176,38,255,0.2), inset 0 0 40px rgba(0,240,255,0.1)',
            '0 0 80px rgba(0,240,255,0.5), 0 0 130px rgba(176,38,255,0.3), inset 0 0 60px rgba(0,240,255,0.2)',
            '0 0 60px rgba(0,240,255,0.3), 0 0 100px rgba(176,38,255,0.2), inset 0 0 40px rgba(0,240,255,0.1)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Holographic scanline shimmer overlay */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ opacity: 0.3 }}
        >
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,240,255,0.15) 3px, rgba(0,240,255,0.15) 4px)',
            }}
            animate={{ backgroundPositionY: ['0px', '40px'] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Inner refraction highlight */}
        <div
          className="absolute rounded-full"
          style={{
            width: 50,
            height: 50,
            top: '15%',
            left: '20%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
            filter: 'blur(6px)',
          }}
        />
      </motion.div>

      {/* Floating data labels */}
      {[
        { label: 'NODE_01', x: '8%', y: '20%', color: '#00f0ff' },
        { label: 'SYNC_OK', x: '72%', y: '15%', color: '#b026ff' },
        { label: 'TX_READY', x: '78%', y: '72%', color: '#ff007f' },
        { label: 'SECURE', x: '5%', y: '70%', color: '#00f0ff' },
      ].map(({ label, x, y, color }, i) => (
        <motion.div
          key={label}
          className="absolute text-[9px] font-mono font-bold tracking-widest"
          style={{ left: x, top: y, color }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.7 }}
        >
          {label}
        </motion.div>
      ))}

      {/* Floating particles */}
      {particles.map((style, i) => (
        <Particle key={i} style={style} />
      ))}

      {/* Connecting lines from core to edges */}
      <svg
        className="absolute"
        style={{ width: 380, height: 380, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        {[
          { x1: 190, y1: 190, x2: 30, y2: 76, color: '#00f0ff' },
          { x1: 190, y1: 190, x2: 273, y2: 57, color: '#b026ff' },
          { x1: 190, y1: 190, x2: 296, y2: 274, color: '#ff007f' },
          { x1: 190, y1: 190, x2: 19, y2: 266, color: '#00f0ff' },
        ].map(({ x1, y1, x2, y2, color }, i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color}
            strokeWidth="0.5"
            strokeDasharray="4 6"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </svg>

    </div>
  );
};

export default HolographicOrb;
