"use client";

import { useEffect, useRef } from "react";

export default function GridTracerBackground({ opacity = 0.4 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    // Use offsetWidth/Height for internal resolution
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const gridSize = 40;

    // Initialize tracers
    const tracers = Array.from({ length: 18 }).map(() => {
      const isHorizontal = Math.random() > 0.5;
      return {
        x: Math.floor(Math.random() * (width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (height / gridSize)) * gridSize,
        axis: isHorizontal ? "h" : "v",
        speed: Math.random() * 1 + 0.5,
        trailLength: Math.random() * 80 + 60,
        color: Math.random() > 0.5 ? "#22d3ee" : "#38bdf8",
      };
    });

    const handleResize = () => {
      if (!canvas) return;
      // Update canvas internal resolution to match display size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      width = canvas.width;
      height = canvas.height;
    };

    window.addEventListener("resize", handleResize);
    // Call once to set initial size correctly
    handleResize();

    const animate = () => {
      // Ensure valid dimensions before clearing/drawing
      if (width === 0 || height === 0) {
         animationFrameId = requestAnimationFrame(animate);
         return;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      tracers.forEach((t) => {
        // Movement Logic
        if (t.axis === "h") {
          t.x += t.speed;
          if (t.x > width + t.trailLength) {
            t.x = -t.trailLength;
            t.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
            t.axis = Math.random() > 0.6 ? "h" : "v";
          }
        } else {
          t.y += t.speed;
          if (t.y > height + t.trailLength) {
            t.y = -t.trailLength;
            t.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
            t.axis = Math.random() > 0.4 ? "h" : "v";
          }
        }

        // Draw Trail
        ctx.beginPath();
        let gradient;
        if (t.axis === "h") {
          gradient = ctx.createLinearGradient(t.x - t.trailLength, t.y, t.x, t.y);
          gradient.addColorStop(0, "rgba(34, 211, 238, 0)");
          gradient.addColorStop(1, t.color);
          ctx.moveTo(t.x - t.trailLength, t.y);
          ctx.lineTo(t.x, t.y);
        } else {
          gradient = ctx.createLinearGradient(t.x, t.y - t.trailLength, t.x, t.y);
          gradient.addColorStop(0, "rgba(56, 189, 248, 0)");
          gradient.addColorStop(1, t.color);
          ctx.moveTo(t.x, t.y - t.trailLength);
          ctx.lineTo(t.x, t.y);
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 25;
        ctx.shadowColor = t.color;
        ctx.stroke();

        // Draw Glowing Head Dot
        ctx.beginPath();
        ctx.arc(t.x, t.y, 6, 0, Math.PI * 2);
        
        const dotGlow = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, 10);
        dotGlow.addColorStop(0, "#ffffff");
        dotGlow.addColorStop(0.4, "#ffffff");
        dotGlow.addColorStop(0.8, t.color);
        dotGlow.addColorStop(1, "rgba(0,0,0,0)");
        
        ctx.fillStyle = dotGlow;
        ctx.shadowBlur = 50;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity]); // <--- This ensures the dependency array always has exactly 1 item (the opacity value)

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" style={{ opacity: opacity }}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}