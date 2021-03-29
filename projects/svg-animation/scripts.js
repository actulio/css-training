const getRandomColor = () => {
  return `#${Math.floor(Math.random() * parseInt('ffffff', 16)).toString(16)}`;
};
const svg = document.getElementById('triangles');
svg.onclick = (e) => {
  document.documentElement.style.cssText = `
    --dark-color: ${getRandomColor()};
    --light-color: ${getRandomColor()};
  `;
};
