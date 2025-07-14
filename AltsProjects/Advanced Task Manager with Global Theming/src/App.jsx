import TaskContextProvider from "./context/TaskContext";

import "./app.css";
import DynamicGradient from "./components/utilities/DynamicGradient";
import { useState } from "react";
import DynamicBGImage from "./components/utilities/DynamicBGImage";
import TaskPage from "./pages/TaskPage";

export default function App() {
  const [isGradientBackground, setIsGradientBackground] = useState(true);
  const [gradientColors, setGradientColors] = useState(["a78bfa", "ec4899", "ef4444"]);
  const [userImage, setUserImage] = useState(null);

  function handleNewColors(newColors) {
    setGradientColors(newColors);
    setIsGradientBackground(true);
  }

  const gradientBackground = {
    backgroundImage: `linear-gradient(to bottom right, #${gradientColors[0]}, #${gradientColors[1]}, #${gradientColors[2]})`,
  };

  function HandleUploadedImage(image) {
    if (image) {
      setUserImage(image);
      setIsGradientBackground(false);
    } else {
      setUserImage(null);
      setIsGradientBackground(true);
    }
  }

  const backgroundImage = {
    backgroundImage: `url(${userImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const gradientOrImage = isGradientBackground ? gradientBackground : backgroundImage;

  return (
    <section
      id="app"
      className="min-h-screen  relative flex items-center justify-center"
      style={gradientOrImage}
    >
      <TaskContextProvider>
        <TaskPage />
        <div className="flex flex-col gap-y-1 absolute bottom-2 right-2">
          <DynamicGradient onHandleNewColors={handleNewColors} />
          <DynamicBGImage onHandleUploadedImage={HandleUploadedImage} />
        </div>
      </TaskContextProvider>
    </section>
  );
}
