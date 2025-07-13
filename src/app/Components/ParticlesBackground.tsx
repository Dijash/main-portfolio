import Particles from "react-tsparticles";

const ParticlesBackground = () => (
  <Particles
    id="tsparticles"
    options={{
      autoPlay: true,
      background: {
        color: { value: "#000000" },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: { opacity: 1, color: { value: "" } },
        enable: false,
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: false, mode: [] },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: "circle",
          },
          onHover: {
            enable: false,
            mode: [],
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          resize: { delay: 0.5, enable: true },
        },
        modes: {
          trail: { delay: 1, pauseOnStop: false, quantity: 1 },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: { distance: 200 },
          bubble: {
            distance: 200,
            duration: 0.4,
            mix: false,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: { opacity: 0.5 },
            radius: 60,
          },
          grab: {
            distance: 100,
            links: { blink: false, consent: false, opacity: 1 },
          },
          push: { default: true, groups: [], quantity: 4 },
          remove: { quantity: 2 },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
          slow: { factor: 3, radius: 200 },
          particle: { replaceCursor: false, pauseOnStop: false, stopDelay: 0 },
          light: {
            area: {
              gradient: {
                start: { value: "#ffffff" },
                stop: { value: "#000000" },
              },
              radius: 1000,
            },
            shadow: {
              color: { value: "#000000" },
              length: 2000,
            },
          },
        },
      },
      manualParticles: [],
      particles: {
        bounce: {
          horizontal: { value: 1 },
          vertical: { value: 1 },
        },
        collisions: {
          absorb: { speed: 2 },
          bounce: {
            horizontal: { value: 1 },
            vertical: { value: 1 },
          },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: { enable: true, retries: 0 },
        },
        color: {
          value: "#fff",
          animation: {
            h: {
              enable: false,
              speed: 1,
              sync: true,
              count: 0,
              decay: 0,
              delay: 0,
              offset: 0,
            },
            s: {
              enable: false,
              speed: 1,
              sync: true,
              count: 0,
              decay: 0,
              delay: 0,
              offset: 0,
            },
            l: {
              enable: false,
              speed: 1,
              sync: true,
              count: 0,
              decay: 0,
              delay: 0,
              offset: 0,
            },
          },
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: [],
        },
        groups: {
          z5000: { number: { value: 70 }, zIndex: { value: 50 } },
          z7500: { number: { value: 30 }, zIndex: { value: 75 } },
          z2500: { number: { value: 50 }, zIndex: { value: 25 } },
          z1000: { number: { value: 40 }, zIndex: { value: 10 } },
        },
        move: {
          angle: { offset: 0, value: 10 },
          attract: {
            distance: 200,
            enable: false,
            rotate: { x: 3000, y: 3000 },
          },
          center: { x: 50, y: 50, mode: "percent", radius: 0 },
          decay: 0,
          direction: "right",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 5,
          spin: { enable: false, acceleration: 0 },
          straight: false,
          trail: { enable: false, length: 10, fill: {} },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: false,
            width: 1920,
            height: 1080,
          },
          limit: 0,
          value: 200,
        },
        opacity: {
          value: 1,
          animation: {
            enable: false,
            speed: 2,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
            count: 0,
          },
        },
        shape: {
          type: "circle",
          options: {},
          close: true,
          fill: true,
        },
        size: {
          value: 3,
          animation: {
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
            count: 0,
          },
        },
        zIndex: {
          value: 5,
          opacityRate: 0.5,
          sizeRate: 1,
          velocityRate: 1,
        },
        links: {
          enable: false,
          distance: 100,
          color: { value: "#fff" },
          opacity: 1,
          width: 1,
        },
      },
      emitters: {
        autoPlay: true,
        fill: true,
        life: { wait: false },
        rate: { quantity: 1, delay: 7 },
        shape: {
          type: "square",
          options: {},
          replace: { color: false, opacity: false },
        },
        startCount: 0,
        size: {
          mode: "percent",
          height: 0,
          width: 0,
        },
        particles: {
          shape: {
            type: "images",
            options: {
              images: {
                src: "https://particles.js.org/images/cyan_amongus.png",
                width: 500,
                height: 634,
              },
            },
          },
          size: { value: 40 },
          move: {
            speed: 10,
            outModes: {
              default: "none",
              right: "destroy",
            },
            straight: true,
          },
          rotate: {
            value: { min: 0, max: 360 },
            animation: {
              enable: true,
              speed: 10,
              sync: true,
            },
          },
          zIndex: { value: 0 },
        },
        position: {
          x: -5,
          y: 55,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
        },
      },
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
    }}
  />
);

export default ParticlesBackground;
