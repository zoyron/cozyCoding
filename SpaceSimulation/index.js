const planets = [
  { id: "mercury", radius: 50, orbitRadius: 200, speed: 0.001 },
  { id: "venus", radius: 75, orbitRadius: 300, speed: 0.0008 },
  { id: "earth", radius: 100, orbitRadius: 400, speed: 0.0006 },
  { id: "mars", radius: 120, orbitRadius: 500, speed: 0.0005 },
  { id: "jupiter", radius: 180, orbitRadius: 600, speed: 0.0002 },
  { id: "saturn", radius: 200, orbitRadius: 700, speed: 0.00015 },
  { id: "uranus", radius: 160, orbitRadius: 800, speed: 0.0001 },
  { id: "neptune", radius: 150, orbitRadius: 900, speed: 0.00009 },
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const star_count = 1000;

let result = "";
for (let i = 0; i < star_count; i++) {
  result += `${randomNumber(-100, 100)}vw ${randomNumber(-100, 100)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`;
}

const space = document.getElementById("space");

space.style.boxShadow = result.substring(0, result.length - 1);

const moon = {
  id: "moon",
  radius: 30,
  orbitRadius: 150,
  speed: 0.001,
};

function movePlanets() {
  const currentDate = new Date();
  const time = currentDate.getTime();

  planets.forEach((planet) => {
    const element = document.getElementById(planet.id);
    const angle = planet.speed * time;

    const x = Math.cos(angle) * planet.orbitRadius;
    const y = Math.sin(angle) * planet.orbitRadius;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    element.style.left = centerX + x - planet.radius + "px";
    element.style.top = centerY + y - planet.radius + "px";
  });

  const moonElement = document.getElementById(moon.id);
  const moonAngle = moon.speed * time;

  const moonX = Math.cos(moonAngle) * moon.orbitRadius;
  const moonY = Math.sin(moonAngle) * moon.orbitRadius;

  const earthElement = document.getElementById("earth");
  const earthX = parseFloat(earthElement.style.left) + earthElement.clientWidth / 2;
  const earthY = parseFloat(earthElement.style.top) + earthElement.clientHeight / 2;

  moonElement.style.left = earthX + moonX - moon.radius + "px";
  moonElement.style.top = earthY + moonY - moon.radius + "px";
}

function animate() {
  movePlanets();
  requestAnimationFrame(animate);
}

animate();
