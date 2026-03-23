const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const stars = [];
const starCount = 120; // Lowered slightly because colorful shapes take a bit more processing

// Helper function to draw an exact 5-point star
function drawStarShape(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
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
