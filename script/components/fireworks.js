(function () {
  window.Components = window.Components || {};

  window.Components.fireworks = {
    overlay: true,

    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-fireworks";

      const count = section.count || 20;
      const colors = ["#ff69b4", "#15a1ed", "#f9d423", "#42e695", "#bd6ecf", "#ff6b6b", "#ffd93d"];

      for (let i = 0; i < count; i++) {
        const spark = document.createElement("div");
        spark.className = "firework-spark";
        spark.style.left = (Math.random() * 90 + 5) + "%";
        spark.style.top = (Math.random() * 70 + 10) + "%";
        spark.style.backgroundColor = colors[i % colors.length];
        spark.style.width = spark.style.height = (Math.random() * 6 + 4) + "px";
        div.appendChild(spark);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const sparks = el.querySelectorAll(".firework-spark");

      tl.fromTo(sparks,
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.3,
          stagger: { each: 0.08, from: "random" },
          ease: "back.out(2)",
        }
      )
      .to(sparks, {
        y: () => (Math.random() - 0.5) * window.innerHeight * 0.4,
        x: () => (Math.random() - 0.5) * window.innerWidth * 0.4,
        opacity: 0, scale: 0, duration: 1.2,
        stagger: { each: 0.05, from: "random" },
        ease: "power2.out",
      }, "+=0.5")
      .to(el, { opacity: 0, duration: 0.3 });
    },
  };
})();        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

// 3. Create Firework Explosion
function createFirework(x, y) {
    const particleCount = 120;
    const hue = Math.floor(Math.random() * 360);
    const color = `hsl(${hue}, 100%, 60%)`; // Bright neon colors

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(x, y, color));
    }
}

// 4. Animation Frame Loop
function animate() {
    // Semi-transparent background creates light streaks/trails
    ctx.fillStyle = 'rgba(11, 15, 25, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();

        if (p.alpha <= 0) {
            particles.splice(i, 1); // Clean up memory
        }
    }

    requestAnimationFrame(animate);
}

// 5. Triggers (Click and Auto-launch)
window.addEventListener('click', (e) => {
    createFirework(e.clientX, e.clientY);
});

setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height * 0.5); // Top half of the screen
    createFirework(x, y);
}, 1000);

// Run!
animate();    ctx.closePath();
}

class Star {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; 
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0; 
        this.size = Math.random() * 8 + 4; 
        this.speed = this.size * 0.1; 
        this.alpha = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;

        // --- NEW COLOR PHYSICS ---
        this.hue = Math.random() * 360; // Pick a random base color angle (0 to 360)
        this.hueShift = Math.random() * 1 + 0.5; // How fast the color changes
    }

    update() {
        this.y += this.speed;
        
        // Cycle the color hue through the rainbow
        this.hue = (this.hue + this.hueShift) % 360; 

        if (this.y > canvas.height) {
            this.reset();
        }

        this.alpha += this.twinkleSpeed;
    }

    draw() {
        ctx.save();
        const opacity = (Math.sin(this.alpha) + 1) / 2; 
        
        ctx.globalAlpha = opacity;
        
        // --- NEW STYLING EFFECTS ---
        const color = `hsl(${this.hue}, 100%, 65%)`;
        ctx.fillStyle = color;

        // Adds a glowing neon halo around the stars
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        
        drawStarShape(ctx, this.x, this.y, 5, this.size, this.size / 2);
        
        ctx.fill();
        ctx.restore();
    }
}

for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
}

function animate() {
    // A faint opacity (0.3) helps leave a very subtle trail behind colorful falling stars!
    ctx.fillStyle = 'rgba(5, 9, 20, 0.3)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
    }

    requestAnimationFrame(animate);
}

animate();        }
      )
      .to(sparks, {
        y: () => (Math.random() - 0.5) * window.innerHeight * 0.4,
        x: () => (Math.random() - 0.5) * window.innerWidth * 0.4,
        opacity: 0, scale: 0, duration: 1.2,
        stagger: { each: 0.05, from: "random" },
        ease: "power2.out",
      }, "+=0.5")
      .to(el, { opacity: 0, duration: 0.3 });
    },
  };
})();
