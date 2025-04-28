// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Mau pake musik ngga?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
        .from(".one", 0.7, {
            opacity: 0,
            y: 10
        })
        .from(".two", 0.4, {
            opacity: 0,
            y: 10
        })
        .to(".one",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=3.5")
        .to(".two",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "-=1")
        .from(".three", 0.7, {
            opacity: 0,
            y: 10
        })
        .to(".three",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=3")
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0,
        })
        .from(".fake-btn", 0.3, {
            scale: 0.2,
            opacity: 0,
        })
        .staggerTo(
            ".hbd-chatbox span",
            1.5, {
            visibility: "visible",
        },
            0.05
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)",
        },
            "+=4")
        .to(
            ".four",
            0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
            "+=1")
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
        .from(
            ".idea-5",
            0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
            "+=1.5"
        )
        .to(
            ".idea-5 span",
            0.7, {
            rotation: 90,
            x: 8,
        },
            "+=1.4"
        )
        .to(
            ".idea-5",
            0.7, {
            scale: 0.2,
            opacity: 0,
        },
            "+=2"
        )
        .staggerFrom(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
            0.2
        )
        .staggerTo(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
            0.2,
            "+=1.5"
        )
        .staggerFromTo(
            ".baloons img",
            2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
            0.2
        )
        .from(
            ".profile-picture",
            0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
            "-=2"
        )
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        })
        
        .staggerFrom(
            ".wish-hbd span",
            0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
            "party"
        )
        .staggerTo(
            ".eight svg",
            1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
            0.3
        )
        .to(".six", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1",
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(
            ".last-smile",
            0.5, {
            rotation: 90,
        },
            "+=1"
        );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });

    const canvas = document.getElementById('star-canvas');
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Firework {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.particles = [];

            for (let i = 0; i < 100; i++) {
                this.particles.push(new Particle(x, y));
            }
        }

        update() {
            this.particles.forEach(p => p.update());
        }

        draw() {
            this.particles.forEach(p => p.draw());
        }
    }

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.speed = Math.random() * 5 + 2;
            this.angle = Math.random() * 2 * Math.PI;
            this.gravity = 0.05;
            this.opacity = 1;
            this.fade = Math.random() * 0.02 + 0.01;
            this.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`;
        }

        update() {
            this.speed *= 0.98;
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed + this.gravity;
            this.opacity -= this.fade;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.hslToRgb(this.color)}, ${this.opacity})`;
            ctx.fill();
        }

        // Convert HSL to RGB (karena canvas pakai rgb)
        hslToRgb(hsl) {
            const tmp = hsl.match(/\d+/g);
            const h = Number(tmp[0]) / 360;
            const s = Number(tmp[1]) / 100;
            const l = Number(tmp[2]) / 100;

            if (s === 0) {
                const val = l * 255;
                return `${val},${val},${val}`;
            }

            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;

            const r = hue2rgb(p, q, h + 1 / 3);
            const g = hue2rgb(p, q, h);
            const b = hue2rgb(p, q, h - 1 / 3);

            return `${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)}`;
        }
    }

    let fireworks = [];

    function launchFirework() {
        const x = Math.random() * width;
        const y = Math.random() * height / 2;
        fireworks.push(new Firework(x, y));
    }

    function animate() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, width, height);

        if (Math.random() < 0.05) { // Semakin kecil, semakin jarang
            launchFirework();
        }

        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();

            if (firework.particles.every(p => p.opacity <= 0)) {
                fireworks.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', function () {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    animate();


}
