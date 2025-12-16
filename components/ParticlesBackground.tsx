import React, { useEffect, useRef } from 'react';

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Initialize mouse off-screen
    const mouse = { x: -9999, y: -9999 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.3; // Gentle speed
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas!.height) this.vy = -this.vy;

        // Mouse gentle repulsion/interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - distance) / 100;
            const repulsionX = Math.cos(angle) * force * 0.5;
            const repulsionY = Math.sin(angle) * force * 0.5;
            
            // Gently push away
            this.x -= repulsionX;
            this.y -= repulsionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${0.4})`; // Slate 400 with opacity
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // Responsive density: fewer particles on mobile
      const pixelRatio = window.devicePixelRatio || 1;
      const densityDivisor = window.innerWidth < 768 ? 20000 : 12000;
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / densityDivisor);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Draw connections between particles
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const connectionDistance = 110;

            if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(148, 163, 184, ${0.12 * (1 - distance/connectionDistance)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }

        // Draw connections to mouse
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const distMouse = Math.sqrt(dx * dx + dy * dy);
        if (distMouse < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.2 * (1 - distMouse/140)})`; // Blueish connection
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticlesBackground;