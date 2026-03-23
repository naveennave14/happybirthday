(function () {
  window.Components = window.Components || {};

  window.Components.stars = {
    overlay: true,

    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-stars";

      const count = section.count || 40;
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = (Math.random() * 3).toFixed(2) + "s";
        star.style.width = star.style.height =
          (Math.random() * 4 + 2).toFixed(1) + "px";
        div.appendChild(star);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      tl.fromTo(
        el,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      )
      .to(el, { opacity: 0, duration: 1 }, "+=4");
    },
  };
})();    ctx.closePath();
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

animate();
