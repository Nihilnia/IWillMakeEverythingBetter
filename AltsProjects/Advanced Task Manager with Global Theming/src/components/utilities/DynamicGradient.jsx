import Button from "../UI/Button";

function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Utilities({ onHandleNewColors }) {
  const threeColorGradientLists = [
    ["f87171", "facc15", "4ade80"], // Red to Yellow to Green
    ["60a5fa", "a78bfa", "f472b6"], // Blue to Purple to Rose
    ["10b981", "3b82f6", "ef4444"], // Emerald to Blue to Red
    ["fde047", "f97316", "be185d"], // Yellow to Orange to Dark Rose
    ["d946ef", "8b5cf6", "3b82f6"], // Fuchsia to Violet to Blue
    ["fbbf24", "ef4444", "8b5cf6"], // Amber to Red to Violet
    ["4ade80", "2dd4bf", "60a5fa"], // Green to Teal to Blue
    ["a78bfa", "f87171", "facc15"], // Purple to Red to Yellow
    ["06b6d4", "a78bfa", "f472b6"], // Cyan to Purple to Rose
    ["be185d", "c2410c", "facc15"], // Dark Rose to Dark Orange to Yellow
  ];

  function handleNewColors() {
    const randomNumber = getRandomNumb(0, 9);

    onHandleNewColors([
      threeColorGradientLists[randomNumber][0],
      threeColorGradientLists[randomNumber][1],
      threeColorGradientLists[randomNumber][2],
    ]);
  }

  return (
    <div>
      <Button onClick={handleNewColors}>Change gradient</Button>
    </div>
  );
}
