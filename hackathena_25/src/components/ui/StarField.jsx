"use client";

import React, { useEffect } from "react";

function StarField(props) {
  const {
    speedFactor = 0.05,
    backgroundColor = "white",
    starColor = [50, 50, 50],
    starCount = 500,
    particleSize = 1.5, // New particle size prop
  } = props;

  useEffect(() => {
    const canvas = document.getElementById("starfield");

    if (canvas) {
      const c = canvas.getContext("2d");

      if (c) {
        let w = window.innerWidth;
        let h = window.innerHeight;

        const setCanvasExtents = () => {
          canvas.width = w;
          canvas.height = h;
        };

        setCanvasExtents();

        window.onresize = () => {
          setCanvasExtents();
        };

        const makeStars = (count) => {
          const out = [];
          for (let i = 0; i < count; i++) {
            const s = {
              x: Math.random() * 1600 - 800,
              y: Math.random() * 900 - 450,
              z: Math.random() * 1000,
            };
            out.push(s);
          }
          return out;
        };

        let stars = makeStars(starCount);

        const clear = () => {
          c.fillStyle = backgroundColor;
          c.fillRect(0, 0, canvas.width, canvas.height);
        };

        const putPixel = (x, y, brightness) => {
          const rgb = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`;
          c.fillStyle = rgb;
          c.beginPath();
          c.arc(x, y, particleSize, 0, Math.PI * 2); // Draw a circle
          c.fill();
        };

        const moveStars = (distance) => {
          for (let s of stars) {
            s.z -= distance;
            if (s.z <= 1) {
              s.z += 1000;
            }
          }
        };

        let prevTime;
        const init = (time) => {
          prevTime = time;
          requestAnimationFrame(tick);
        };

        const tick = (time) => {
          let elapsed = time - prevTime;
          prevTime = time;

          moveStars(elapsed * speedFactor);
          clear();

          const cx = w / 2;
          const cy = h / 2;

          for (let star of stars) {
            const x = cx + star.x / (star.z * 0.001);
            const y = cy + star.y / (star.z * 0.001);

            if (x < 0 || x >= w || y < 0 || y >= h) continue;

            const d = star.z / 1000.0;
            const b = 1 - d * d;

            putPixel(x, y, b);
          }

          requestAnimationFrame(tick);
        };

        requestAnimationFrame(init);

        window.addEventListener("resize", () => {
          w = window.innerWidth;
          h = window.innerHeight;
          setCanvasExtents();
        });
      } else {
        console.error("Could not get 2d context from canvas element");
      }
    } else {
      console.error('Could not find canvas element with id "starfield"');
    }

    return () => {
      window.onresize = null;
    };
  }, [backgroundColor, starColor, speedFactor, starCount, particleSize]);

  return (
    <canvas
      id="starfield"
      style={{
        padding: 0,
        margin: 0,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        opacity: 1,
        pointerEvents: "none",
        backgroundColor: backgroundColor,
      }}
    />
  );
}

export default StarField;
