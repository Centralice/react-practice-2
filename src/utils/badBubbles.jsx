export default function createBadBubble() {
  const bubble = document.createElement("div");
  bubble.style.position = "absolute";
  bubble.style.width = "80px";
  bubble.style.height = "80px";
  bubble.style.borderRadius = "50%";
  bubble.style.display = "flex";
  bubble.style.alignItems = "center";
  bubble.style.justifyContent = "center";
  bubble.style.fontSize = "48px";
  bubble.style.background = "rgba(173, 216, 230, 0.7)"; // Светло-голубой полупрозрачный фон
  bubble.style.boxShadow = "0 0 10px rgba(173, 216, 230, 0.7)";
  bubble.style.pointerEvents = "none";
  bubble.style.animation = "bubbleMove 3s ease-out forwards";
  bubble.innerText = "👎"; // Эмоджи внутри пузырька

  // Рандомная позиция на экране
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  bubble.style.left = `${randomX}px`;
  bubble.style.top = `${randomY}px`;

  document.body.appendChild(bubble);

  // Удаляем пузырек после завершения анимации
  setTimeout(() => {
    bubble.remove();
  }, 7000); // Удаление через 3 секунды (по времени анимации)
}

// CSS анимация для перемещения пузырька вверх и исчезновения
const styleElement = document.createElement("style");
styleElement.textContent = `
  @keyframes bubbleMove {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleElement);
