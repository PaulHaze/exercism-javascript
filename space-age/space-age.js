const ORBITS_IN_SECONDS = {
  earth: 31557600,
  mercury: 7600543,
  venus: 19414149,
  mars: 59354032,
  jupiter: 374355185,
  saturn: 929292362,
  uranus: 2651370019,
  neptune: 5200418560
};

export const age = (planet, age) => Number((age / ORBITS_IN_SECONDS[planet]).toFixed(2));
