import React, { useRef, useEffect, useState } from "react";

const GaussianTextBackground = ({
  width = 750,
  height = 600,
  textLines = [],
  pixelSpacing = 50,
  pixelSize = 40, // bigger symbols
  sigma = 100, // Gaussian spread
  trailLength = 12,
  trailDecay = 0.8,
  density = 0.5,
  jitter = 0,
  updateInterval = 100,
  influenceThreshold = 0.05,
  maxParticlesPerFrame = 300,
  growthFactor = 0.5,
  persistenceFrames = 230, // keep particle even if influence drops
}) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: width / 2, y: height / 2 });

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const trailRef = useRef([]);
  const particleStateRef = useRef(new Map());

  // Load images
  useEffect(() => {
    const img1 = new Image();
    img1.src = "/1.png";
    img1.onload = () => (img1Ref.current = img1);

    const img2 = new Image();
    img2.src = "/2.png";
    img2.onload = () => (img2Ref.current = img2);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const cols = Math.ceil(width / pixelSpacing);
    const rows = Math.ceil(height / pixelSpacing);

    const pixels = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        pixels.push({ x: j * pixelSpacing, y: i * pixelSpacing });
      }
    }

    let lastTime = 0;

    const render = (time) => {
      if (time - lastTime < updateInterval) {
        requestAnimationFrame(render);
        return;
      }
      lastTime = time;

      // Clear background
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      if (!img1Ref.current || !img2Ref.current) {
        requestAnimationFrame(render);
        return;
      }

      // Update mouse trail
      trailRef.current.push({ ...mousePos });
      if (trailRef.current.length > trailLength) trailRef.current.shift();

      let particlesThisFrame = 0;

      pixels.forEach((p) => {
        if (particlesThisFrame >= maxParticlesPerFrame) return;

        const key = `${p.x}_${p.y}`;
        let particle = particleStateRef.current.get(key);

        // Compute influence from trail
        let totalInfluence = 0;
        trailRef.current.forEach((pos, idx) => {
          const dx = p.x + pixelSpacing / 2 - pos.x;
          const dy = p.y + pixelSpacing / 2 - pos.y;
          const dist2 = dx * dx + dy * dy;
          const influence =
            Math.exp(-dist2 / (2 * sigma * sigma)) *
            Math.pow(trailDecay, trailRef.current.length - 1 - idx);
          totalInfluence += influence;
        });
        totalInfluence /= trailRef.current.length;

        // Initialize new particle if needed
        if (!particle && totalInfluence * density > influenceThreshold) {
          if (Math.random() < totalInfluence * growthFactor) {
            const choice = Math.random() < 0.5 ? "img1" : "img2";
            particleStateRef.current.set(key, { choice, lifetime: persistenceFrames });
            particle = particleStateRef.current.get(key);
            particlesThisFrame++;
          }
        }

        // Draw particle if exists
        if (particle) {
          const img = particle.choice === "img1" ? img1Ref.current : img2Ref.current;
          const offsetX = (Math.random() - 0.5) * jitter;
          const offsetY = (Math.random() - 0.5) * jitter;
          ctx.drawImage(img, p.x + offsetX, p.y + offsetY, pixelSize, pixelSize);

          // Reduce lifetime if influence low
          if (totalInfluence * density < influenceThreshold) {
            particle.lifetime--;
            if (particle.lifetime <= 0) {
              particleStateRef.current.delete(key);
            }
          } else {
            particle.lifetime = persistenceFrames; // refresh lifetime
          }
        }
      });

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }, [
    mousePos,
    width,
    height,
    pixelSpacing,
    pixelSize,
    sigma,
    trailLength,
    trailDecay,
    density,
    jitter,
    updateInterval,
    influenceThreshold,
    maxParticlesPerFrame,
    growthFactor,
    persistenceFrames,
  ]);

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
        display: "inline-block",
      }}
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "20px",
        }}
      >
        {textLines.map((line, idx) => (
          <p key={idx} style={{ margin: 0, fontSize: idx === 0 ? 28 : 18 }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default GaussianTextBackground;
