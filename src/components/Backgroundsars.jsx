import React, { useEffect, useRef } from "react";

const BackgroundStars = () => {
  const canvasRef = useRef(null);
  const layers = [];
  const LAYER_CONFIG = [
    { count: 300, speed: 0.15, drift: 0.1 }, // far layer (slow)
    { count: 200, speed: 0.35, drift: 0.2 }, // middle layer
    { count: 200, speed: 0.6, drift: 0.35 },  // near layer (fast)
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create layered stars
    LAYER_CONFIG.forEach(({ count, speed, drift }) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (1 - 0.1) + 0.1,
          baseSpeed: speed,
          drift,
          offset: Math.random() * 1000, // for organic motion
        });
      }
      layers.push(stars);
    });

    let lastScrollY = window.scrollY;
    let velocity = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      layers.forEach((stars, layerIndex) => {
        ctx.fillStyle = "white";

        stars.forEach((star, i) => {
          // scroll velocity → more speed when user scrolls fast
          const deltaY = star.baseSpeed + velocity * (0.02 + layerIndex * 0.01);

          star.y += deltaY;

          // organic side drift (sin wave for natural feel)
          star.x += Math.sin((star.offset + star.y) * 0.001) * star.drift;

          // loop stars vertically
          if (star.y > canvas.height) star.y = 0;

          // horizontal loop
          if (star.x > canvas.width) star.x = 0;
          if (star.x < 0) star.x = canvas.width;

          // draw
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleScroll = () => {
      const newScrollY = window.scrollY;
      velocity = newScrollY - lastScrollY; // detect how fast user scrolls
      lastScrollY = newScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -10,
        pointerEvents: "none",
      }}
    />
  );
};

export default BackgroundStars;
