import Particles from "react-tsparticles";

const ParticlesBackground = () => (
  <Particles
    id="tsparticles"
    // Removed init prop as particlesInit is not defined
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
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
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
          push: { default: true, groups: [], quantity: 4 },
          // ... You can paste the rest of your settings here
        },
      },
      particles: {
        number: { value: 200 },
        color: { value: "#fff" },
        move: {
          enable: true,
          speed: 5,
          direction: "right",
          outModes: { default: "out" },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 3,
        },
      },
      emitters: {
        autoPlay: true,
        rate: {
          quantity: 1,
          delay: 7,
        },
        shape: {
          type: "square",
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
          size: {
            value: 40,
          },
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
        },
        position: {
          x: -5,
          y: 55,
        },
      },
    }}
  />
);

export default ParticlesBackground;